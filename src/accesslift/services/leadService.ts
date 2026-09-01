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
  integration: "mock";
};

export type SupportRequestPayload = {
  nome: string;
  empresa: string;
  whatsapp: string;
  cidade: string;
  equipamento: string;
  descricao: string;
  locacaoAccesslift: boolean;
  antispam: string;
};

export async function submitQuoteRequest(
  payload: QuoteRequestPayload,
): Promise<LeadSubmissionResult> {
  if (payload.antispam) {
    throw new Error("Falha na validação antispam.");
  }

  await new Promise((resolve) => window.setTimeout(resolve, 500));

  return {
    ok: true,
    integration: "mock",
  };
}

export async function submitSupportRequest(
  payload: SupportRequestPayload,
): Promise<LeadSubmissionResult> {
  if (payload.antispam) {
    throw new Error("Falha na validação antispam.");
  }

  await new Promise((resolve) => window.setTimeout(resolve, 500));

  return {
    ok: true,
    integration: "mock",
  };
}
