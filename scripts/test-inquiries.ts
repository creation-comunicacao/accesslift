import test from "node:test";
import assert from "node:assert/strict";
import inquiries from "../api/inquiries";

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
    await t.test("forwards contact and requires receiver acknowledgement", async () => {
      globalThis.fetch = async (_url, init) => {
        assert.equal(JSON.parse(String(init?.body)).kind, "contact");
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
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
        return new Response('{"ok":true}');
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
        return new Response('{"ok":true}');
      };
      assert.equal((await request({ kind: "career", values, attachment })).ok, true);
    });
  } finally {
    globalThis.fetch = oldFetch;
    if (oldUrl === undefined) delete process.env.INQUIRIES_WEBHOOK_URL;
    else process.env.INQUIRIES_WEBHOOK_URL = oldUrl;
  }
});
