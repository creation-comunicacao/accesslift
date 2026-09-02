export type CommercialService = {
  slug: string;
  title: string;
  summary: string;
};

export const commercialServices: CommercialService[] = [
  {
    slug: "locacao-diaria",
    title: "Locação diária",
    summary: "Modelo comercial preparado para demandas pontuais.",
  },
  {
    slug: "locacao-semanal",
    title: "Locação semanal",
    summary: "Modelo comercial preparado para operações de curta duração.",
  },
  {
    slug: "locacao-mensal",
    title: "Locação mensal",
    summary: "Modelo comercial preparado para contratos recorrentes.",
  },
  {
    slug: "venda",
    title: "Venda",
    summary: "Atendimento comercial para aquisicao de plataformas elevatórias.",
  },
  {
    slug: "entrega-e-retirada",
    title: "Entrega e retirada",
    summary: "Serviço logístico previsto na arquitetura comercial.",
  },
  {
    slug: "assistencia-tecnica",
    title: "Assistência técnica",
    summary: "Suporte técnico previsto para a jornada de atendimento.",
  },
  {
    slug: "manutencao-preventiva",
    title: "Manutenção preventiva",
    summary: "Serviço preparado para conteúdo e processos futuros.",
  },
  {
    slug: "atendimento-emergencial",
    title: "Atendimento emergencial",
    summary: "Atendimento comercial e operacional para demandas urgentes.",
  },
  {
    slug: "treinamento-de-operadores",
    title: "Treinamento de operadores",
    summary: "Estrutura preparada para orientações e treinamento.",
  },
];
