import test from "node:test";
import assert from "node:assert/strict";
import inquiries from "../api/inquiries";
import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

const contact = { nome: "Teste", telefone: "11999999999", email: "teste@example.invalid", interesse: "locacao-comercial", mensagem: "Teste local", antispam: "" };

async function request(body: unknown, method = "POST") {
  let result: { ok: boolean; message: string } | undefined;
  const res = { statusCode: 200, setHeader() {}, end(value: string) { result = JSON.parse(value); } };
  await inquiries({ method, headers: { "content-type": "application/json", host: "localhost" }, body } as Parameters<typeof inquiries>[0], res as unknown as Parameters<typeof inquiries>[1]);
  return { status: res.statusCode, ...result };
}

test("inquiries: validation and acknowledged delivery", async (t) => {
  const oldUrl = process.env.INQUIRIES_WEBHOOK_URL;
  const oldFetch = globalThis.fetch;
  const smtpKeys = ["INQUIRIES_SMTP_USER", "INQUIRIES_SMTP_PASS", "INQUIRIES_SMTP_HOST", "INQUIRIES_SMTP_PORT"];
  const oldSmtp = smtpKeys.map((key) => process.env[key]);
  smtpKeys.forEach((key) => delete process.env[key]);
  delete process.env.INQUIRIES_WEBHOOK_URL;
  try {
    await t.test("rejects unsupported methods", async () => assert.equal((await request({}, "GET")).status, 405));
    await t.test("rejects empty required fields and honeypot", async () => {
      assert.equal((await request({ kind: "contact", values: { ...contact, mensagem: " " } })).status, 400);
      assert.equal((await request({ kind: "contact", values: { ...contact, antispam: "bot" } })).status, 400);
    });
    await t.test("does not report success without integration", async () => {
      const response = await request({ kind: "contact", values: contact });
      assert.equal(response.status, 503); assert.equal(response.ok, false);
    });
    process.env.INQUIRIES_WEBHOOK_URL = "https://example.invalid/inquiries";
    await t.test("quote requires email and valid phone, not a contact consent checkbox", async () => {
      const values = { nome: "Teste", whatsapp: "11999999999", email: "teste@example.invalid", cidade: "São Paulo", brand: "JLG", model: "3246ES", pageOrigin: "/equipamentos/jlg-3246es/" };
      for (const changes of [{ email: "" }, { email: "invalido" }, { whatsapp: "abc" }, { whatsapp: "123" }]) {
        assert.equal((await request({ kind: "quote", values: { ...values, ...changes } })).status, 400);
      }
      globalThis.fetch = async (_url, init) => {
        const payload = JSON.parse(String(init?.body));
        assert.equal(payload.email.to, "comercial@accesslift.com.br");
        assert(payload.email.subject.includes("JLG 3246ES"));
        assert(payload.email.text.includes("/equipamentos/jlg-3246es/"));
        assert.equal(payload.values.model, "3246ES");
        return new Response('{"ok":true,"emailSent":true,"recipient":"comercial@accesslift.com.br"}');
      };
      assert.equal((await request({ kind: "quote", values })).ok, true);
      for (const receipt of [{ ok: true }, { ok: true, emailSent: false }, { ok: true, emailSent: true, recipient: "wrong@example.invalid" }]) {
        globalThis.fetch = async () => new Response(JSON.stringify(receipt));
        assert.equal((await request({ kind: "quote", values })).ok, false);
      }
    });
    await t.test("forwards contact and requires receiver acknowledgement", async () => {
      globalThis.fetch = async (_url, init) => {
        const payload = JSON.parse(String(init?.body));
        assert.equal(payload.kind, "contact");
        assert.equal(payload.values.interesse, contact.interesse);
        assert(payload.email.text.includes(contact.interesse) || payload.email.text.includes("Locação"));
        return new Response(JSON.stringify({ ok: true, emailSent: true, recipient: "comercial@accesslift.com.br" }), { status: 200 });
      };
      assert.equal((await request({ kind: "contact", values: contact })).ok, true);
      globalThis.fetch = async () => new Response("{}", { status: 200 });
      assert.equal((await request({ kind: "contact", values: contact })).ok, false);
    });
    await t.test("requires explicit rental choice for support", async () => {
      const values = { ...contact, whatsapp: "11999999999", cidade: "São Paulo", marca: "Genie", equipamento: "Z-34/22", descricao: "Teste", locacaoAccesslift: null };
      assert.equal((await request({ kind: "support", values })).status, 400);
      globalThis.fetch = async (_url, init) => {
        assert.equal(JSON.parse(String(init?.body)).values.locacaoAccesslift, false);
        return new Response('{"ok":true,"emailSent":true,"recipient":"comercial@accesslift.com.br"}');
      };
      assert.equal((await request({ kind: "support", values: { ...values, locacaoAccesslift: false } })).ok, true);
    });
    await t.test("validates and forwards resumes instead of discarding them", async () => {
      const values = { name: "Teste", phone: "11999999999", email: "teste@example.invalid", area: "operacao" };
      assert.equal((await request({ kind: "career", values })).status, 400);
      const attachment = { name: "curriculo.pdf", content: Buffer.from("%PDF-1.7\nlocal test").toString("base64") };
      assert.equal((await request({ kind: "career", values, attachment: { ...attachment, name: "curriculo.exe" } })).status, 400);
      assert.equal((await request({ kind: "career", values, attachment: { ...attachment, content: Buffer.from("not a pdf").toString("base64") } })).status, 400);
      globalThis.fetch = async (_url, init) => {
        assert.deepEqual(JSON.parse(String(init?.body)).attachment, attachment);
        return new Response('{"ok":true,"emailSent":true,"recipient":"comercial@accesslift.com.br"}');
      };
      assert.equal((await request({ kind: "career", values, attachment })).ok, true);
      const oversized = Buffer.alloc(2 * 1024 * 1024 + 1);
      oversized.write("%PDF-1.7");
      assert.equal((await request({ kind: "career", values, attachment: { name: "grande.pdf", content: oversized.toString("base64") } })).ok, false);
      for (const [name, bytes] of [
        ["curriculo.doc", Buffer.from("d0cf11e0a1b11ae1", "hex")],
        ["curriculo.docx", Buffer.from("504b030400000000", "hex")],
      ] as const) {
        globalThis.fetch = async (_url, init) => {
          assert.equal(JSON.parse(String(init?.body)).attachment.name, name);
          return new Response('{"ok":true,"emailSent":true,"recipient":"comercial@accesslift.com.br"}');
        };
        assert.equal((await request({ kind: "career", values, attachment: { name, content: bytes.toString("base64") } })).ok, true);
      }
    });
    await t.test("SMTP sends directly with authenticated sender and validated attachments", async (t) => {
      process.env.INQUIRIES_SMTP_USER = "comercial@accesslift.com.br";
      process.env.INQUIRIES_SMTP_PASS = "test-only-secret";
      let accepted = true;
      let fails = false;
      let closes = 0;
      let message: SendMailOptions | undefined;
      t.mock.method(nodemailer, "createTransport", (options: Record<string, unknown>) => {
        assert.equal(options.host, "email-ssl.com.br");
        assert.equal(options.port, 465);
        assert.equal(options.secure, true);
        assert.equal(options.requireTLS, true);
        assert.equal(options.disableFileAccess, true);
        return {
          async sendMail(mail: SendMailOptions) {
            message = mail;
            if (fails) throw new Error("authentication failed: test-only-secret");
            return { accepted: accepted ? ["comercial@accesslift.com.br"] : [] };
          },
          close() { closes++; },
        };
      });
      globalThis.fetch = async () => { throw new Error("SMTP must not use webhook fallback"); };
      for (const [kind, values] of [
        ["contact", contact],
        ["quote", { ...contact, whatsapp: contact.telefone, cidade: "São Paulo" }],
        ["support", { ...contact, whatsapp: contact.telefone, cidade: "São Paulo", marca: "JLG", equipamento: "1930ES", descricao: "Teste", locacaoAccesslift: false }],
      ] as const) assert.equal((await request({ kind, values })).ok, true);
      assert.deepEqual(message?.from, { name: "Accesslift", address: "comercial@accesslift.com.br" });
      assert.equal(message?.to, "comercial@accesslift.com.br");
      assert.equal(message?.replyTo, contact.email);
      const bytes = Buffer.from("%PDF-1.7\ntest");
      assert.equal((await request({ kind: "career", values: { name: "Teste", email: contact.email, phone: contact.telefone, area: "operacao" }, attachment: { name: "curriculo.pdf", content: bytes.toString("base64") } })).ok, true);
      assert.deepEqual(message?.attachments?.[0].content, bytes);
      accepted = false;
      assert.equal((await request({ kind: "contact", values: contact })).status, 502);
      fails = true;
      const failure = await request({ kind: "contact", values: contact });
      assert.equal(failure.ok, false);
      assert(!JSON.stringify(failure).includes("test-only-secret"));
      assert.equal(closes, 6);
      delete process.env.INQUIRIES_SMTP_PASS;
      assert.equal((await request({ kind: "contact", values: contact })).ok, false);
    });
  } finally {
    smtpKeys.forEach((key, i) => { if (oldSmtp[i] === undefined) delete process.env[key]; else process.env[key] = oldSmtp[i]; });
    globalThis.fetch = oldFetch;
    if (oldUrl === undefined) delete process.env.INQUIRIES_WEBHOOK_URL;
    else process.env.INQUIRIES_WEBHOOK_URL = oldUrl;
  }
});
