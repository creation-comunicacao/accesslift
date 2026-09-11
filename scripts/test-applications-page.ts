import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ApplicationsPage } from "../src/accesslift/pages/segments/ApplicationsPage";
import { applicationsPage } from "../src/accesslift/data/applicationsPage";
import { buildInquiryEmail } from "./php-email-test-bridge";

test("applications hub has only seven top-level blocks and unique segment links", () => {
  const html = renderToStaticMarkup(createElement(ApplicationsPage));
  assert(!/Equipamentos relacionados|Soluções para indústria|Conversão|Ver equipamentos/.test(html));
  for (const route of ["industria", "construcao-civil", "supermercados-e-hipermercados", "atacados"]) {
    assert.equal(html.split(`href="/segmentos/${route}/"`).length - 1, 1);
  }
  assert.equal(applicationsPage.contentSections!.length, 4);
  assert.equal(applicationsPage.faq.length, 4);
  assert(html.includes("Não encontrou sua aplicação?"));
  assert(html.includes("Não encontrei meu segmento"));
  assert(!html.includes('href="/equipamentos/'));
});

test("every form email uses the commercial recipient and omits empty/unknown data", () => {
  for (const kind of ["contact", "support", "career", "quote"]) {
    const email = buildInquiryEmail(kind, { nome: "Teste", email: "teste@example.invalid", to: "wrong@example.invalid", empresa: null, mensagem: undefined, pageOrigin: "/contato/" });
    assert.equal(email.to, "comercial@accesslift.com.br");
    assert.equal(email.replyTo, "teste@example.invalid");
    assert(!/undefined|null|wrong@example/.test(email.text));
    assert(email.text.includes("Origem: Site Accesslift"));
    assert(email.subject.includes("Site Accesslift"));
  }
});
