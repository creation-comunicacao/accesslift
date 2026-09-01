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
    title: "Accesslift: Plataforma Certa, Atendimento Proximo e Suporte para a Operacao",
    description:
      "Ha 12 anos, a Accesslift atua com locacao de plataformas elevatorias para empresas que precisam realizar trabalhos em altura com equipamentos adequados as caracteristicas de cada operacao.",
    sections: [
      {
        title: "Quem somos",
        description:
          "A Accesslift atua no mercado de plataformas elevatorias atendendo operacoes em Sao Paulo e regiao. A locacao e o principal eixo da empresa, com frota composta por plataformas tesoura e articuladas de diferentes alturas, dimensoes e capacidades.",
      },
      {
        title: "12 anos",
        description:
          "Ao longo de sua trajetoria, a Accesslift passou a atender empresas de diferentes portes e segmentos, desenvolvendo uma operacao voltada a disponibilizacao do equipamento e ao suporte durante a locacao.",
      },
      {
        title: "Estrutura",
        description:
          "A estrutura Accesslift integra logistica, assistencia tecnica, manutencao preventiva, suporte emergencial e treinamento de operadores.",
        items: ["Locacao", "Entrega e retirada proprias", "Assistencia tecnica propria", "Manutencao preventiva", "Atendimento emergencial", "Treinamento de operadores"],
      },
      {
        title: "Frota",
        description:
          "A frota Accesslift reune equipamentos eletricos de marcas reconhecidas, com diferentes caracteristicas de altura, dimensoes, capacidade e alcance.",
        items: ["JLG", "Genie", "Skyjack", "Zoomlion"],
      },
      {
        title: "Segmentos",
        description:
          "A Accesslift atende empresas e projetos em industria, construcao civil, supermercados, hipermercados e atacados. Cada ambiente apresenta necessidades diferentes de acesso em altura.",
        items: ["Industria", "Construcao civil", "Supermercados e hipermercados", "Atacados"],
      },
      {
        title: "Atuacao",
        description:
          "Atendimento em Sao Paulo e municipios dentro de um raio de ate 150 km da base, conforme disponibilidade e condicoes da operacao.",
      },
    ],
    seo: {
      h1: "Accesslift: Plataforma Certa, Atendimento Proximo e Suporte para a Operacao",
      title: "Accesslift | Locacao de Plataformas Elevatorias em SP",
      description: "Conheca a Accesslift, empresa com 12 anos de atuacao em locacao de plataformas elevatorias, suporte tecnico, manutencao e atendimento em Sao Paulo e regiao.",
      canonicalPath: "/empresa/",
    },
  },
  {
    path: "/area-de-atendimento/",
    eyebrow: "Area de atendimento",
    title: "Locacao de Plataformas Elevatorias em Sao Paulo e Regiao",
    description:
      "Atendimento a operacoes em Sao Paulo e municipios dentro de um raio de ate 150 km da base Accesslift, conforme disponibilidade e condicoes da operacao.",
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
    title: "NR-35 e Plataformas Elevatorias no Trabalho em Altura",
    description:
      "A utilizacao de plataformas elevatorias faz parte de operacoes que exigem planejamento, capacitacao e avaliacao dos requisitos aplicaveis ao trabalho em altura.",
    sections: [
      {
        title: "Contexto",
        description:
          "A NR-35 estabelece requisitos relacionados ao trabalho em altura dentro de seu campo de aplicacao. A escolha de uma plataforma elevatoria e uma parte desse planejamento, mas nao substitui as demais responsabilidades relacionadas a execucao segura da atividade.",
      },
      {
        title: "Equipamento nao e a norma",
        description:
          "A locacao de um equipamento adequado a altura e ao acesso necessarios nao significa, por si so, que todos os requisitos aplicaveis ao trabalho em altura estejam atendidos.",
      },
      {
        title: "Treinamento",
        description:
          "Treinamento de operador e NR-35 possuem objetivos e escopos diferentes. A orientacao relacionada a plataforma nao deve ser apresentada automaticamente como substituto de requisitos da atividade.",
      },
      {
        title: "Documentacao tecnica",
        description:
          "As paginas individuais dos equipamentos apresentam especificacoes e podem disponibilizar ficha tecnica e manual quando a documentacao correspondente estiver validada.",
      },
      {
        title: "Escolha do equipamento",
        description:
          "A escolha deve considerar altura de trabalho, alcance horizontal quando necessario, capacidade, dimensoes, acessos, obstaculos, piso e caracteristicas da atividade.",
      },
    ],
    seo: {
      h1: "NR-35 e Plataformas Elevatorias no Trabalho em Altura",
      title: "NR-35 e Plataformas Elevatorias para Trabalho em Altura | Accesslift",
      description: "Entenda a relacao entre NR-35, trabalho em altura e utilizacao de plataformas elevatorias. Consulte equipamentos, documentacao e suporte Accesslift.",
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
