export type SocialLink = {
  label: string;
  href: string | null;
};

export const contactConfig = {
  whatsappNumber: "(11) 2389-5259",
  whatsappUrl: "https://wa.me/551123895259",
  phone: "(11) 2389-5259",
  email: "comercial@accesslift.com.br",
  address: "Rua Artur Lobo, 127 - Jardim Jabaquara - CEP 04384-060 - São Paulo/SP",
  socialLinks: [
    { label: "Instagram", href: null },
    { label: "LinkedIn", href: null },
    { label: "Facebook", href: null },
  ] satisfies SocialLink[],
};
