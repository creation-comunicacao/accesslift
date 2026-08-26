import type { AppRoute } from "../types/routes";

const seoDescription =
  "Accesslift: locacao, venda e suporte para plataformas elevatorias em Sao Paulo e regioes atendidas.";

export const MAIN_ROUTES: AppRoute[] = [
  {
    path: "/",
    label: "Inicio",
    kind: "home",
    seo: {
      title: "Plataformas elevatorias para locacao e venda | Accesslift",
      description:
        "Locacao e venda de plataformas elevatorias tesoura e articuladas, com entrega propria, assistencia tecnica e suporte em Sao Paulo e regiao.",
      canonicalPath: "/",
    },
  },
  {
    path: "/plataformas-elevatorias/",
    label: "Plataformas Elevatorias",
    kind: "catalog",
    seo: {
      title: "Plataformas elevatorias | Accesslift",
      description: "Catalogo preparado para plataformas elevatorias de locacao e venda.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas/",
    label: "Locacao de Plataformas",
    kind: "static",
    seo: {
      title: "Locacao de plataformas elevatorias | Accesslift",
      description: "Locacao diaria, semanal e mensal de plataformas elevatorias.",
      canonicalPath: "/locacao-de-plataformas/",
    },
  },
  {
    path: "/venda-de-plataformas/",
    label: "Venda de Plataformas",
    kind: "static",
    seo: {
      title: "Venda de plataformas elevatorias | Accesslift",
      description: "Venda de plataformas elevatorias com atendimento comercial especializado.",
      canonicalPath: "/venda-de-plataformas/",
    },
  },
  {
    path: "/plataformas-tesoura/",
    label: "Plataformas Tesoura",
    kind: "category",
    parentPath: "/plataformas-elevatorias/",
    seo: {
      title: "Plataformas tesoura | Accesslift",
      description: "Categoria preparada para catalogo de plataformas tesoura.",
      canonicalPath: "/plataformas-tesoura/",
    },
  },
  {
    path: "/plataformas-articuladas/",
    label: "Plataformas Articuladas",
    kind: "category",
    parentPath: "/plataformas-elevatorias/",
    seo: {
      title: "Plataformas articuladas | Accesslift",
      description: "Categoria preparada para catalogo de plataformas articuladas.",
      canonicalPath: "/plataformas-articuladas/",
    },
  },
  {
    path: "/equipamentos/",
    label: "Equipamentos",
    kind: "equipment",
    seo: {
      title: "Equipamentos | Accesslift",
      description: "Estrutura de catalogo dinamico para equipamentos Accesslift.",
      canonicalPath: "/equipamentos/",
    },
  },
  {
    path: "/servicos/",
    label: "Servicos",
    kind: "service",
    seo: {
      title: "Servicos | Accesslift",
      description: "Entrega, retirada, assistencia tecnica, manutencao e treinamento.",
      canonicalPath: "/servicos/",
    },
  },
  {
    path: "/servicos/entrega-e-retirada/",
    label: "Entrega e Retirada",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Entrega e retirada de plataformas | Accesslift",
      description: "Servico de entrega e retirada para plataformas elevatorias.",
      canonicalPath: "/servicos/entrega-e-retirada/",
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    label: "Assistencia Tecnica",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Assistencia tecnica | Accesslift",
      description: "Assistencia tecnica para operacao com plataformas elevatorias.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    label: "Manutencao Preventiva",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Manutencao preventiva | Accesslift",
      description: "Manutencao preventiva para apoiar disponibilidade operacional.",
      canonicalPath: "/servicos/manutencao-preventiva/",
    },
  },
  {
    path: "/servicos/atendimento-emergencial/",
    label: "Atendimento Emergencial",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Atendimento emergencial | Accesslift",
      description: "Atendimento emergencial para demandas de plataformas elevatorias.",
      canonicalPath: "/servicos/atendimento-emergencial/",
    },
  },
  {
    path: "/servicos/treinamento-de-operadores/",
    label: "Treinamento de Operadores",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Treinamento de operadores | Accesslift",
      description: "Treinamento de operadores para uso correto de plataformas elevatorias.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
  },
  {
    path: "/segmentos-e-aplicacoes/",
    label: "Segmentos e Aplicacoes",
    kind: "segment",
    seo: {
      title: "Segmentos e aplicacoes | Accesslift",
      description: "Aplicacoes de plataformas elevatorias por segmento de mercado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    label: "Construcao Civil",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas para construcao civil | Accesslift",
      description: "Estrutura de pagina para aplicacoes em construcao civil.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
  },
  {
    path: "/segmentos/industria/",
    label: "Industria",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas para industria | Accesslift",
      description: "Estrutura de pagina para aplicacoes industriais.",
      canonicalPath: "/segmentos/industria/",
    },
  },
  {
    path: "/segmentos/supermercados/",
    label: "Supermercados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas para supermercados | Accesslift",
      description: "Estrutura de pagina para aplicacoes em supermercados.",
      canonicalPath: "/segmentos/supermercados/",
    },
  },
  {
    path: "/segmentos/atacados/",
    label: "Atacados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas para atacados | Accesslift",
      description: "Estrutura de pagina para aplicacoes em atacados.",
      canonicalPath: "/segmentos/atacados/",
    },
  },
  {
    path: "/sobre-a-accesslift/",
    label: "Sobre a Accesslift",
    kind: "static",
    seo: {
      title: "Sobre a Accesslift",
      description: "Pagina institucional preparada para a nova versao do site Accesslift.",
      canonicalPath: "/sobre-a-accesslift/",
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
      title: "Area de atendimento | Accesslift",
      description: "Atendimento em Sao Paulo e regioes em raio de ate 150 km da base.",
      canonicalPath: "/area-de-atendimento/",
    },
  },
  {
    path: "/seguranca-e-nr35/",
    label: "Seguranca e NR35",
    kind: "static",
    seo: {
      title: "Seguranca e NR35 | Accesslift",
      description: "Estrutura para conteudo de seguranca e NR35.",
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
      title: "Contato | Accesslift",
      description: "Canais de contato Accesslift.",
      canonicalPath: "/contato/",
    },
  },
  {
    path: "/orcamento/",
    label: "Orcamento",
    kind: "quote",
    seo: {
      title: "Solicitar orcamento | Accesslift",
      description: "Solicite orcamento para locacao ou venda de plataformas elevatorias.",
      canonicalPath: "/orcamento/",
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
    "/locacao-de-plataformas/",
    "/venda-de-plataformas/",
    "/servicos/",
    "/segmentos-e-aplicacoes/",
    "/area-de-atendimento/",
    "/blog/",
  ].includes(route.path),
);
