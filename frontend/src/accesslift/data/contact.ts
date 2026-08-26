export type SocialLink = {
  label: string;
  href: string | null;
};

export const contactConfig = {
  whatsappNumber: null as string | null,
  whatsappUrl: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  address: "Sao Paulo e regioes em raio de ate 150 km da base",
  socialLinks: [
    { label: "Instagram", href: null },
    { label: "LinkedIn", href: null },
    { label: "Facebook", href: null },
  ] satisfies SocialLink[],
};
