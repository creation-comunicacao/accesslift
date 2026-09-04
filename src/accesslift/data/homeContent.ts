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
      { label: "Até 8 m", value: "ate-8m" },
      { label: "8 a 10 m", value: "8-a-10m" },
      { label: "10 a 14 m", value: "10-a-14m" },
      { label: "14 a 16 m", value: "14-a-16m" },
    ],
  },
];

export const homeTrustItems = [
  { value: "Entrega e retirada própria e ágil", label: "" },
  { value: "Equipamentos revisados e seguros", label: "" },
  { value: "Assistência técnica própria e especializada", label: "" },
  { value: "Locação flexível diária, semanal e mensal", label: "" },
];

export const homeCategoryCards = [
  {
    title: "Plataformas Tesoura",
    heading: "Elevação vertical com estabilidade e área de trabalho",
    description:
      "Indicadas principalmente para trabalhos que exigem elevação vertical, estabilidade e uma área de trabalho adequada para operador, ferramentas e materiais. São utilizadas em atividades de manutenção, instalação, montagem e operações industriais, comerciais e de construção.",
    href: "/plataformas-tesoura/",
    label: "Ver plataformas tesoura",
    visual: "tesoura" as const,
  },
  {
    title: "Plataformas Articuladas",
    heading: "Altura e alcance para acessar pontos mais difíceis",
    description:
      "Indicadas para trabalhos que, além da altura, exigem alcance horizontal e capacidade de contornar obstáculos. São uma alternativa para operações em que o acesso não pode ser realizado somente por elevação vertical.",
    href: "/plataformas-articuladas/",
    label: "Ver plataformas articuladas",
    visual: "articulada" as const,
  },
];

export const homeDifferentials = [
  {
    title: "12 anos de experiência",
    description:
      "Experiência no atendimento a empresas e operações que utilizam plataformas elevatórias para trabalhos em altura.",
  },
  {
    title: "Entrega e retirada próprias",
    description:
      "Estrutura própria para realizar a entrega e a retirada dos equipamentos dentro da área de atendimento da Accesslift.",
  },
  {
    title: "Assistência técnica própria",
    description: "Equipe técnica própria para suporte aos equipamentos durante a locação.",
  },
  {
    title: "Manutenção preventiva",
    description:
      "Cuidados preventivos fazem parte da estrutura necessária para manter os equipamentos preparados para as operações de nossos clientes.",
  },
  {
    title: "Atendimento emergencial",
    description: "Suporte para situações que exijam atendimento técnico durante a locação, de acordo com a necessidade da operação.",
  },
  {
    title: "Treinamento de operadores",
    description: "Treinamento para utilização das plataformas elevatórias, com orientação sobre equipamentos, controles, limites e cuidados durante a operação.",
  },
];

export type HomeClient = {
  name: string;
  logoSrc: string | null;
  logoAlt: string;
};

export type HomeGoogleReview = {
  id: string;
  author: string;
  rating: number;
  excerpt: string;
};

export const homeClients: HomeClient[] = [
  { name: "Lorenzetti", logoSrc: "/images/accesslift/clientes/logo-lorenzetti.png", logoAlt: "Logo Lorenzetti" },
  { name: "Assaí Atacadista", logoSrc: "/images/accesslift/clientes/logo-assai-atacadista.png", logoAlt: "Logo Assaí Atacadista" },
  { name: "Atacadão", logoSrc: "/images/accesslift/clientes/logo-atacadao.png", logoAlt: "Logo Atacadão" },
  { name: "Claro", logoSrc: "/images/accesslift/clientes/logo-claro.png", logoAlt: "Logo Claro" },
  { name: "EZTEC", logoSrc: "/images/accesslift/clientes/logo-eztec.png", logoAlt: "Logo EZTEC" },
];

// Text, author and rating verified on the public Google profile supplied by the client.
export const homeGoogleReviews: HomeGoogleReview[] = [
  {
    id: "google-edil-rodrigues",
    author: "edil Rodrigues",
    rating: 5,
    excerpt: "Pontualidade na entrega e equipamentos em excelente estado .",
  },
  {
    id: "google-marcelo-kruze",
    author: "Marcelo Kruze",
    rating: 5,
    excerpt: "Plataformas ótimas e a locação correu tudo bem e preço justo.",
  },
  {
    id: "google-cassio-simonetti-santos-neto",
    author: "Cassio Simonetti Santos Neto",
    rating: 5,
    excerpt: "Máquinas em ótimo estado de conservação !!!",
  },
];
export const googleReviewsProfileUrl =
  "https://www.google.com/search?q=accesslift&oq=accesslift+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABgeMgYIAhAAGB4yBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINzI3N2owajeoAgCwAgA&sourceid=chrome&source=chrome.ob&ie=UTF-8#lrd=0x94ce5aa4e0c36387:0xe507e2d8dad0c75b,1,,,,";

export const homeRentalSteps = [
  { title: "Conte o que você precisa", description: "Altura, local, período e características da operação." },
  { title: "Escolha do equipamento", description: "Nossa equipe auxilia na escolha de uma opção compatível." },
  { title: "Suporte", description: "Alinhamos as necessidades e o atendimento da operação." },
  { title: "Entrega", description: "Organizamos a entrega conforme a programação definida." },
  { title: "Operação", description: "Durante o período contratado, você conta com nosso suporte." },
];

export const homeFaqItems = [
  {
    id: "faq-tesoura-articulada",
    title: "Qual e a diferença entre plataforma tesoura e articulada?",
    content:
      "A plataforma tesoura e indicada para acesso vertical com área de trabalho estavel. A articulada atende operações que podem exigir alcance e acesso contornando obstáculos.",
  },
  {
    id: "faq-escolha",
    title: "Como saber qual plataforma e mais adequada para minha operação?",
    content:
      "A escolha depende da altura, do acesso, do ambiente e do espaço de trabalho. Nossa equipe pode ajudar a identificar o equipamento adequado para sua operação.",
  },
  {
    id: "faq-locacao",
    title: "É possível alugar por diária, semana ou mês?",
    content: "Sim. A Accesslift trabalha com locação diária, semanal ou mensal.",
  },
  {
    id: "faq-servicos",
    title: "A Accesslift realiza entrega, retirada e suporte durante a locação?",
    content:
      "A operação conta com entrega e retirada, assistência técnica, manutenção preventiva, atendimento emergencial e treinamento de operadores conforme a necessidade.",
  },
  {
    id: "faq-atendimento",
    title: "Qual e a área de atendimento da Accesslift?",
    content: "São Paulo e regiões em um raio de até 150 km da base.",
  },
];
