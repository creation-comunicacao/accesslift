import type { EquipmentCategorySlug } from "../types/equipment";
import type { PageSeo } from "../types/routes";

export type FaqItem = {
  question: string;
  answer: string;
};

export type CommercialPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  valueProposition: string;
  benefits: string[];
  process: string[];
  relatedCategories: EquipmentCategorySlug[];
  faq: FaqItem[];
  seo: PageSeo & { h1: string };
};

export type ServicePageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  problem: string;
  proposal: string;
  benefits: string[];
  process: string[];
  applications: string[];
  relatedCategories: EquipmentCategorySlug[];
  faq: FaqItem[];
  seo: PageSeo & { h1: string };
};

export type SegmentPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  context: string;
  needs: string[];
  solutions: string[];
  applications: string[];
  differentials: string[];
  relatedCategories: EquipmentCategorySlug[];
  faq: FaqItem[];
  seo: PageSeo & { h1: string };
};

const placeholderFaq: FaqItem[] = [
  {
    question: "Como validar o equipamento ideal?",
    answer:
      "A resposta deve considerar ambiente, acesso, altura, operacao e dados tecnicos oficiais do equipamento. Esta estrutura esta pronta para receber conteudo validado.",
  },
  {
    question: "Os dados tecnicos ja estao publicados?",
    answer:
      "Ainda nao. As paginas estao preparadas para receber dados reais, PDFs, imagens e informacoes comerciais definitivas.",
  },
];

