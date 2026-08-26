export type Segment = {
  slug: string;
  title: string;
  summary: string;
};

export const segments: Segment[] = [
  {
    slug: "construcao-civil",
    title: "Construcao civil",
    summary: "Aplicacoes e conteudo do segmento serao administraveis.",
  },
  {
    slug: "industria",
    title: "Industria",
    summary: "Estrutura preparada para demandas industriais.",
  },
  {
    slug: "supermercados",
    title: "Supermercados",
    summary: "Estrutura preparada para operacoes em varejo alimentar.",
  },
  {
    slug: "atacados",
    title: "Atacados",
    summary: "Estrutura preparada para operacoes atacadistas.",
  },
];
