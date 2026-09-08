import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { PlatformsPage } from "../src/accesslift/pages/commercial/PlatformsPage";
import { commercialPages } from "../src/accesslift/data/pageContent";

const html = renderToStaticMarkup(createElement(PlatformsPage));

test("platforms page renders only the nine approved blocks in order", () => {
  assert.deepEqual([...html.matchAll(/data-platform-block="([^"]+)"/g)].map(match => match[1]),
    ["hero", "definition", "comparison", "selection", "applications", "equipment", "differentials", "rental", "final"]);
  assert.equal((html.match(/<section\b/g) || []).length, 9);
  for (const forbidden of ["Plataformas em operação", "Proposta de valor", "Beneficios preparados", "Como funciona", "Frota elétrica", "Estrutura pronta", "Carregados do catálogo", "A confirmar", "Validar antes de publicar"]) {
    assert(!html.includes(forbidden), forbidden);
  }
});

test("platforms page keeps approved conversion labels and both equipment categories", () => {
  assert.equal((html.match(/>Solicite seu orçamento</g) || []).length, 3);
  assert.equal((html.match(/>Falar pelo WhatsApp</g) || []).length, 3);
  assert.equal((html.match(/>Solicitar cotação</g) || []).length, 4);
  assert(html.includes("Ver todos os equipamentos"));
  assert(html.includes("Acesso e obstáculos"));
  assert(html.includes("Manutenção preventiva"));
  assert(html.includes("Diária • Semanal • Mensal"));
  assert(html.includes("/equipamentos/jlg-3246es/"));
  assert(html.includes("/equipamentos/genie-z34/"));
  assert(html.includes("equipamento=zoomlion-za14je-li"));
});

test("platforms route retains unique SEO and does not alter rental configuration", () => {
  const page = commercialPages.find(page => page.path === "/plataformas-elevatorias/")!;
  assert.equal(page.seo.h1, "Plataformas Elevatórias para Trabalhos em Altura");
  assert.equal(page.seo.canonicalPath, "/plataformas-elevatorias/");
  assert.equal(commercialPages.filter(item => item.path === "/plataformas-elevatorias/").length, 1);
  assert(commercialPages.some(page => page.path === "/locacao-de-plataformas-elevatorias/"));
});
