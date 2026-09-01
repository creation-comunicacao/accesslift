export type Segment = {
  slug: string;
  title: string;
  summary: string;
  href: string;
};

export const segments: Segment[] = [
  {
    slug: "industria",
    title: "Industria",
    summary: "Manutencao, instalacoes, inspecoes e intervencoes em estruturas industriais.",
    href: "/segmentos/industria/",
  },
  {
    slug: "construcao-civil",
    title: "Construcao civil",
    summary: "Acesso elevado para instalacoes, montagens, acabamentos e diferentes etapas da obra.",
    href: "/segmentos/construcao-civil/",
  },
  {
    slug: "supermercados-e-hipermercados",
    title: "Supermercados e hipermercados",
    summary: "Manutencao, iluminacao, infraestrutura e comunicacao visual em grandes ambientes comerciais.",
    href: "/segmentos/supermercados-e-hipermercados/",
  },
  {
    slug: "atacados",
    title: "Atacados",
    summary: "Trabalhos em altura em grandes instalacoes atacadistas, infraestrutura e manutencao.",
    href: "/segmentos/atacados/",
  },
];
