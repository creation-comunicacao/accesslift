import type { PageSeo } from "../types/routes";

export type InstitutionalPageConfig = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  sections: Array<{
    title: string;
    description: string;
    items?: string[];
  }>;
  seo: PageSeo & { h1: string };
  referenceLink?: {
    label: string;
    href: string;
  };
};

export type ClientProof = {
  name: string;
  logoUrl: string | null;
  testimonial: string | null;
  caseSummary: string | null;
  referenceUrl: string | null;
};

export const clientProofs: ClientProof[] = [
  { name: "Lorenzetti", logoUrl: null, testimonial: null, caseSummary: null, referenceUrl: null },
  { name: "Assai", logoUrl: null, testimonial: null, caseSummary: null, referenceUrl: null },
  { name: "Atacadao", logoUrl: null, testimonial: null, caseSummary: null, referenceUrl: null },
  { name: "Claro", logoUrl: null, testimonial: null, caseSummary: null, referenceUrl: null },
  { name: "EZTEC", logoUrl: null, testimonial: null, caseSummary: null, referenceUrl: null },
];

export const institutionalPages: InstitutionalPageConfig[] = [
  {
    path: "/empresa/",
    eyebrow: "Institucional",
    title: "Accesslift: especialistas em plataformas elevatorias",
    description:
      "Conheca a Accesslift, sua atuacao em Sao Paulo e a estrutura de atendimento para operacoes em altura.",
    sections: [
      {
        title: "Historia",
        description:
          "Espaco reservado para historia oficial da Accesslift quando o conteudo institucional for validado.",
      },
      {
        title: "Proposta",
        description:
          "Locacao de plataformas elevatorias com frota eletrica, atendimento comercial e suporte para a operacao.",
      },
      {
        title: "Experiencia",
        description: "12 anos de experiencia no setor, conforme informacao aprovada no documento mestre.",
      },
      {
        title: "Atuacao",
        description:
          "Sao Paulo e regioes em raio de ate 150 km da base, conforme escopo definido no blueprint.",
      },
      {
        title: "Servicos e equipamentos",
        description:
          "Estrutura conectada ao catalogo dinamico e aos servicos previstos na V2.",
        items: ["Locacao", "Entrega e retirada", "Assistencia", "Manutencao", "Treinamento"],
      },
    ],
    seo: {
      h1: "Accesslift: Especialistas em Plataformas Elevatorias",
      title: "Accesslift | Locacao de Plataformas Elevatorias em SP",
      description: "Conheca a Accesslift, empresa com 12 anos de experiencia em locacao de plataformas elevatorias, assistencia tecnica e suporte em Sao Paulo.",
      canonicalPath: "/empresa/",
    },
  },
  {
    path: "/area-de-atendimento/",
    eyebrow: "Area de atendimento",
    title: "Locacao de Plataformas Elevatorias em Sao Paulo e Regiao",
    description:
      "Pagina estrutural para comunicar atendimento em Sao Paulo e regioes em raio de ate 150 km da base.",
    sections: [
      {
        title: "Cobertura comunicada",
        description: "Sao Paulo e regioes em raio de ate 150 km da base.",
      },
      {
        title: "Sem paginas automaticas",
        description:
          "Esta pagina nao cria paginas SEO por cidade, bairro ou combinacoes de filtros.",
      },
    ],
    seo: {
      h1: "Locacao de Plataformas Elevatorias em Sao Paulo e Regiao",
      title: "Locacao de Plataformas Elevatorias em Sao Paulo | Accesslift",
      description: "Locacao de plataformas elevatorias em Sao Paulo e regiao, com entrega, retirada e suporte. Consulte atendimento na sua cidade.",
      canonicalPath: "/area-de-atendimento/",
    },
  },
  {
    path: "/seguranca-e-nr35/",
    eyebrow: "Seguranca",
    title: "Seguranca e NR-35",
    description:
      "Pagina preparada para conteudos de seguranca, orientacao, treinamento e NR-35 sem declarar certificacoes nao fornecidas.",
    sections: [
      {
        title: "Seguranca",
        description:
          "Espaco para conteudo validado sobre boas praticas, orientacoes e uso correto de plataformas elevatorias.",
      },
      {
        title: "Treinamento e orientacao",
        description:
          "Estrutura preparada para explicar treinamentos e orientacoes quando as informacoes oficiais forem fornecidas.",
      },
      {
        title: "NR-35",
        description:
          "Base editorial para conteudo sobre NR-35, sem inventar conformidades, certificacoes ou escopos.",
      },
    ],
    seo: {
      h1: "Plataformas Elevatorias e NR-35",
      title: "NR-35 e Plataformas Elevatorias para Trabalho em Altura | Accesslift",
      description: "Entenda a relacao entre NR-35, trabalho em altura e plataformas elevatorias. Conheca equipamentos disponiveis para locacao.",
      canonicalPath: "/seguranca-e-nr35/",
    },
    referenceLink: {
      label: "Consultar a NR-35 no portal oficial do Ministerio do Trabalho e Emprego",
      href: "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-35-atualizada-2025.pdf",
    },
  },
];

export const clientsPageSeo: PageSeo & { h1: string } = {
  h1: "Clientes Accesslift",
  title: "Clientes | Accesslift",
  description: "Estrutura para clientes, depoimentos e cases Accesslift.",
  canonicalPath: "/clientes/",
  indexDirective: "noindex",
};

export const findInstitutionalPage = (path: string) =>
  institutionalPages.find((page) => page.path === path);
