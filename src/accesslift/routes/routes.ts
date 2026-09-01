import type { AppRoute } from "../types/routes";

export const MAIN_ROUTES: AppRoute[] = [
  {
    path: "/",
    label: "Inicio",
    kind: "home",
    seo: {
      title: "Locação de Plataformas Elevatórias em SP | Accesslift",
      description:
        "Locação de plataformas elevatórias tesoura e articuladas em São Paulo. Frota elétrica, entrega própria e suporte técnico Accesslift. Solicite um orçamento.",
      canonicalPath: "/",
    },
  },
  {
    path: "/plataformas-elevatorias/",
    label: "Plataformas Elevatorias",
    kind: "catalog",
    seo: {
      title: "Plataformas Elevatorias: Tesoura e Articulada | Accesslift",
      description: "Conheca plataformas elevatorias tesoura e articuladas, entenda suas aplicacoes e encontre equipamentos para trabalhos em altura.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas-elevatorias/",
    label: "Locacao de Plataformas",
    kind: "static",
    seo: {
      title: "Locacao de Plataformas Elevatorias | Accesslift",
      description: "Locacao de plataformas elevatorias tesoura e articuladas em Sao Paulo. Diarias, semanais ou mensais, com entrega propria e suporte tecnico.",
      canonicalPath: "/locacao-de-plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas/",
    label: "Locacao de Plataformas",
    kind: "static",
    isAlias: true,
    seo: {
      title: "Locacao de plataformas elevatorias | Accesslift",
      description: "Rota temporaria da V2. Consulte a pagina canonica de locacao.",
      canonicalPath: "/locacao-de-plataformas-elevatorias/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/plataformas-tesoura/",
    label: "Plataformas Tesoura",
    kind: "category",
    parentPath: "/plataformas-elevatorias/",
    seo: {
      title: "Plataforma Tesoura: Modelos e Locacao | Accesslift",
      description: "Conheca plataformas elevatorias tesoura para locacao, compare alturas e capacidades e encontre o modelo adequado para sua operacao.",
      canonicalPath: "/plataformas-tesoura/",
    },
  },
  {
    path: "/plataformas-articuladas/",
    label: "Plataformas Articuladas",
    kind: "category",
    parentPath: "/plataformas-elevatorias/",
    seo: {
      title: "Plataforma Articulada: Modelos e Locacao | Accesslift",
      description: "Conheca plataformas elevatorias articuladas para locacao, compare altura e alcance e encontre equipamentos para trabalhos em pontos de dificil acesso.",
      canonicalPath: "/plataformas-articuladas/",
    },
  },
  {
    path: "/equipamentos/",
    label: "Equipamentos",
    kind: "equipment",
    seo: {
      title: "Plataformas Elevatorias para Locacao | Accesslift",
      description: "Conheca as plataformas elevatorias Accesslift para locacao. Compare modelos tesoura e articulados por marca, altura de trabalho e capacidade.",
      canonicalPath: "/equipamentos/",
    },
  },
  {
    path: "/servicos/",
    label: "Servicos",
    kind: "service",
    seo: {
      title: "Servicos para Plataformas Elevatorias | Accesslift",
      description: "Conheca a estrutura de suporte Accesslift: assistencia tecnica propria, manutencao preventiva, atendimento emergencial e treinamento de operadores.",
      canonicalPath: "/servicos/",
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    label: "Assistencia Tecnica",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Assistencia Tecnica de Plataformas Elevatorias | Accesslift",
      description: "Assistencia tecnica propria para plataformas elevatorias da operacao Accesslift, com suporte durante a locacao e atendimento a ocorrencias tecnicas.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    label: "Manutencao Preventiva",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Manutencao de Plataformas Elevatorias | Accesslift",
      description: "Conheca a estrutura de manutencao preventiva da Accesslift para plataformas elevatorias e sua integracao com a operacao de locacao.",
      canonicalPath: "/servicos/manutencao-preventiva/",
    },
  },
  {
    path: "/servicos/treinamento-de-operadores/",
    label: "Treinamento de Operadores",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Treinamento para Operadores de Plataformas | Accesslift",
      description: "Treinamento para operadores de plataformas elevatorias com orientacao sobre equipamentos, comandos, limites e cuidados durante a operacao.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
  },
  {
    path: "/segmentos-e-aplicacoes/",
    label: "Segmentos e Aplicacoes",
    kind: "segment",
    seo: {
      title: "Plataformas Elevatorias para Diferentes Aplicacoes | Accesslift",
      description: "Plataformas elevatorias para industria, construcao civil, supermercados, hipermercados e atacados. Conheca aplicacoes e encontre o equipamento adequado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    label: "Construcao Civil",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatorias para Construcao Civil | Accesslift",
      description: "Plataformas elevatorias para construcao civil, instalacoes, montagens e trabalhos em altura. Consulte modelos tesoura e articulados para locacao.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
  },
  {
    path: "/segmentos/industria/",
    label: "Industria",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatorias para Industria | Accesslift",
      description: "Plataformas elevatorias para trabalhos industriais em altura, manutencao, instalacoes e montagens. Consulte equipamentos para locacao.",
      canonicalPath: "/segmentos/industria/",
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    label: "Supermercados e Hipermercados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatorias para Supermercados | Accesslift",
      description: "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em supermercados e hipermercados. Consulte opcoes para locacao.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
    },
  },
  {
    path: "/segmentos/atacados/",
    label: "Atacados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatorias para Atacados | Accesslift",
      description: "Plataformas elevatorias para manutencao, instalacoes e trabalhos em altura em atacados. Conheca opcoes tesoura e articuladas para locacao.",
      canonicalPath: "/segmentos/atacados/",
    },
  },
  {
    path: "/empresa/",
    label: "Empresa",
    kind: "static",
    seo: {
      title: "Accesslift | Locacao de Plataformas Elevatorias em SP",
      description: "Conheca a Accesslift, empresa com 12 anos de atuacao em locacao de plataformas elevatorias, suporte tecnico, manutencao e atendimento em Sao Paulo e regiao.",
      canonicalPath: "/empresa/",
    },
  },
  {
    path: "/clientes/",
    label: "Clientes",
    kind: "static",
    seo: {
      title: "Clientes | Accesslift",
      description: "Estrutura para clientes e provas de confianca Accesslift.",
      canonicalPath: "/clientes/",
    },
  },
  {
    path: "/area-de-atendimento/",
    label: "Area de Atendimento",
    kind: "static",
    seo: {
      title: "Locacao de Plataformas Elevatorias em Sao Paulo | Accesslift",
      description: "Locacao de plataformas elevatorias em Sao Paulo e regiao, com atendimento em um raio de ate 150 km da base Accesslift. Consulte sua cidade.",
      canonicalPath: "/area-de-atendimento/",
    },
  },
  {
    path: "/seguranca-e-nr35/",
    label: "Seguranca e NR35",
    kind: "static",
    seo: {
      title: "NR-35 e Plataformas Elevatorias para Trabalho em Altura | Accesslift",
      description: "Entenda a relacao entre NR-35, trabalho em altura e utilizacao de plataformas elevatorias. Consulte equipamentos, documentacao e suporte Accesslift.",
      canonicalPath: "/seguranca-e-nr35/",
    },
  },
  {
    path: "/blog/",
    label: "Blog",
    kind: "blog",
    seo: {
      title: "Blog | Accesslift",
      description: "Base preparada para conteudo administravel e artigos Accesslift.",
      canonicalPath: "/blog/",
    },
  },
  {
    path: "/contato/",
    label: "Contato",
    kind: "contact",
    seo: {
      title: "Contato | Accesslift Plataformas Elevatorias",
      description: "Fale com a Accesslift para locacao, orcamento e suporte a plataformas elevatorias.",
      canonicalPath: "/contato/",
    },
  },
  {
    path: "/solicite-orcamento/",
    label: "Orcamento",
    kind: "quote",
    seo: {
      title: "Orcamento de Plataforma Elevatoria | Accesslift",
      description: "Solicite orcamento para locacao de plataforma elevatoria tesoura ou articulada em Sao Paulo e regiao. A equipe Accesslift pode auxiliar na escolha.",
      canonicalPath: "/solicite-orcamento/",
    },
  },
  {
    path: "/trabalhe-conosco/",
    label: "Trabalhe Conosco",
    kind: "static",
    seo: {
      title: "Trabalhe Conosco | Accesslift",
      description: "Envie seu curriculo para a Accesslift e registre seu interesse em futuras oportunidades profissionais.",
      canonicalPath: "/trabalhe-conosco/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/politica-de-privacidade/",
    label: "Politica de Privacidade",
    kind: "static",
    seo: {
      title: "Politica de Privacidade | Accesslift",
      description: "Politica de privacidade da Accesslift.",
      canonicalPath: "/politica-de-privacidade/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/sobre-a-accesslift/",
    label: "Empresa",
    kind: "static",
    isAlias: true,
    seo: {
      title: "Accesslift | Locacao de Plataformas Elevatorias em SP",
      description: "Rota temporaria da V2. Consulte a pagina institucional canonica.",
      canonicalPath: "/empresa/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/orcamento/",
    label: "Orcamento",
    kind: "quote",
    isAlias: true,
    seo: {
      title: "Orcamento de Plataforma Elevatoria | Accesslift",
      description: "Rota temporaria da V2. Consulte a pagina canonica de orcamento.",
      canonicalPath: "/solicite-orcamento/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/segmentos/supermercados/",
    label: "Supermercados e Hipermercados",
    kind: "segment",
    isAlias: true,
    seo: {
      title: "Plataformas para Supermercados e Hipermercados | Accesslift",
      description: "Rota temporaria da V2. Consulte a pagina canonica do segmento.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/venda-de-plataformas/",
    label: "Venda de Plataformas",
    kind: "static",
    isAlias: true,
    seo: {
      title: "Venda de plataformas elevatorias | Accesslift",
      description: "Pagina complementar de venda, sem destaque na navegacao principal.",
      canonicalPath: "/venda-de-plataformas/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/entrega-e-retirada/",
    label: "Entrega e Retirada",
    kind: "service",
    isAlias: true,
    seo: {
      title: "Entrega e retirada de plataformas | Accesslift",
      description: "Servico integrado ao pilar de suporte da Accesslift.",
      canonicalPath: "/servicos/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/servicos/atendimento-emergencial/",
    label: "Atendimento Emergencial",
    kind: "service",
    isAlias: true,
    seo: {
      title: "Atendimento emergencial | Accesslift",
      description: "Servico integrado a assistencia tecnica da Accesslift.",
      canonicalPath: "/servicos/assistencia-tecnica/",
      indexDirective: "noindex",
    },
  },
];

export const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "/";
  }

  const withoutHash = path.split("#")[0]?.split("?")[0] || "/";
  return withoutHash.endsWith("/") ? withoutHash : `${withoutHash}/`;
};

export const findRouteByPath = (path: string) =>
  MAIN_ROUTES.find((route) => route.path === normalizePath(path));

export const primaryNavigation = MAIN_ROUTES.filter((route) =>
  [
    "/plataformas-elevatorias/",
    "/locacao-de-plataformas-elevatorias/",
    "/servicos/",
    "/segmentos-e-aplicacoes/",
    "/empresa/",
    "/contato/",
  ].includes(route.path),
);
