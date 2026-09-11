export const commercialRecipient = "comercial@accesslift.com.br";

const purposes: Record<string, string> = {
  quote: "Nova solicitação de orçamento",
  contact: "Novo contato",
  support: "Nova solicitação de assistência técnica",
  career: "Novo currículo",
};
const labels: Record<string, string> = {
  pageOrigin: "Página de origem", nome: "Nome", name: "Nome", empresa: "Empresa",
  whatsapp: "WhatsApp", telefone: "Telefone", phone: "Telefone", email: "E-mail",
  cidade: "Cidade da operação", periodo: "Período desejado", altura: "Altura aproximada",
  tipo: "Tipo de plataforma", mensagem: "Mensagem", interesse: "Assunto",
  marca: "Marca", equipamento: "Equipamento", descricao: "Descrição",
  locacaoAccesslift: "Equipamento em locação com a Accesslift", area: "Área de interesse",
  utmSource: "UTM source", utmMedium: "UTM medium", utmCampaign: "UTM campaign",
  utmContent: "UTM content", utmTerm: "UTM term",
};
const choices: Record<string, string> = {
  diaria: "Diária", semanal: "Semanal", mensal: "Mensal",
  "nao-sei": "Não sei", tesoura: "Plataforma Tesoura", articulada: "Plataforma Articulada",
  "ate-8m": "Até 8 m", "8-a-10m": "8 a 10 m", "10-a-14m": "10 a 14 m", "14-a-16m": "14 a 16 m",
};
const textValue = (value: unknown) => typeof value === "string" ? value.trim() : typeof value === "boolean" ? (value ? "Sim" : "Não") : "";

export function buildInquiryEmail(kind: string, values: Record<string, unknown>) {
  const equipment = [textValue(values.brand), textValue(values.model)].filter(Boolean).join(" ");
  const subject = `${purposes[kind] || "Nova solicitação"}${equipment ? ` — ${equipment}` : ""} — Site Accesslift`.replace(/[\r\n]/g, " ");
  const lines = ["Origem: Site Accesslift", `Finalidade: ${purposes[kind] || kind}`];
  if (equipment) lines.push(`Equipamento de interesse: ${equipment}`);
  for (const [key, label] of Object.entries(labels)) {
    const value = textValue(values[key]);
    if (value) lines.push(`${label}: ${key.startsWith("utm") ? value : choices[value] || value}`);
  }
  return { to: commercialRecipient, subject, text: lines.join("\n"), replyTo: textValue(values.email) };
}
