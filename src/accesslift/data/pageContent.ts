import type { EquipmentCategorySlug } from "../types/equipment";
import type { PageSeo } from "../types/routes";

export type FaqItem = {
  question: string;
  answer: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ContentItem = {
  title: string;
  description: string;
  cta?: CtaLink;
};

export type ContentSection = {
  title: string;
  description?: string;
  eyebrow?: string;
  items?: Array<string | ContentItem>;
  cta?: CtaLink;
};

export type FinalCtaConfig = {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

export type CommercialPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  supportItems?: string[];
  valueProposition: string;
  benefits: string[];
  process: string[];
  relatedCategories: EquipmentCategorySlug[];
  contentSections?: ContentSection[];
  faq: FaqItem[];
  faqSchemaEligible?: boolean;
  finalCta?: FinalCtaConfig;
  seo: PageSeo & { h1: string };
};

export type ServicePageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  supportItems?: string[];
  problem: string;
  proposal: string;
  benefits: string[];
  process: string[];
  applications: string[];
  relatedCategories: EquipmentCategorySlug[];
  contentSections?: ContentSection[];
  faq: FaqItem[];
  faqSchemaEligible?: boolean;
  finalCta?: FinalCtaConfig;
  seo: PageSeo & { h1: string };
};

export type SegmentPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  supportItems?: string[];
  context: string;
  needs: string[];
  solutions: string[];
  applications: string[];
  differentials: string[];
  relatedCategories: EquipmentCategorySlug[];
  contentSections?: ContentSection[];
  faq: FaqItem[];
  faqSchemaEligible?: boolean;
  finalCta?: FinalCtaConfig;
  seo: PageSeo & { h1: string };
};

const placeholderFaq: FaqItem[] = [
  {
    question: "Como validar o equipamento ideal?",
    answer:
      "A resposta deve considerar ambiente, acesso, altura, operação e dados técnicos oficiais do equipamento. Está estrutura está pronta para receber conteúdo validado.",
  },
  {
    question: "Os dados técnicos já estão publicados?",
    answer:
      "Ainda não. As páginas estão preparadas para receber dados reais, PDFs, imagens e informações comerciais definitivas.",
  },
];

