export type EquipmentCategorySlug =
  | "plataformas-tesoura"
  | "plataformas-articuladas";

export type EquipmentBrand = "JLG" | "Genie" | "Skyjack" | "Zoomlion";

export type PublishStatus = "draft" | "published" | "archived";

export type IndexDirective = "index" | "noindex";

export type EquipmentImage = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export type EquipmentValidationStatus = "ready" | "validate-before-publish";

export type EquipmentSpecs = {
  alturaTrabalho: string | null;
  alturaPlataforma: string | null;
  capacidade: string | null;
  alimentacao: string | null;
  peso: string | null;
  largura: string | null;
  comprimento?: string | null;
  alturaRecolhida?: string | null;
  dimensaoPlataforma?: string | null;
  raioGiro?: string | null;
  pneus?: string | null;
  bateria?: string | null;
  alcanceHorizontal?: string | null;
};

export type EquipmentSeo = {
  title: string;
  description: string;
  h1: string;
  canonical?: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  indexDirective: IndexDirective;
};

export type EquipmentFaqItem = {
  question: string;
  answer: string;
};

export type Equipment = {
  id: string;
  brand: EquipmentBrand;
  model: string;
  version?: string | null;
  category: EquipmentCategorySlug;
  slug: string;
  status: PublishStatus;
  validationStatus?: EquipmentValidationStatus;
  mainImage: EquipmentImage;
  gallery: EquipmentImage[];
  title: string;
  summary: string;
  specs: EquipmentSpecs;
  images: EquipmentImage[];
  characteristics: string[];
  differentials: string[];
  applications: string[];
  faq: EquipmentFaqItem[];
  technicalSheetPdf: string | null;
  manualPdf?: string | null;
  manualVersion?: string | null;
  manualLanguage?: string | null;
  documentSource?: string | null;
  documentUpdatedAt?: string | null;
  oldUrl?: string | null;
  technicalDataSource?: string | null;
  seo: EquipmentSeo;
};

export type EquipmentCategory = {
  slug: EquipmentCategorySlug;
  name: string;
  summary: string;
};

export type HeightRangeFilter = {
  id: string;
  label: string;
  minMeters: number | null;
  maxMeters: number | null;
};

export type CatalogSort = "featured" | "brand-asc" | "model-asc" | "category-asc";

export type CatalogFilters = {
  category: EquipmentCategorySlug | "all";
  brand: EquipmentBrand | "all";
  heightRange: string;
};
