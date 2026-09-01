export type Segment = {
  slug: string;
  title: string;
  summary: string;
  href: string;
};

export const segments: Segment[] = [
  {
    slug: "industria",
    title: "Indústria",
    summary: "Manutenção, instalações, inspeções e intervenções em estruturas industriais.",
    href: "/segmentos/industria/",
  },
  {
    slug: "construcao-civil",
    title: "Construção civil",
    summary: "Acesso elevado para instalações, montagens, acabamentos e diferentes etapas da obra.",
    href: "/segmentos/construcao-civil/",
  },
  {
    slug: "supermercados-e-hipermercados",
    title: "Supermercados e hipermercados",
    summary: "Manutenção, iluminação, infraestrutura e comunicação visual em grandes ambientes comerciais.",
    href: "/segmentos/supermercados-e-hipermercados/",
  },
  {
    slug: "atacados",
    title: "Atacados",
    summary: "Trabalhos em altura em grandes instalações atacadistas, infraestrutura e manutenção.",
    href: "/segmentos/atacados/",
  },
];
