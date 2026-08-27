import type { BreadcrumbItem } from "../../types/routes";
import { MAIN_ROUTES, findRouteByPath } from "../../routes/routes";
import { getEquipmentBySlug, matchEquipmentDetailPath } from "../../catalog/catalog";
import { getBlogPostBySlug, matchBlogPostPath } from "../../data/blog";

export const getBreadcrumbItems = (path: string): BreadcrumbItem[] => {
  const blogPostSlug = matchBlogPostPath(path);

  if (blogPostSlug) {
    const post = getBlogPostBySlug(blogPostSlug);

    return [
      { label: "Blog", path: "/blog/" },
      { label: post ? post.title : "Artigo" },
    ];
  }

  const equipmentSlug = matchEquipmentDetailPath(path);

  if (equipmentSlug) {
    const equipment = getEquipmentBySlug(equipmentSlug);

    return [
      { label: "Equipamentos", path: "/equipamentos/" },
      { label: equipment ? `${equipment.brand} ${equipment.model}` : "Equipamento" },
    ];
  }

  const route = findRouteByPath(path);

  if (!route || route.path === "/") {
    return [];
  }

  const parent = route.parentPath
    ? MAIN_ROUTES.find((candidate) => candidate.path === route.parentPath)
    : null;

  return [
    ...(parent ? [{ label: parent.label, path: parent.path }] : []),
    { label: route.label },
  ];
};
