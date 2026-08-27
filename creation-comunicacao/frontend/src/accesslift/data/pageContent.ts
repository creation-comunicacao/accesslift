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
  contentSections?: Array<{
    title: string;
    description?: string;
    items?: string[];
  }>;
  faq: FaqItem[];
  faqSchemaEligible?: boolean;
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
  faqSchemaEligible?: boolean;
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
  faqSchemaEligible?: boolean;
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
    title: "Plataformas Elevatorias para Trabalhos em Altura",
    description:
      "Conheca os principais tipos de plataformas elevatorias disponiveis na frota Accesslift.",
    valueProposition:
      "Estrutura para orientar a escolha entre plataformas tesoura e articuladas, conectando o usuario ao catalogo dinamico.",
    benefits: [
      "Catalogo preparado para dados administraveis",
      "Categorias SEO reais para tesoura e articulada",
      "Jornada direta para orcamento e disponibilidade",
    ],
    process: ["Entender a necessidade", "Comparar categorias", "Consultar disponibilidade", "Solicitar orcamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        title: "O que sao plataformas elevatorias",
        description: "Plataformas elevatorias moveis sao equipamentos utilizados para acesso e execucao de atividades em altura. A escolha depende das caracteristicas da operacao.",
      },
      {
        title: "Como escolher",
        items: ["Altura de trabalho", "Alcance horizontal", "Obstaculos", "Piso e espaco disponivel", "Acessos", "Ambiente e capacidade necessaria"],
      },
      {
        title: "Frota eletrica",
        description: "A frota comunicada pela Accesslift e eletrica. Essa caracteristica aparece de forma transversal nas paginas e nao como categoria SEO independente.",
      },
    ],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas Elevatorias para Trabalhos em Altura",
      title: "Plataformas Elevatorias: Tesoura e Articulada | Accesslift",
      description: "Plataformas elevatorias tesoura e articuladas para trabalhos em altura.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas-elevatorias/",
    eyebrow: "Locacao",
    title: "Locacao de plataformas elevatorias",
    description:
      "Locacao diaria, semanal e mensal de plataformas elevatorias tesoura e articuladas, com entrega e suporte em Sao Paulo e regiao.",
    valueProposition:
      "Pagina preparada para explicar modalidades de locacao sem assumir especificacoes tecnicas nao cadastradas.",
    benefits: [
      "Locacao diaria, semanal e mensal previstas",
      "Equipamentos relacionados vindos do catalogo",
      "CTAs para orcamento e especialista",
    ],
    process: ["Necessidade", "Escolha do equipamento", "Suporte", "Entrega", "Operacao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        title: "Como escolher a plataforma",
        description: "A escolha deve considerar altura de trabalho, necessidade de alcance horizontal, acessos, espaco disponivel, condicoes do piso, ambiente e duracao da operacao.",
      },
      {
        title: "Modalidades de locacao",
        items: ["Locacao diaria", "Locacao semanal", "Locacao mensal"],
      },
      {
        title: "Quanto custa",
        description: "O valor varia conforme modelo, periodo, cidade, logistica e caracteristicas da operacao. A cotacao deve ser personalizada.",
      },
      {
        title: "Area de atendimento",
        description: "Sao Paulo e localidades em raio de ate 150 km da base, conforme condicoes do atendimento.",
      },
    ],
    faq: placeholderFaq,
    seo: {
      h1: "Locacao de Plataformas Elevatorias",
      title: "Locacao de Plataformas Elevatorias | Accesslift",
      description: "Locacao diaria, semanal e mensal de plataformas elevatorias.",
      canonicalPath: "/locacao-de-plataformas-elevatorias/",
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
    description: "Entrega e retirada, assistencia tecnica, manutencao e treinamento para plataformas elevatorias.",
    problem: "Operacoes em altura precisam de atendimento claro antes, durante e depois da escolha do equipamento.",
    proposal: "Centralizar entrega e retirada, assistencia, manutencao e treinamento em uma jornada de suporte clara.",
    benefits: ["Estrutura modular", "Links internos para servicos", "CTAs de atendimento"],
    process: ["Identificar demanda", "Selecionar servico", "Falar com especialista", "Registrar solicitacao"],
    applications: ["Locacao", "Suporte operacional", "Operacoes em altura"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Servicos e Suporte para Plataformas Elevatorias",
      title: "Servicos para Plataformas Elevatorias | Accesslift",
      description: "Servicos e suporte para plataformas elevatorias.",
      canonicalPath: "/servicos/",
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
    proposal: "Pagina pronta para detalhar canais, escopo e condicoes de assistencia, incluindo o fluxo de atendimento emergencial quando aplicavel.",
    benefits: ["Suporte operacional", "Atendimento especializado", "Fluxo de atendimento claro"],
    process: ["Contato", "Triagem", "Orientacao", "Acompanhamento"],
    applications: ["Locacao", "Operacao em campo", "Manutencao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Assistencia Tecnica para Plataformas Elevatorias",
      title: "Assistencia Tecnica de Plataformas Elevatorias | Accesslift",
      description: "Assistencia tecnica para operacao com plataformas elevatorias.",
      canonicalPath: "/servicos/assistencia-tecnica/",
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
      h1: "Manutencao Preventiva de Plataformas Elevatorias",
      title: "Manutencao de Plataformas Elevatorias | Accesslift",
      description: "Manutencao preventiva para apoiar disponibilidade operacional.",
      canonicalPath: "/servicos/manutencao-preventiva/",
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
      h1: "Treinamento para Operadores de Plataformas Elevatorias",
      title: "Treinamento para Operadores de Plataformas | Accesslift",
      description: "Treinamento de operadores para uso correto de plataformas elevatorias.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
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
      h1: "Plataformas Elevatorias para Diferentes Operacoes",
      title: "Aplicacoes de Plataformas Elevatorias | Accesslift",
      description: "Aplicacoes de plataformas elevatorias por segmento de mercado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
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
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    eyebrow: "Segmento",
    title: "Supermercados e Hipermercados",
    description: "Template para aplicacoes em supermercados.",
    context: "Estrutura pronta para demandas comerciais, manutencao e acesso em areas operacionais.",
    needs: ["Leitura facil", "Operacao organizada", "Suporte comercial"],
    solutions: ["Plataformas tesoura", "Consulta de disponibilidade", "Atendimento especializado"],
    applications: ["Manutencao", "Instalacoes", "Operacoes internas"],
    differentials: ["Entrega", "Retirada", "Treinamento"],
    relatedCategories: ["plataformas-tesoura"],
    faq: placeholderFaq,
    seo: {
      h1: "Plataformas Elevatorias para Supermercados e Hipermercados",
      title: "Plataformas para Supermercados e Hipermercados | Accesslift",
      description: "Plataformas elevatorias para aplicacoes em supermercados e hipermercados.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
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
    },
  },
];

export const findCommercialPage = (path: string) =>
  commercialPages.find((page) => page.path === path);

export const findServicePage = (path: string) =>
  servicePages.find((page) => page.path === path);

export const findSegmentPage = (path: string) =>
  segmentPages.find((page) => page.path === path);
