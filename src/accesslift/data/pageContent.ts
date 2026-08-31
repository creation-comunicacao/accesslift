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
  contentSections?: Array<{
    title: string;
    description?: string;
    eyebrow?: string;
    items?: Array<string | ContentItem>;
    cta?: CtaLink;
  }>;
  faq: FaqItem[];
  faqSchemaEligible?: boolean;
  finalCta?: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary?: CtaLink;
  };
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
