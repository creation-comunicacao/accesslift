import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { loadEnv } from "vite";
import { staticPaths, renderStaticPage } from "./static-pages";
import { SITE_ORIGIN } from "../src/accesslift/seo/head";

const env = { ...loadEnv("production", process.cwd(), "VITE_"), ...process.env };
const production = env.VITE_SITE_ENV === "production";
const output = resolve(process.env.CRAWL_OUTPUT_DIR || "dist");
const template = await readFile(resolve(output, "index.html"), "utf8");
for (const path of staticPaths) {
  const { html } = renderStaticPage(template, path, production);
  const file = resolve(output, `.${path}`, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html, "utf8");
}
const notFound = renderStaticPage(template, "/404/", production);
await writeFile(resolve(output, "404.html"), notFound.html, "utf8");
// Preserve the approved production sitemap rather than regenerating its URL list.
await cp(resolve("public/sitemap.xml"), resolve(output, "sitemap.xml"));
await writeFile(resolve(output, "robots.txt"), `User-agent: *\n${production ? "Allow: /" : "Disallow: /"}\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
console.log(`Pre-rendered ${staticPaths.length} routes + 404; approved sitemap copied. Indexing: ${production ? "production" : "disabled (VITE_SITE_ENV is not production)"}.`);
