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
      "Equipamentos desenvolvidos para proporcionar acesso elevado em diferentes atividades de manutencao, instalacao, construcao e operacoes industriais e comerciais.",
    primaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    secondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    valueProposition:
      "Uma plataforma elevatoria permite posicionar operadores, ferramentas e materiais em pontos elevados para a execucao de diferentes tipos de trabalho.",
    benefits: [
      "Plataformas tesoura para acessos predominantemente verticais",
      "Plataformas articuladas para altura com alcance horizontal",
      "Frota eletrica com marcas JLG, Genie, Skyjack e Zoomlion",
    ],
    process: ["Avaliar altura de trabalho", "Verificar alcance horizontal", "Checar espaco e acessos", "Considerar capacidade", "Solicitar orientacao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "O que e",
        title: "O que e uma plataforma elevatoria?",
        description: "Existem equipamentos com caracteristicas distintas de altura, capacidade, dimensoes e movimentacao. A escolha deve considerar nao apenas a altura que se pretende alcancar, mas tambem as condicoes de acesso ao ponto de trabalho. Entre as principais familias disponibilizadas pela Accesslift estao as plataformas tesoura e as plataformas articuladas.",
      },
      {
        eyebrow: "Tesoura x articulada",
        title: "Plataforma tesoura ou articulada: qual escolher?",
        items: [
          {
            title: "Plataforma Tesoura",
            description: "A movimentacao e predominantemente vertical. E indicada quando o ponto de trabalho pode ser alcancado diretamente acima da posicao do equipamento, existe espaco adequado para posicionamento e e desejavel uma area de plataforma para operador, ferramentas e materiais.",
            cta: { label: "Conhecer plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataforma Articulada",
            description: "Combina elevacao com alcance horizontal. A estrutura articulada permite acessar pontos que nao estao diretamente acima da base do equipamento, especialmente quando existem obstaculos ou necessidade de alcance lateral.",
            cta: { label: "Conhecer plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Como escolher",
        title: "O que considerar na escolha de uma plataforma elevatoria?",
        items: [
          { title: "Altura de trabalho", description: "A altura necessaria para executar a atividade e um dos primeiros criterios para selecionar o equipamento." },
          { title: "Alcance horizontal", description: "Em algumas operacoes nao basta subir verticalmente. E necessario alcancar o ponto de trabalho lateralmente ou superar obstaculos." },
          { title: "Espaco disponivel", description: "Largura de acessos, corredores, portas e espaco para manobra podem limitar os equipamentos adequados." },
          { title: "Capacidade da plataforma", description: "E importante considerar operadores, ferramentas e materiais que permanecerao na plataforma durante o trabalho." },
          { title: "Condicoes do local", description: "Ambiente, piso, acesso e demais caracteristicas da operacao tambem devem fazer parte da avaliacao." },
        ],
        cta: { label: "Preciso de ajuda para escolher", href: "/solicite-orcamento/" },
      },
      {
        eyebrow: "Frota",
        title: "Frota eletrica para diferentes aplicacoes",
        description: "A frota atual da Accesslift reune plataformas eletricas das categorias tesoura e articulada, com diferentes dimensoes, alturas de trabalho e capacidades. A escolha do modelo deve ser realizada de acordo com a aplicacao e as condicoes do local. Marcas da frota: JLG, Genie, Skyjack e Zoomlion.",
        cta: { label: "Ver todos os equipamentos", href: "/equipamentos/" },
      },
      {
        eyebrow: "Locacao",
        title: "Plataformas elevatorias para locacao",
        description: "A Accesslift disponibiliza equipamentos para locacoes diarias, semanais e mensais, com entrega e retirada proprias e suporte tecnico durante a operacao.",
        cta: { label: "Conhecer a locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [],
    finalCta: {
      title: "Encontre a plataforma adequada a sua operacao",
      description: "Compare os modelos disponiveis ou fale com a Accesslift para receber auxilio na escolha.",
      primary: { label: "Ver equipamentos", href: "/equipamentos/" },
      secondary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Trabalhos em Altura",
      title: "Plataformas Elevatorias: Tesoura e Articulada | Accesslift",
      description: "Conheca plataformas elevatorias tesoura e articuladas, entenda suas aplicacoes e encontre equipamentos para trabalhos em altura.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas-elevatorias/",
    eyebrow: "Locacao",
    title: "Locacao de Plataformas Elevatorias",
    description:
      "Equipamentos para trabalhos em altura com opcoes de locacao diaria, semanal ou mensal, entrega e retirada proprias e suporte tecnico da Accesslift em Sao Paulo e regiao.",
    primaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    secondaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    supportItems: [
      "Plataformas Tesoura e Articuladas",
      "Locacao diaria, semanal e mensal",
      "Entrega e retirada proprias",
      "Assistencia tecnica propria",
    ],
    valueProposition:
      "Cada trabalho em altura apresenta condicoes diferentes. Altura necessaria, espaco disponivel, caracteristicas do piso, obstaculos e necessidade de alcance horizontal sao alguns dos fatores que devem ser considerados na escolha da plataforma.",
    benefits: [
      "Escolha orientada pela necessidade da operacao",
      "Equipamentos relacionados vindos do catalogo central",
      "Orcamento personalizado conforme periodo, local e modelo",
    ],
    process: ["Conte sobre o trabalho", "Identificamos as opcoes", "Definimos a locacao", "Entrega do equipamento", "Suporte durante a operacao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Escolha",
        title: "Uma locacao que comeca pela escolha do equipamento",
        description: "Por isso, a Accesslift nao trabalha apenas com a disponibilizacao do equipamento. Nossa equipe auxilia na identificacao da plataforma mais adequada as caracteristicas da operacao. Para trabalhos predominantemente verticais, uma plataforma tesoura pode ser a alternativa mais adequada. Quando o ponto de trabalho exige alcance horizontal ou acesso sobre obstaculos, uma plataforma articulada pode atender melhor a necessidade.",
        cta: { label: "Conhecer os tipos de plataforma", href: "/plataformas-elevatorias/" },
      },
      {
        eyebrow: "Modalidades",
        title: "Locacao pelo periodo que sua operacao precisa",
        description: "A Accesslift disponibiliza diferentes periodos de locacao para adequar o equipamento ao cronograma de cada trabalho.",
        items: [
          { title: "Locacao diaria", description: "Para atividades pontuais e operacoes que precisam do equipamento por periodos mais curtos." },
          { title: "Locacao semanal", description: "Uma alternativa para servicos com varios dias de execucao ou cronogramas que exigem maior disponibilidade do equipamento." },
          { title: "Locacao mensal", description: "Indicada para operacoes continuas, obras, manutencoes e projetos com necessidade prolongada de acesso em altura." },
        ],
      },
      {
        eyebrow: "Tipos",
        title: "Plataformas tesoura e articuladas para locacao",
        items: [
          {
            title: "Plataformas Tesoura",
            description: "Projetadas para elevacao predominantemente vertical, as plataformas tesoura oferecem area de trabalho para operador, ferramentas e materiais e atendem diferentes atividades de manutencao, instalacao, montagem e construcao.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataformas Articuladas",
            description: "Alem da elevacao, as plataformas articuladas permitem alcance horizontal e acesso a pontos de trabalho que exigem movimentacao sobre ou ao redor de obstaculos.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Suporte",
        title: "Suporte que acompanha a locacao",
        description: "Uma plataforma parada pode afetar o andamento de uma operacao. Por isso, a estrutura da Accesslift vai alem da entrega do equipamento. A empresa conta com entrega e retirada proprias, assistencia tecnica propria, manutencao preventiva, atendimento emergencial e treinamento de operadores.",
        cta: { label: "Conhecer nossos servicos", href: "/servicos/" },
      },
      {
        eyebrow: "Quanto custa",
        title: "Quanto custa alugar uma plataforma elevatoria?",
        description: "O valor da locacao depende de fatores como modelo do equipamento, altura de trabalho, periodo de utilizacao, local de entrega e caracteristicas da operacao. Por esse motivo, a Accesslift trabalha com orcamento de acordo com cada necessidade, em vez de utilizar um preco unico para todos os projetos.",
        cta: { label: "Solicitar cotacao", href: "/solicite-orcamento/" },
      },
      {
        eyebrow: "Area de atendimento",
        title: "Locacao de plataformas elevatorias em Sao Paulo e regiao",
        description: "A Accesslift atende Sao Paulo e municipios dentro de um raio de ate 150 km de sua base, conforme disponibilidade e condicoes da operacao.",
        cta: { label: "Consultar area de atendimento", href: "/area-de-atendimento/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma elevatoria devo alugar?",
        answer: "A escolha depende da altura, do tipo de acesso, do espaco disponivel, dos obstaculos existentes e das caracteristicas da operacao. A equipe Accesslift pode auxiliar na identificacao das opcoes adequadas.",
      },
      {
        question: "A Accesslift trabalha com locacao diaria?",
        answer: "Sim. Ha opcoes de locacao diaria, semanal e mensal, conforme a necessidade da operacao.",
      },
      {
        question: "Qual a diferenca entre plataforma tesoura e articulada?",
        answer: "A plataforma tesoura e voltada principalmente a elevacao vertical. A articulada tambem oferece alcance horizontal, facilitando o acesso a pontos sobre ou ao redor de obstaculos.",
      },
      {
        question: "A Accesslift realiza a entrega do equipamento?",
        answer: "Sim. A Accesslift possui estrutura propria para entrega e retirada dentro de sua area de atendimento, conforme as condicoes da locacao.",
      },
      {
        question: "Ha suporte tecnico durante a locacao?",
        answer: "Sim. A assistencia tecnica propria faz parte da estrutura de suporte da Accesslift.",
      },
      {
        question: "Nao sei qual equipamento preciso. Posso solicitar orcamento mesmo assim?",
        answer: "Sim. No formulario de orcamento, o cliente pode informar a necessidade da operacao mesmo sem definir previamente o modelo da plataforma.",
      },
    ],
    faqSchemaEligible: true,
    finalCta: {
      title: "Precisa alugar uma plataforma elevatoria?",
      description: "Conte para a Accesslift onde sera realizado o trabalho, a altura aproximada e o periodo de utilizacao.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Locacao de Plataformas Elevatorias",
      title: "Locacao de Plataformas Elevatorias | Accesslift",
      description: "Locacao de plataformas elevatorias tesoura e articuladas em Sao Paulo. Diarias, semanais ou mensais, com entrega propria e suporte tecnico.",
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
    title: "Servicos e Suporte para Plataformas Elevatorias",
    description: "Estrutura para apoiar a operacao antes, durante e apos a entrega dos equipamentos.",
    primaryCta: { label: "Falar com a Accesslift", href: "/contato/" },
    secondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    problem: "A locacao nao termina quando a plataforma e entregue. A operacao precisa de suporte para manter disponibilidade, orientacao e atendimento quando surgem necessidades tecnicas.",
    proposal: "A Accesslift integra entrega, retirada, assistencia tecnica, manutencao preventiva, atendimento a ocorrencias e treinamento de operadores na mesma estrutura de locacao.",
    benefits: ["Entrega e retirada proprias", "Assistencia tecnica propria", "Manutencao preventiva", "Treinamento de operadores"],
    process: ["Entender a operacao", "Selecionar equipamento", "Programar entrega", "Acompanhar a locacao", "Retirar ao final"],
    applications: ["Locacao de plataformas", "Suporte durante operacao", "Treinamento e orientacao"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Suporte",
        title: "Suporte que acompanha a operacao",
        description: "A locacao nao termina quando a plataforma e entregue. Durante o periodo de uso, a Accesslift mantem uma estrutura de suporte para acompanhar necessidades relacionadas ao equipamento e a operacao.",
      },
      {
        eyebrow: "Estrutura",
        title: "Servicos integrados a locacao",
        items: [
          {
            title: "Entrega e retirada proprias",
            description: "Movimentacao dos equipamentos dentro da area de atendimento, conforme as condicoes definidas para a locacao.",
            cta: { label: "Consultar area de atendimento", href: "/area-de-atendimento/" },
          },
          {
            title: "Assistencia tecnica propria",
            description: "Suporte tecnico para avaliacao e intervencao quando surgirem necessidades durante a locacao.",
            cta: { label: "Conhecer assistencia tecnica", href: "/servicos/assistencia-tecnica/" },
          },
          {
            title: "Atendimento emergencial",
            description: "Recebimento e avaliacao de ocorrencias que podem impactar a continuidade da operacao.",
            cta: { label: "Solicitar suporte", href: "/servicos/assistencia-tecnica/" },
          },
          {
            title: "Manutencao preventiva",
            description: "Cuidados tecnicos voltados a preparar os equipamentos e reduzir a possibilidade de problemas durante o uso.",
            cta: { label: "Ver manutencao preventiva", href: "/servicos/manutencao-preventiva/" },
          },
          {
            title: "Treinamento de operadores",
            description: "Orientacao sobre equipamento, comandos, limites e cuidados relacionados a utilizacao da plataforma.",
            cta: { label: "Ver treinamento", href: "/servicos/treinamento-de-operadores/" },
          },
          {
            title: "Seguranca e NR-35",
            description: "Conteudo de apoio sobre planejamento, capacitacao e requisitos aplicaveis ao trabalho em altura.",
            cta: { label: "Entender seguranca", href: "/seguranca-e-nr35/" },
          },
        ],
      },
    ],
    faq: [
      {
        question: "A Accesslift oferece suporte durante a locacao?",
        answer: "Sim. A estrutura de suporte acompanha os equipamentos da operacao Accesslift durante a locacao.",
      },
      {
        question: "A entrega e retirada sao proprias?",
        answer: "A Accesslift possui estrutura propria para entrega e retirada dentro da area de atendimento, conforme condicoes da locacao.",
      },
      {
        question: "Ha atendimento emergencial?",
        answer: "A Accesslift recebe e avalia ocorrencias durante a locacao. O atendimento depende da situacao, equipamento e localidade.",
      },
      {
        question: "O treinamento substitui NR-35?",
        answer: "Nao. Treinamento de operador e NR-35 possuem objetivos e escopos diferentes.",
      },
    ],
    finalCta: {
      title: "Precisa de locacao ou suporte tecnico?",
      description: "Fale com a equipe Accesslift para informar sua necessidade.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      secondary: { label: "Entrar em contato", href: "/contato/" },
    },
    seo: {
      h1: "Servicos e Suporte para Plataformas Elevatorias",
      title: "Servicos para Plataformas Elevatorias | Accesslift",
      description: "Conheca a estrutura de suporte Accesslift: assistencia tecnica propria, manutencao preventiva, atendimento emergencial e treinamento de operadores.",
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
    title: "Assistencia Tecnica para Plataformas Elevatorias",
    description: "Suporte tecnico proprio para acompanhar os equipamentos da operacao Accesslift e atender necessidades durante a locacao.",
    primaryCta: { label: "Solicitar suporte tecnico", href: "/servicos/assistencia-tecnica/" },
    secondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    problem: "Durante uma locacao, situacoes tecnicas precisam ser avaliadas com clareza para reduzir impacto na operacao.",
    proposal: "A assistencia tecnica propria da Accesslift atua integrada aos equipamentos em locacao, com avaliacao caso a caso.",
    benefits: ["Avaliacao de ocorrencias", "Orientacao relacionada ao equipamento", "Intervencao tecnica quando necessaria", "Suporte durante locacao"],
    process: ["Receber solicitacao", "Identificar equipamento", "Avaliar ocorrencia", "Direcionar suporte"],
    applications: ["Equipamentos Accesslift em locacao", "Ocorrencias tecnicas", "Orientacao operacional"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Suporte",
        title: "Suporte tecnico integrado a locacao",
        description: "A assistencia tecnica propria acompanha necessidades relacionadas aos equipamentos da operacao Accesslift durante a locacao. Cada solicitacao e avaliada conforme o equipamento, a situacao informada e as condicoes da operacao.",
      },
      {
        eyebrow: "Atendimento",
        title: "Atendimento para diferentes necessidades",
        items: [
          "Avaliacao de ocorrencias tecnicas",
          "Orientacao relacionada ao equipamento",
          "Intervencao tecnica quando necessaria",
          "Suporte durante a locacao",
          "Manutencao dos equipamentos da operacao Accesslift",
          "Recebimento e avaliacao de solicitacoes emergenciais",
        ],
      },
      {
        eyebrow: "Emergencial",
        title: "Precisa de suporte durante uma locacao?",
        description: "Em caso de ocorrencia, informe o modelo da plataforma, local da operacao e descricao da situacao. As solicitacoes emergenciais sao recebidas e avaliadas de acordo com o caso.",
      },
      {
        eyebrow: "Marcas",
        title: "Marcas atendidas na operacao Accesslift",
        description: "O escopo deve ser confirmado conforme o equipamento e sua relacao com a operacao Accesslift.",
        items: ["JLG", "Genie", "Skyjack", "Zoomlion"],
      },
      {
        eyebrow: "Locacao",
        title: "Locacao com suporte tecnico",
        description: "Equipamento e suporte fazem parte da mesma estrutura operacional da Accesslift.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "A Accesslift possui assistencia tecnica propria?",
        answer: "Sim. A Accesslift possui equipe tecnica integrada a operacao dos equipamentos em locacao.",
      },
      {
        question: "Ha suporte durante a locacao?",
        answer: "Sim. O suporte acompanha a locacao de equipamentos Accesslift conforme a necessidade informada.",
      },
      {
        question: "A Accesslift oferece atendimento emergencial?",
        answer: "A Accesslift recebe e avalia solicitacoes emergenciais conforme situacao, localidade e equipamento.",
      },
      {
        question: "A assistencia atende equipamentos de terceiros?",
        answer: "O escopo deve ser consultado com a equipe Accesslift, pois depende do equipamento e da relacao com a operacao.",
      },
    ],
    finalCta: {
      title: "Precisa de assistencia?",
      description: "Envie as informacoes do equipamento e da ocorrencia para avaliacao da equipe Accesslift.",
      primary: { label: "Solicitar suporte tecnico", href: "/servicos/assistencia-tecnica/" },
      secondary: { label: "Entrar em contato", href: "/contato/" },
    },
    seo: {
      h1: "Assistencia Tecnica para Plataformas Elevatorias",
      title: "Assistencia Tecnica de Plataformas Elevatorias | Accesslift",
      description: "Assistencia tecnica propria para plataformas elevatorias da operacao Accesslift, com suporte durante a locacao e atendimento a ocorrencias tecnicas.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    eyebrow: "Servico",
    title: "Manutencao Preventiva de Plataformas Elevatorias",
    description: "Cuidados tecnicos fazem parte da preparacao e acompanhamento dos equipamentos utilizados nas operacoes Accesslift.",
    primaryCta: { label: "Falar com a Accesslift", href: "/contato/" },
    secondaryCta: { label: "Ver equipamentos", href: "/equipamentos/" },
    problem: "Plataformas elevatorias possuem sistemas e componentes que dependem de cuidados tecnicos para manter disponibilidade e reduzir problemas durante a operacao.",
    proposal: "A manutencao preventiva faz parte da estrutura Accesslift para preparar e acompanhar os equipamentos da frota.",
    benefits: ["Identificacao de necessidades de intervencao", "Cuidados antes da operacao", "Acompanhamento da frota", "Suporte integrado a locacao"],
    process: ["Preparar equipamento", "Realizar verificacoes", "Registrar necessidades", "Acompanhar a locacao"],
    applications: ["Frota Accesslift", "Locacao", "Suporte tecnico"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Importancia",
        title: "Por que manutencao preventiva e importante?",
        description: "A manutencao preventiva ajuda a identificar necessidades de intervencao e cuidados antes que uma ocorrencia afete a operacao. Os procedimentos devem respeitar as especificacoes tecnicas de cada equipamento.",
      },
      {
        eyebrow: "Escopo",
        title: "O que envolve a manutencao?",
        description: "As verificacoes e intervencoes seguem orientacao tecnica, e a periodicidade nao deve ser tratada como igual para todos os modelos sem validacao especifica.",
      },
      {
        eyebrow: "Diferencas",
        title: "Preventiva, corretiva e assistencia",
        items: [
          "Preventiva: cuidados planejados para preparacao e acompanhamento do equipamento.",
          "Corretiva: intervencao quando uma necessidade tecnica e identificada.",
          "Assistencia tecnica: suporte durante a locacao, conforme a solicitacao e as condicoes da operacao.",
        ],
      },
      {
        eyebrow: "Locacao",
        title: "Manutencao integrada a locacao",
        description: "A estrutura de manutencao faz parte do cuidado com os equipamentos utilizados nas operacoes Accesslift.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
      {
        eyebrow: "Equipamentos",
        title: "Frota acompanhada",
        description: "A frota Accesslift reune plataformas JLG, Genie, Skyjack e Zoomlion, com diferentes alturas, dimensoes e capacidades.",
        cta: { label: "Ver equipamentos", href: "/equipamentos/" },
      },
    ],
    faq: [
      {
        question: "O que e manutencao preventiva?",
        answer: "E o conjunto de cuidados tecnicos voltados a preparar e acompanhar o equipamento, identificando necessidades antes que afetem a operacao.",
      },
      {
        question: "Preventiva e corretiva sao a mesma coisa?",
        answer: "Nao. A preventiva busca antecipar cuidados, enquanto a corretiva trata uma necessidade tecnica ja identificada.",
      },
      {
        question: "Todos os equipamentos seguem o mesmo intervalo?",
        answer: "Nao. Periodicidade e procedimentos dependem das especificacoes e condicoes de cada equipamento.",
      },
      {
        question: "A manutencao faz parte da estrutura Accesslift?",
        answer: "Sim. A Accesslift possui suporte e manutencao propria para sua operacao.",
      },
    ],
    finalCta: {
      title: "Precisa falar sobre manutencao ou suporte?",
      description: "Entre em contato para informar sua necessidade.",
      primary: { label: "Entrar em contato", href: "/contato/" },
      secondary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Manutencao Preventiva de Plataformas Elevatorias",
      title: "Manutencao de Plataformas Elevatorias | Accesslift",
      description: "Conheca a estrutura de manutencao preventiva da Accesslift para plataformas elevatorias e sua integracao com a operacao de locacao.",
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
    title: "Treinamento para Operadores de Plataformas Elevatorias",
    description: "Orientacao voltada ao conhecimento do equipamento, seus comandos, limites e cuidados relacionados a utilizacao da plataforma.",
    primaryCta: { label: "Solicitar informacoes", href: "/contato/" },
    secondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    problem: "Operadores precisam conhecer o equipamento, seus controles, limites e cuidados antes da utilizacao.",
    proposal: "O treinamento de operadores da Accesslift orienta sobre caracteristicas e uso da plataforma, sem ser apresentado como substituto automatico de requisitos da NR-35.",
    benefits: ["Identificacao do equipamento", "Comandos e controles", "Limites e cuidados", "Diferencas entre tesoura e articulada"],
    process: ["Entender necessidade", "Identificar equipamento", "Orientar operador", "Acompanhar a operacao"],
    applications: ["Plataformas tesoura", "Plataformas articuladas", "Locacao Accesslift"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Operacao",
        title: "Conhecer o equipamento faz parte da operacao",
        description: "Cada plataforma possui caracteristicas, comandos e limites proprios. A orientacao ao operador ajuda a alinhar uso do equipamento, cuidados e condicoes da atividade.",
      },
      {
        eyebrow: "Conteudo",
        title: "O que e abordado no treinamento?",
        description: "O conteudo deve ser alinhado a necessidade e ao equipamento utilizado.",
        items: [
          "Identificacao e caracteristicas do equipamento",
          "Comandos e controles",
          "Limites de utilizacao",
          "Verificacoes e cuidados antes do uso",
          "Cuidados durante a operacao",
          "Caracteristicas de plataformas tesoura e articuladas",
          "Orientacoes aplicaveis a operacao",
        ],
      },
      {
        eyebrow: "Equipamentos",
        title: "Treinamento para tesoura e articuladas",
        description: "As diferencas entre os tipos de plataforma influenciam a orientacao de operacao.",
        cta: { label: "Conhecer plataformas elevatorias", href: "/plataformas-elevatorias/" },
      },
      {
        eyebrow: "NR-35",
        title: "Treinamento de operador e NR-35 nao sao a mesma coisa",
        description: "O treinamento relacionado a plataforma elevatoria tem foco no conhecimento e utilizacao do equipamento. A NR-35 possui escopo proprio relacionado ao trabalho em altura, e a empresa responsavel pela atividade deve avaliar os requisitos aplicaveis.",
        cta: { label: "Entender seguranca e NR-35", href: "/seguranca-e-nr35/" },
      },
      {
        eyebrow: "Locacao",
        title: "Orientacao integrada a locacao",
        description: "A Accesslift combina equipamento, orientacao e suporte para acompanhar a utilizacao das plataformas em suas locacoes.",
        cta: { label: "Solicitar informacoes", href: "/contato/" },
      },
    ],
    faq: [
      {
        question: "A Accesslift oferece treinamento de operadores?",
        answer: "Sim. A Accesslift pode orientar operadores quanto ao equipamento, comandos, limites e cuidados de utilizacao.",
      },
      {
        question: "O treinamento aborda plataformas tesoura e articuladas?",
        answer: "Sim. O conteudo considera as caracteristicas do equipamento utilizado na operacao.",
      },
      {
        question: "Treinamento de operador substitui NR-35?",
        answer: "Nao. Treinamento de operador e NR-35 possuem objetivos e escopos diferentes.",
      },
      {
        question: "Como solicitar informacoes?",
        answer: "Entre em contato com a Accesslift e informe o equipamento ou a necessidade da operacao.",
      },
    ],
    finalCta: {
      title: "Precisa de informacoes sobre treinamento?",
      description: "Fale com a Accesslift e informe o equipamento ou a necessidade da operacao.",
      primary: { label: "Entrar em contato", href: "/contato/" },
      secondary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Treinamento para Operadores de Plataformas Elevatorias",
      title: "Treinamento para Operadores de Plataformas | Accesslift",
      description: "Treinamento para operadores de plataformas elevatorias com orientacao sobre equipamentos, comandos, limites e cuidados durante a operacao.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
  },
];

export const segmentPages: SegmentPageConfig[] = [
  {
    path: "/segmentos-e-aplicacoes/",
    eyebrow: "Aplicacoes",
    title: "Plataformas Elevatorias para Diferentes Segmentos e Aplicacoes",
    description: "Solucoes para trabalhos em altura em ambientes industriais, obras, instalacoes comerciais e outras operacoes que exigem acesso elevado.",
    primaryCta: { label: "Encontrar uma plataforma", href: "/equipamentos/" },
    secondaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    context: "Altura e apenas um dos fatores envolvidos na escolha de uma plataforma elevatoria.",
    needs: ["Altura aproximada", "Tipo de acesso", "Espaco disponivel", "Obstaculos", "Capacidade", "Condicoes do local"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Orcamento orientado pela operacao"],
    applications: ["Industria", "Construcao civil", "Supermercados", "Atacados"],
    differentials: ["Entrega propria", "Retirada propria", "Assistencia tecnica", "Treinamento"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Escolha",
        title: "O equipamento deve acompanhar as caracteristicas do trabalho",
        description: "Altura e apenas um dos fatores envolvidos na escolha de uma plataforma elevatoria. Tipo de acesso, espaco disponivel, obstaculos, necessidade de alcance horizontal, capacidade da plataforma e condicoes do local tambem influenciam a definicao do equipamento.",
      },
      {
        eyebrow: "Segmentos",
        title: "Aplicacoes por ambiente",
        items: [
          {
            title: "Plataformas elevatorias para industria",
            description: "Ambientes industriais podem exigir acesso elevado para manutencao, instalacoes, inspecoes, montagens e intervencoes em estruturas e equipamentos.",
            cta: { label: "Plataformas para industria", href: "/segmentos/industria/" },
          },
          {
            title: "Plataformas elevatorias para construcao civil",
            description: "Em obras, plataformas podem apoiar instalacao, montagem, acabamento, manutencao e acesso a pontos elevados.",
            cta: { label: "Plataformas para construcao civil", href: "/segmentos/construcao-civil/" },
          },
          {
            title: "Plataformas para supermercados e hipermercados",
            description: "Grandes instalacoes comerciais podem demandar trabalhos em altura para manutencao, iluminacao, infraestrutura e comunicacao visual.",
            cta: { label: "Plataformas para supermercados", href: "/segmentos/supermercados-e-hipermercados/" },
          },
          {
            title: "Plataformas elevatorias para atacados",
            description: "Operacoes atacadistas possuem grandes areas, instalacoes elevadas e necessidades de manutencao e infraestrutura.",
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
            description: "Pode ser considerada quando o trabalho exige principalmente elevacao vertical e existe possibilidade de posicionar o equipamento abaixo da area de execucao.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataforma Articulada",
            description: "Pode ser considerada quando existem obstaculos ou quando o ponto de trabalho exige alcance horizontal alem da elevacao.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Planejamento",
        title: "Nao escolha apenas pela altura",
        description: "Para identificar uma plataforma, considere altura aproximada, acesso ao local, largura e altura de passagens, espaco para posicionamento, obstaculos, alcance horizontal, operadores, ferramentas, piso, ambiente e periodo de utilizacao.",
        cta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      },
    ],
    faq: [
      {
        question: "Segmentos sao filtros tecnicos de equipamentos?",
        answer: "Nao. As paginas de segmento sao editoriais e ajudam a explicar aplicacoes por tipo de ambiente.",
      },
      {
        question: "Um equipamento pode atender mais de um segmento?",
        answer: "Sim, desde que a aplicacao faca sentido para a altura, acesso, capacidade e condicoes do local.",
      },
      {
        question: "Altura basta para escolher a plataforma?",
        answer: "Nao. Acesso, obstaculos, espaco, capacidade e alcance horizontal tambem devem ser avaliados.",
      },
    ],
    finalCta: {
      title: "Conte para a Accesslift como sera sua operacao",
      description: "Informe local, altura aproximada, periodo e caracteristicas do trabalho para consultar as opcoes disponiveis.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
      secondary: { label: "Ver equipamentos", href: "/equipamentos/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Diferentes Segmentos e Aplicacoes",
      title: "Plataformas Elevatorias para Diferentes Aplicacoes | Accesslift",
      description: "Plataformas elevatorias para industria, construcao civil, supermercados, hipermercados e atacados. Conheca aplicacoes e encontre o equipamento adequado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatorias para Construcao Civil",
    description: "Equipamentos para apoiar trabalhos em altura em diferentes etapas de obras, instalacoes, montagens e acabamentos.",
    primaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    context: "As necessidades de acesso em altura podem mudar ao longo de uma obra.",
    needs: ["Altura necessaria", "Espaco de acesso", "Obstaculos", "Condicoes do piso", "Capacidade necessaria"],
    solutions: ["Plataformas tesoura para acesso vertical", "Plataformas articuladas para alcance horizontal", "Locacao diaria, semanal ou mensal"],
    applications: ["Instalacoes eletricas", "Instalacoes hidraulicas e infraestrutura", "Montagens", "Acabamentos", "Intervencoes em estruturas"],
    differentials: ["Entrega e retirada proprias", "Suporte tecnico", "Orcamento orientado por etapa da obra"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Obra",
        title: "Acesso elevado em diferentes etapas da construcao",
        description: "Instalacoes, montagens, infraestrutura, acabamentos e outras atividades podem exigir equipamentos com diferentes alturas, dimensoes e formas de alcance. A escolha deve acompanhar a etapa e o ambiente onde a plataforma sera utilizada.",
      },
      {
        eyebrow: "Aplicacoes",
        title: "Aplicacoes na construcao civil",
        items: ["Instalacoes eletricas", "Instalacoes hidraulicas e infraestrutura", "Montagens", "Acabamentos", "Instalacao de sistemas", "Intervencoes em estruturas", "Trabalhos em fachadas quando compativeis", "Manutencao e ajustes durante a obra"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada na construcao",
        items: [
          {
            title: "Plataformas tesoura na construcao",
            description: "Quando existe acesso direto ao ponto de trabalho e a movimentacao e predominantemente vertical, plataformas tesoura podem atender atividades de instalacao, montagem e acabamento.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Plataformas articuladas na construcao",
            description: "Quando o trabalho exige alcancar pontos que nao estao diretamente acima da maquina, a articulacao e o alcance horizontal podem facilitar o acesso sobre ou ao redor de obstaculos.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locacao",
        title: "Locacao para diferentes periodos da obra",
        description: "A Accesslift disponibiliza locacoes diarias, semanais e mensais, com entrega e retirada proprias e suporte tecnico durante a locacao.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma usar em uma obra?",
        answer: "Depende da etapa, altura, acesso, obstaculos, piso e capacidade necessaria.",
      },
      {
        question: "Plataforma tesoura atende construcao civil?",
        answer: "Pode atender trabalhos predominantemente verticais quando o acesso e o espaco sao compativeis.",
      },
      {
        question: "Quando considerar articulada na obra?",
        answer: "Quando o ponto de trabalho exige alcance horizontal ou acesso sobre obstaculos.",
      },
    ],
    finalCta: {
      title: "Sua obra precisa de acesso em altura?",
      description: "Informe cidade, periodo, altura aproximada e caracteristicas do trabalho.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Construcao Civil",
      title: "Plataformas Elevatorias para Construcao Civil | Accesslift",
      description: "Plataformas elevatorias para construcao civil, instalacoes, montagens e trabalhos em altura. Consulte modelos tesoura e articulados para locacao.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
  },
  {
    path: "/segmentos/industria/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatorias para Industria",
    description: "Equipamentos para trabalhos em altura em operacoes industriais, com opcoes para elevacao vertical e acesso a pontos que exigem alcance horizontal.",
    primaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    context: "Instalacoes industriais podem reunir estruturas, maquinas, tubulacoes, sistemas eletricos, iluminacao e outros elementos que demandam acesso elevado.",
    needs: ["Caracteristicas do acesso", "Obstaculos existentes", "Espaco disponivel", "Alcance horizontal", "Periodo de utilizacao"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Locacao com suporte"],
    applications: ["Manutencao de instalacoes", "Inspecoes em altura", "Instalacoes eletricas", "Manutencao de iluminacao", "Montagens", "Intervencoes em estruturas"],
    differentials: ["Assistencia tecnica propria", "Manutencao preventiva", "Entrega e retirada proprias"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Industria",
        title: "Acesso em altura para diferentes necessidades da industria",
        description: "Instalacoes industriais podem reunir estruturas, maquinas, tubulacoes, sistemas eletricos, iluminacao e outros elementos que demandam acesso elevado para inspecoes, manutencoes e intervencoes.",
      },
      {
        eyebrow: "Aplicacoes",
        title: "Aplicacoes em ambientes industriais",
        description: "A aplicacao deve sempre considerar as caracteristicas e limitacoes do equipamento selecionado.",
        items: ["Manutencao de instalacoes", "Inspecoes em altura", "Instalacoes eletricas e infraestrutura", "Manutencao de iluminacao", "Montagens", "Intervencoes em estruturas", "Instalacao e manutencao de sistemas", "Trabalhos em areas produtivas e de apoio"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada na industria",
        items: [
          {
            title: "Quando considerar uma plataforma tesoura?",
            description: "Quando o ponto de trabalho pode ser acessado predominantemente na vertical, uma plataforma tesoura pode oferecer area elevada para operador, ferramentas e materiais.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando considerar uma plataforma articulada?",
            description: "Quando estruturas, equipamentos ou instalacoes criam obstaculos, uma plataforma articulada pode proporcionar o alcance horizontal necessario para acessar o local de trabalho.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locacao",
        title: "Locacao com estrutura de suporte",
        description: "A Accesslift trabalha com locacoes diarias, semanais e mensais, entrega e retirada proprias, assistencia tecnica propria e suporte durante a locacao.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Qual plataforma pode ser usada na industria?",
        answer: "A escolha depende da altura, acesso, obstaculos, espaco disponivel e necessidade de alcance horizontal.",
      },
      {
        question: "Plataforma articulada e sempre necessaria?",
        answer: "Nao. Ela pode ser considerada quando ha obstaculos ou necessidade de alcance horizontal.",
      },
      {
        question: "A locacao inclui suporte?",
        answer: "A Accesslift possui entrega, retirada e assistencia tecnica propria integradas a locacao.",
      },
    ],
    finalCta: {
      title: "Precisa de uma plataforma para uma operacao industrial?",
      description: "Conte onde sera realizado o trabalho, a altura aproximada e as caracteristicas do acesso.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Industria",
      title: "Plataformas Elevatorias para Industria | Accesslift",
      description: "Plataformas elevatorias para trabalhos industriais em altura, manutencao, instalacoes e montagens. Consulte equipamentos para locacao.",
      canonicalPath: "/segmentos/industria/",
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatorias para Supermercados e Hipermercados",
    description: "Equipamentos para manutencao, instalacoes e intervencoes em altura em grandes ambientes comerciais.",
    primaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    context: "Supermercados e hipermercados possuem estruturas que podem demandar acesso elevado para manutencao e instalacao.",
    needs: ["Altura do trabalho", "Largura e altura dos acessos", "Espaco para movimentacao", "Obstaculos", "Caracteristicas do local"],
    solutions: ["Plataformas tesoura para trabalhos verticais", "Plataformas articuladas para alcance horizontal", "Locacao com entrega e suporte"],
    applications: ["Manutencao de iluminacao", "Instalacoes eletricas", "Manutencao de infraestrutura", "Comunicacao visual", "Inspecoes em pontos elevados"],
    differentials: ["Entrega propria", "Retirada propria", "Assistencia tecnica"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Ambiente",
        title: "Trabalhos em altura em grandes areas comerciais",
        description: "Iluminacao, sistemas eletricos, comunicacao visual, infraestrutura e outros elementos podem estar em pontos elevados. Corredores, acessos, estruturas existentes e circulacao precisam ser considerados na escolha do equipamento.",
      },
      {
        eyebrow: "Aplicacoes",
        title: "Aplicacoes em supermercados e hipermercados",
        items: ["Manutencao de iluminacao", "Instalacoes eletricas", "Manutencao de infraestrutura", "Instalacao e manutencao de comunicacao visual", "Intervencoes em estruturas", "Instalacoes e montagens", "Inspecoes e manutencoes em pontos elevados"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada em grandes lojas",
        items: [
          {
            title: "Plataforma tesoura para trabalhos verticais",
            description: "Quando o equipamento pode ser posicionado abaixo da area de execucao, uma plataforma tesoura pode atender atividades que exigem acesso predominantemente vertical.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando e necessario alcance horizontal",
            description: "Estruturas, equipamentos ou limitacoes podem impedir o posicionamento diretamente abaixo do ponto de trabalho. Nesses casos, uma articulada pode ser considerada.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locacao",
        title: "Equipamento e suporte para a operacao",
        description: "A Accesslift disponibiliza locacoes diarias, semanais e mensais, com entrega e retirada proprias dentro da area de atendimento e suporte durante a locacao.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "O acesso ao local importa na escolha?",
        answer: "Sim. Largura, altura de passagens, corredores e espaco de movimentacao podem limitar os modelos compativeis.",
      },
      {
        question: "Plataformas podem apoiar manutencao de iluminacao?",
        answer: "Podem ser consideradas conforme altura, acesso, capacidade e condicoes do ambiente.",
      },
      {
        question: "Posso solicitar avaliacao sem saber o modelo?",
        answer: "Sim. Informe cidade, altura aproximada, periodo e caracteristicas do local.",
      },
    ],
    finalCta: {
      title: "Precisa realizar um trabalho em altura em sua unidade?",
      description: "Informe cidade, altura aproximada, periodo e caracteristicas do local.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Supermercados e Hipermercados",
      title: "Plataformas Elevatorias para Supermercados | Accesslift",
      description: "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em supermercados e hipermercados. Consulte opcoes para locacao.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
    },
  },
  {
    path: "/segmentos/atacados/",
    eyebrow: "Segmento",
    title: "Plataformas Elevatorias para Atacados",
    description: "Equipamentos para trabalhos em altura em grandes instalacoes atacadistas, operacoes de manutencao, infraestrutura e montagem.",
    primaryCta: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    context: "Ambientes atacadistas podem reunir grandes areas de operacao, estruturas elevadas, iluminacao, instalacoes eletricas e comunicacao visual.",
    needs: ["Altura aproximada", "Local da atividade", "Acessos disponiveis", "Obstaculos", "Periodo de utilizacao", "Alcance horizontal"],
    solutions: ["Plataformas tesoura", "Plataformas articuladas", "Locacao diaria, semanal ou mensal"],
    applications: ["Manutencao de iluminacao", "Instalacoes eletricas", "Manutencao de infraestrutura", "Comunicacao visual", "Inspecoes", "Montagens"],
    differentials: ["Entrega e retirada proprias", "Suporte tecnico durante a locacao", "Auxilio na escolha"],
    relatedCategories: ["plataformas-tesoura", "plataformas-articuladas"],
    contentSections: [
      {
        eyebrow: "Operacao",
        title: "Acesso elevado em instalacoes de grande porte",
        description: "Trabalhos em pontos elevados exigem que altura, circulacao, obstaculos e posicionamento sejam considerados na escolha da plataforma.",
      },
      {
        eyebrow: "Aplicacoes",
        title: "Aplicacoes em ambientes atacadistas",
        items: ["Manutencao de iluminacao", "Instalacoes eletricas", "Manutencao de infraestrutura", "Comunicacao visual", "Inspecoes", "Montagens", "Manutencao de estruturas e instalacoes elevadas"],
      },
      {
        eyebrow: "Categorias",
        title: "Tesoura ou articulada em atacados",
        items: [
          {
            title: "Quando considerar uma plataforma tesoura?",
            description: "Para pontos de trabalho acessiveis verticalmente, plataformas tesoura podem oferecer area elevada para operador, ferramentas e materiais.",
            cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/" },
          },
          {
            title: "Quando considerar uma plataforma articulada?",
            description: "Quando existem obstaculos ou o ponto de execucao exige alcance lateral, plataformas articuladas permitem combinar elevacao e alcance horizontal.",
            cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/" },
          },
        ],
      },
      {
        eyebrow: "Locacao",
        title: "Locacao diaria, semanal ou mensal",
        description: "O periodo pode ser definido de acordo com a duracao da atividade, com entrega e retirada proprias e suporte tecnico durante a locacao.",
        cta: { label: "Conhecer locacao", href: "/locacao-de-plataformas-elevatorias/" },
      },
    ],
    faq: [
      {
        question: "Atacados precisam sempre de plataformas maiores?",
        answer: "Nao necessariamente. A escolha depende da altura, acessos, obstaculos, espaco e atividade.",
      },
      {
        question: "Como informar a necessidade?",
        answer: "Informe altura aproximada, local da atividade, acessos disponiveis, obstaculos, periodo e necessidade de alcance horizontal.",
      },
      {
        question: "A Accesslift ajuda na avaliacao?",
        answer: "Sim. A equipe pode auxiliar na identificacao das opcoes quando as informacoes da operacao sao enviadas.",
      },
    ],
    finalCta: {
      title: "Precisa de uma plataforma elevatoria para sua operacao?",
      description: "Conte para a Accesslift onde sera realizado o trabalho e quais sao as principais caracteristicas da necessidade.",
      primary: { label: "Solicitar orcamento", href: "/solicite-orcamento/" },
    },
    seo: {
      h1: "Plataformas Elevatorias para Atacados",
      title: "Plataformas Elevatorias para Atacados | Accesslift",
      description: "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em atacados. Conheca opcoes tesoura e articuladas para locacao.",
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
