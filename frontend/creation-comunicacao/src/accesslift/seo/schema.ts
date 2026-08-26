import type { Equipment } from "../types/equipment";
import type { BreadcrumbItem, JsonLd } from "../types/routes";
import type { FaqItem } from "../data/pageContent";

const SITE_ORIGIN = "https://www.accesslift.com.br";

export const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_ORIGIN}${path}`;

export const buildOrganizationSchema = (): JsonLd => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Accesslift",
  url: SITE_ORIGIN,
  areaServed: "Sao Paulo e regioes em raio de ate 150 km da base",
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): JsonLd | null => {
  if (items.length === 0) {
    return null;
  }

  const allItems = [{ label: "Inicio", path: "/" }, ...items];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.path ? absoluteUrl(item.path) : undefined,
    })),
  };
};

export const buildFaqSchema = (items: FaqItem[] | undefined): JsonLd | null => {
  if (!items || items.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
};

export const buildEquipmentSchema = (equipment: Equipment): JsonLd => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: equipment.title,
  brand: {
    "@type": "Brand",
    name: equipment.brand,
  },
  model: equipment.model,
  category:
    equipment.category === "plataformas-tesoura"
      ? "Plataforma Tesoura"
      : "Plataforma Articulada",
  description: equipment.summary,
  url: absoluteUrl(equipment.seo.canonical || `/equipamentos/${equipment.slug}/`),
});
