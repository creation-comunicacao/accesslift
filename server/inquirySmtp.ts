import nodemailer from "nodemailer";
import { buildInquiryEmail, commercialRecipient } from "./inquiryEmail";

export function smtpConfigured() {
  return Boolean(process.env.INQUIRIES_SMTP_USER || process.env.INQUIRIES_SMTP_PASS);
}

export async function sendInquirySmtp(kind: string, values: Record<string, unknown>, attachment?: { name: string; content: string }) {
  const user = process.env.INQUIRIES_SMTP_USER;
  const pass = process.env.INQUIRIES_SMTP_PASS;
  const port = Number(process.env.INQUIRIES_SMTP_PORT || 465);
  if (!user || !pass || ![465, 587].includes(port)) throw new Error("SMTP configuration incomplete");
  const transport = nodemailer.createTransport({
    host: process.env.INQUIRIES_SMTP_HOST || "email-ssl.com.br",
    port, secure: port === 465, requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 5000, greetingTimeout: 5000, socketTimeout: 10000,
    dnsTimeout: 5000, disableFileAccess: true, disableUrlAccess: true,
  });
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const result = await Promise.race([
      transport.sendMail({
        ...buildInquiryEmail(kind, values),
        from: { name: "Accesslift", address: user },
        attachments: kind === "career" && attachment ? [{
          filename: attachment.name.split(/[\\/]/).pop(),
          content: Buffer.from(attachment.content, "base64"),
        }] : [],
      }),
      new Promise<never>((_, reject) => {
        timer = setTimeout(() => { transport.close(); reject(new Error("SMTP timeout")); }, 15000);
      }),
    ]);
    if (!result.accepted.some((address) => address.toLowerCase() === commercialRecipient)) {
      throw new Error("SMTP recipient not accepted");
    }
  } finally {
    clearTimeout(timer);
    transport.close();
  }
}
