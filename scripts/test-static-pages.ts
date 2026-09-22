import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { staticPaths, renderStaticPage, escapeHtml } from "./static-pages";
import { getSeoHead, SITE_ORIGIN } from "../src/accesslift/seo/head";

const template = readFileSync(new URL("../index.html", import.meta.url), "utf8");
test("requested September indexing corrections apply only in production", () => {
  for (const path of ["/equipamentos/jlg-e450aj/", "/equipamentos/jlg-1930es/", "/equipamentos/skyjack-sj3226/", "/equipamentos/genie-gs2632/", "/equipamentos/genie-gs1930/", "/trabalhe-conosco/", "/politica-de-privacidade/"]) {
    const { html, seo } = renderStaticPage(template, path, true);
    assert(html.includes('<meta name="robots" content="index,follow"'), path);
    assert.equal(seo.canonicalPath, path);
    assert(renderStaticPage(template, path, false).html.includes('<meta name="robots" content="noindex,nofollow"'), path);
  }
});
for (const path of staticPaths) {
  test(`static HTML contains route-specific content and unique metadata: ${path}`, () => {
    const { html, seo } = renderStaticPage(template, path, true);
    const head = html.split("</head>")[0];
    assert.equal((head.match(/<title>/g) || []).length, 1);
    assert(head.includes(`<title>${escapeHtml(seo.title)}</title>`));
    for (const meta of getSeoHead(seo, true).meta) {
      const key = meta.name ? `name="${meta.name}"` : `property="${meta.property}"`;
      assert.equal(head.split(`<meta ${key}`).length - 1, 1);
      assert(head.includes(`content="${escapeHtml(meta.content)}"`));
    }
    assert.equal(head.split('rel="canonical"').length - 1, 1);
    assert(head.includes(`href="${SITE_ORIGIN}${seo.canonicalPath}"`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    for (const match of head.matchAll(/type="application\/ld\+json"[^>]*>(.*?)<\/script>/g)) assert.doesNotThrow(() => JSON.parse(match[1]));
    if (path !== "/") assert(!head.includes("Locação de Plataformas Elevatórias em SP | Accesslift"));
  });
}

test("production and preview keep intentional robots directives", () => {
  assert(renderStaticPage(template, "/", true).html.includes('content="index,follow"'));
  assert(renderStaticPage(template, "/", false).html.includes('content="noindex,nofollow"'));
  const unknown = renderStaticPage(template, "/404/", true);
  assert(unknown.html.includes('content="noindex,nofollow"'));
  assert(unknown.html.includes("Página não encontrada"));
});

test("legacy equipment URLs preserve the canonical destination", () => {
  assert.equal(renderStaticPage(template, "/equipamentos/jlg-2630/", true).seo.canonicalPath, "/equipamentos/jlg-2630es/");
});
