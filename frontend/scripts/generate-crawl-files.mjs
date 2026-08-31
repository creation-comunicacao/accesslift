import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const defaultSiteUrl = "http://localhost:3000";
const siteUrl = (process.env.VITE_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

const productionPaths = [
  "/",
  "/locacao-de-plataformas-elevatorias/",
  "/plataformas-elevatorias/",
  "/plataformas-tesoura/",
  "/plataformas-articuladas/",
  "/equipamentos/",
  "/servicos/",
  "/servicos/assistencia-tecnica/",
  "/servicos/manutencao-preventiva/",
  "/servicos/treinamento-de-operadores/",
  "/seguranca-e-nr35/",
  "/segmentos-e-aplicacoes/",
  "/segmentos/industria/",
  "/segmentos/construcao-civil/",
  "/segmentos/supermercados-e-hipermercados/",
  "/segmentos/atacados/",
  "/area-de-atendimento/",
  "/empresa/",
  "/solicite-orcamento/",
  "/contato/",
];

const auditOnlyPaths = [
  "/equipamentos/jlg-1930es/",
  "/equipamentos/jlg-2630/",
  "/equipamentos/jlg-2632es/",
  "/equipamentos/jlg-3246es/",
  "/equipamentos/jlg-e450aj/",
  "/equipamentos/genie-gs1930/",
  "/equipamentos/genie-gs-2632/",
  "/equipamentos/genie-z34/",
  "/equipamentos/genie-z45/",
  "/equipamentos/skyjack-sj3219/",
  "/equipamentos/skyjack-sj3226/",
  "/equipamentos/skyjack-sj4732/",
  "/equipamentos/skyjack-sj4740e/",
  "/equipamentos/zoomlion-zs1212/",
  "/equipamentos/zoomlion-za14/",
  "/trabalhe-conosco/",
  "/clientes/",
  "/blog/",
  "/blog/como-escolher-plataforma-elevatoria/",
  "/blog/locacao-diaria-semanal-mensal/",
  "/blog/seguranca-operacao-altura/",
  "/politica-de-privacidade/",
];

const canonicalPaths = process.env.VITE_SITE_ENV === "production"
  ? productionPaths
  : [...productionPaths, ...auditOnlyPaths];

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${canonicalPaths.map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`).join("\n")}\n</urlset>\n`;

const outputDir = resolve(process.env.CRAWL_OUTPUT_DIR || "dist");
await mkdir(outputDir, { recursive: true });
await Promise.all([
  writeFile(resolve(outputDir, "robots.txt"), robots),
  writeFile(resolve(outputDir, "sitemap.xml"), sitemap),
]);

console.log(`Crawler files generated for ${siteUrl}`);
