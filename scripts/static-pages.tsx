import { renderToString } from "react-dom/server";
import App from "../src/App";
import { SeoCollector } from "../src/accesslift/seo/Seo";
import { getSeoHead } from "../src/accesslift/seo/head";
import type { PageSeo } from "../src/accesslift/types/routes";
import { MAIN_ROUTES } from "../src/accesslift/routes/routes";
import { mockEquipments } from "../src/accesslift/data/equipment";
import { equipmentSlugAliases } from "../src/accesslift/catalog/catalog";
import { blogPosts } from "../src/accesslift/data/blog";

export const staticPaths = [...new Set([
  ...MAIN_ROUTES.map(route => route.path),
  ...mockEquipments.map(equipment => `/equipamentos/${equipment.slug}/`),
  ...Object.keys(equipmentSlugAliases).map(slug => `/equipamentos/${slug}/`),
  ...blogPosts.map(post => `/blog/${post.slug}/`),
])];

export const escapeHtml = (value: string) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export function renderStaticPage(template: string, path: string, production: boolean) {
  let captured: PageSeo | undefined;
  const body = renderToString(<SeoCollector.Provider value={seo => { captured = seo; }}><App initialPath={path} /></SeoCollector.Provider>);
  if (!captured) throw new Error(`Missing SEO: ${path}`);
  const seo: PageSeo = captured;
  const head = getSeoHead(seo, production);
  const tags = [
    `<title>${escapeHtml(head.title)}</title>`,
    ...head.meta.map(meta => `<meta ${meta.name ? `name="${meta.name}"` : `property="${meta.property}"`} content="${escapeHtml(meta.content)}" />`),
    `<link rel="canonical" href="${escapeHtml(head.canonical)}" />`,
    ...head.schemas.map((schema, index) => `<script id="accesslift-schema-${index}" type="application/ld+json" data-accesslift-schema="true">${JSON.stringify(schema).replaceAll("<", "\\u003c")}</script>`),
  ].join("\n    ");
  if (!template.includes('<div id="root"></div>')) throw new Error("Expected a fresh Vite HTML template. Run npm run build.");
  return { seo, html: template.replace("</head>", `${tags}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`) };
}
