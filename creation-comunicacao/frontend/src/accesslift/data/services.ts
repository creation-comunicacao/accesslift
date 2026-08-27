export type CommercialService = {
  slug: string;
  title: string;
  summary: string;
};

export const commercialServices: CommercialService[] = [
  {
    slug: "locacao-diaria",
    title: "Locacao diaria",
    summary: "Modelo comercial preparado para demandas pontuais.",
  },
  {
    slug: "locacao-semanal",
    title: "Locacao semanal",
    summary: "Modelo comercial preparado para operacoes de curta duracao.",
  },
  {
    slug: "locacao-mensal",
    title: "Locacao mensal",
    summary: "Modelo comercial preparado para contratos recorrentes.",
  },
  {
    slug: "venda",
    title: "Venda",
    summary: "Atendimento comercial para aquisicao de plataformas elevatorias.",
  },
  {
    slug: "entrega-e-retirada",
    title: "Entrega e retirada",
    summary: "Servico logistico previsto na arquitetura comercial.",
  },
  {
    slug: "assistencia-tecnica",
    title: "Assistencia tecnica",
    summary: "Suporte tecnico previsto para a jornada de atendimento.",
  },
  {
    slug: "manutencao-preventiva",
    title: "Manutencao preventiva",
    summary: "Servico preparado para conteudo e processos futuros.",
  },
  {
    slug: "atendimento-emergencial",
    title: "Atendimento emergencial",
    summary: "Atendimento comercial e operacional para demandas urgentes.",
  },
  {
    slug: "treinamento-de-operadores",
    title: "Treinamento de operadores",
    summary: "Estrutura preparada para orientacoes e treinamento.",
  },
];
