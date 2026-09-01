import { equipmentCategories, mockEquipments } from "../data/equipment";
import { heightRangeFilters } from "../data/equipment";
import type { CatalogFilters, CatalogSort, Equipment, EquipmentCategorySlug } from "../types/equipment";

export const getPublishedEquipment = () =>
  mockEquipments.filter((equipment) => equipment.status === "published");

export const getEquipmentByCategory = (category: EquipmentCategorySlug) =>
  mockEquipments.filter((equipment) => equipment.category === category);

export const getCategoryBySlug = (slug: EquipmentCategorySlug) =>
  equipmentCategories.find((category) => category.slug === slug);

const equipmentSlugAliases: Record<string, string> = {
  "jlg-2630": "jlg-2630es",
  "genie-gs-2632": "genie-gs2632",
  "skyjack-sj4740e": "skyjack-sj4732",
  "zoomlion-zs1212": "zoomlion-zs1212ac",
  "zoomlion-za14": "zoomlion-za14je-li",
};

export const getEquipmentBySlug = (slug: string) =>
  mockEquipments.find((equipment) => equipment.slug === (equipmentSlugAliases[slug] || slug));

export const getRelatedEquipment = (equipment: Equipment, limit = 3) => {
  const sameCategory = mockEquipments.filter(
    (candidate) =>
      candidate.id !== equipment.id && candidate.category === equipment.category,
  );

  const currentHeight = parseMeters(equipment.specs.alturaTrabalho);

  if (currentHeight === null) {
    return sameCategory.slice(0, limit);
  }

  return sameCategory
    .map((candidate) => {
      const height = parseMeters(candidate.specs.alturaTrabalho);
      return {
        equipment: candidate,
        distance: height === null ? Number.POSITIVE_INFINITY : Math.abs(height - currentHeight),
      };
    })
    .sort((a, b) => a.distance - b.distance || a.equipment.brand.localeCompare(b.equipment.brand))
    .map((item) => item.equipment)
    .slice(0, limit);
};

export const matchEquipmentDetailPath = (path: string) => {
  const match = path.match(/^\/equipamentos\/([^/]+)\/?$/);
  return match?.[1] || null;
};

export const defaultCatalogFilters: CatalogFilters = {
  category: "all",
  brand: "all",
  heightRange: "all",
};

export const hasActiveCatalogFilters = (filters: CatalogFilters) =>
  Object.values(filters).some((value) => value !== "all");

const parseMeters = (value: string | null | undefined) => {
  if (!value) {
    return null;
  }

  const normalized = value.replace(",", ".").match(/\d+(\.\d+)?/);
  return normalized ? Number(normalized[0]) : null;
};

const matchesHeightRange = (equipment: Equipment, rangeId: string) => {
  if (rangeId === "all") {
    return true;
  }

  const range = heightRangeFilters.find((item) => item.id === rangeId);
  const height = parseMeters(equipment.specs.alturaTrabalho);

  if (!range || height === null) {
    return false;
  }

  const aboveMin = range.minMeters === null || height >= range.minMeters;
  const belowMax = range.maxMeters === null || height <= range.maxMeters;

  return aboveMin && belowMax;
};

export const getAvailableHeightRangeFilters = (equipments: Equipment[]) =>
  heightRangeFilters.filter((range) =>
    equipments.some((equipment) => matchesHeightRange(equipment, range.id)),
  );

export const filterEquipment = (equipments: Equipment[], filters: CatalogFilters) =>
  equipments.filter((equipment) => {
    const categoryMatch =
      filters.category === "all" || equipment.category === filters.category;
    const brandMatch = filters.brand === "all" || equipment.brand === filters.brand;
    const heightMatch = matchesHeightRange(equipment, filters.heightRange);
    return categoryMatch && brandMatch && heightMatch;
  });

export const sortEquipment = (equipments: Equipment[], sort: CatalogSort) => {
  const sorted = [...equipments];

  switch (sort) {
    case "brand-asc":
      return sorted.sort((a, b) => a.brand.localeCompare(b.brand));
    case "model-asc":
      return sorted.sort((a, b) => a.model.localeCompare(b.model));
    case "category-asc":
      return sorted.sort((a, b) => a.category.localeCompare(b.category));
    case "featured":
    default:
      return sorted;
  }
};
