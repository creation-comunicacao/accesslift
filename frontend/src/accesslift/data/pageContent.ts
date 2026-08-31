import type { MarketSegmentSlug } from "../types/equipment";
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

export type ServiceCta = {
  label: string;
  href: string;
};

export type ServiceSection = {
  title: string;
  description?: string;
  items?: string[];
  cta?: ServiceCta;
};

export type ServiceComparisonItem = {
  term: string;
  definition: string;
};

export type ServicePageConfig = {
  path: string;
  eyebrow: string;
  description: string;
  heroCta?: ServiceCta;
  sections: ServiceSection[];
  comparisonItems?: ServiceComparisonItem[];
  showSupportForm?: boolean;
  showTrainingGallery?: boolean;
  relatedCategories?: EquipmentCategorySlug[];
  faq: FaqItem[];
  faqTitle?: string;
  faqSchemaEligible?: boolean;
  finalCta: {
    title: string;
    description?: string;
    primary: ServiceCta;
    secondary?: ServiceCta;
  };
  seo: PageSeo & { h1: string };
};

export type SegmentCta = {
  label: string;
  href: string;
};

export type SegmentSection = {
  title: string;
  description?: string;
  items?: string[];
  cta?: SegmentCta;
};

export type SegmentCategoryGuidance = {
  tesoura: { title: string; description: string; cta: SegmentCta };
  articulada: { title: string; description: string; cta: SegmentCta };
};

export type SegmentPageConfig = {
  path: string;
  eyebrow: string;
  description: string;
  heroCta?: SegmentCta;
  heroSecondaryCta?: SegmentCta;
  sections: SegmentSection[];
  segmentCards?: SegmentSection[];
  categoryGuidance?: SegmentCategoryGuidance;
  relatedSegmentSlug?: MarketSegmentSlug;
  faq: FaqItem[];
  faqTitle?: string;
  faqSchemaEligible?: boolean;
  finalCta: {
    title: string;
    description?: string;
    primary: SegmentCta;
    secondary?: SegmentCta;
  };
  seo: PageSeo & { h1: string };
};

