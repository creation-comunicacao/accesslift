import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { PlatformsPage } from "../src/accesslift/pages/commercial/PlatformsPage";
import { commercialPages } from "../src/accesslift/data/pageContent";

const html = renderToStaticMarkup(createElement(PlatformsPage));

test("platforms page ends with a single rental conversion block", () => {
  assert.deepEqual([...html.matchAll(/data-platform-block="([^"]+)"/g)].map(match => match[1]),
    ["hero", "definition", "comparison", "selection", "applications", "equipment", "differentials", "rental"]);
  assert.equal((html.match(/<section\b/g) || []).length, 8);
  assert.equal((html.match(/Locação flexível para cada necessidade/g) || []).length, 1);
  assert(!html.includes("Precisa de uma plataforma elevatória para sua operação?"));
  for (const forbidden of ["Plataformas em operação", "Proposta de valor", "Beneficios preparados", "Como funciona", "Frota elétrica", "Estrutura pronta", "Carregados do catálogo", "A confirmar", "Validar antes de publicar"]) {
    assert(!html.includes(forbidden), forbidden);
  }
});

test("platforms page keeps approved conversion labels and both equipment categories", () => {
  assert.equal((html.match(/>Solicite seu orçamento</g) || []).length, 2);
  assert.equal((html.match(/>Falar pelo WhatsApp</g) || []).length, 2);
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
