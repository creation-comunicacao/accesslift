import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderStaticPage, staticPaths } from "./static-pages";
import { mockEquipments } from "../src/accesslift/data/equipment";
import { buildOrganizationSchema } from "../src/accesslift/seo/schema";

const template = readFileSync(new URL("../index.html", import.meta.url), "utf8");
test("mapped legacy redirects retain specific destinations and use 301", () => {
  const config = JSON.parse(readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
  for (const redirect of config.redirects) {
    assert.equal(redirect.statusCode, 301);
    assert.notEqual(redirect.destination, "/");
    assert(staticPaths.includes(redirect.destination));
  }
});
test("final package: public copy and schema across all routes", () => {
  for (const path of staticPaths) {
    const { html, seo } = renderStaticPage(template, path, false);
    assert(!/\bAccessLift\b|\bAccess Lift\b|\bInicio\b|�/.test(html), path);
    assert(!/Validar antes de publicar|A confirmar|até 150 km/i.test(html), path);
    assert.equal(seo.canonicalPath.startsWith("/"), true);
  }
  assert.equal(buildOrganizationSchema().areaServed, "São Paulo e região, com outras localidades sob avaliação comercial");
});

test("requested metadata and Home copy use the existing sources", () => {
  for (const [path, title] of [
    ["/empresa/", "Accesslift | Locação de Plataformas Elevatórias em SP"],
    ["/seguranca-e-nr35/", "NR-35 e Plataformas Elevatórias para Trabalho em Altura | Accesslift"],
  ]) {
    const { html, seo } = renderStaticPage(template, path, true);
    assert.equal(seo.title, title);
    assert(html.includes(`property="og:title" content="${title}"`));
  }
  const home = renderStaticPage(template, "/", true).html;
  assert(home.includes("próprias e ágeis"));
  assert(home.includes("Conheça alguns dos modelos disponíveis para locação"));
  const summary = "Plataforma tesoura elétrica compacta para trabalhos de elevação vertical, manutenção e instalações.";
  assert.equal(mockEquipments.find(e => e.slug === "jlg-1930es")?.summary, summary);
  assert(home.includes(summary));
  assert(renderStaticPage(template, "/politica-de-privacidade/", false).html.includes("Acess Lift Loc.serv e com de plataformas"));
  assert(mockEquipments.every(e => !e.technicalSheetPdf && !e.manualPdf));
});
