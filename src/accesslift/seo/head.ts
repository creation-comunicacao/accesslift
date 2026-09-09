import type { PageSeo } from "../types/routes";

export const SITE_ORIGIN = "https://www.accesslift.com.br";

export function getSeoHead(seo: PageSeo, production: boolean) {
  const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
  return {
    title: seo.title,
    meta: [
      { name: "description", content: seo.description },
      { name: "robots", content: production && seo.indexDirective !== "noindex" ? "index,follow" : "noindex,nofollow" },
      { property: "og:title", content: seo.openGraphTitle || seo.title },
      { property: "og:description", content: seo.openGraphDescription || seo.description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Accesslift" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    canonical,
    schemas: seo.structuredData || [],
  };
}
