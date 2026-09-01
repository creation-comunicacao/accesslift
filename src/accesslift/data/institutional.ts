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
    title: "Accesslift: Plataforma Certa, Atendimento Proximo e Suporte para a Operação",
    description:
      "Ha 12 anos, a Accesslift atua com locação de plataformas elevatórias para empresas que precisam realizar trabalhos em altura com equipamentos adequados as características de cada operação.",
    sections: [
      {
        title: "Quem somos",
        description:
          "A Accesslift atua no mercado de plataformas elevatórias atendendo operações em São Paulo e região. A locação e o principal eixo da empresa, com frota composta por plataformas tesoura e articuladas de diferentes alturas, dimensões e capacidades.",
      },
      {
        title: "12 anos",
        description:
          "Ao longo de sua trajetória, a Accesslift passou a atender empresas de diferentes portes e segmentos, desenvolvendo uma operação voltada a disponibilização do equipamento e ao suporte durante a locação.",
      },
      {
        title: "Estrutura",
        description:
          "A estrutura Accesslift integra logística, assistência técnica, manutenção preventiva, suporte emergencial e treinamento de operadores.",
        items: ["Locação", "Entrega e retirada próprias", "Assistência técnica própria", "Manutenção preventiva", "Atendimento emergencial", "Treinamento de operadores"],
      },
      {
        title: "Frota",
        description:
          "A frota Accesslift reúne equipamentos elétricos de marcas reconhecidas, com diferentes características de altura, dimensões, capacidade e alcance.",
        items: ["JLG", "Genie", "Skyjack", "Zoomlion"],
      },
      {
        title: "Segmentos",
        description:
          "A Accesslift atende empresas e projetos em indústria, construção civil, supermercados, hipermercados e atacados. Cada ambiente apresenta necessidades diferentes de acesso em altura.",
        items: ["Indústria", "Construção civil", "Supermercados e hipermercados", "Atacados"],
      },
      {
        title: "Atuação",
        description:
          "Atendimento em São Paulo e municípios dentro de um raio de até 150 km da base, conforme disponibilidade e condições da operação.",
      },
    ],
    seo: {
      h1: "Accesslift: Plataforma Certa, Atendimento Proximo e Suporte para a Operação",
      title: "Accesslift | Locação de Plataformas Elevatórias em SP",
      description: "Conheça a Accesslift, empresa com 12 anos de atuação em locação de plataformas elevatórias, suporte técnico, manutenção e atendimento em São Paulo e região.",
      canonicalPath: "/empresa/",
    },
  },
  {
    path: "/area-de-atendimento/",
    eyebrow: "Área de atendimento",
    title: "Locação de Plataformas Elevatórias em São Paulo e Região",
    description:
      "Atendimento a operações em São Paulo e municípios dentro de um raio de até 150 km da base Accesslift, conforme disponibilidade e condições da operação.",
    sections: [
      {
        title: "Cobertura comunicada",
        description: "São Paulo e regiões em raio de até 150 km da base.",
      },
      {
        title: "Sem paginas automaticas",
        description:
          "Esta página não cria paginas SEO por cidade, bairro ou combinacoes de filtros.",
      },
    ],
    seo: {
      h1: "Locação de Plataformas Elevatórias em São Paulo e Região",
      title: "Locação de Plataformas Elevatórias em São Paulo | Accesslift",
      description: "Locação de plataformas elevatórias em São Paulo e região, com entrega, retirada e suporte. Consulte atendimento na sua cidade.",
      canonicalPath: "/area-de-atendimento/",
    },
  },
  {
    path: "/seguranca-e-nr35/",
    eyebrow: "Segurança",
    title: "NR-35 e Plataformas Elevatórias no Trabalho em Altura",
    description:
      "A utilização de plataformas elevatórias faz parte de operações que exigem planejamento, capacitação e avaliação dos requisitos aplicáveis ao trabalho em altura.",
    sections: [
      {
        title: "Contexto",
        description:
          "A NR-35 estabelece requisitos relacionados ao trabalho em altura dentro de seu campo de aplicacao. A escolha de uma plataforma elevatória e uma parte desse planejamento, mas não substitui as demais responsabilidades relacionadas a execução segura da atividade.",
      },
      {
        title: "Equipamento não e a norma",
        description:
          "A locação de um equipamento adequado a altura e ao acesso necessários não significa, por si so, que todos os requisitos aplicáveis ao trabalho em altura estejam atendidos.",
      },
      {
        title: "Treinamento",
        description:
          "Treinamento de operador e NR-35 possuem objetivos e escopos diferentes. A orientação relacionada a plataforma não deve ser apresentada automaticamente como substituto de requisitos da atividade.",
      },
      {
        title: "Documentação técnica",
        description:
          "As paginas individuais dos equipamentos apresentam específicações e podem disponibilizar ficha técnica e manual quando a documentação correspondente estiver validada.",
      },
      {
        title: "Escolha do equipamento",
        description:
          "A escolha deve considerar altura de trabalho, alcance horizontal quando necessário, capacidade, dimensões, acessos, obstáculos, piso e características da atividade.",
      },
    ],
    seo: {
      h1: "NR-35 e Plataformas Elevatórias no Trabalho em Altura",
      title: "NR-35 e Plataformas Elevatórias para Trabalho em Altura | Accesslift",
      description: "Entenda a relação entre NR-35, trabalho em altura e utilização de plataformas elevatórias. Consulte equipamentos, documentação e suporte Accesslift.",
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
