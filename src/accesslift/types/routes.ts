import type { IndexDirective } from "./equipment";

export type RouteKind =
  | "home"
  | "catalog"
  | "category"
  | "equipment"
  | "service"
  | "segment"
  | "blog"
  | "static"
  | "contact"
  | "quote";

export type PageSeo = {
  title: string;
  description: string;
  canonicalPath: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  indexDirective?: IndexDirective;
  structuredData?: JsonLd[];
};

export type JsonLd = Record<string, unknown>;

export type AppRoute = {
  path: string;
  label: string;
  kind: RouteKind;
  seo: PageSeo;
  parentPath?: string;
  isAlias?: boolean;
};

export type BreadcrumbItem = {
  label: string;
  path?: string;
};
