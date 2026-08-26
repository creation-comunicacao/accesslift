import type { EquipmentCategorySlug } from "../../types/equipment";
import { CategoryTemplate } from "./CategoryTemplate";

type CategoryPageProps = {
  slug: EquipmentCategorySlug;
};

export function CategoryPage({ slug }: CategoryPageProps) {
  return <CategoryTemplate slug={slug} />;
}