export const commercialPages: CommercialPageConfig[] = [
  {
    path: "/plataformas-elevatorias/",
    eyebrow: "Plataformas elevatórias",
    title: "Plataformas Elevatórias para Trabalhos em Altura",
    description:
      "Equipamentos desenvolvidos para proporcionar acesso elevado em diferentes atividades de manutenção, instalação, construção e operações industriais e comerciais.",
    primaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    secondaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    valueProposition:
      "Uma plataforma elevatória permite posicionar operadores, ferramentas e materiais em pontos elevados para a execução de diferentes tipos de trabalho.",
    benefits: [
      "Plataformas tesoura para acessos predominantemente verticais",
      "Plataformas articuladas para altura com alcance horizontal",
      "Frota elétrica com marcas JLG, Genie, Skyjack e Zoomlion",
    ],
    process: ["Avaliar altura de trabalho", "Verificar alcance horizontal", "Checar espaço e acessos", "Considerar capacidade", "Solicitar orientação"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "O que é",
        title: "O que é uma plataforma elevatória?",
        description: "Existem equipamentos com características distintas de altura, capacidade, dimensões e movimentação. A escolha deve considerar não apenas a altura que se pretende alcançar, mas também as condições de acesso ao ponto de trabalho. Entre as principais famílias disponibilizadas pela Accesslift estão as plataformas tesoura e as plataformas articuladas.",
      },
      {
        eyebrow: "Tesoura x articulada",
        title: "Plataforma tesoura ou articulada: qual escolher?",
        items: [
          {
            title: "Plataforma Tesoura",
            description: "A movimentação é predominantemente vertical. É indicada quando o ponto de trabalho pode ser alcançado diretamente acima da posição do equipamento, existe espaço adequado para posicionamento e é desejável uma área de plataforma para operador, ferramentas e materiais.",
            cta: { label: "Conhecer plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataforma Articulada",
            description: "Combina elevação com alcance horizontal. A estrutura articulada permite acessar pontos que não estão diretamente acima da base do equipamento, especialmente quando existem obstáculos ou necessidade de alcance lateral.",
            cta: { label: "Conhecer plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Como escolher",
        title: "O que considerar na escolha de uma plataforma elevatória?",
        items: [
          { title: "Altura de trabalho", description: "A altura necessária para executar a atividade é um dos primeiros critérios para selecionar o equipamento." },
          { title: "Alcance horizontal", description: "Em algumas operações não basta subir verticalmente. É necessário alcançar o ponto de trabalho lateralmente ou superar obstáculos." },
          { title: "Espaço disponível", description: "Largura de acessos, corredores, portas e espaço para manobra podem limitar os equipamentos adequados." },
          { title: "Capacidade da plataforma", description: "É importante considerar operadores, ferramentas e materiais que permanecerão na plataforma durante o trabalho." },
          { title: "Condições do local", description: "Ambiente, piso, acesso e demais características da operação também devem fazer parte da avaliação." },
        ],
        cta: { label: "Preciso de ajuda para escolher", href: "/solicite-orcamento/" },
      },
      {
        eyebrow: "Frota",
        title: "Frota elétrica para diferentes aplicações",
        description: "A frota atual da Accesslift reúne plataformas elétricas das categorias tesoura e articulada, com diferentes dimensões, alturas de trabalho e capacidades. A escolha do modelo deve ser realizada de acordo com a aplicação e as condições do local. Marcas da frota: JLG, Genie, Skyjack e Zoomlion.",
        cta: { label: "Ver todos os equipamentos", href: "/equipamentos/" },
      },
      {
        eyebrow: "Locação",
        title: "Plataformas elevatórias para locação",
        description: "A Accesslift disponibiliza equipamentos para locações diárias, semanais e mensais, com entrega e retirada próprias e suporte técnico durante a operação.",
        cta: { label: "Conhecer a locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    finalCta: {
      title: "Encontre a plataforma adequada a sua operação",
      description: "Compare os modelos disponíveis ou fale com a Accesslift para receber auxílio na escolha.",
      primary: { label: "Ver equipamentos", href: "/equipamentos/" },
      secondary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Trabalhos em Altura",
      title: "Plataformas Elevatórias: Tesoura e Articulada | Accesslift",
      description: "Conheça plataformas elevatórias tesoura e articuladas, entenda suas aplicações e encontre equipamentos para trabalhos em altura.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas-elevatorias/",
    eyebrow: "Locação",
    title: "Locação de Plataformas Elevatórias",
    description:
      "Equipamentos para trabalhos em altura com opções de locação diária, semanal ou mensal, entrega e retirada próprias e suporte técnico da Accesslift em São Paulo e região.",
    primaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    secondaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    supportItems: [
      "Plataformas Tesoura e Articuladas",
      "Locação diária, semanal e mensal",
      "Entrega e retirada próprias",
      "Assistência técnica própria",
    ],
    valueProposition:
      "Cada trabalho em altura apresenta condições diferentes. Altura necessária, espaço disponível, características do piso, obstáculos e necessidade de alcance horizontal são alguns dos fatores que devem ser considerados na escolha da plataforma.",
    benefits: [
      "Escolha orientada pela necessidade da operação",
      "Equipamentos relacionados vindos do catálogo central",
      "Orçamento personalizado conforme período, local e modelo",
    ],
    process: ["Conte sobre o trabalho", "Identificamos as opções", "Definimos a locação", "Entrega do equipamento", "Suporte durante a operação"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Escolha",
        title: "Uma locação que começa pela escolha do equipamento",
        description: "Por isso, a Accesslift não trabalha apenas com a disponibilização do equipamento. Nossa equipe auxilia na identificação da plataforma mais adequada às características da operação. Para trabalhos predominantemente verticais, uma plataforma tesoura pode ser a alternativa mais adequada. Quando o ponto de trabalho exige alcance horizontal ou acesso sobre obstáculos, uma plataforma articulada pode atender melhor à necessidade.",
        cta: { label: "Conhecer os tipos de plataforma", href: "/plataformas-elevatorias/" },
      },
      {
        eyebrow: "Modalidades",
        title: "Locação pelo período que sua operação precisa",
        description: "A Accesslift disponibiliza diferentes períodos de locação para adequar o equipamento ao cronograma de cada trabalho.",
        items: [
          { title: "Locação diária", description: "Para atividades pontuais e operações que precisam do equipamento por períodos mais curtos." },
          { title: "Locação semanal", description: "Uma alternativa para serviços com vários dias de execução ou cronogramas que exigem maior disponibilidade do equipamento." },
          { title: "Locação mensal", description: "Indicada para operações contínuas, obras, manutenções e projetos com necessidade prolongada de acesso em altura." },
        ],
      },
      {
        eyebrow: "Tipos",
        title: "Plataformas tesoura e articuladas para locação",
        items: [
          {
            title: "Plataformas Tesoura",
            description: "Projetadas para elevação predominantemente vertical, as plataformas tesoura oferecem área de trabalho para operador, ferramentas e materiais e atendem diferentes atividades de manutenção, instalação, montagem e construção.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataformas Articuladas",
            description: "Além da elevação, as plataformas articuladas permitem alcance horizontal e acesso a pontos de trabalho que exigem movimentação sobre ou ao redor de obstáculos.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Suporte",
        title: "Suporte que acompanha a locação",
        description: "Uma plataforma parada pode afetar o andamento de uma operação. Por isso, a estrutura da Accesslift vai além da entrega do equipamento. A empresa conta com entrega e retirada próprias, assistência técnica própria, manutenção preventiva, atendimento emergencial e treinamento de operadores.",
        cta: { label: "Conhecer nossos serviços", href: "/servicos/" },
      },
      {
        eyebrow: "Quanto custa",
        title: "Quanto custa alugar uma plataforma elevatória?",
        description: "O valor da locação depende de fatores como modelo do equipamento, altura de trabalho, período de utilização, local de entrega e características da operação. Por esse motivo, a Accesslift trabalha com orçamento de acordo com cada necessidade, em vez de utilizar um preço único para todos os projetos.",
        cta: { label: "Solicitar cotação", href: "/solicite-orcamento/" },
      },
      {
        eyebrow: "Área de atendimento",
        title: "Locação de plataformas elevatórias em São Paulo e região",
        description: "A Accesslift atende São Paulo e municípios dentro de um raio de até 150 km de sua base, conforme disponibilidade e condições da operação.",
        cta: { label: "Consultar área de atendimento", href: "/area-de-atendimento/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma elevatória devo alugar?",
        answer: "A escolha depende da altura, do tipo de acesso, do espaço disponível, dos obstáculos existentes e das características da operação. A equipe Accesslift pode auxiliar na identificação das opções adequadas.",
      },
      {
        question: "A Accesslift trabalha com locação diária?",
        answer: "Sim. Há opções de locação diária, semanal e mensal, conforme a necessidade da operação.",
      },
      {
        question: "Qual a diferença entre plataforma tesoura e articulada?",
        answer: "A plataforma tesoura e voltada principalmente a elevação vertical. A articulada também oferece alcance horizontal, facilitando o acesso a pontos sobre ou ao redor de obstáculos.",
      },
      {
        question: "A Accesslift realiza a entrega do equipamento?",
        answer: "Sim. A Accesslift possui estrutura própria para entrega e retirada dentro de sua área de atendimento, conforme as condições da locação.",
      },
      {
        question: "Há suporte técnico durante a locação?",
        answer: "Sim. A assistência técnica própria faz parte da estrutura de suporte da Accesslift.",
      },
      {
        question: "Não sei qual equipamento preciso. Posso solicitar orçamento mesmo assim?",
        answer: "Sim. No formulário de orçamento, o cliente pode informar a necessidade da operação mesmo sem definir previamente o modelo da plataforma.",
      },
    ],
    faqSchemaEligible: true,
    finalCta: {
      title: "Precisa alugar uma plataforma elevatória?",
      description: "Conte para a Accesslift onde será realizado o trabalho, a altura aproximada e o período de utilização.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Locação de Plataformas Elevatórias",
      title: "Locação de Plataformas Elevatórias | Accesslift",
      description: "Locação de plataformas elevatórias tesoura e articuladas em São Paulo. Diárias, semanais ou mensais, com entrega própria e suporte técnico.",
      canonicalPath: "/locacao-de-plataformas-elevatorias/",
    },
  },
  {
    path: "/venda-de-plataformas/",
    eyebrow: "Venda",
    title: "Venda de plataformas elevatórias",
    description:
      "Página preparada para atendimento comercial de venda de plataformas elevatórias.",
    valueProposition:
      "Estrutura para apresentar equipamentos, suporte comercial e caminho de contato sem inventar oferta definitiva.",
    benefits: [
      "Base pronta para catálogo administrável",
      "Campos preparados para ficha técnica",
      "Contato comercial orientado a conversão",
    ],
    process: ["Interesse", "Analise de necessidade", "Consulta ao catálogo", "Contato comercial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Venda de plataformas elevatórias",
      title: "Venda de plataformas elevatórias | Accesslift",
      description: "Venda de plataformas elevatórias com atendimento comercial especializado.",
      canonicalPath: "/venda-de-plataformas/",
      indexDirective: "noindex",
    },
  },
];

export const servicePages: ServicePageConfig[] = [
  {
    path: "/servicos/",
    eyebrow: "Serviços",
    title: "Serviços e Suporte para Plataformas Elevatórias",
    description: "Estrutura para apoiar a operação antes, durante e após a entrega dos equipamentos.",
    primaryCta: { label: "Falar com a Accesslift", href: "/contato/" },
    secondaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    problem: "A locação não termina quando a plataforma é entregue. A operação precisa de suporte para manter disponibilidade, orientação e atendimento quando surgem necessidades técnicas.",
    proposal: "A Accesslift integra entrega, retirada, assistência técnica, manutenção preventiva, atendimento a ocorrências e treinamento de operadores na mesma estrutura de locação.",
    benefits: ["Entrega e retirada próprias", "Assistência técnica própria", "Manutenção preventiva", "Treinamento de operadores"],
    process: ["Entender a operação", "Selecionar equipamento", "Programar entrega", "Acompanhar a locação", "Retirar ao final"],
    applications: ["Locação de plataformas", "Suporte durante operação", "Treinamento e orientação"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Suporte",
        title: "Suporte que acompanha a operação",
        description: "A locação não termina quando a plataforma é entregue. Durante o período de uso, a Accesslift mantém uma estrutura de suporte para acompanhar necessidades relacionadas ao equipamento e à operação.",
      },
      {
        eyebrow: "Estrutura",
        title: "Serviços integrados à locação",
        items: [
          {
            title: "Entrega e retirada próprias",
            description: "Movimentação dos equipamentos dentro da área de atendimento, conforme as condições definidas para a locação.",
            cta: { label: "Consultar área de atendimento", href: "/area-de-atendimento/" },
          },
          {
            title: "Assistência técnica própria",
            description: "Suporte técnico para avaliação e intervenção quando surgirem necessidades durante a locação.",
            cta: { label: "Conhecer assistência técnica", href: "/servicos/assistencia-tecnica/" },
          },
          {
            title: "Atendimento emergencial",
            description: "Recebimento e avaliação de ocorrências que podem impactar a continuidade da operação.",
            cta: { label: "Solicitar suporte", href: "/servicos/assistencia-tecnica/" },
          },
          {
            title: "Manutenção preventiva",
            description: "Cuidados técnicos voltados a preparar os equipamentos e reduzir a possibilidade de problemas durante o uso.",
            cta: { label: "Ver manutenção preventiva", href: "/servicos/manutencao-preventiva/" },
          },
          {
            title: "Treinamento de operadores",
            description: "Orientação sobre equipamento, comandos, limites e cuidados relacionados à utilização da plataforma.",
            cta: { label: "Ver treinamento", href: "/servicos/treinamento-de-operadores/" },
          },
          {
            title: "Segurança e NR-35",
            description: "Conteúdo de apoio sobre planejamento, capacitação e requisitos aplicáveis ao trabalho em altura.",
            cta: { label: "Entender segurança", href: "/seguranca-e-nr35/" },
          },
        ],
      },
    ],
    faq: [
      {
        question: "A Accesslift oferece suporte durante a locação?",
        answer: "Sim. A estrutura de suporte acompanha os equipamentos da operação Accesslift durante a locação.",
      },
      {
        question: "A entrega e retirada são próprias?",
        answer: "A Accesslift possui estrutura própria para entrega e retirada dentro da área de atendimento, conforme condições da locação.",
      },
      {
        question: "Há atendimento emergencial?",
        answer: "A Accesslift recebe e avalia ocorrências durante a locação. O atendimento depende da situação, equipamento e localidade.",
      },
      {
        question: "O treinamento substitui NR-35?",
        answer: "Não. Treinamento de operador e NR-35 possuem objetivos e escopos diferentes.",
      },
    ],
    finalCta: {
      title: "Precisa de locação ou suporte técnico?",
      description: "Fale com a equipe Accesslift para informar sua necessidade.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
      secondary: { label: "Entrar em contato", href: "/contato/" },
    },
    seo: {
      h1: "Serviços e Suporte para Plataformas Elevatórias",
      title: "Serviços para Plataformas Elevatórias | Accesslift",
      description: "Conheça a estrutura de suporte Accesslift: assistência técnica própria, manutenção preventiva, atendimento emergencial e treinamento de operadores.",
      canonicalPath: "/servicos/",
    },
  },
  {
    path: "/servicos/entrega-e-retirada/",
    eyebrow: "Serviço",
    title: "Entrega e retirada",
    description: "Template preparado para explicar o serviço de entrega e retirada.",
    problem: "A logística do equipamento precisa ser planejada junto com a operação.",
    proposal: "Estrutura para detalhar fluxo, responsabilidades e pontos de contato quando os dados reais forem definidos.",
    benefits: ["Planejamento logístico", "Fluxo claro de atendimento", "Integração com orçamento"],
    process: ["Solicitação", "Confirmação", "Entrega", "Retirada"],
    applications: ["Obras", "Indústria", "Operações comerciais"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Entrega e retirada de plataformas elevatórias",
      title: "Entrega e retirada de plataformas | Accesslift",
      description: "Serviço de entrega e retirada para plataformas elevatórias.",
      canonicalPath: "/servicos/entrega-e-retirada/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    eyebrow: "Serviço",
    title: "Assistência Técnica para Plataformas Elevatórias",
    description: "Suporte técnico próprio para acompanhar os equipamentos da operação Accesslift e atender necessidades durante a locação.",
    primaryCta: { label: "Solicitar suporte técnico", href: "/servicos/assistencia-tecnica/" },
    secondaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    problem: "Durante uma locação, situações técnicas precisam ser avaliadas com clareza para reduzir impacto na operação.",
    proposal: "A assistência técnica própria da Accesslift atua integrada aos equipamentos em locação, com avaliação caso a caso.",
    benefits: ["Avaliação de ocorrências", "Orientação relacionada ao equipamento", "Intervenção técnica quando necessária", "Suporte durante locação"],
    process: ["Receber solicitação", "Identificar equipamento", "Avaliar ocorrência", "Direcionar suporte"],
    applications: ["Equipamentos Accesslift em locação", "Ocorrências técnicas", "Orientação operacional"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Suporte",
        title: "Suporte técnico integrado à locação",
        description: "A assistência técnica própria acompanha necessidades relacionadas aos equipamentos da operação Accesslift durante a locação. Cada solicitação é avaliada conforme o equipamento, a situação informada e as condições da operação.",
      },
      {
        eyebrow: "Atendimento",
        title: "Atendimento para diferentes necessidades",
        items: [
          "Avaliação de ocorrências técnicas",
          "Orientação relacionada ao equipamento",
          "Intervenção técnica quando necessária",
          "Suporte durante a locação",
          "Manutenção dos equipamentos da operação Accesslift",
          "Recebimento e avaliação de solicitações emergenciais",
        ],
      },
      {
        eyebrow: "Emergencial",
        title: "Precisa de suporte durante uma locação?",
        description: "Em caso de ocorrência, informe o modelo da plataforma, local da operação e descrição da situação. As solicitações emergenciais são recebidas e avaliadas de acordo com o caso.",
      },
      {
        eyebrow: "Marcas",
        title: "Marcas atendidas na operação Accesslift",
        description: "O escopo deve ser confirmado conforme o equipamento e sua relação com a operação Accesslift.",
        items: ["JLG", "Genie", "Skyjack", "Zoomlion"],
      },
      {
        eyebrow: "Locação",
        title: "Locação com suporte técnico",
        description: "Equipamento e suporte fazem parte da mesma estrutura operacional da Accesslift.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "A Accesslift possui assistência técnica própria?",
        answer: "Sim. A Accesslift possui equipe técnica integrada à operação dos equipamentos em locação.",
      },
      {
        question: "Há suporte durante a locação?",
        answer: "Sim. O suporte acompanha a locação de equipamentos Accesslift conforme a necessidade informada.",
      },
      {
        question: "A Accesslift oferece atendimento emergencial?",
        answer: "A Accesslift recebe e avalia solicitações emergenciais conforme situação, localidade e equipamento.",
      },
      {
        question: "A assistência atende equipamentos de terceiros?",
        answer: "O escopo deve ser consultado com a equipe Accesslift, pois depende do equipamento e da relação com a operação.",
      },
    ],
    finalCta: {
      title: "Precisa de assistência?",
      description: "Envie as informações do equipamento e da ocorrência para avaliação da equipe Accesslift.",
      primary: { label: "Solicitar suporte técnico", href: "/servicos/assistencia-tecnica/" },
      secondary: { label: "Entrar em contato", href: "/contato/" },
    },
    seo: {
      h1: "Assistência Técnica para Plataformas Elevatórias",
      title: "Assistência Técnica de Plataformas Elevatórias | Accesslift",
      description: "Assistência técnica própria para plataformas elevatórias da operação Accesslift, com suporte durante a locação e atendimento a ocorrências técnicas.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    eyebrow: "Serviço",
    title: "Manutenção Preventiva de Plataformas Elevatórias",
    description: "Cuidados técnicos fazem parte da preparação e acompanhamento dos equipamentos utilizados nas operações Accesslift.",
    primaryCta: { label: "Falar com a Accesslift", href: "/contato/" },
    secondaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    problem: "Plataformas elevatórias possuem sistemas e componentes que dependem de cuidados técnicos para manter disponibilidade e reduzir problemas durante a operação.",
    proposal: "A manutenção preventiva faz parte da estrutura Accesslift para preparar e acompanhar os equipamentos da frota.",
    benefits: ["Identificação de necessidades de intervenção", "Cuidados antes da operação", "Acompanhamento da frota", "Suporte integrado à locação"],
    process: ["Preparar equipamento", "Realizar verificações", "Registrar necessidades", "Acompanhar a locação"],
    applications: ["Frota Accesslift", "Locação", "Suporte técnico"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Importância",
        title: "Por que manutenção preventiva é importante?",
        description: "A manutenção preventiva ajuda a identificar necessidades de intervenção e cuidados antes que uma ocorrência afete a operação. Os procedimentos devem respeitar as especificações técnicas de cada equipamento.",
      },
      {
        eyebrow: "Escopo",
        title: "O que envolve a manutenção?",
        description: "As verificações e intervenções seguem orientação técnica, e a periodicidade não deve ser tratada como igual para todos os modelos sem validação específica.",
      },
      {
        eyebrow: "Diferenças",
        title: "Preventiva, corretiva e assistência",
        items: [
          "Preventiva: cuidados planejados para preparação e acompanhamento do equipamento.",
          "Corretiva: intervenção quando uma necessidade técnica é identificada.",
          "Assistência técnica: suporte durante a locação, conforme a solicitação e as condições da operação.",
        ],
      },
      {
        eyebrow: "Locação",
        title: "Manutenção integrada à locação",
        description: "A estrutura de manutenção faz parte do cuidado com os equipamentos utilizados nas operações Accesslift.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
      {
        eyebrow: "Equipamentos",
        title: "Frota acompanhada",
        description: "A frota Accesslift reúne plataformas JLG, Genie, Skyjack e Zoomlion, com diferentes alturas, dimensões e capacidades.",
        cta: { label: "Ver equipamentos", href: "/equipamentos/" },
      },
    ],
    faq: [
      {
        question: "O que é manutenção preventiva?",
        answer: "É o conjunto de cuidados técnicos voltados a preparar e acompanhar o equipamento, identificando necessidades antes que afetem a operação.",
      },
      {
        question: "Preventiva e corretiva são a mesma coisa?",
        answer: "Não. A preventiva busca antecipar cuidados, enquanto a corretiva trata uma necessidade técnica já identificada.",
      },
      {
        question: "Todos os equipamentos seguem o mesmo intervalo?",
        answer: "Não. Periodicidade e procedimentos dependem das especificações e condições de cada equipamento.",
      },
      {
        question: "A manutenção faz parte da estrutura Accesslift?",
        answer: "Sim. A Accesslift possui suporte e manutenção própria para sua operação.",
      },
    ],
    finalCta: {
      title: "Precisa falar sobre manutenção ou suporte?",
      description: "Entre em contato para informar sua necessidade.",
      primary: { label: "Entrar em contato", href: "/contato/" },
      secondary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Manutenção Preventiva de Plataformas Elevatórias",
      title: "Manutenção de Plataformas Elevatórias | Accesslift",
      description: "Conheça a estrutura de manutenção preventiva da Accesslift para plataformas elevatórias e sua integração com a operação de locação.",
      canonicalPath: "/servicos/manutencao-preventiva/",
    },
  },
  {
    path: "/servicos/atendimento-emergencial/",
    eyebrow: "Serviço",
    title: "Atendimento emergencial",
    description: "Template para demandas urgentes de atendimento.",
    problem: "Algumas operações precisam de resposta rápida e orientação clara.",
    proposal: "Página preparada para explicar acionamento e fluxo quando os dados reais forem definidos.",
    benefits: ["Canal de conversão", "Fluxo objetivo", "Base para regras operacionais"],
    process: ["Acionamento", "Triagem", "Direcionamento", "Acompanhamento"],
    applications: ["Operação em andamento", "Locação", "Suporte comercial"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    faq: placeholderFaq,
    seo: {
      h1: "Atendimento emergencial para plataformas elevatórias",
      title: "Atendimento emergencial | Accesslift",
      description: "Atendimento emergencial para demandas de plataformas elevatórias.",
      canonicalPath: "/servicos/atendimento-emergencial/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/treinamento-de-operadores/",
    eyebrow: "Serviço",
    title: "Treinamento para Operadores de Plataformas Elevatórias",
    description: "Orientação voltada ao conhecimento do equipamento, seus comandos, limites e cuidados relacionados à utilização da plataforma.",
    primaryCta: { label: "Solicitar informações", href: "/contato/" },
    secondaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    problem: "Operadores precisam conhecer o equipamento, seus controles, limites e cuidados antes da utilização.",
    proposal: "O treinamento de operadores da Accesslift orienta sobre características e uso da plataforma, sem ser apresentado como substituto automático de requisitos da NR-35.",
    benefits: ["Identificação do equipamento", "Comandos e controles", "Limites e cuidados", "Diferenças entre tesoura e articulada"],
    process: ["Entender necessidade", "Identificar equipamento", "Orientar operador", "Acompanhar a operação"],
    applications: ["Plataformas tesoura", "Plataformas articuladas", "Locação Accesslift"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Operação",
        title: "Conhecer o equipamento faz parte da operação",
        description: "Cada plataforma possui características, comandos e limites próprios. A orientação ao operador ajuda a alinhar uso do equipamento, cuidados e condições da atividade.",
      },
      {
        eyebrow: "Conteúdo",
        title: "O que é abordado no treinamento?",
        description: "O conteúdo deve ser alinhado à necessidade e ao equipamento utilizado.",
        items: [
          "Identificação e características do equipamento",
          "Comandos e controles",
          "Limites de utilização",
          "Verificações e cuidados antes do uso",
          "Cuidados durante a operação",
          "Características de plataformas tesoura e articuladas",
          "Orientações aplicáveis à operação",
        ],
      },
      {
        eyebrow: "Equipamentos",
        title: "Treinamento para tesoura e articuladas",
        description: "As diferenças entre os tipos de plataforma influenciam a orientação de operação.",
        cta: { label: "Conhecer plataformas elevatórias", href: "/plataformas-elevatorias/" },
      },
      {
        eyebrow: "NR-35",
        title: "Treinamento de operador e NR-35 não são a mesma coisa",
        description: "O treinamento relacionado à plataforma elevatória tem foco no conhecimento e utilização do equipamento. A NR-35 possui escopo próprio relacionado ao trabalho em altura, e a empresa responsável pela atividade deve avaliar os requisitos aplicáveis.",
        cta: { label: "Entender segurança e NR-35", href: "/seguranca-e-nr35/" },
      },
      {
        eyebrow: "Locação",
        title: "Orientação integrada à locação",
        description: "A Accesslift combina equipamento, orientação e suporte para acompanhar a utilização das plataformas em suas locações.",
        cta: { label: "Solicitar informações", href: "/contato/" },
      },
    ],
    faq: [
      {
        question: "A Accesslift oferece treinamento de operadores?",
        answer: "Sim. A Accesslift pode orientar operadores quanto ao equipamento, comandos, limites e cuidados de utilização.",
      },
      {
        question: "O treinamento aborda plataformas tesoura e articuladas?",
        answer: "Sim. O conteúdo considera as características do equipamento utilizado na operação.",
      },
      {
        question: "Treinamento de operador substitui NR-35?",
        answer: "Não. Treinamento de operador e NR-35 possuem objetivos e escopos diferentes.",
      },
      {
        question: "Como solicitar informações?",
        answer: "Entre em contato com a Accesslift e informe o equipamento ou a necessidade da operação.",
      },
    ],
    finalCta: {
      title: "Precisa de informações sobre treinamento?",
      description: "Fale com a Accesslift e informe o equipamento ou a necessidade da operação.",
      primary: { label: "Entrar em contato", href: "/contato/" },
      secondary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Treinamento para Operadores de Plataformas Elevatórias",
      title: "Treinamento para Operadores de Plataformas | Accesslift",
      description: "Treinamento para operadores de plataformas elevatórias com orientação sobre equipamentos, comandos, limites e cuidados durante a operação.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
  },
];

export const segmentPages: SegmentPageConfig[] = [
  {
    path: "/segmentos-e-aplicacoes/",
    eyebrow: "Aplicações",
    title: "Plataformas Elevatórias para Diferentes Segmentos e Aplicações",
    description: "Soluções para trabalhos em altura em ambientes industriais, obras, instalações comerciais e outras operações que exigem acesso elevado.",
    primaryCta: { label: "Encontrar uma plataforma", href: "/equipamentos/" },
    secondaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    context: "Altura é apenas um dos fatores envolvidos na escolha de uma plataforma elevatória.",
    needs: ["Altura aproximada", "Tipo de acesso", "Espaço disponível", "Obstáculos", "Capacidade", "Condições do local"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Orçamento orientado pela operação"],
    applications: ["Indústria", "Construção civil", "Supermercados", "Atacados"],
    differentials: ["Entrega própria", "Retirada própria", "Assistência técnica", "Treinamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Escolha",
        title: "O equipamento deve acompanhar as características do trabalho",
        description: "Altura é apenas um dos fatores envolvidos na escolha de uma plataforma elevatória. Tipo de acesso, espaço disponível, obstáculos, necessidade de alcance horizontal, capacidade da plataforma e condições do local também influenciam a definição do equipamento.",
      },
      {
        eyebrow: "Segmentos",
        title: "Aplicações por ambiente",
        items: [
          {
            title: "Plataformas elevatórias para indústria",
            description: "Ambientes industriais podem exigir acesso elevado para manutenção, instalações, inspeções, montagens e intervenções em estruturas e equipamentos.",
            cta: { label: "Plataformas para indústria", href: "/segmentos/industria/" },
          },
          {
            title: "Plataformas elevatórias para construção civil",
            description: "Em obras, plataformas podem apoiar instalação, montagem, acabamento, manutenção e acesso a pontos elevados.",
            cta: { label: "Plataformas para construção civil", href: "/segmentos/construcao-civil/" },
          },
          {
            title: "Plataformas para supermercados e hipermercados",
            description: "Grandes instalações comerciais podem demandar trabalhos em altura para manutenção, iluminação, infraestrutura e comunicação visual.",
            cta: { label: "Plataformas para supermercados", href: "/segmentos/supermercados-e-hipermercados/" },
          },
          {
            title: "Plataformas elevatórias para atacados",
            description: "Operações atacadistas possuem grandes áreas, instalações elevadas e necessidades de manutenção e infraestrutura.",
            cta: { label: "Plataformas para atacados", href: "/segmentos/atacados/" },
          },
        ],
      },
      {
        eyebrow: "Tipo",
        title: "O tipo de trabalho ajuda a definir a plataforma",
        items: [
          {
            title: "Plataforma Tesoura",
            description: "Pode ser considerada quando o trabalho exige principalmente elevação vertical e existe possibilidade de posicionar o equipamento abaixo da área de execução.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataforma Articulada",
            description: "Pode ser considerada quando existem obstáculos ou quando o ponto de trabalho exige alcance horizontal além da elevação.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Planejamento",
        title: "Não escolha apenas pela altura",
        description: "Para identificar uma plataforma, considere altura aproximada, acesso ao local, largura e altura de passagens, espaço para posicionamento, obstáculos, alcance horizontal, operadores, ferramentas, piso, ambiente e período de utilização.",
        cta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
      },
    ],
    faq: [
      {
        question: "Segmentos são filtros técnicos de equipamentos?",
        answer: "Não. As páginas de segmento são editoriais e ajudam a explicar aplicações por tipo de ambiente.",
      },
      {
        question: "Um equipamento pode atender mais de um segmento?",
        answer: "Sim, desde que a aplicação faça sentido para a altura, acesso, capacidade e condições do local.",
      },
      {
        question: "Altura basta para escolher a plataforma?",
        answer: "Não. Acesso, obstáculos, espaço, capacidade e alcance horizontal também devem ser avaliados.",
      },
    ],
    finalCta: {
      title: "Conte para a Accesslift como será sua operação",
      description: "Informe local, altura aproximada, período e características do trabalho para consultar as opções disponíveis.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
      secondary: { label: "Ver equipamentos", href: "/equipamentos/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Diferentes Segmentos e Aplicações",
      title: "Plataformas Elevatórias para Diferentes Aplicações | Accesslift",
      description: "Plataformas elevatórias para indústria, construção civil, supermercados, hipermercados e atacados. Conheça aplicações e encontre o equipamento adequado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatórias para Construção Civil",
    description: "Equipamentos para apoiar trabalhos em altura em diferentes etapas de obras, instalações, montagens e acabamentos.",
    primaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    context: "As necessidades de acesso em altura podem mudar ao longo de uma obra.",
    needs: ["Altura necessária", "Espaço de acesso", "Obstáculos", "Condições do piso", "Capacidade necessária"],
    solutions: ["Plataformas tesoura para acesso vertical", "Plataformas articuladas para alcance horizontal", "Locação diária, semanal ou mensal"],
    applications: ["Instalações elétricas", "Instalações hidráulicas e infraestrutura", "Montagens", "Acabamentos", "Intervenções em estruturas"],
    differentials: ["Entrega e retirada próprias", "Suporte técnico", "Orçamento orientado por etapa da obra"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Obra",
        title: "Acesso elevado em diferentes etapas da construção",
        description: "Instalações, montagens, infraestrutura, acabamentos e outras atividades podem exigir equipamentos com diferentes alturas, dimensões e formas de alcance. A escolha deve acompanhar a etapa e o ambiente onde a plataforma será utilizada.",
      },
      {
        eyebrow: "Aplicações",
        title: "Aplicações na construção civil",
        items: ["Instalações elétricas", "Instalações hidráulicas e infraestrutura", "Montagens", "Acabamentos", "Instalação de sistemas", "Intervenções em estruturas", "Trabalhos em fachadas quando compatíveis", "Manutenção e ajustes durante a obra"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada na construção",
        items: [
          {
            title: "Plataformas tesoura na construção",
            description: "Quando existe acesso direto ao ponto de trabalho e a movimentação é predominantemente vertical, plataformas tesoura podem atender atividades de instalação, montagem e acabamento.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataformas articuladas na construção",
            description: "Quando o trabalho exige alcançar pontos que não estão diretamente acima da máquina, a articulação e o alcance horizontal podem facilitar o acesso sobre ou ao redor de obstáculos.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locação",
        title: "Locação para diferentes períodos da obra",
        description: "A Accesslift disponibiliza locações diárias, semanais e mensais, com entrega e retirada próprias e suporte técnico durante a locação.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma usar em uma obra?",
        answer: "Depende da etapa, altura, acesso, obstáculos, piso e capacidade necessária.",
      },
      {
        question: "Plataforma tesoura atende construção civil?",
        answer: "Pode atender trabalhos predominantemente verticais quando o acesso e o espaço são compatíveis.",
      },
      {
        question: "Quando considerar articulada na obra?",
        answer: "Quando o ponto de trabalho exige alcance horizontal ou acesso sobre obstáculos.",
      },
    ],
    finalCta: {
      title: "Sua obra precisa de acesso em altura?",
      description: "Informe cidade, período, altura aproximada e características do trabalho.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Construção Civil",
      title: "Plataformas Elevatórias para Construção Civil | Accesslift",
      description: "Plataformas elevatórias para construção civil, instalações, montagens e trabalhos em altura. Consulte modelos tesoura e articulados para locação.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
  },
  {
    path: "/segmentos/industria/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatórias para Indústria",
    description: "Equipamentos para trabalhos em altura em operações industriais, com opções para elevação vertical e acesso a pontos que exigem alcance horizontal.",
    primaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    context: "Instalações industriais podem reunir estruturas, máquinas, tubulações, sistemas elétricos, iluminação e outros elementos que demandam acesso elevado.",
    needs: ["Características do acesso", "Obstáculos existentes", "Espaço disponível", "Alcance horizontal", "Período de utilização"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Locação com suporte"],
    applications: ["Manutenção de instalações", "Inspeções em altura", "Instalações elétricas", "Manutenção de iluminação", "Montagens", "Intervenções em estruturas"],
    differentials: ["Assistência técnica própria", "Manutenção preventiva", "Entrega e retirada próprias"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Indústria",
        title: "Acesso em altura para diferentes necessidades da indústria",
        description: "Instalações industriais podem reunir estruturas, máquinas, tubulações, sistemas elétricos, iluminação e outros elementos que demandam acesso elevado para inspeções, manutenções e intervenções.",
      },
      {
        eyebrow: "Aplicações",
        title: "Aplicações em ambientes industriais",
        description: "A aplicação deve sempre considerar as características e limitações do equipamento selecionado.",
        items: ["Manutenção de instalações", "Inspeções em altura", "Instalações elétricas e infraestrutura", "Manutenção de iluminação", "Montagens", "Intervenções em estruturas", "Instalação e manutenção de sistemas", "Trabalhos em áreas produtivas e de apoio"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada na indústria",
        items: [
          {
            title: "Quando considerar uma plataforma tesoura?",
            description: "Quando o ponto de trabalho pode ser acessado predominantemente na vertical, uma plataforma tesoura pode oferecer área elevada para operador, ferramentas e materiais.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando considerar uma plataforma articulada?",
            description: "Quando estruturas, equipamentos ou instalações criam obstáculos, uma plataforma articulada pode proporcionar o alcance horizontal necessário para acessar o local de trabalho.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locação",
        title: "Locação com estrutura de suporte",
        description: "A Accesslift trabalha com locações diárias, semanais e mensais, entrega e retirada próprias, assistência técnica própria e suporte durante a locação.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma pode ser usada na indústria?",
        answer: "A escolha depende da altura, acesso, obstáculos, espaço disponível e necessidade de alcance horizontal.",
      },
      {
        question: "Plataforma articulada é sempre necessária?",
        answer: "Não. Ela pode ser considerada quando há obstáculos ou necessidade de alcance horizontal.",
      },
      {
        question: "A locação inclui suporte?",
        answer: "A Accesslift possui entrega, retirada e assistência técnica própria integradas à locação.",
      },
    ],
    finalCta: {
      title: "Precisa de uma plataforma para uma operação industrial?",
      description: "Conte onde será realizado o trabalho, a altura aproximada e as características do acesso.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Indústria",
      title: "Plataformas Elevatórias para Indústria | Accesslift",
      description: "Plataformas elevatórias para trabalhos industriais em altura, manutenção, instalações e montagens. Consulte equipamentos para locação.",
      canonicalPath: "/segmentos/industria/",
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatórias para Supermercados e Hipermercados",
    description: "Equipamentos para manutenção, instalações e intervenções em altura em grandes ambientes comerciais.",
    primaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    context: "Supermercados e hipermercados possuem estruturas que podem demandar acesso elevado para manutenção e instalação.",
    needs: ["Altura do trabalho", "Largura e altura dos acessos", "Espaço para movimentação", "Obstáculos", "Características do local"],
    solutions: ["Plataformas tesoura para trabalhos verticais", "Plataformas articuladas para alcance horizontal", "Locação com entrega e suporte"],
    applications: ["Manutenção de iluminação", "Instalações elétricas", "Manutenção de infraestrutura", "Comunicação visual", "Inspeções em pontos elevados"],
    differentials: ["Entrega própria", "Retirada própria", "Assistência técnica"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Ambiente",
        title: "Trabalhos em altura em grandes áreas comerciais",
        description: "Iluminação, sistemas elétricos, comunicação visual, infraestrutura e outros elementos podem estar em pontos elevados. Corredores, acessos, estruturas existentes e circulação precisam ser considerados na escolha do equipamento.",
      },
      {
        eyebrow: "Aplicações",
        title: "Aplicações em supermercados e hipermercados",
        items: ["Manutenção de iluminação", "Instalações elétricas", "Manutenção de infraestrutura", "Instalação e manutenção de comunicação visual", "Intervenções em estruturas", "Instalações e montagens", "Inspeções e manutenções em pontos elevados"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada em grandes lojas",
        items: [
          {
            title: "Plataforma tesoura para trabalhos verticais",
            description: "Quando o equipamento pode ser posicionado abaixo da área de execução, uma plataforma tesoura pode atender atividades que exigem acesso predominantemente vertical.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando é necessário alcance horizontal",
            description: "Estruturas, equipamentos ou limitações podem impedir o posicionamento diretamente abaixo do ponto de trabalho. Nesses casos, uma articulada pode ser considerada.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locação",
        title: "Equipamento e suporte para a operação",
        description: "A Accesslift disponibiliza locações diárias, semanais e mensais, com entrega e retirada próprias dentro da área de atendimento e suporte durante a locação.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "O acesso ao local importa na escolha?",
        answer: "Sim. Largura, altura de passagens, corredores e espaço de movimentação podem limitar os modelos compatíveis.",
      },
      {
        question: "Plataformas podem apoiar manutenção de iluminação?",
        answer: "Podem ser consideradas conforme altura, acesso, capacidade e condições do ambiente.",
      },
      {
        question: "Posso solicitar avaliação sem saber o modelo?",
        answer: "Sim. Informe cidade, altura aproximada, período e características do local.",
      },
    ],
    finalCta: {
      title: "Precisa realizar um trabalho em altura em sua unidade?",
      description: "Informe cidade, altura aproximada, período e características do local.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Supermercados e Hipermercados",
      title: "Plataformas Elevatórias para Supermercados | Accesslift",
      description: "Plataformas elevatórias para manutenção, instalações e trabalhos em altura em supermercados e hipermercados. Consulte opções para locação.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
    },
  },
  {
    path: "/segmentos/atacados/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatórias para Atacados",
    description: "Equipamentos para trabalhos em altura em grandes instalações atacadistas, operações de manutenção, infraestrutura e montagem.",
    primaryCta: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    context: "Ambientes atacadistas podem reunir grandes áreas de operação, estruturas elevadas, iluminação, instalações elétricas e comunicação visual.",
    needs: ["Altura aproximada", "Local da atividade", "Acessos disponíveis", "Obstáculos", "Período de utilização", "Alcance horizontal"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Locação diária, semanal ou mensal"],
    applications: ["Manutenção de iluminação", "Instalações elétricas", "Manutenção de infraestrutura", "Comunicação visual", "Inspeções", "Montagens"],
    differentials: ["Entrega e retirada próprias", "Suporte técnico durante a locação", "Auxílio na escolha"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Operação",
        title: "Acesso elevado em instalações de grande porte",
        description: "Trabalhos em pontos elevados exigem que altura, circulação, obstáculos e posicionamento sejam considerados na escolha da plataforma.",
      },
      {
        eyebrow: "Aplicações",
        title: "Aplicações em ambientes atacadistas",
        items: ["Manutenção de iluminação", "Instalações elétricas", "Manutenção de infraestrutura", "Comunicação visual", "Inspeções", "Montagens", "Manutenção de estruturas e instalações elevadas"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada em atacados",
        items: [
          {
            title: "Quando considerar uma plataforma tesoura?",
            description: "Para pontos de trabalho acessíveis verticalmente, plataformas tesoura podem oferecer área elevada para operador, ferramentas e materiais.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando considerar uma plataforma articulada?",
            description: "Quando existem obstáculos ou o ponto de execução exige alcance lateral, plataformas articuladas permitem combinar elevação e alcance horizontal.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locação",
        title: "Locação diária, semanal ou mensal",
        description: "O período pode ser definido de acordo com a duração da atividade, com entrega e retirada próprias e suporte técnico durante a locação.",
        cta: { label: "Conhecer locação", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Atacados precisam sempre de plataformas maiores?",
        answer: "Não necessariamente. A escolha depende da altura, acessos, obstáculos, espaço e atividade.",
      },
      {
        question: "Como informar a necessidade?",
        answer: "Informe altura aproximada, local da atividade, acessos disponíveis, obstáculos, período e necessidade de alcance horizontal.",
      },
      {
        question: "A Accesslift ajuda na avaliação?",
        answer: "Sim. A equipe pode auxiliar na identificação das opções quando as informações da operação são enviadas.",
      },
    ],
    finalCta: {
      title: "Precisa de uma plataforma elevatória para sua operação?",
      description: "Conte para a Accesslift onde será realizado o trabalho e quais são as principais características da necessidade.",
      primary: { label: "Solicitar orçamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatórias para Atacados",
      title: "Plataformas Elevatórias para Atacados | Accesslift",
      description: "Plataformas elevatórias para manutenção, instalações e trabalhos em altura em atacados. Conheça opções tesoura e articuladas para locação.",
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
