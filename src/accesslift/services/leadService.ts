export type QuoteRequestPayload = {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  cidade: string;
  periodo: string;
  altura: string;
  tipo: string;
  equipmentId: string | null;
  brand: string | null;
  model: string | null;
  category: string | null;
  power: string | null;
  pageOrigin: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  mensagem: string;
  aceite: boolean;
  antispam: string;
};

export type LeadSubmissionResult = {
  ok: true;
  integration: "webhook";
};

export type SupportRequestPayload = {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  marca: string;
  cidade: string;
  equipamento: string;
  descricao: string;
  locacaoAccesslift: boolean | null;
  antispam: string;
};

export async function submitQuoteRequest(
  payload: QuoteRequestPayload,
): Promise<LeadSubmissionResult> {
  return submitInquiry("quote", payload);
}

export async function submitSupportRequest(
  payload: SupportRequestPayload,
): Promise<LeadSubmissionResult> {
  return submitInquiry("support", payload);
}

export async function submitInquiry(kind: "contact" | "support" | "career" | "quote", values: object, resume?: File): Promise<LeadSubmissionResult> {
  let attachment: { name: string; content: string } | undefined;
  if (resume) {
    if (!/\.(pdf|doc|docx)$/i.test(resume.name) || resume.size === 0 || resume.size > 2 * 1024 * 1024) throw new Error("Anexe um currículo em PDF, DOC ou DOCX de até 2 MB.");
    const content = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(",")[1]);
      reader.onerror = () => reject(new Error("Não foi possível ler o currículo."));
      reader.readAsDataURL(resume);
    });
    attachment = { name: resume.name, content };
  }
  const response = await fetch("/api/inquiries", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ kind, values, attachment }), signal: AbortSignal.timeout(20000),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.ok !== true) throw new Error(result?.message || "Não foi possível enviar. Tente novamente ou entre em contato com a AccessLift.");
  return { ok: true, integration: "webhook" };
}
