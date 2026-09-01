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
    label: "Plataformas Elevatórias",
    kind: "catalog",
    seo: {
      title: "Plataformas Elevatórias: Tesoura e Articulada | Accesslift",
      description: "Conheça plataformas elevatórias tesoura e articuladas, entenda suas aplicações e encontre equipamentos para trabalhos em altura.",
      canonicalPath: "/plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas-elevatorias/",
    label: "Locação de Plataformas",
    kind: "static",
    seo: {
      title: "Locação de Plataformas Elevatórias | Accesslift",
      description: "Locação de plataformas elevatórias tesoura e articuladas em São Paulo. Diárias, semanais ou mensais, com entrega própria e suporte técnico.",
      canonicalPath: "/locacao-de-plataformas-elevatorias/",
    },
  },
  {
    path: "/locacao-de-plataformas/",
    label: "Locação de Plataformas",
    kind: "static",
    isAlias: true,
    seo: {
      title: "Locação de plataformas elevatórias | Accesslift",
      description: "Rota temporaria da V2. Consulte a página canônica de locação.",
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
      title: "Plataforma Tesoura: Modelos e Locação | Accesslift",
      description: "Conheça plataformas elevatórias tesoura para locação, compare alturas e capacidades e encontre o modelo adequado para sua operação.",
      canonicalPath: "/plataformas-tesoura/",
    },
  },
  {
    path: "/plataformas-articuladas/",
    label: "Plataformas Articuladas",
    kind: "category",
    parentPath: "/plataformas-elevatorias/",
    seo: {
      title: "Plataforma Articulada: Modelos e Locação | Accesslift",
      description: "Conheça plataformas elevatórias articuladas para locação, compare altura e alcance e encontre equipamentos para trabalhos em pontos de difícil acesso.",
      canonicalPath: "/plataformas-articuladas/",
    },
  },
  {
    path: "/equipamentos/",
    label: "Equipamentos",
    kind: "equipment",
    seo: {
      title: "Plataformas Elevatórias para Locação | Accesslift",
      description: "Conheça as plataformas elevatórias Accesslift para locação. Compare modelos tesoura e articulados por marca, altura de trabalho e capacidade.",
      canonicalPath: "/equipamentos/",
    },
  },
  {
    path: "/servicos/",
    label: "Serviços",
    kind: "service",
    seo: {
      title: "Serviços para Plataformas Elevatórias | Accesslift",
      description: "Conheça a estrutura de suporte Accesslift: assistência técnica própria, manutenção preventiva, atendimento emergencial e treinamento de operadores.",
      canonicalPath: "/servicos/",
    },
  },
  {
    path: "/servicos/assistencia-tecnica/",
    label: "Assistência Técnica",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Assistência Técnica de Plataformas Elevatórias | Accesslift",
      description: "Assistência técnica própria para plataformas elevatórias da operação Accesslift, com suporte durante a locação e atendimento a ocorrências técnicas.",
      canonicalPath: "/servicos/assistencia-tecnica/",
    },
  },
  {
    path: "/servicos/manutencao-preventiva/",
    label: "Manutenção Preventiva",
    kind: "service",
    parentPath: "/servicos/",
    seo: {
      title: "Manutenção de Plataformas Elevatórias | Accesslift",
      description: "Conheça a estrutura de manutenção preventiva da Accesslift para plataformas elevatórias e sua integração com a operação de locação.",
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
      description: "Treinamento para operadores de plataformas elevatórias com orientação sobre equipamentos, comandos, limites e cuidados durante a operação.",
      canonicalPath: "/servicos/treinamento-de-operadores/",
    },
  },
  {
    path: "/segmentos-e-aplicacoes/",
    label: "Segmentos e Aplicações",
    kind: "segment",
    seo: {
      title: "Plataformas Elevatórias para Diferentes Aplicações | Accesslift",
      description: "Plataformas elevatórias para indústria, construção civil, supermercados, hipermercados e atacados. Conheça aplicações e encontre o equipamento adequado.",
      canonicalPath: "/segmentos-e-aplicacoes/",
    },
  },
  {
    path: "/segmentos/construcao-civil/",
    label: "Construção Civil",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatórias para Construção Civil | Accesslift",
      description: "Plataformas elevatórias para construção civil, instalações, montagens e trabalhos em altura. Consulte modelos tesoura e articulados para locação.",
      canonicalPath: "/segmentos/construcao-civil/",
    },
  },
  {
    path: "/segmentos/industria/",
    label: "Indústria",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatórias para Indústria | Accesslift",
      description: "Plataformas elevatórias para trabalhos industriais em altura, manutenção, instalações e montagens. Consulte equipamentos para locação.",
      canonicalPath: "/segmentos/industria/",
    },
  },
  {
    path: "/segmentos/supermercados-e-hipermercados/",
    label: "Supermercados e Hipermercados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatórias para Supermercados | Accesslift",
      description: "Plataformas elevatórias para manutenção, instalações e trabalhos em altura em supermercados e hipermercados. Consulte opções para locação.",
      canonicalPath: "/segmentos/supermercados-e-hipermercados/",
    },
  },
  {
    path: "/segmentos/atacados/",
    label: "Atacados",
    kind: "segment",
    parentPath: "/segmentos-e-aplicacoes/",
    seo: {
      title: "Plataformas Elevatórias para Atacados | Accesslift",
      description: "Plataformas elevatórias para manutenção, instalações e trabalhos em altura em atacados. Conheça opções tesoura e articuladas para locação.",
      canonicalPath: "/segmentos/atacados/",
    },
  },
  {
    path: "/empresa/",
    label: "Empresa",
    kind: "static",
    seo: {
      title: "Accesslift | Locação de Plataformas Elevatórias em SP",
      description: "Conheça a Accesslift, empresa com 12 anos de atuação em locação de plataformas elevatórias, suporte técnico, manutenção e atendimento em São Paulo e região.",
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
    label: "Área de Atendimento",
    kind: "static",
    seo: {
      title: "Locação de Plataformas Elevatórias em São Paulo | Accesslift",
      description: "Locação de plataformas elevatórias em São Paulo e região, com atendimento em um raio de até 150 km da base Accesslift. Consulte sua cidade.",
      canonicalPath: "/area-de-atendimento/",
    },
  },
  {
    path: "/seguranca-e-nr35/",
    label: "Segurança e NR35",
    kind: "static",
    seo: {
      title: "NR-35 e Plataformas Elevatórias para Trabalho em Altura | Accesslift",
      description: "Entenda a relação entre NR-35, trabalho em altura e utilização de plataformas elevatórias. Consulte equipamentos, documentação e suporte Accesslift.",
      canonicalPath: "/seguranca-e-nr35/",
    },
  },
  {
    path: "/blog/",
    label: "Blog",
    kind: "blog",
    seo: {
      title: "Blog | Accesslift",
      description: "Base preparada para conteúdo administrável e artigos Accesslift.",
      canonicalPath: "/blog/",
    },
  },
  {
    path: "/contato/",
    label: "Contato",
    kind: "contact",
    seo: {
      title: "Contato | Accesslift Plataformas Elevatórias",
      description: "Fale com a Accesslift para locação, orçamento e suporte a plataformas elevatórias.",
      canonicalPath: "/contato/",
    },
  },
  {
    path: "/solicite-orcamento/",
    label: "Orçamento",
    kind: "quote",
    seo: {
      title: "Orçamento de Plataforma Elevatória | Accesslift",
      description: "Solicite orçamento para locação de plataforma elevatória tesoura ou articulada em São Paulo e região. A equipe Accesslift pode auxiliar na escolha.",
      canonicalPath: "/solicite-orcamento/",
    },
  },
  {
    path: "/trabalhe-conosco/",
    label: "Trabalhe Conosco",
    kind: "static",
    seo: {
      title: "Trabalhe Conosco | Accesslift",
      description: "Envie seu currículo para a Accesslift e registre seu interesse em futuras oportunidades profissionais.",
      canonicalPath: "/trabalhe-conosco/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/politica-de-privacidade/",
    label: "Política de Privacidade",
    kind: "static",
    seo: {
      title: "Política de Privacidade | Accesslift",
      description: "Política de privacidade da Accesslift.",
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
      title: "Accesslift | Locação de Plataformas Elevatórias em SP",
      description: "Rota temporaria da V2. Consulte a página institucional canônica.",
      canonicalPath: "/empresa/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/orcamento/",
    label: "Orçamento",
    kind: "quote",
    isAlias: true,
    seo: {
      title: "Orçamento de Plataforma Elevatória | Accesslift",
      description: "Rota temporaria da V2. Consulte a página canônica de orçamento.",
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
      description: "Rota temporaria da V2. Consulte a página canônica do segmento.",
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
      title: "Venda de plataformas elevatórias | Accesslift",
      description: "Página complementar de venda, sem destaque na navegação principal.",
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
      description: "Serviço integrado ao pilar de suporte da Accesslift.",
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
      description: "Serviço integrado a assistência técnica da Accesslift.",
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
