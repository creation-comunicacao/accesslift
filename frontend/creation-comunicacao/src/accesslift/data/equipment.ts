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
  validateBeforePublish?: boolean;
};

const categoryLabelBySlug: Record<EquipmentCategorySlug, string> = {
  "plataformas-tesoura": "Plataforma Tesoura",
  "plataformas-articuladas": "Plataforma Articulada",
};

const equipmentSeeds: EquipmentSeed[] = [
  { brand: "JLG", model: "1930ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "2632ES", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "JLG", model: "3246ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "E450AJ", category: "plataformas-articuladas", validateBeforePublish: true },
  { brand: "Genie", model: "GS-1930", category: "plataformas-tesoura" },
  { brand: "Genie", model: "GS-2632", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "Genie", model: "Z-34/22", category: "plataformas-articuladas" },
  { brand: "Genie", model: "Z-45/25", category: "plataformas-articuladas" },
  { brand: "Skyjack", model: "SJ3219", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ3226", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ4740 E", category: "plataformas-tesoura" },
  { brand: "Zoomlion", model: "ZS1212DC", category: "plataformas-tesoura" },
  { brand: "Zoomlion", model: "ZA14JE", category: "plataformas-articuladas" },
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

export const energyFilters = [
  { id: "eletrica", label: "Eletrica" },
  { id: "outras", label: "Outras opcoes" },
];

export const environmentFilters = [
  { id: "interno", label: "Interno" },
  { id: "externo", label: "Externo" },
  { id: "industrial", label: "Industrial" },
];

const createEquipment = (seed: EquipmentSeed): Equipment => {
  const categoryLabel = categoryLabelBySlug[seed.category];
  const slug = `${slugify(seed.brand)}-${slugify(seed.model)}`;
  const title = `${categoryLabel} ${seed.brand} ${seed.model}`;

  return {
    id: slug,
    brand: seed.brand,
    model: seed.model,
    category: seed.category,
    slug,
    status: "draft",
    validationStatus: seed.validateBeforePublish ? "validate-before-publish" : "ready",
    mainImage: {
      src: null,
      alt: `${title} - imagem principal a cadastrar`,
    },
    gallery: [],
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
    images: [],
    characteristics: [],
    differentials: [],
    applications: [],
    faq: [],
    technicalSheetPdf: null,
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
  "genie-z-34-22": { alturaTrabalho: "12,5 m", alimentacao: "Eletrica" },
  "jlg-3246es": { alturaTrabalho: "11,68 m", alimentacao: "Eletrica" },
  "skyjack-sj4740-e": { alturaTrabalho: "13,69 m", alimentacao: "Eletrica" },
  "zoomlion-zs1212dc": { alturaTrabalho: "13,80 m", alimentacao: "Eletrica" },
  "zoomlion-za14je": { alturaTrabalho: "16 m", alimentacao: "Eletrica" },
};

export const homeFeaturedEquipmentSlugs = [
  "jlg-1930es",
  "genie-z-34-22",
  "jlg-3246es",
  "skyjack-sj4740-e",
  "zoomlion-zs1212dc",
  "zoomlion-za14je",
] as const;

export const mockEquipments: Equipment[] = equipmentSeeds.map(createEquipment);
