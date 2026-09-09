import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { loadEnv } from "vite";
import { staticPaths, renderStaticPage, escapeHtml } from "./static-pages";
import { SITE_ORIGIN } from "../src/accesslift/seo/head";

const env = { ...loadEnv("production", process.cwd(), "VITE_"), ...process.env };
const production = env.VITE_SITE_ENV === "production";
const output = resolve(process.env.CRAWL_OUTPUT_DIR || "dist");
const template = await readFile(resolve(output, "index.html"), "utf8");
const indexable: string[] = [];
for (const path of staticPaths) {
  const { html, seo } = renderStaticPage(template, path, production);
  const file = resolve(output, `.${path}`, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
  if (seo.canonicalPath === path && seo.indexDirective !== "noindex") indexable.push(path);
}
const notFound = renderStaticPage(template, "/404/", production);
await writeFile(resolve(output, "404.html"), notFound.html, "utf8");
await writeFile(resolve(output, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable.map(path => `  <url><loc>${escapeHtml(SITE_ORIGIN + path)}</loc></url>`).join("\n")}\n</urlset>\n`);
await writeFile(resolve(output, "robots.txt"), `User-agent: *\n${production ? "Allow: /" : "Disallow: /"}\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
console.log(`Pre-rendered ${staticPaths.length} routes + 404; ${indexable.length} canonical sitemap entries. Indexing: ${production ? "production" : "disabled (VITE_SITE_ENV is not production)"}.`);
