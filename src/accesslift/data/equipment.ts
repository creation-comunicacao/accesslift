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

const asset = (filename: string) => `/images/accesslift/${filename}`;

const officialImagesBySlug: Partial<
  Record<string, { mainImage: Equipment["mainImage"]; gallery: Equipment["gallery"] }>
> = {
  "jlg-1930es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-vista-lateral.jpeg"),
      alt: "Plataforma tesoura JLG 1930ES da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-vista-frontal.jpeg"), alt: "Vista frontal da plataforma tesoura JLG 1930ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-em-transporte.jpeg"), alt: "Transporte da plataforma JLG 1930ES pela Access Lift", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-catalogo.jpg"), alt: "Imagem de catálogo da plataforma tesoura JLG 1930ES", width: 286, height: 600 },
    ],
  },
  "jlg-2630": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-2630es.jpg"),
      alt: "Plataforma tesoura JLG 2630ES",
      width: 286,
      height: 600,
    },
    gallery: [],
  },
  "jlg-2632es": {
    mainImage: {
      src: asset("operacoes/plataforma-elevatoria-operacao-em-galpao.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em operação interna",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "jlg-3246es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-access-lift.jpeg"),
      alt: "Plataforma tesoura JLG 3246ES da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-vista-frontal.jpeg"), alt: "Vista frontal da plataforma tesoura JLG 3246ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-vista-lateral.jpeg"), alt: "Vista lateral da plataforma tesoura JLG 3246ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-em-operacao-interna.jpeg"), alt: "Plataforma tesoura JLG 3246ES em operação interna", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-detalhe-frota.jpeg"), alt: "Detalhe da plataforma tesoura JLG 3246ES da frota", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246-render.png"), alt: "Imagem de catálogo da plataforma tesoura JLG 3246", width: 317, height: 600 },
    ],
  },
  "jlg-e450aj": {
    mainImage: {
      src: asset("operacoes/plataforma-articulada-manutencao-em-estrutura.jpeg"),
      alt: "Imagem representativa de plataforma articulada em manutenção de estrutura",
      width: 1600,
      height: 1200,
    },
    gallery: [],
  },
  "genie-gs1930": {
    mainImage: {
      src: asset("operacoes/plataforma-elevatoria-manutencao-industrial.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em manutenção industrial",
      width: 960,
      height: 1280,
    },
    gallery: [],
  },
  "genie-gs-2632": {
    mainImage: {
      src: asset("operacoes/plataforma-articulada-trabalho-proximo-ao-teto.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em trabalho próximo ao teto",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "genie-z34": {
    mainImage: {
      src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-principal.jpeg"),
      alt: "Plataforma articulada Genie Z-34/22 da Access Lift",
      width: 868,
      height: 1160,
    },
    gallery: [
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-em-operacao.jpeg"), alt: "Plataforma Genie Z-34/22 em operação", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-detalhe-cesto.jpeg"), alt: "Cesto da plataforma articulada Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-render.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-34", width: 313, height: 599 },
      { src: asset("logistica/transporte-plataforma-genie-z34-22-frota-propria.jpeg"), alt: "Transporte da plataforma Genie Z-34/22 pela frota própria", width: 868, height: 1160 },
    ],
  },
  "genie-z45": {
    mainImage: {
      src: asset("equipamentos/genie/plataforma-articulada-genie-z45-25-principal.jpeg"),
      alt: "Plataforma articulada Genie Z-45 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z45.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-45", width: 286, height: 600 },
    ],
  },
  "skyjack-sj3219": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3219 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ3219", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3219", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-em-operacao.jpeg"), alt: "Plataforma tesoura Skyjack SJ3219 em operação", width: 957, height: 1280 },
    ],
  },
  "skyjack-sj3226": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3226-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3226 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [{ src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3226-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3226", width: 957, height: 1280 }],
  },
  "skyjack-sj4732": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ4732 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ4732", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ4732", width: 957, height: 1280 },
    ],
  },
  "skyjack-sj4740e": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-frota-access-lift.jpeg"),
      alt: "Imagem representativa de plataforma tesoura Skyjack da frota Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [],
  },
  "zoomlion-zs1212": {
    mainImage: {
      src: asset("equipamentos/zoomlion/plataforma-tesoura-zoomlion-zs1212ac-principal.jpeg"),
      alt: "Plataforma tesoura Zoomlion ZS1212 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/plataforma-tesoura-zoomlion-zs1212ac-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Zoomlion ZS1212", width: 957, height: 1280 },
    ],
  },
  "zoomlion-za14": {
    mainImage: {
      src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-vista-lateral.jpeg"),
      alt: "Plataforma articulada Zoomlion ZA14JE-LI da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-vista-traseira.jpeg"), alt: "Vista traseira da plataforma Zoomlion ZA14JE-LI", width: 957, height: 1280 },
      { src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-em-transporte.jpeg"), alt: "Plataforma Zoomlion ZA14JE-LI em transporte", width: 1170, height: 1273 },
      { src: asset("logistica/entrega-plataforma-zoomlion-za14je-li-frota-propria.jpeg"), alt: "Entrega da plataforma Zoomlion ZA14JE-LI pela frota própria", width: 957, height: 1280 },
    ],
  },
};

const equipmentSeeds: EquipmentSeed[] = [
  { brand: "JLG", model: "1930ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "2630ES", category: "plataformas-tesoura", slug: "jlg-2630", validateBeforePublish: true },
  { brand: "JLG", model: "2632ES", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "JLG", model: "3246ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "E450AJ", category: "plataformas-articuladas", validateBeforePublish: true },
  { brand: "Genie", model: "GS-1930", category: "plataformas-tesoura", slug: "genie-gs1930" },
  { brand: "Genie", model: "GS-2632", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "Genie", model: "Z-34/22", category: "plataformas-articuladas", slug: "genie-z34", validateBeforePublish: true },
  { brand: "Genie", model: "Z-45", category: "plataformas-articuladas", slug: "genie-z45", validateBeforePublish: true },
  { brand: "Skyjack", model: "SJ3219", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ3226", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ4732", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "Skyjack", model: "SJ4740 E", category: "plataformas-tesoura", slug: "skyjack-sj4740e" },
  { brand: "Zoomlion", model: "ZS1212", category: "plataformas-tesoura", slug: "zoomlion-zs1212", validateBeforePublish: true },
  { brand: "Zoomlion", model: "ZA14JE-LI", category: "plataformas-articuladas", slug: "zoomlion-za14", validateBeforePublish: true },
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
