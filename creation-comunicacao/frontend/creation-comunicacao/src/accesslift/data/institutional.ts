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
    path: "/sobre-a-accesslift/",
    eyebrow: "Institucional",
    title: "Sobre a Accesslift",
    description:
      "Estrutura institucional preparada para contar historia, proposta, atuacao e diferenciais sem inventar fatos ainda nao fornecidos.",
    sections: [
      {
        title: "Historia",
        description:
          "Espaco reservado para historia oficial da Accesslift quando o conteudo institucional for validado.",
      },
      {
        title: "Proposta",
        description:
          "Organizar locacao, venda, suporte e atendimento comercial em uma jornada clara para quem precisa operar em altura.",
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
        items: ["Locacao", "Venda", "Entrega e retirada", "Assistencia", "Manutencao", "Treinamento"],
      },
    ],
    seo: {
      h1: "Sobre a Accesslift",
      title: "Sobre a Accesslift",
      description: "Pagina institucional preparada para a nova versao do site Accesslift.",
      canonicalPath: "/sobre-a-accesslift/",
      indexDirective: "noindex",
    },
  },
  {
    path: "/area-de-atendimento/",
    eyebrow: "Area de atendimento",
    title: "Area de atendimento Accesslift",
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
      h1: "Area de atendimento em Sao Paulo",
      title: "Area de atendimento | Accesslift",
      description: "Atendimento em Sao Paulo e regioes em raio de ate 150 km da base.",
      canonicalPath: "/area-de-atendimento/",
      indexDirective: "noindex",
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
      h1: "Seguranca e NR-35",
      title: "Seguranca e NR35 | Accesslift",
      description: "Estrutura para conteudo de seguranca e NR35.",
      canonicalPath: "/seguranca-e-nr35/",
      indexDirective: "noindex",
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
