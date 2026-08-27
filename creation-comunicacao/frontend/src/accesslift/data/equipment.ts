import type {
  Equipment,
  EquipmentBrand,
  EquipmentCategory,
  EquipmentCategorySlug,
  EquipmentSpecs,
  HeightRangeFilter,
} from "../types/equipment";

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "plataformas-tesoura",
    name: "Plataformas Tesoura",
    summary: "Categoria principal para trabalhos verticais com catalogo dinamico.",
  },
  {
    slug: "plataformas-articuladas",
    name: "Plataformas Articuladas",
    summary: "Categoria principal para aplicacoes com alcance horizontal quando aplicavel.",
  },
];

export const equipmentBrands = ["JLG", "Genie", "Skyjack", "Zoomlion"] as const;

type EquipmentSeed = {
  brand: EquipmentBrand;
  model: string;
  category: EquipmentCategorySlug;
  slug?: string;
  validateBeforePublish?: boolean;
};

const categoryLabelBySlug: Record<EquipmentCategorySlug, string> = {
  "plataformas-tesoura": "Plataforma Tesoura",
  "plataformas-articuladas": "Plataforma Articulada",
};

const officialImagesBySlug: Partial<
  Record<string, { mainImage: { src: string; alt: string }; gallery: Array<{ src: string; alt: string }> }>
> = {
  "jlg-1930es": {
    mainImage: {
      src: "/images/accesslift/oficiais/jlg-1930ES.jpeg",
      alt: "Plataforma tesoura JLG 1930ES da frota Accesslift",
    },
    gallery: [
      { src: "/images/accesslift/oficiais/jlg-1930ES-01.jpeg", alt: "Plataforma tesoura JLG 1930ES, vista lateral" },
      { src: "/images/accesslift/oficiais/jlg-1930ES-02.jpeg", alt: "Plataforma tesoura JLG 1930ES em operacao" },
    ],
  },
  "jlg-3246es": {
    mainImage: {
      src: "/images/accesslift/oficiais/jlg-3246ES.jpeg",
      alt: "Plataforma tesoura JLG 3246ES da frota Accesslift",
    },
    gallery: [
      { src: "/images/accesslift/oficiais/jlg-3246ES-01.jpeg", alt: "Plataforma tesoura JLG 3246ES, outra perspectiva" },
      { src: "/images/accesslift/oficiais/jlg-3246ES-02.jpeg", alt: "Plataforma tesoura JLG 3246ES em ambiente interno" },
      { src: "/images/accesslift/oficiais/jlg-3246ES-03.jpeg", alt: "Plataforma tesoura JLG 3246ES, vista lateral" },
      { src: "/images/accesslift/oficiais/jlg-3246ES-04.jpeg", alt: "Plataforma tesoura JLG 3246ES em operacao" },
    ],
  },
  "genie-z34": {
    mainImage: {
      src: "/images/accesslift/oficiais/genie-z34-22.jpeg",
      alt: "Plataforma articulada Genie Z-34 da frota Accesslift",
    },
    gallery: [
      { src: "/images/accesslift/oficiais/genie-z34-22-01.jpeg", alt: "Plataforma articulada Genie Z-34, outra perspectiva" },
      { src: "/images/accesslift/oficiais/genie-z34-22-02.jpeg", alt: "Plataforma articulada Genie Z-34 em ambiente externo" },
      { src: "/images/accesslift/oficiais/genie-z34-22-03.jpeg", alt: "Plataforma articulada Genie Z-34, vista lateral" },
      { src: "/images/accesslift/oficiais/genie-z34-22-04.jpeg", alt: "Plataforma articulada Genie Z-34 em operacao" },
    ],
  },
  "genie-z45": {
    mainImage: {
      src: "/images/accesslift/oficiais/genie-z45-25.jpeg",
      alt: "Plataforma articulada Genie Z-45 da frota Accesslift",
    },
    gallery: [],
  },
  "skyjack-sj3219": {
    mainImage: {
      src: "/images/accesslift/oficiais/skyjet-sj3219.jpeg",
      alt: "Plataforma tesoura Skyjack SJ3219 da frota Accesslift",
    },
    gallery: [
      { src: "/images/accesslift/oficiais/skyjet-sj3219-01.jpeg", alt: "Plataforma tesoura Skyjack SJ3219, outra perspectiva" },
      { src: "/images/accesslift/oficiais/skyjet-sj3219-02.jpeg", alt: "Plataforma tesoura Skyjack SJ3219, vista lateral" },
      { src: "/images/accesslift/oficiais/skyjet-sj3219-03.jpeg", alt: "Plataforma tesoura Skyjack SJ3219 em operacao" },
    ],
  },
  "skyjack-sj3226": {
    mainImage: {
      src: "/images/accesslift/oficiais/skyjet-sj3226.jpeg",
      alt: "Plataforma tesoura Skyjack SJ3226 da frota Accesslift",
    },
    gallery: [{ src: "/images/accesslift/oficiais/skyjet-sj3226-01.jpeg", alt: "Plataforma tesoura Skyjack SJ3226, outra perspectiva" }],
  },
};

