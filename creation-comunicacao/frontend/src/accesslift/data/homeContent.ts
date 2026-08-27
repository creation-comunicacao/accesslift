import type { CatalogFilters } from "../types/equipment";

export type HomeFinderField = {
  key: keyof CatalogFilters;
  label: string;
  options: Array<{ label: string; value: string }>;
};

export const homeFinderFields: HomeFinderField[] = [
  {
    key: "category",
    label: "Tipo",
    options: [
      { label: "Todos os tipos", value: "all" },
      { label: "Tesoura", value: "plataformas-tesoura" },
      { label: "Articulada", value: "plataformas-articuladas" },
    ],
  },
  {
    key: "heightRange",
    label: "Altura de trabalho",
    options: [
      { label: "Qualquer altura", value: "all" },
      { label: "Ate 8 m", value: "ate-8m" },
      { label: "8 a 10 m", value: "8-a-10m" },
      { label: "10 a 14 m", value: "10-a-14m" },
      { label: "14 a 16 m", value: "14-a-16m" },
    ],
  },
];

export const homeTrustItems = [
  { value: "12 anos", label: "de experiencia" },
  { value: "Entrega propria", label: "e retirada" },
  { value: "Assistencia tecnica", label: "propria" },
  { value: "150 km", label: "de raio de atendimento" },
];

export const homeCategoryCards = [
  {
    title: "Plataformas Tesoura",
    heading: "Elevacao vertical com estabilidade e area de trabalho",
    description:
      "Indicadas para operacoes que exigem acesso vertical e uma plataforma de trabalho estavel, especialmente em manutencao, instalacoes, obras e operacoes industriais e comerciais.",
    href: "/plataformas-tesoura/",
    label: "Ver plataformas tesoura",
    visual: "tesoura" as const,
  },
  {
    title: "Plataformas Articuladas",
    heading: "Altura e alcance para acessar pontos mais dificeis",
    description:
      "O braco articulado permite alcancar areas elevadas contornando obstaculos, tornando esse tipo de plataforma indicado para trabalhos que exigem maior flexibilidade de posicionamento.",
    href: "/plataformas-articuladas/",
    label: "Ver plataformas articuladas",
    visual: "articulada" as const,
  },
];

export const homeDifferentials = [
  {
    title: "Entrega e retirada",
    description:
      "Logistica para transportar o equipamento ate sua operacao e realizar a retirada ao termino da locacao.",
  },
  {
    title: "Assistencia tecnica propria",
    description: "Suporte tecnico especializado para os equipamentos durante a operacao.",
  },
  {
    title: "Manutencao preventiva",
    description:
      "Acompanhamento e manutencao para preservar as condicoes adequadas de funcionamento dos equipamentos.",
  },
  {
    title: "Atendimento emergencial",
    description: "Suporte para situacoes que exigem atendimento tecnico durante a locacao.",
  },
  {
    title: "Treinamento de operadores",
    description: "Treinamento para apoiar a utilizacao adequada e segura das plataformas elevatorias.",
  },
];

export const homeRentalSteps = [
  { title: "Conte o que voce precisa", description: "Altura, local, periodo e caracteristicas da operacao." },
  { title: "Escolha do equipamento", description: "Nossa equipe auxilia na escolha de uma opcao compativel." },
  { title: "Suporte", description: "Alinhamos as necessidades e o atendimento da operacao." },
  { title: "Entrega", description: "Organizamos a entrega conforme a programacao definida." },
  { title: "Operacao", description: "Durante o periodo contratado, voce conta com nosso suporte." },
];

export const homeFaqItems = [
  {
    id: "faq-tesoura-articulada",
    title: "Qual e a diferenca entre plataforma tesoura e articulada?",
    content:
      "A plataforma tesoura e indicada para acesso vertical com area de trabalho estavel. A articulada atende operacoes que podem exigir alcance e acesso contornando obstaculos.",
  },
  {
    id: "faq-escolha",
    title: "Como saber qual plataforma e mais adequada para minha operacao?",
    content:
      "A escolha depende da altura, do acesso, do ambiente e do espaco de trabalho. Nossa equipe pode ajudar a identificar o equipamento adequado para sua operacao.",
  },
  {
    id: "faq-locacao",
    title: "E possivel alugar por diaria, semana ou mes?",
    content: "Sim. A Accesslift trabalha com locacao diaria, semanal ou mensal.",
  },
  {
    id: "faq-servicos",
    title: "A Accesslift realiza entrega, retirada e suporte durante a locacao?",
    content:
      "A operacao conta com entrega e retirada, assistencia tecnica, manutencao preventiva, atendimento emergencial e treinamento de operadores conforme a necessidade.",
  },
  {
    id: "faq-atendimento",
    title: "Qual e a area de atendimento da Accesslift?",
    content: "Sao Paulo e regioes em um raio de ate 150 km da base.",
  },
];
