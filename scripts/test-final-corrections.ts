import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { renderStaticPage, staticPaths } from "./static-pages";
import { mockEquipments } from "../src/accesslift/data/equipment";
import { buildOrganizationSchema } from "../src/accesslift/seo/schema";
import { buildInquiryEmail } from "../server/inquiryEmail";
import { buildWhatsappUrl, defaultWhatsappMessage } from "../src/accesslift/data/contact";

const template = readFileSync(new URL("../index.html", import.meta.url), "utf8");
test("every public WhatsApp link includes one nonempty message", () => {
  for (const path of staticPaths) {
    const html = renderStaticPage(template, path, false).html;
    for (const match of html.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)) {
      const url = new URL(match[1].replaceAll("&amp;", "&"));
      assert.equal(url.pathname, "/551123895259", path);
      assert.equal(url.searchParams.getAll("text").length, 1, path);
      assert(url.searchParams.get("text")?.trim(), path);
      assert(!url.searchParams.get("text")?.includes("?text="), path);
    }
  }
  assert.equal(new URL(buildWhatsappUrl()).searchParams.get("text"), defaultWhatsappMessage);
  const message = "Olá! JLG 1930ES & manutenção + São Paulo?\nOrçamento";
  assert.equal(new URL(buildWhatsappUrl(message)).searchParams.get("text"), message);
});
test("assistance displays all four supplied brand logos only on its own page", () => {
  const html = renderStaticPage(template, "/servicos/assistencia-tecnica/", false).html;
  for (const brand of ["jlg", "genie", "skyjack", "zoomlion"]) {
    const src = `/images/accesslift/marcas/${brand}.png`;
    assert(html.includes(`src="${src}"`));
    assert(readFileSync(new URL(`../public${src}`, import.meta.url)).length > 0);
    assert(!renderStaticPage(template, "/servicos/", false).html.includes(src));
  }
});
test("SMTP email preserves attribution and equipment context", () => {
  const mail = buildInquiryEmail("quote", { email: "qa@example.invalid", brand: "JLG", model: "1930ES", pageOrigin: "/segmentos/construcao-civil/", utmSource: "google", utmMedium: "cpc", utmCampaign: "locacao", utmContent: "anuncio", utmTerm: "tesoura" });
  for (const value of ["JLG 1930ES", "/segmentos/construcao-civil/", "google", "cpc", "locacao", "anuncio", "tesoura"]) assert(`${mail.subject}\n${mail.text}`.includes(value));
});
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
  assert(mockEquipments.every(e => !e.manualPdf));
});

test("JLG E450AJ uses supplied photos and a technical sheet, not an operating manual", () => {
  const equipment = mockEquipments.find(e => e.slug === "jlg-e450aj")!;
  assert.equal(equipment.images.length, 6);
  assert.equal(equipment.mainImage.src, "/images/accesslift/equipamentos/jlg/jlg-e450aj-03.png");
  for (const photo of equipment.images) {
    assert(photo.src);
    assert(readFileSync(new URL(`../public${photo.src}`, import.meta.url)).length > 0);
  }
  assert.equal(equipment.technicalSheetPdf, "/documents/accesslift/jlg-e450aj-ficha-tecnica.pdf");
  assert.equal(equipment.manualPdf, null);
  const html = renderStaticPage(template, "/equipamentos/jlg-e450aj/", false).html;
  assert(html.includes(`href="${equipment.technicalSheetPdf}"`));
  assert(html.includes("Baixar ficha técnica"));
  assert(!html.includes("Baixar manual"));
});

test("confirmed technical sheets exist and are linked on the matching equipment pages", () => {
  for (const slug of ["jlg-1930es", "jlg-2630es", "zoomlion-zs1212ac"]) {
    const equipment = mockEquipments.find(e => e.slug === slug)!;
    assert.equal(equipment.technicalSheetPdf, `/documents/accesslift/${slug}-ficha-tecnica.pdf`);
    const pdf = readFileSync(new URL(`../public${equipment.technicalSheetPdf}`, import.meta.url));
    assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
    const html = renderStaticPage(template, `/equipamentos/${slug}/`, false).html;
    assert(html.includes(`href="${equipment.technicalSheetPdf}"`));
    assert(html.includes("Baixar ficha técnica"));
  }
  for (const [slug, file] of [
    ["jlg-3246es", "jlg-es3246"],
    ["skyjack-sj3219", "skyjack-sj3219-e"],
    ["skyjack-sj3226", "skyjack-sj3226-e"],
    ["skyjack-sj4732", "skyjack-sj4732-e"],
  ]) {
    const equipment = mockEquipments.find(e => e.slug === slug)!;
    assert.equal(equipment.technicalSheetPdf, `/documents/accesslift/${file}-ficha-tecnica.pdf`);
    assert.equal(readFileSync(new URL(`../public${equipment.technicalSheetPdf}`, import.meta.url)).subarray(0, 5).toString(), "%PDF-");
    const html = renderStaticPage(template, `/equipamentos/${slug}/`, false).html;
    assert(html.includes(`href="${equipment.technicalSheetPdf}"`));
  }
});

test("GS-1930, GS-2632 and ES2632 use the new three-image packages and matching PDFs", () => {
  for (const [slug, imagePath, pdfName] of [
    ["genie-gs1930", "genie/gs-1930", "genie-gs1930"],
    ["genie-gs2632", "genie/gs-2632", "genie-gs2632"],
    ["jlg-2632es", "jlg/jlg-es2632", "jlg-es2632"],
  ]) {
    const equipment = mockEquipments.find(item => item.slug === slug)!;
    assert.equal(equipment.images.length, 3);
    assert.equal(equipment.mainImage.src, `/images/accesslift/equipamentos/${imagePath}.png`);
    for (const [index, image] of equipment.images.entries()) {
      assert.equal(image.src, `/images/accesslift/equipamentos/${imagePath}${index ? "-0" + index : ""}.png`);
      const png = readFileSync(new URL(`../public${image.src}`, import.meta.url));
      assert.equal(png.readUInt32BE(16), image.width);
      assert.equal(png.readUInt32BE(20), image.height);
    }
    assert.equal(equipment.technicalSheetPdf, `/documents/accesslift/${pdfName}-ficha-tecnica.pdf`);
    assert.equal(readFileSync(new URL(`../public${equipment.technicalSheetPdf}`, import.meta.url)).subarray(0, 5).toString(), "%PDF-");
    const html = renderStaticPage(template, `/equipamentos/${slug}/`, false).html;
    assert(html.includes(`href="${equipment.technicalSheetPdf}"`));
    assert.equal((html.match(/aria-label="Ampliar imagem:/g) || []).length, 3);
    assert(html.includes(`src="${equipment.mainImage.src}"`));
  }
});
