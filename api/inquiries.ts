import type { IncomingMessage, ServerResponse } from "node:http";
import { buildInquiryEmail, commercialRecipient } from "../server/inquiryEmail";
import { validEmail, validPhone } from "../src/accesslift/utils/inquiryValidation";

const maxFileBytes = 2 * 1024 * 1024;
const maxRequestBytes = 3 * 1024 * 1024;
const requiredByKind: Record<string, string[]> = {
  contact: ["nome", "telefone", "email", "interesse", "mensagem"],
  support: ["nome", "whatsapp", "email", "cidade", "marca", "equipamento", "descricao"],
  career: ["name", "email", "phone", "area"],
  quote: ["nome", "whatsapp", "email", "cidade"],
};

export default async function inquiries(req: IncomingMessage & { body?: unknown }, res: ServerResponse) {
  const reply = (status: number, message: string, ok = false) => {
    res.statusCode = status;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.end(JSON.stringify({ ok, message }));
  };
  if (req.method !== "POST") { res.setHeader("Allow", "POST"); return reply(405, "Método não permitido."); }
  if (!req.headers["content-type"]?.startsWith("application/json")) return reply(415, "Formato de envio inválido.");
  const origin = req.headers.origin;
  if (origin) {
    try { if (new URL(origin).host !== req.headers.host) return reply(403, "Origem inválida."); }
    catch { return reply(403, "Origem inválida."); }
  }
  try {
    let body = req.body;
    if (body === undefined) {
      let length = 0;
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        const bytes = Buffer.from(chunk);
        length += bytes.length;
        if (length > maxRequestBytes) return reply(413, "Arquivo muito grande. O limite é 2 MB.");
        chunks.push(bytes);
      }
      body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
    }
    if (typeof body === "string") body = JSON.parse(body);
    if (!body || typeof body !== "object" || Buffer.byteLength(JSON.stringify(body)) > maxRequestBytes) return reply(400, "Dados inválidos.");
    const { kind, values, attachment } = body as { kind: string; values: Record<string, unknown>; attachment?: { name: string; content: string } };
    if (!Object.hasOwn(requiredByKind, kind) || !values || typeof values !== "object" || values.antispam) return reply(400, "Solicitação inválida.");
    if (requiredByKind[kind].some((field) => typeof values[field] !== "string" || !(values[field] as string).trim())) return reply(400, "Preencha os campos obrigatórios.");
    if (typeof values.email !== "string" || !validEmail(values.email)) return reply(400, "Informe um e-mail válido.");
    const phone = values.whatsapp || values.telefone || values.phone;
    if (typeof phone !== "string" || !validPhone(phone)) return reply(400, "Informe um telefone válido com DDD.");
    if (kind === "support" && typeof values.locacaoAccesslift !== "boolean") return reply(400, "Informe se o equipamento está em locação.");
    if (kind === "career") {
      if (!attachment || typeof attachment.name !== "string" || !/\.(pdf|doc|docx)$/i.test(attachment.name) || typeof attachment.content !== "string" || !/^[A-Za-z0-9+/]+={0,2}$/.test(attachment.content)) return reply(400, "Anexe um currículo em PDF, DOC ou DOCX.");
      const bytes = Buffer.from(attachment.content, "base64");
      const extension = attachment.name.split(".").pop()?.toLowerCase();
      const signature = bytes.subarray(0, 8).toString("hex");
      const validSignature = extension === "pdf" ? bytes.subarray(0, 5).toString() === "%PDF-" : extension === "doc" ? signature === "d0cf11e0a1b11ae1" : signature.startsWith("504b0304");
      if (!validSignature || !bytes.length || bytes.length > maxFileBytes) return reply(400, "O currículo deve ser um PDF, DOC ou DOCX válido de até 2 MB.");
    }
    const endpoint = process.env.INQUIRIES_WEBHOOK_URL;
    if (!endpoint) return reply(503, "Envio indisponível no momento. Entre em contato pelos canais da AccessLift.");
    if (new URL(endpoint).protocol !== "https:") return reply(503, "Envio indisponível no momento.");
    const response = await fetch(endpoint, {
      method: "POST", signal: AbortSignal.timeout(15000),
      headers: { "Content-Type": "application/json", ...(process.env.INQUIRIES_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.INQUIRIES_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify({ kind, values, email: buildInquiryEmail(kind, values), ...(kind === "career" ? { attachment } : {}) }),
    });
    const result = await response.json().catch(() => null);
    if (!response.ok || result?.ok !== true || result.emailSent !== true || result.recipient !== commercialRecipient) return reply(502, "Não foi possível enviar. Tente novamente ou utilize os canais de contato.");
    return reply(200, "Solicitação enviada com sucesso.", true);
  } catch {
    return reply(400, "Não foi possível enviar. Confira os dados ou entre em contato com a AccessLift.");
  }
}