const equipmentSeeds: EquipmentSeed[] = [
  { brand: "JLG", model: "1930ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "2632ES", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "JLG", model: "3246ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "E450AJ", category: "plataformas-articuladas", validateBeforePublish: true },
  { brand: "Genie", model: "GS-1930", category: "plataformas-tesoura", slug: "genie-gs1930" },
  { brand: "Genie", model: "GS-2632", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "Genie", model: "Z-34", category: "plataformas-articuladas", slug: "genie-z34", validateBeforePublish: true },
  { brand: "Genie", model: "Z-45", category: "plataformas-articuladas", slug: "genie-z45", validateBeforePublish: true },
  { brand: "Skyjack", model: "SJ3219", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ3226", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ4740 E", category: "plataformas-tesoura", slug: "skyjack-sj4740e" },
  { brand: "Zoomlion", model: "ZS1212", category: "plataformas-tesoura", slug: "zoomlion-zs1212", validateBeforePublish: true },
  { brand: "Zoomlion", model: "ZA14", category: "plataformas-articuladas", slug: "zoomlion-za14", validateBeforePublish: true },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const heightRangeFilters: HeightRangeFilter[] = [
  { id: "ate-8m", label: "Ate 8 m", minMeters: null, maxMeters: 8 },
  { id: "8-a-10m", label: "8 m a 10 m", minMeters: 8, maxMeters: 10 },
  { id: "10-a-14m", label: "10 m a 14 m", minMeters: 10, maxMeters: 14 },
  { id: "14-a-16m", label: "14 m a 16 m", minMeters: 14, maxMeters: 16 },
];

const createEquipment = (seed: EquipmentSeed): Equipment => {
  const categoryLabel = categoryLabelBySlug[seed.category];
  const slug = seed.slug || `${slugify(seed.brand)}-${slugify(seed.model)}`;
  const title = `${categoryLabel} ${seed.brand} ${seed.model}`;
  const officialImages = officialImagesBySlug[slug];

  return {
    id: slug,
    brand: seed.brand,
    model: seed.model,
    category: seed.category,
    slug,
    status: "draft",
    validationStatus: seed.validateBeforePublish ? "validate-before-publish" : "ready",
    mainImage: officialImages?.mainImage || {
      src: null,
      alt: `${title} - imagem principal a cadastrar`,
    },
    gallery: officialImages?.gallery || [],
    title,
    summary: "Equipamento mockado para desenvolvimento do catalogo dinamico. Dados tecnicos oficiais pendentes de cadastro.",
    specs: {
      alturaTrabalho: null,
      alturaPlataforma: null,
      capacidade: null,
      alimentacao: null,
      peso: null,
      largura: null,
      alcanceHorizontal: seed.category === "plataformas-articuladas" ? null : undefined,
      ...equipmentSpecsBySlug[slug],
    },
    images: officialImages ? [officialImages.mainImage, ...officialImages.gallery] : [],
    characteristics: [],
    differentials: [],
    applications: [],
    faq: [],
    technicalSheetPdf: null,
    manualPdf: null,
    manualVersion: null,
    manualLanguage: null,
    documentSource: null,
    documentUpdatedAt: null,
    oldUrl: null,
    technicalDataSource: null,
    seo: {
      title: `${title} | Accesslift`,
      description: "Pagina preparada para publicacao apos cadastro de dados tecnicos oficiais.",
      h1: title,
      canonical: `/equipamentos/${slug}/`,
      openGraphTitle: `${title} | Accesslift`,
      openGraphDescription: "Equipamento no catalogo Accesslift com dados tecnicos a validar.",
      indexDirective: "noindex",
    },
  };
};

// Values below are limited to the six featured models and come from the Home copy blueprint.
const equipmentSpecsBySlug: Record<string, Partial<EquipmentSpecs>> = {
  "jlg-1930es": { alturaTrabalho: "7,72 m", alimentacao: "Eletrica" },
  "genie-z34": { alimentacao: "Eletrica" },
  "jlg-3246es": { alturaTrabalho: "11,68 m", alimentacao: "Eletrica" },
  "skyjack-sj4740e": { alturaTrabalho: "13,69 m", alimentacao: "Eletrica" },
  "zoomlion-zs1212": { alimentacao: "Eletrica" },
  "zoomlion-za14": { alimentacao: "Eletrica" },
};

export const homeFeaturedEquipmentSlugs = [
  "jlg-1930es",
  "genie-z34",
  "jlg-3246es",
  "skyjack-sj4740e",
  "zoomlion-zs1212",
  "zoomlion-za14",
] as const;

export const mockEquipments: Equipment[] = equipmentSeeds.map(createEquipment);
