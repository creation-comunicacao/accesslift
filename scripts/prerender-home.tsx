import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { renderToString } from "react-dom/server";
import App from "../src/App.tsx";
import { findRouteByPath } from "../src/accesslift/routes/routes.ts";
import { buildBreadcrumbSchema, buildOrganizationSchema } from "../src/accesslift/seo/schema.ts";
import type { JsonLd, PageSeo } from "../src/accesslift/types/routes.ts";

const siteOrigin = "https://www.accesslift.com.br";
const outputDir = resolve(process.env.CRAWL_OUTPUT_DIR || "dist");
const outputFile = resolve(outputDir, "index.html");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const getHomeSeo = (): PageSeo => {
  const route = findRouteByPath("/");

  if (!route) {
    throw new Error("Home route not found.");
  }

  const structuredData = [
    buildOrganizationSchema(),
    buildBreadcrumbSchema([]),
  ].filter((schema): schema is JsonLd => Boolean(schema));

  return {
    ...route.seo,
    structuredData,
  };
};

const renderHead = (seo: PageSeo) => {
  const canonical = `${siteOrigin}${seo.canonicalPath}`;
  const isProduction = process.env.VITE_SITE_ENV === "production";
  const robots =
    !isProduction || seo.indexDirective === "noindex"
      ? "noindex,nofollow"
      : "index,follow";
  const ogTitle = seo.openGraphTitle || seo.title;
  const ogDescription = seo.openGraphDescription || seo.description;
  const schema = (seo.structuredData || [])
    .map((item, index) => {
      const json = JSON.stringify(item).replaceAll("</script", "<\\/script");
      return `    <script id="accesslift-schema-${index}" type="application/ld+json" data-accesslift-schema="true">${json}</script>`;
    })
    .join("\n");

  return [
    `    <title>${escapeHtml(seo.title)}</title>`,
    `    <meta name="description" content="${escapeHtml(seo.description)}" />`,
    `    <meta name="robots" content="${robots}" />`,
    `    <link rel="canonical" href="${canonical}" />`,
    `    <meta property="og:title" content="${escapeHtml(ogTitle)}" />`,
    `    <meta property="og:description" content="${escapeHtml(ogDescription)}" />`,
    `    <meta property="og:url" content="${canonical}" />`,
    `    <meta property="og:type" content="website" />`,
    `    <meta property="og:site_name" content="Accesslift" />`,
    `    <meta name="twitter:card" content="summary_large_image" />`,
    schema,
  ].filter(Boolean).join("\n");
};

const injectHome = (template: string, body: string, seo: PageSeo) => {
  const withoutManagedHead = template
    .replace(/\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\s*<meta name="description"[\s\S]*?>/g, "")
    .replace(/\s*<meta name="robots"[\s\S]*?>/g, "")
    .replace(/\s*<link rel="canonical"[\s\S]*?>/g, "")
    .replace(/\s*<meta property="og:[\s\S]*?>/g, "")
    .replace(/\s*<meta name="twitter:card"[\s\S]*?>/g, "")
    .replace(/\s*<script id="accesslift-schema-[\s\S]*?<\/script>/g, "");

  return withoutManagedHead
    .replace("  </head>", `${renderHead(seo)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
};

const seo = getHomeSeo();
const body = renderToString(<App initialPath="/" />);
const template = await readFile(outputFile, "utf8");
const html = injectHome(template, body, seo);

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, html);

console.log(`Home pre-rendered into ${outputFile}`);