export type CoveragePageConfig = {
  path: string;
  eyebrow: string;
  description: string;
  heroPrimaryCta: SegmentCta;
  heroSecondaryCta: SegmentCta;
  sections: SegmentSection[];
  serviceHighlights: Array<{ title: string; description: string }>;
  requestChecklist: string[];
  referenceCities: string[];
  faq: FaqItem[];
  faqTitle?: string;
  faqSchemaEligible?: boolean;
  finalCta: {
    title: string;
    description?: string;
    primary: SegmentCta;
    secondary: SegmentCta;
  };
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
    description:
      "Estrutura para apoiar a operacao antes, durante e apos a entrega dos equipamentos.",
    heroCta: { label: "Falar com a Accesslift", href: "/contato/" },
    sections: [
      {
        title: "Suporte que acompanha a operacao",
        description:
          "A locacao de uma plataforma elevatoria nao termina quando o equipamento e entregue. A Accesslift mantem uma estrutura de atendimento voltada a disponibilidade e ao suporte dos equipamentos utilizados nas operacoes de seus clientes.",
      },
      {
        title: "Entrega e retirada proprias",
        description:
          "A Accesslift possui estrutura propria para entrega e retirada dos equipamentos dentro de sua area de atendimento, conforme condicoes acordadas para cada locacao.",
        cta: { label: "Conhecer a area de atendimento", href: "/area-de-atendimento/" },
      },
      {
        title: "Assistencia tecnica propria",
        description:
          "Durante a locacao, situacoes tecnicas podem exigir avaliacao e intervencao. A Accesslift conta com equipe tecnica propria para atendimento aos equipamentos de sua operacao, proporcionando uma relacao direta entre locacao e suporte.",
        cta: { label: "Assistencia tecnica", href: "/servicos/assistencia-tecnica/" },
      },
      {
        title: "Suporte quando a operacao precisa",
        description:
          "Ocorrencias durante uma locacao podem impactar o andamento do trabalho. A estrutura de atendimento da Accesslift permite receber e avaliar solicitacoes emergenciais relacionadas aos equipamentos em operacao.",
        cta: { label: "Solicitar suporte", href: "/servicos/assistencia-tecnica/" },
      },
      {
        title: "Manutencao preventiva",
        description:
          "A manutencao preventiva faz parte dos cuidados necessarios para manter os equipamentos preparados para utilizacao e reduzir a ocorrencia de problemas durante a operacao.",
        cta: { label: "Conhecer a manutencao preventiva", href: "/servicos/manutencao-preventiva/" },
      },
      {
        title: "Treinamento de operadores",
        description:
          "A Accesslift oferece treinamento voltado a utilizacao das plataformas elevatorias, abordando equipamento, comandos, limites e cuidados relacionados a operacao.",
        cta: { label: "Conhecer o treinamento", href: "/servicos/treinamento-de-operadores/" },
      },
      {
        title: "Informacao e preparacao fazem parte do trabalho em altura",
        description:
          "A utilizacao de plataformas elevatorias esta inserida em um contexto que envolve planejamento, capacitacao e requisitos de seguranca aplicaveis a atividade. A Accesslift disponibiliza informacoes complementares sobre plataformas elevatorias e trabalho em altura em sua area de seguranca e NR-35.",
        cta: { label: "Entender mais sobre NR-35", href: "/seguranca-e-nr35/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Servicos e Suporte para Plataformas Elevatorias",
      title: "Servicos para Plataformas Elevatorias | Accesslift",
      description:
        "Conheca a estrutura de suporte Accesslift: assistencia tecnica propria, manutencao preventiva, atendimento emergencial e treinamento de operadores.",
      canonicalPath: "/servicos/",
    },
    finalCta: {
      title: "Precisa de locacao ou suporte tecnico?",
      description: "Fale com a equipe Accesslift.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      secondary: { label: "Entrar em contato", href: "/contato/" },
    },
  },
  {
    path: "/servicos/entrega-e-retirada/",
    eyebrow: "Servico",
    description:
      "A Accesslift possui estrutura propria para entrega e retirada dos equipamentos dentro de sua area de atendimento.",
    heroCta: { label: "Conhecer a area de atendimento", href: "/area-de-atendimento/" },
    sections: [
      {
        title: "Logistica integrada a locacao",
        description:
          "A entrega e a retirada sao planejadas conforme as condicoes acordadas para cada locacao, dentro da area de atendimento Accesslift.",
      },
    ],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: [],
    seo: {
      h1: "Entrega e retirada de plataformas elevatorias",
      title: "Entrega e retirada de plataformas | Accesslift",
      description: "Servico de entrega e retirada para plataformas elevatorias.",
      canonicalPath: "/servicos/entrega-e-retirada/",
      indexDirective: "noindex",
    },
    finalCta: {
      title: "Precisa consultar entrega na sua regiao?",
      primary: { label: "Consultar area de atendimento", href: "/area-de-atendimento/" },
      secondary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    eyebrow: "Servico",
    description:
      "Suporte tecnico proprio para acompanhar os equipamentos da operacao Accesslift e atender necessidades durante a locacao.",
    heroCta: { label: "Solicitar suporte tecnico", href: "#solicitar-assistencia" },
    sections: [
      {
        title: "Suporte tecnico integrado a locacao",
        description:
          "O funcionamento do equipamento tem impacto direto na continuidade do trabalho. Por isso, a Accesslift mantem assistencia tecnica propria integrada a sua estrutura de locacao, permitindo que solicitacoes relacionadas aos equipamentos sejam direcionadas a propria equipe.",
      },
      {
        title: "Atendimento para diferentes necessidades",
        description: "A estrutura tecnica pode atuar em situacoes que envolvam:",
        items: [
          "Avaliacao de ocorrencias",
          "Orientacao relacionada ao equipamento",
          "Intervencao tecnica quando necessaria",
          "Suporte durante a locacao",
          "Manutencao dos equipamentos da operacao Accesslift",
          "Solicitacoes emergenciais",
        ],
      },
      {
        title: "Precisa de suporte durante uma locacao?",
        description:
          "Se um equipamento Accesslift apresentar uma ocorrencia durante a operacao, entre em contato com nossa equipe e informe o maximo possivel sobre a situacao. Sempre que possivel, tenha em maos modelo do equipamento, local da operacao e descricao da ocorrencia.",
        cta: { label: "Solicitar atendimento", href: "#solicitar-assistencia" },
      },
      {
        title: "Equipamentos da frota Accesslift",
        description:
          "A frota atual reune equipamentos das marcas JLG, Genie, Skyjack e Zoomlion. A disponibilidade e o escopo do atendimento devem ser confirmados conforme o equipamento e a relacao com a operacao Accesslift.",
      },
      {
        title: "Equipamento e suporte em uma mesma estrutura",
        description:
          "Ao contratar uma plataforma da Accesslift, o cliente conta com uma estrutura que integra locacao, logistica e assistencia tecnica.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    showSupportForm: true,
    faqTitle: "Duvidas sobre assistencia tecnica",
    faq: [
      {
        question: "A Accesslift possui assistencia tecnica propria?",
        answer:
          "Sim. A empresa conta com equipe tecnica propria para suporte aos equipamentos de sua operacao.",
      },
      {
        question: "Ha suporte durante a locacao?",
        answer:
          "Sim. Solicitacoes tecnicas relacionadas aos equipamentos em locacao podem ser direcionadas a equipe Accesslift.",
      },
      {
        question: "A Accesslift oferece atendimento emergencial?",
        answer:
          "A empresa recebe e avalia solicitacoes emergenciais relacionadas aos equipamentos em operacao, conforme cada situacao.",
      },
      {
        question: "A assistencia atende equipamentos de terceiros?",
        answer:
          "O escopo deve ser consultado com a Accesslift de acordo com o equipamento e a necessidade.",
      },
    ],
    seo: {
      h1: "Assistencia Tecnica para Plataformas Elevatorias",
      title: "Assistencia Tecnica de Plataformas Elevatorias | Accesslift",
      description:
        "Assistencia tecnica propria para plataformas elevatorias da operacao Accesslift, com suporte durante a locacao e atendimento a ocorrencias tecnicas.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
    finalCta: {
      title: "Precisa de assistencia?",
      description: "Envie as informacoes do equipamento e da ocorrencia para nossa equipe.",
      primary: { label: "Solicitar suporte tecnico", href: "#solicitar-assistencia" },
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    eyebrow: "Servico",
    description:
      "Cuidados tecnicos fazem parte da preparacao e acompanhamento dos equipamentos utilizados nas operacoes Accesslift.",
    heroCta: { label: "Falar com a Accesslift", href: "/contato/" },
    sections: [
      {
        title: "Por que a manutencao preventiva e importante?",
        description:
          "Plataformas elevatorias possuem sistemas e componentes que precisam ser acompanhados para manter as condicoes adequadas de utilizacao. A manutencao preventiva busca identificar necessidades de intervencao e realizar os cuidados previstos para o equipamento antes que uma ocorrencia afete a operacao.",
      },
      {
        title: "Cuidados preventivos com o equipamento",
        description:
          "A manutencao pode envolver verificacoes e intervencoes relacionadas aos sistemas e componentes do equipamento de acordo com as orientacoes tecnicas aplicaveis a cada modelo. A periodicidade e os procedimentos nao sao iguais para todas as plataformas e devem respeitar as especificacoes correspondentes ao equipamento.",
      },
      {
        title: "Manutencao integrada a estrutura de locacao",
        description:
          "A manutencao preventiva dos equipamentos faz parte da estrutura utilizada pela Accesslift para preparar e acompanhar sua frota. Essa integracao entre frota, manutencao e assistencia tecnica reduz a distancia entre quem disponibiliza o equipamento e quem oferece suporte a operacao.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
      {
        title: "Plataformas JLG, Genie, Skyjack e Zoomlion",
        description:
          "A frota atual da Accesslift reune equipamentos dessas quatro marcas nas categorias tesoura e articulada.",
        cta: { label: "Ver equipamentos", href: "/equipamentos/" },
      },
    ],
    comparisonItems: [
      {
        term: "Manutencao preventiva",
        definition: "Atua de forma programada nos cuidados e verificacoes do equipamento.",
      },
      {
        term: "Manutencao corretiva",
        definition: "E realizada quando existe uma necessidade de correcao ou reparo identificada.",
      },
      {
        term: "Assistencia tecnica",
        definition: "E a estrutura de atendimento que avalia ocorrencias e direciona o suporte necessario.",
      },
    ],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faqTitle: "Duvidas sobre manutencao de plataformas elevatorias",
    faq: [
      {
        question: "O que e manutencao preventiva de plataforma elevatoria?",
        answer:
          "E o conjunto de verificacoes e cuidados programados realizados conforme as necessidades e orientacoes tecnicas aplicaveis ao equipamento.",
      },
      {
        question: "Manutencao preventiva e corretiva sao a mesma coisa?",
        answer:
          "Nao. A preventiva e planejada para acompanhamento do equipamento. A corretiva esta relacionada a necessidade de corrigir um problema identificado.",
      },
      {
        question: "Todas as plataformas tem o mesmo intervalo de manutencao?",
        answer:
          "Nao. Os procedimentos e periodicidades dependem do equipamento e das orientacoes tecnicas correspondentes.",
      },
      {
        question: "A manutencao faz parte da estrutura da Accesslift?",
        answer:
          "Sim. A Accesslift possui estrutura propria de suporte tecnico e manutencao para sua operacao.",
      },
    ],
    seo: {
      h1: "Manutencao Preventiva de Plataformas Elevatorias",
      title: "Manutencao de Plataformas Elevatorias | Accesslift",
      description:
        "Conheca a estrutura de manutencao preventiva da Accesslift para plataformas elevatorias e sua integracao com a operacao de locacao.",
      canonicalPath: "/servicos/manutencao-preventiva/",
    },
    finalCta: {
      title: "Precisa falar sobre manutencao ou suporte?",
      description: "Entre em contato com a Accesslift e informe o equipamento e sua necessidade.",
      primary: { label: "Entrar em contato", href: "/contato/" },
    },
  },
  {
    path: "/servicos/atendimento-emergencial/",
    eyebrow: "Servico",
    description:
      "A estrutura de atendimento da Accesslift permite receber e avaliar solicitacoes emergenciais relacionadas aos equipamentos em operacao.",
    heroCta: { label: "Solicitar suporte", href: "/servicos/assistencia-tecnica/" },
    sections: [
      {
        title: "Atendimento emergencial",
        description:
          "Ocorrencias durante uma locacao podem impactar o andamento do trabalho. Solicitacoes emergenciais sao recebidas e avaliadas conforme cada situacao, sem promessa de prazo ou tempo de resposta.",
        cta: { label: "Solicitar assistencia tecnica", href: "/servicos/assistencia-tecnica/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Atendimento emergencial para plataformas elevatorias",
      title: "Atendimento emergencial | Accesslift",
      description: "Atendimento emergencial para demandas de plataformas elevatorias.",
      canonicalPath: "/servicos/atendimento-emergencial/",
      indexDirective: "noindex",
    },
    finalCta: {
      title: "Precisa de suporte durante a operacao?",
      primary: { label: "Solicitar suporte tecnico", href: "/servicos/assistencia-tecnica/" },
    },
  },
  {
    path: "/servicos/treinamento-de-operadores/",
    eyebrow: "Servico",
    description:
      "Orientacao voltada ao conhecimento do equipamento, seus comandos, limites e cuidados relacionados a utilizacao da plataforma.",
    heroCta: { label: "Solicitar informacoes", href: "/contato/" },
    sections: [
      {
        title: "Conhecer o equipamento faz parte da operacao",
        description:
          "Plataformas elevatorias possuem caracteristicas, comandos e limites que precisam ser compreendidos por quem ira utiliza-las. O treinamento de operadores busca proporcionar conhecimento sobre a plataforma e os cuidados necessarios para sua utilizacao dentro das condicoes previstas para o equipamento e a atividade.",
      },
      {
        title: "O que e abordado no treinamento?",
        description: "O treinamento pode abordar aspectos relacionados a:",
        items: [
          "Identificacao e caracteristicas do equipamento",
          "Comandos e controles",
          "Limites de utilizacao",
          "Verificacoes relacionadas a operacao",
          "Cuidados antes e durante o uso",
          "Caracteristicas das plataformas tesoura e articuladas",
          "Orientacoes aplicaveis ao equipamento utilizado",
        ],
      },
      {
        title: "Treinamento para plataformas tesoura e articuladas",
        description:
          "As duas categorias possuem caracteristicas de movimentacao e utilizacao distintas. Compreender essas diferencas e importante para reconhecer os limites e particularidades de cada tipo de plataforma.",
        cta: { label: "Conhecer as plataformas", href: "/plataformas-elevatorias/" },
      },
      {
        title: "Treinamento de plataforma elevatoria e NR-35 sao a mesma coisa?",
        description:
          "Nao devem ser tratados como conceitos equivalentes. O treinamento de operador esta relacionado ao conhecimento e a utilizacao do equipamento. Ja a NR-35 estabelece requisitos relacionados ao trabalho em altura dentro de seu campo de aplicacao. As exigencias aplicaveis a uma atividade devem ser avaliadas pela empresa responsavel considerando o trabalho que sera realizado e a regulamentacao vigente.",
        cta: { label: "Saiba mais sobre NR-35", href: "/seguranca-e-nr35/" },
      },
      {
        title: "Equipamento, orientacao e suporte",
        description:
          "Alem da disponibilizacao das plataformas, a Accesslift mantem estrutura de suporte para acompanhar as operacoes de seus clientes. Para informacoes sobre treinamento relacionado a uma locacao, consulte nossa equipe.",
        cta: { label: "Solicitar informacoes", href: "/contato/" },
      },
    ],
    showTrainingGallery: true,
    faqTitle: "Duvidas sobre treinamento de operadores",
    faq: [
      {
        question: "A Accesslift oferece treinamento para operadores?",
        answer: "Sim. A empresa oferece treinamento relacionado a utilizacao de plataformas elevatorias.",
      },
      {
        question: "O treinamento aborda plataformas tesoura e articuladas?",
        answer: "A orientacao deve considerar o tipo e as caracteristicas dos equipamentos envolvidos.",
      },
      {
        question: "Treinamento de plataforma substitui NR-35?",
        answer:
          "Nao devem ser tratados como equivalentes. O treinamento do equipamento e os requisitos aplicaveis ao trabalho em altura possuem objetivos e escopos distintos.",
      },
      {
        question: "Como solicitar informacoes sobre o treinamento?",
        answer:
          "Entre em contato com a Accesslift informando a necessidade, os equipamentos envolvidos e o contexto da operacao.",
      },
    ],
    seo: {
      h1: "Treinamento para Operadores de Plataformas Elevatorias",
      title: "Treinamento para Operadores de Plataformas | Accesslift",
      description:
        "Treinamento para operadores de plataformas elevatorias com orientacao sobre equipamentos, comandos, limites e cuidados durante a operacao.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
    finalCta: {
      title: "Precisa de informacoes sobre treinamento?",
      description: "Fale com a Accesslift e informe as caracteristicas da sua operacao.",
      primary: { label: "Entrar em contato", href: "/contato/" },
    },
  },
];

export const segmentPages: SegmentPageConfig[] = [
  {
    path: "/segmentos-e-aplicacoes/",
    eyebrow: "Aplicacoes",
    description:
      "Solucoes para trabalhos em altura em ambientes industriais, obras, instalacoes comerciais e outras operacoes que exigem acesso elevado.",
    heroCta: { label: "Encontrar uma plataforma", href: "/equipamentos/" },
    heroSecondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    sections: [
      {
        title: "O equipamento deve acompanhar as caracteristicas do trabalho",
        description:
          "Altura e apenas um dos fatores envolvidos na escolha de uma plataforma elevatoria. O tipo de acesso, espaco disponivel, obstaculos, necessidade de alcance horizontal, capacidade da plataforma e condicoes do local tambem influenciam a definicao do equipamento. Por isso, diferentes segmentos podem exigir plataformas com caracteristicas distintas mesmo quando os trabalhos sao realizados em alturas semelhantes.",
      },
      {
        title: "Nao escolha apenas pela altura",
        description: "Para identificar uma plataforma, considere informacoes como:",
        items: [
          "Altura aproximada do trabalho",
          "Acesso ao local",
          "Largura e altura de passagens",
          "Espaco para posicionamento e movimentacao",
          "Presenca de obstaculos",
          "Necessidade de alcance horizontal",
          "Operadores, ferramentas e materiais envolvidos",
          "Caracteristicas do piso e do ambiente",
          "Periodo de utilizacao",
        ],
        cta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      },
    ],
    segmentCards: [
      {
        title: "Plataformas elevatorias para industria",
        description:
          "Ambientes industriais podem exigir acesso elevado para atividades de manutencao, instalacoes, inspecoes, montagens e intervencoes em estruturas e equipamentos. Plataformas tesoura podem atender operacoes predominantemente verticais, enquanto plataformas articuladas ampliam as possibilidades quando existem obstaculos ou necessidade de alcance horizontal.",
        cta: { label: "Plataformas para industria", href: "/segmentos/industria/" },
      },
      {
        title: "Plataformas elevatorias para construcao civil",
        description:
          "Em obras e diferentes etapas da construcao, plataformas elevatorias podem apoiar atividades de instalacao, montagem, acabamento, manutencao e acesso a pontos elevados. A escolha deve considerar a etapa da obra, altura, acessos, espaco disponivel e condicoes da operacao.",
        cta: { label: "Plataformas para construcao civil", href: "/segmentos/construcao-civil/" },
      },
      {
        title: "Plataformas para supermercados e hipermercados",
        description:
          "Instalacoes de grande porte podem demandar trabalhos em altura para manutencao, iluminacao, infraestrutura, comunicacao visual, instalacoes e outras intervencoes. Dimensoes do equipamento e caracteristicas de circulacao e posicionamento ganham especial importancia nesses ambientes.",
        cta: { label: "Plataformas para supermercados", href: "/segmentos/supermercados-e-hipermercados/" },
      },
      {
        title: "Plataformas elevatorias para atacados",
        description:
          "Operacoes atacadistas podem possuir grandes areas, instalacoes elevadas e diferentes necessidades de manutencao e infraestrutura. Plataformas elevatorias permitem posicionar operadores e ferramentas em altura para diferentes tipos de intervencao, desde que o equipamento seja compativel com as condicoes da operacao.",
        cta: { label: "Plataformas para atacados", href: "/segmentos/atacados/" },
      },
    ],
    categoryGuidance: {
      tesoura: {
        title: "Plataforma Tesoura",
        description:
          "Pode ser considerada quando o trabalho exige principalmente elevacao vertical e existe possibilidade de posicionar o equipamento abaixo da area de execucao.",
        cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
      },
      articulada: {
        title: "Plataforma Articulada",
        description:
          "Pode ser considerada quando existem obstaculos ou quando o ponto de trabalho exige alcance horizontal alem da elevacao.",
        cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
      },
    },
    faq: [],
    seo: {
      h1: "Plataformas Elevatorias para Diferentes Segmentos e Aplicacoes",
      title: "Plataformas Elevatorias para Diferentes Aplicacoes | Accesslift",
      description:
        "Plataformas elevatorias para industria, construcao civil, supermercados, hipermercados e atacados. Conheca aplicacoes e encontre o equipamento adequado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
    finalCta: {
      title: "Conte para a Accesslift como sera sua operacao",
      description:
        "Informe o local, altura aproximada, periodo e caracteristicas do trabalho para consultar as opcoes disponiveis.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      secondary: { label: "Ver equipamentos", href: "/equipamentos/" },
    },
  },
  {
    path: "/segmentos/industria/",
    eyebrow: "Segmento",
    description:
      "Equipamentos para trabalhos em altura em operacoes industriais, com opcoes para elevacao vertical e acesso a pontos que exigem alcance horizontal.",
    heroCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    relatedSegmentSlug: "industria",
    sections: [
      {
        title: "Acesso em altura para diferentes necessidades da industria",
        description:
          "Instalacoes industriais podem reunir estruturas, maquinas, tubulacoes, sistemas eletricos, iluminacao e outros elementos que demandam acesso elevado para inspecoes, manutencoes e intervencoes. A plataforma adequada depende da configuracao do local e do ponto onde o trabalho sera realizado.",
      },
      {
        title: "Aplicacoes em ambientes industriais",
        description: "Dependendo das condicoes da operacao, plataformas elevatorias podem apoiar atividades como:",
        items: [
          "Manutencao de instalacoes",
          "Inspecoes em altura",
          "Instalacoes eletricas e infraestrutura",
          "Manutencao de iluminacao",
          "Montagens",
          "Intervencoes em estruturas",
          "Instalacao e manutencao de sistemas",
          "Trabalhos em areas produtivas e de apoio",
        ],
      },
      {
        title: "Quando considerar uma plataforma tesoura na industria?",
        description:
          "Quando o ponto de trabalho pode ser acessado predominantemente na vertical, uma plataforma tesoura pode oferecer uma area elevada para operador, ferramentas e materiais. Tambem devem ser avaliadas as dimensoes da maquina, os acessos e o espaco disponivel para movimentacao.",
        cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
      },
      {
        title: "Quando considerar uma plataforma articulada?",
        description:
          "Em instalacoes industriais, nem sempre e possivel posicionar a maquina diretamente abaixo do ponto de execucao. Quando estruturas, equipamentos ou instalacoes criam obstaculos, uma plataforma articulada pode proporcionar o alcance horizontal necessario para acessar o local de trabalho.",
        cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
      },
      {
        title: "O que avaliar antes da locacao?",
        description: "Alem da altura de trabalho, informe a Accesslift:",
        items: [
          "Caracteristicas do acesso",
          "Obstaculos existentes",
          "Espaco disponivel",
          "Necessidade de alcance horizontal",
          "Condicoes do local",
          "Periodo de utilizacao",
        ],
      },
      {
        title: "Locacao com estrutura de suporte",
        description:
          "A Accesslift trabalha com locacoes diarias, semanais e mensais e possui estrutura propria para entrega e retirada dos equipamentos. Durante a locacao, o cliente tambem conta com assistencia tecnica propria e estrutura de suporte.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Plataformas Elevatorias para Industria",
      title: "Plataformas Elevatorias para Industria | Accesslift",
      description:
        "Plataformas elevatorias para trabalhos industriais em altura, manutencao, instalacoes e montagens. Consulte equipamentos para locacao.",
      canonicalPath: "/segmentos/industria/",
    },
    finalCta: {
      title: "Precisa de uma plataforma para uma operacao industrial?",
      description: "Conte onde sera realizado o trabalho, a altura aproximada e as caracteristicas do acesso.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    eyebrow: "Segmento",
    description:
      "Equipamentos para apoiar trabalhos em altura em diferentes etapas de obras, instalacoes, montagens e acabamentos.",
    heroCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    relatedSegmentSlug: "construcao-civil",
    sections: [
      {
        title: "Acesso elevado em diferentes etapas da construcao",
        description:
          "As necessidades de acesso em altura podem mudar ao longo de uma obra. Instalacoes, montagens, infraestrutura, acabamentos e outras atividades podem exigir equipamentos com diferentes alturas, dimensoes e formas de alcance. A escolha da plataforma deve acompanhar as caracteristicas da etapa e do ambiente onde sera utilizada.",
      },
      {
        title: "Aplicacoes na construcao civil",
        description: "Plataformas elevatorias podem ser consideradas para atividades como:",
        items: [
          "Instalacoes eletricas",
          "Instalacoes hidraulicas e infraestrutura",
          "Montagens",
          "Acabamentos",
          "Instalacao de sistemas",
          "Intervencoes em estruturas",
          "Trabalhos em fachadas, quando compativeis com o equipamento e as condicoes do local",
          "Manutencao e ajustes durante a execucao da obra",
        ],
      },
      {
        title: "Plataformas tesoura na construcao",
        description:
          "Quando existe acesso direto ao ponto de trabalho e a movimentacao necessaria e predominantemente vertical, plataformas tesoura podem atender diferentes atividades de instalacao, montagem e acabamento.",
        cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
      },
      {
        title: "Plataformas articuladas na construcao",
        description:
          "Quando o trabalho exige alcancar pontos que nao estao diretamente acima da maquina, a articulacao e o alcance horizontal podem facilitar o acesso sobre ou ao redor de obstaculos.",
        cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
      },
      {
        title: "A altura nao e o unico criterio",
        description: "Antes de definir o equipamento, devem ser considerados:",
        items: [
          "Altura necessaria",
          "Espaco de acesso",
          "Obstaculos",
          "Posicionamento possivel",
          "Condicoes do piso",
          "Capacidade necessaria",
          "Caracteristicas do ambiente e da etapa da obra",
        ],
      },
      {
        title: "Locacao para diferentes periodos da obra",
        description:
          "A Accesslift disponibiliza locacoes diarias, semanais e mensais, permitindo adequar o periodo de utilizacao ao cronograma do trabalho. A operacao conta ainda com entrega e retirada proprias e suporte tecnico Accesslift.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Plataformas Elevatorias para Construcao Civil",
      title: "Plataformas Elevatorias para Construcao Civil | Accesslift",
      description:
        "Plataformas elevatorias para construcao civil, instalacoes, montagens e trabalhos em altura. Consulte modelos tesoura e articulados para locacao.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
    finalCta: {
      title: "Sua obra precisa de acesso em altura?",
      description: "Informe cidade, periodo, altura aproximada e caracteristicas do trabalho.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    eyebrow: "Segmento",
    description:
      "Equipamentos para manutencao, instalacoes e intervencoes em altura em grandes ambientes comerciais.",
    heroCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    relatedSegmentSlug: "supermercados",
    sections: [
      {
        title: "Trabalhos em altura em grandes areas comerciais",
        description:
          "Supermercados e hipermercados possuem estruturas que podem demandar acesso elevado para diferentes atividades de manutencao e instalacao. Iluminacao, sistemas eletricos, comunicacao visual, infraestrutura e outros elementos podem estar instalados em pontos elevados. Ao mesmo tempo, corredores, acessos, estruturas existentes e circulacao precisam ser considerados na escolha do equipamento.",
      },
      {
        title: "Aplicacoes em supermercados e hipermercados",
        description: "Plataformas elevatorias podem apoiar atividades como:",
        items: [
          "Manutencao de iluminacao",
          "Instalacoes eletricas",
          "Manutencao de infraestrutura",
          "Instalacao e manutencao de comunicacao visual",
          "Intervencoes em estruturas",
          "Instalacoes e montagens",
          "Inspecoes e manutencoes em pontos elevados",
        ],
      },
      {
        title: "Plataforma tesoura para trabalhos verticais",
        description:
          "Quando o equipamento pode ser posicionado abaixo da area de execucao, uma plataforma tesoura pode atender atividades que exigem acesso predominantemente vertical. Dimensoes e capacidade devem ser avaliadas de acordo com corredores, acessos e espaco disponivel.",
        cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
      },
      {
        title: "Quando e necessario alcance horizontal",
        description:
          "Estruturas, equipamentos ou outras limitacoes podem impedir o posicionamento diretamente abaixo do ponto de trabalho. Nessas situacoes, uma plataforma articulada pode ser considerada para combinar elevacao e alcance horizontal.",
        cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
      },
      {
        title: "O acesso ao local e tao importante quanto a altura",
        description: "Antes da locacao, e importante considerar:",
        items: [
          "Altura do trabalho",
          "Largura e altura dos acessos",
          "Espaco para movimentacao",
          "Obstaculos existentes",
          "Posicionamento possivel",
          "Necessidade de alcance horizontal",
          "Caracteristicas do local",
        ],
      },
      {
        title: "Equipamento e suporte para a operacao",
        description:
          "A Accesslift disponibiliza plataformas para locacoes diarias, semanais e mensais, com entrega e retirada proprias dentro de sua area de atendimento. A estrutura inclui ainda assistencia tecnica propria e suporte durante a locacao.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Plataformas Elevatorias para Supermercados e Hipermercados",
      title: "Plataformas Elevatorias para Supermercados | Accesslift",
      description:
        "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em supermercados e hipermercados. Consulte opcoes para locacao.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
    },
    finalCta: {
      title: "Precisa realizar um trabalho em altura em sua unidade?",
      description: "Informe cidade, altura aproximada, periodo e caracteristicas do local.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
  },
  {
    path: "/segmentos/atacados/",
    eyebrow: "Segmento",
    description:
      "Equipamentos para trabalhos em altura em grandes instalacoes atacadistas, operacoes de manutencao, infraestrutura e montagem.",
    heroCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    relatedSegmentSlug: "atacados",
    sections: [
      {
        title: "Acesso elevado em instalacoes de grande porte",
        description:
          "Ambientes atacadistas podem reunir grandes areas de operacao, estruturas elevadas, sistemas de iluminacao, instalacoes eletricas, comunicacao visual e diferentes elementos de infraestrutura. Trabalhos nesses pontos exigem que altura, circulacao, obstaculos e posicionamento sejam considerados na escolha da plataforma.",
      },
      {
        title: "Aplicacoes em ambientes atacadistas",
        description: "Dependendo das condicoes do local, plataformas elevatorias podem ser utilizadas como apoio em:",
        items: [
          "Manutencao de iluminacao",
          "Instalacoes eletricas",
          "Manutencao de infraestrutura",
          "Comunicacao visual",
          "Inspecoes",
          "Montagens",
          "Manutencao de estruturas e instalacoes elevadas",
        ],
      },
      {
        title: "Quando considerar uma plataforma tesoura?",
        description:
          "Para pontos de trabalho acessiveis verticalmente, plataformas tesoura podem oferecer area elevada para operador, ferramentas e materiais. As dimensoes do equipamento devem ser compativeis com acessos, corredores e espaco de movimentacao.",
        cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
      },
      {
        title: "Quando considerar uma plataforma articulada?",
        description:
          "Quando existem obstaculos ou o ponto de execucao exige alcance lateral, plataformas articuladas permitem combinar elevacao e alcance horizontal.",
        cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
      },
      {
        title: "Informacoes que ajudam na escolha do equipamento",
        description: "Antes de solicitar a plataforma, procure identificar:",
        items: [
          "Altura aproximada",
          "Local da atividade",
          "Acessos disponiveis",
          "Obstaculos",
          "Espaco de movimentacao",
          "Periodo de utilizacao",
          "Necessidade de alcance horizontal",
        ],
      },
      {
        title: "Locacao diaria, semanal ou mensal",
        description:
          "O periodo pode ser definido de acordo com a duracao da atividade, com entrega e retirada proprias e suporte tecnico durante a locacao.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    seo: {
      h1: "Plataformas Elevatorias para Atacados",
      title: "Plataformas Elevatorias para Atacados | Accesslift",
      description:
        "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em atacados. Conheca opcoes tesoura e articuladas para locacao.",
      canonicalPath: "/segmentos/atacados/",
    },
    finalCta: {
      title: "Precisa de uma plataforma elevatoria para sua operacao?",
      description:
        "Conte para a Accesslift onde sera realizado o trabalho e quais sao as principais caracteristicas da necessidade.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
  },
];

export const coveragePageConfig: CoveragePageConfig = {
  path: "/area-de-atendimento/",
  eyebrow: "Area de atendimento",
  description:
    "Atendimento a operacoes em Sao Paulo e municipios dentro de um raio de ate 150 km da base Accesslift, conforme disponibilidade e condicoes da operacao.",
  heroPrimaryCta: { label: "Consultar atendimento na minha cidade", href: "#consultar-cidade" },
  heroSecondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
  sections: [
    {
      title: "Atendimento em um raio de ate 150 km",
      description:
        "A Accesslift atende empresas em Sao Paulo e municipios localizados em um raio de ate 150 km de sua base. A disponibilidade para determinada localidade pode variar de acordo com equipamento, periodo, logistica e condicoes da operacao. Por isso, mesmo que sua cidade esteja dentro da regiao atendida, recomendamos confirmar a disponibilidade para a data e o equipamento necessarios.",
    },
    {
      title: "Atendimento em Sao Paulo e municipios da regiao",
      description:
        "A Accesslift atende Sao Paulo e diferentes municipios dentro de sua area operacional de ate 150 km da base. A cobertura exata deve ser confirmada conforme endereco da operacao, equipamento e disponibilidade.",
    },
    {
      title: "Plataformas tesoura e articuladas",
      description:
        "A area de atendimento contempla a operacao de locacao da frota Accesslift, composta por plataformas eletricas tesoura e articuladas de diferentes alturas, dimensoes e capacidades.",
      cta: { label: "Ver equipamentos", href: "/equipamentos/" },
    },
    {
      title: "O que informar para consultar uma locacao?",
      description: "Para agilizar a avaliacao, informe:",
      items: [
        "Cidade e local da operacao",
        "Altura aproximada do trabalho",
        "Periodo desejado",
        "Tipo de acesso",
        "Existencia de obstaculos",
        "Plataforma desejada, caso ja saiba o modelo",
      ],
    },
  ],
  serviceHighlights: [
    {
      title: "Entrega propria",
      description: "Logistica dos equipamentos conforme condicoes definidas para a locacao.",
    },
    {
      title: "Retirada propria",
      description: "Retirada ao termino do periodo conforme programacao acordada.",
    },
    {
      title: "Assistencia tecnica propria",
      description: "Suporte tecnico integrado a operacao dos equipamentos Accesslift.",
    },
    {
      title: "Atendimento emergencial",
      description: "Recebimento e avaliacao de ocorrencias durante a locacao.",
    },
  ],
  requestChecklist: [
    "Cidade e local da operacao",
    "Altura aproximada do trabalho",
    "Periodo desejado",
    "Tipo de acesso",
    "Existencia de obstaculos",
    "Plataforma desejada, caso ja saiba o modelo",
  ],
  referenceCities: [
    "Sao Paulo",
    "Guarulhos",
    "Mogi das Cruzes",
    "Itaquaquecetuba",
    "Poa",
    "Santo Andre",
    "Sao Bernardo do Campo",
    "Osasco",
    "Barueri",
    "Cotia",
  ],
  faqTitle: "Duvidas sobre a area de atendimento",
  faq: [
    {
      question: "A Accesslift atende somente a cidade de Sao Paulo?",
      answer:
        "Nao. A operacao contempla Sao Paulo e municipios dentro de um raio de ate 150 km da base, conforme disponibilidade e condicoes da locacao.",
    },
    {
      question: "Como saber se minha cidade e atendida?",
      answer:
        "Informe a cidade ou endereco da operacao para que a equipe confirme a disponibilidade e as condicoes de atendimento.",
    },
    {
      question: "A Accesslift entrega a plataforma no local?",
      answer:
        "A Accesslift possui estrutura propria para entrega e retirada dos equipamentos dentro de sua area de atendimento, conforme as condicoes acordadas.",
    },
    {
      question: "Ha suporte tecnico fora da cidade de Sao Paulo?",
      answer:
        "O suporte esta integrado a operacao de locacao e deve ser avaliado conforme localidade e situacao do equipamento.",
    },
    {
      question: "Posso solicitar orcamento mesmo sem saber qual plataforma preciso?",
      answer:
        "Sim. Informe a altura aproximada e as caracteristicas do trabalho para que a equipe possa auxiliar na escolha.",
    },
  ],
  seo: {
    h1: "Locacao de Plataformas Elevatorias em Sao Paulo e Regiao",
    title: "Locacao de Plataformas Elevatorias em Sao Paulo | Accesslift",
    description:
      "Locacao de plataformas elevatorias em Sao Paulo e regiao, com atendimento em um raio de ate 150 km da base Accesslift. Consulte sua cidade.",
    canonicalPath: "/area-de-atendimento/",
  },
  finalCta: {
    title: "Consulte a disponibilidade para sua regiao",
    description: "Informe onde sera realizado o trabalho e as caracteristicas da operacao.",
    primary: { label: "Consultar minha cidade", href: "#consultar-cidade" },
    secondary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
  },
};

export const findCommercialPage = (path: string) =>
  commercialPages.find((page) => page.path === path);

export const findServicePage = (path: string) =>
  servicePages.find((page) => page.path === path);

export const findSegmentPage = (path: string) =>
  segmentPages.find((page) => page.path === path);

export const findCoveragePage = (path: string) =>
  path === coveragePageConfig.path ? coveragePageConfig : undefined;