export const commercialPages: CommercialPageConfig[] = [
  {
    path: "/plataformas-elevatorias/",
    eyebrow: "Plataformas elevatorias",
    title: "Plataformas elevatorias para locacao e venda",
    description:
      "Pagina comercial preparada para apresentar categorias, catalogo e jornadas de conversao da Accesslift.",
    valueProposition:
      "Estrutura para orientar a escolha entre plataformas tesoura e articuladas, conectando o usuario ao catalogo dinamico.",
    benefits: [
      "Catalogo preparado para dados administraveis",
      "Categorias SEO reais para tesoura e articulada",
      "Jornada direta para orcamento e disponibilidade",
    ],
    process: ["Entender a necessidade", "Comparar categorias", "Consultar disponibilidade", "Solicitar orcamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas elevatorias para locacao e venda",
      title: "Plataformas elevatorias | Accesslift",
      description: "Pagina comercial preparada para plataformas elevatorias Accesslift.",
      canonicalPath: "/plataformas-elevatorias/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/locacao-de-plataformas/",
    eyebrow: "Locacao",
    title: "Locacao de plataformas elevatorias",
    description:
      "Estrutura comercial para locacao diaria, semanal e mensal de plataformas elevatorias.",
    valueProposition:
      "Pagina preparada para explicar modalidades de locacao sem assumir especificacoes tecnicas nao cadastradas.",
    benefits: [
      "Locacao diaria, semanal e mensal previstas",
      "Equipamentos relacionados vindos do catalogo",
      "CTAs para orcamento e especialista",
    ],
    process: ["Necessidade", "Escolha do equipamento", "Suporte", "Entrega", "Operacao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Locacao de plataformas elevatorias",
      title: "Locacao de plataformas elevatorias | Accesslift",
      description: "Locacao diaria, semanal e mensal de plataformas elevatorias.",
      canonicalPath: "/locacao-de-plataformas/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/venda-de-plataformas/",
    eyebrow: "Venda",
    title: "Venda de plataformas elevatorias",
    description:
      "Pagina preparada para atendimento comercial de venda de plataformas elevatorias.",
    valueProposition:
      "Estrutura para apresentar equipamentos, suporte comercial e caminho de contato sem inventar oferta definitiva.",
    benefits: [
      "Base pronta para catalogo administravel",
      "Campos preparados para ficha tecnica",
      "Contato comercial orientado a conversao",
    ],
    process: ["Interesse", "Analise de necessidade", "Consulta ao catalogo", "Contato comercial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Venda de plataformas elevatorias",
      title: "Venda de plataformas elevatorias | Accesslift",
      description: "Venda de plataformas elevatorias com atendimento comercial especializado.",
      canonicalPath: "/venda-de-plataformas/",
      indexDirective: "noindex",
    },
  },
];

export const servicePages: ServicePageConfig[] = [
  {
    path: "/servicos/",
    eyebrow: "Servicos",
    title: "Servicos Accesslift",
    description: "Hub de servicos comerciais e operacionais previstos na V2 Accesslift.",
    problem: "Operacoes em altura precisam de atendimento claro antes, durante e depois da escolha do equipamento.",
    proposal: "Centralizar servicos relacionados a entrega, retirada, assistencia, manutencao e treinamento.",
    benefits: ["Estrutura modular", "Links internos para servicos", "CTAs de atendimento"],
    process: ["Identificar demanda", "Selecionar servico", "Falar com especialista", "Registrar solicitacao"],
    applications: ["Locacao", "Venda", "Suporte operacional"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Servicos Accesslift",
      title: "Servicos | Accesslift",
      description: "Entrega, retirada, assistencia tecnica, manutencao e treinamento.",
      canonicalPath: "/servicos/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/entrega-e-retirada/",
    eyebrow: "Servico",
    title: "Entrega e retirada",
    description: "Template preparado para explicar o servico de entrega e retirada.",
    problem: "A logistica do equipamento precisa ser planejada junto com a operacao.",
    proposal: "Estrutura para detalhar fluxo, responsabilidades e pontos de contato quando os dados reais forem definidos.",
    benefits: ["Planejamento logistico", "Fluxo claro de atendimento", "Integracao com orcamento"],
    process: ["Solicitacao", "Confirmacao", "Entrega", "Retirada"],
    applications: ["Obras", "Industria", "Operacoes comerciais"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Entrega e retirada de plataformas elevatorias",
      title: "Entrega e retirada de plataformas | Accesslift",
      description: "Servico de entrega e retirada para plataformas elevatorias.",
      canonicalPath: "/servicos/entrega-e-retirada/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    eyebrow: "Servico",
    title: "Assistencia tecnica",
    description: "Template preparado para suporte tecnico e operacional.",
    problem: "A operacao pode precisar de suporte para manter continuidade e seguranca.",
    proposal: "Pagina pronta para detalhar canais, escopo e condicoes de assistencia apos validacao interna.",
    benefits: ["Suporte operacional", "Atendimento especializado", "Base pronta para SLA futuro"],
    process: ["Contato", "Triagem", "Orientacao", "Acompanhamento"],
    applications: ["Locacao", "Operacao em campo", "Manutencao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Assistencia tecnica para plataformas elevatorias",
      title: "Assistencia tecnica | Accesslift",
      description: "Assistencia tecnica para operacao com plataformas elevatorias.",
      canonicalPath: "/servicos/assistencia-tecnica/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    eyebrow: "Servico",
    title: "Manutencao preventiva",
    description: "Template para conteudo de manutencao preventiva.",
    problem: "Equipamentos dependem de processos de manutencao definidos por dados e procedimentos oficiais.",
    proposal: "Estrutura preparada para receber escopo, periodicidade e orientacoes reais.",
    benefits: ["Prevencao operacional", "Documentacao futura", "Conteudo tecnico administravel"],
    process: ["Planejamento", "Inspecao", "Registro", "Orientacao"],
    applications: ["Frota", "Operacoes recorrentes", "Suporte tecnico"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Manutencao preventiva de plataformas elevatorias",
      title: "Manutencao preventiva | Accesslift",
      description: "Manutencao preventiva para apoiar disponibilidade operacional.",
      canonicalPath: "/servicos/manutencao-preventiva/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/atendimento-emergencial/",
    eyebrow: "Servico",
    title: "Atendimento emergencial",
    description: "Template para demandas urgentes de atendimento.",
    problem: "Algumas operacoes precisam de resposta rapida e orientacao clara.",
    proposal: "Pagina preparada para explicar acionamento e fluxo quando os dados reais forem definidos.",
    benefits: ["Canal de conversao", "Fluxo objetivo", "Base para regras operacionais"],
    process: ["Acionamento", "Triagem", "Direcionamento", "Acompanhamento"],
    applications: ["Operacao em andamento", "Locacao", "Suporte comercial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Atendimento emergencial para plataformas elevatorias",
      title: "Atendimento emergencial | Accesslift",
      description: "Atendimento emergencial para demandas de plataformas elevatorias.",
      canonicalPath: "/servicos/atendimento-emergencial/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/treinamento-de-operadores/",
    eyebrow: "Servico",
    title: "Treinamento de operadores",
    description: "Template para orientacoes e treinamento de operadores.",
    problem: "Operadores precisam de orientacao adequada para uso seguro e correto.",
    proposal: "Estrutura pronta para receber conteudo aprovado sobre treinamento e operacao.",
    benefits: ["Orientacao operacional", "Conteudo preparado para NR35", "CTA para especialista"],
    process: ["Necessidade", "Orientacao", "Treinamento", "Operacao"],
    applications: ["Industria", "Construcao civil", "Operacoes comerciais"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Treinamento de operadores de plataformas",
      title: "Treinamento de operadores | Accesslift",
      description: "Treinamento de operadores para uso correto de plataformas elevatorias.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
      indexDirective: "noindex",
    },
  },
];

export const segmentPages: SegmentPageConfig[] = [
  {
    path: "/segmentos-e-aplicacoes/",
    eyebrow: "Aplicacoes",
    title: "Segmentos e aplicacoes",
    description: "Hub de segmentos previsto no blueprint Accesslift.",
    context: "Cada segmento tera conteudo administravel sem criar paginas automaticas por cidade, bairro ou filtros.",
    needs: ["Acesso em altura", "Escolha correta de categoria", "Atendimento comercial"],
    solutions: ["Catalogo dinamico", "Categorias SEO reais", "CTAs de conversao"],
    applications: ["Industria", "Construcao civil", "Supermercados", "Atacados"],
    differentials: ["Entrega", "Retirada", "Assistencia", "Treinamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Segmentos e aplicacoes de plataformas elevatorias",
      title: "Segmentos e aplicacoes | Accesslift",
      description: "Aplicacoes de plataformas elevatorias por segmento de mercado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    eyebrow: "Segmento",
    title: "Construcao civil",
    description: "Template para aplicacoes em construcao civil.",
    context: "Pagina preparada para demandas de obra e acesso em altura, com conteudo real a validar.",
    needs: ["Acesso vertical", "Planejamento de locacao", "Suporte em campo"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Atendimento comercial"],
    applications: ["Obras", "Instalacoes", "Manutencao predial"],
    differentials: ["Entrega", "Assistencia", "Atendimento emergencial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas para construcao civil",
      title: "Plataformas para construcao civil | Accesslift",
      description: "Estrutura de pagina para aplicacoes em construcao civil.",
      canonicalPath: "/segmentos/construcao-civil/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/segmentos/industria/",
    eyebrow: "Segmento",
    title: "Industria",
    description: "Template para aplicacoes industriais.",
    context: "Pagina pronta para conteudos de manutencao, instalacao e operacoes industriais.",
    needs: ["Continuidade operacional", "Seguranca", "Acesso planejado"],
    solutions: ["Catalogo por categoria", "Assistencia tecnica", "Manutencao preventiva"],
    applications: ["Manutencao", "Instalacao", "Operacao industrial"],
    differentials: ["Assistencia", "Manutencao", "Treinamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas para industria",
      title: "Plataformas para industria | Accesslift",
      description: "Estrutura de pagina para aplicacoes industriais.",
      canonicalPath: "/segmentos/industria/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/segmentos/supermercados/",
    eyebrow: "Segmento",
    title: "Supermercados",
    description: "Template para aplicacoes em supermercados.",
    context: "Estrutura pronta para demandas comerciais, manutencao e acesso em areas operacionais.",
    needs: ["Leitura facil", "Operacao organizada", "Suporte comercial"],
    solutions: ["Plataformas tesoura", "Consulta de disponibilidade", "Atendimento especializado"],
    applications: ["Manutencao", "Instalacoes", "Operacoes internas"],
    differentials: ["Entrega", "Retirada", "Treinamento"],
    relatedCategories: ["plataformas-tesoura"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas para supermercados",
      title: "Plataformas para supermercados | Accesslift",
      description: "Estrutura de pagina para aplicacoes em supermercados.",
      canonicalPath: "/segmentos/supermercados/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/segmentos/atacados/",
    eyebrow: "Segmento",
    title: "Atacados",
    description: "Template para aplicacoes em atacados.",
    context: "Pagina preparada para operacoes de grande area e necessidades de acesso em altura.",
    needs: ["Acesso em areas amplas", "Planejamento operacional", "Atendimento comercial"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Suporte tecnico"],
    applications: ["Manutencao", "Estoque", "Instalacoes"],
    differentials: ["Entrega", "Assistencia", "Atendimento emergencial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas para atacados",
      title: "Plataformas para atacados | Accesslift",
      description: "Estrutura de pagina para aplicacoes em atacados.",
      canonicalPath: "/segmentos/atacados/",
      indexDirective: "noindex",
    },
  },
];

export const findCommercialPage = (path: string) =>
  commercialPages.find((page) => page.path === path);

export const findServicePage = (path: string) =>
  servicePages.find((page) => page.path === path);

export const findSegmentPage = (path: string) =>
  segmentPages.find((page) => page.path === path);
