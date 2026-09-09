import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { renderStaticPage, staticPaths } from "./static-pages";

const template = readFileSync(new URL("../index.html", import.meta.url), "utf8");
test("every route includes one global GTM loader and immediate noscript fallback", () => {
  for (const path of [...staticPaths, "/404/"]) {
    const { html } = renderStaticPage(template, path, false);
    assert.equal(html.split("https://www.googletagmanager.com/gtm.js?id=").length - 1, 1, path);
    assert.equal(html.split("https://www.googletagmanager.com/ns.html?id=GTM-5MH55G4K").length - 1, 1, path);
    assert.match(html, /<body>\s*<!-- Google Tag Manager \(noscript\) -->\s*<noscript>/);
    assert(html.indexOf("'consent', 'default'") < html.indexOf("'gtm.start'"));
    assert(html.indexOf("'gtm.start'") < html.indexOf("</head>"));
  }
});
