import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { findClientPage } from "../src/accesslift/data/clientPageRegistry";
import { ClientPageTemplate } from "../src/accesslift/pages/shared/ClientPageTemplate";
import { ValueSection } from "../src/accesslift/pages/shared/StructuredPageSections";

function render(path: string) {
  const page = findClientPage(path);
  assert(page);
  return renderToStaticMarkup(createElement(ClientPageTemplate, { page }));
}

for (const [path, file] of [
  ["/servicos/", "/operacoes/plataformas-07.jpeg"],
  ["/empresa/", "/empresa/operacao-access-lift-em-ambiente-industrial.jpeg"],
  ["/servicos/treinamento-de-operadores/", "/servicos/treinamento-assistencia.jpeg"],
  ["/servicos/assistencia-tecnica/", "/servicos/treinamento-assistencia-03.jpeg"],
]) {
  test(`existing photo moves once into hero: ${path}`, () => {
    const html = render(path);
    const src = `/images/accesslift${file}`;
    assert.equal(html.split(`src="${src}"`).length - 1, 1);
    assert(html.slice(html.indexOf("<section"), html.indexOf("</section>")).includes(`src="${src}"`));
    assert(html.includes("bg-black/65"));
    if (path === "/empresa/") assert(!html.includes('src="/images/accesslift/empresa/empresa.jpeg"'));
  });
}

for (const slug of ["construcao-civil", "industria", "supermercados-e-hipermercados", "atacados"]) {
  test(`segment opening keeps approved copy in editorial treatment: ${slug}`, () => {
    const path = `/segmentos/${slug}/`;
    const html = render(path);
    const opening = html.split('data-client-block="2"')[1].split('data-client-block="3"')[0];
    assert(opening.includes('class="section-eyebrow"'));
    assert(!opening.includes("premium-card"));
    assert(opening.includes(findClientPage(path)!.sections[0].description!));
  });
}

test("unrequested pages and default ValueSection retain their previous presentation", () => {
  const html = render("/seguranca-e-nr35/");
  assert(!html.includes("bg-black/65"));
  const value = renderToStaticMarkup(createElement(ValueSection, { title: "Title", description: "Description" }));
  assert(value.includes("premium-card rounded-lg p-6 md:p-8"));
  assert(!value.includes('class="section-eyebrow"'));
});
