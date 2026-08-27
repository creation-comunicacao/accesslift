export type QuoteRequestPayload = {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  interesse: string;
  tipoOperacao: string;
  mensagem: string;
  aceite: boolean;
  antispam: string;
};

export type LeadSubmissionResult = {
  ok: true;
  integration: "mock";
};

export async function submitQuoteRequest(
  payload: QuoteRequestPayload,
): Promise<LeadSubmissionResult> {
  if (payload.antispam) {
    throw new Error("Falha na validacao antispam.");
  }

  await new Promise((resolve) => window.setTimeout(resolve, 500));

  return {
    ok: true,
    integration: "mock",
  };
}
