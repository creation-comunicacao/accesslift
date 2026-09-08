import type { CommercialPageConfig } from "./pageContent";

export const platformsContent = {
  definition: {
    title: "O que é uma plataforma elevatória?",
    paragraphs: [
      "Plataformas elevatórias são equipamentos desenvolvidos para proporcionar acesso seguro e eficiente a áreas de trabalho em altura.",
      "De acordo com a necessidade da operação, diferentes tipos de plataformas podem ser utilizados, considerando fatores como altura de trabalho, alcance, espaço disponível, características do ambiente e condições de acesso.",
    ],
  },
  comparison: {
    title: "Plataforma tesoura ou articulada: qual escolher?",
    categories: [
      { title: "Plataforma Tesoura", description: "Indicada principalmente para trabalhos que exigem elevação vertical, oferecendo estabilidade e uma boa área de trabalho na plataforma.", label: "Ver plataformas tesoura", href: "/plataformas-tesoura/", equipmentSlug: "jlg-3246es" },
      { title: "Plataforma Articulada", description: "Indicada para operações que, além da altura, exigem alcance horizontal ou acesso a pontos com obstáculos, proporcionando maior flexibilidade de posicionamento.", label: "Ver plataformas articuladas", href: "/plataformas-articuladas/", equipmentSlug: "genie-z34" },
    ],
  },
  selection: {
    title: "O que considerar na escolha de uma plataforma elevatória?",
    criteria: ["Altura de trabalho", "Alcance horizontal", "Espaço disponível", "Capacidade da plataforma", "Condição do local", "Acesso e obstáculos"],
    closing: "A equipe AccessLift pode orientar na identificação do equipamento mais adequado às características da sua operação.",
  },
  applications: {
    title: "Plataformas para diferentes aplicações",
    paragraphs: [
      "A AccessLift disponibiliza equipamentos para diferentes necessidades de trabalho em altura, incluindo opções elétricas, adequadas especialmente a operações que exigem baixo nível de ruído e ausência de emissão direta de gases durante o uso.",
      "A escolha deve considerar as características do ambiente e da operação.",
    ],
  },
  differentials: ["Entrega e retirada próprias", "Assistência técnica própria", "Manutenção preventiva", "Atendimento emergencial", "Treinamento de operadores"],
  rental: {
    title: "Locação flexível para cada necessidade",
    periods: "Diária • Semanal • Mensal",
    description: "Períodos de locação adaptados às necessidades de cada operação, permitindo contratar o equipamento pelo tempo adequado ao trabalho a ser realizado.",
  },
};

export const platformsPageConfig: CommercialPageConfig = {
  path: "/plataformas-elevatorias/",
  eyebrow: "Plataformas elevatórias",
  title: "Plataformas Elevatórias para Trabalhos em Altura",
  description: "Plataformas tesoura e articuladas para diferentes trabalhos em altura, com equipamentos selecionados para atender às necessidades de cada operação, entrega própria e suporte técnico especializado da AccessLift.",
  valueProposition: "",
  benefits: platformsContent.differentials,
  process: [],
  relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
  faq: [],
  finalCta: {
    title: "Precisa de uma plataforma elevatória para sua operação?",
    description: "Nossa equipe pode ajudar na escolha do equipamento mais adequado para o seu trabalho.",
    primary: { label: "Solicite seu orçamento", href: "/solicite-orcamento/" },
  },
  seo: {
    h1: "Plataformas Elevatórias para Trabalhos em Altura",
    title: "Plataformas Elevatórias: Tesoura e Articulada | Accesslift",
    description: "Conheça plataformas elevatórias tesoura e articuladas, entenda suas aplicações e encontre equipamentos para trabalhos em altura.",
    canonicalPath: "/plataformas-elevatorias/",
  },
};
