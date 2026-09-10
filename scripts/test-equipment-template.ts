import assert from "node:assert/strict";
import { test } from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { mockEquipments } from "../src/accesslift/data/equipment";
import { getRelatedEquipment } from "../src/accesslift/catalog/catalog";
import { equipmentEventPayload, equipmentFaq, equipmentWhatsappMessage } from "../src/accesslift/catalog/equipmentPresentation";
import { EquipmentDetailPage } from "../src/accesslift/pages/equipment/EquipmentDetailPage";
import { EquipmentCard } from "../src/accesslift/components/cards/EquipmentCard";
import { formatPublicSpecValue } from "../src/accesslift/utils/publicText";

test("technical presentation hides pending data without changing legitimate multiplication", () => {
  for (const value of [null, "", "A confirmar", "Não informado", "Validar", "Em atualização", "Consultar internamente", "230 kg*"]) {
    assert.equal(formatPublicSpecValue(value), null);
  }
  assert.equal(formatPublicSpecValue("320 kg"), "320 kg");
  assert.equal(formatPublicSpecValue("2 * 3 m"), "2 * 3 m");
  assert.equal(formatPublicSpecValue("2* 3 m"), "2* 3 m");
});

for (const equipment of mockEquipments) {
  test(`shared detail template: ${equipment.slug}`, () => {
    const html = renderToStaticMarkup(createElement(EquipmentDetailPage, { equipment }));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal((html.match(/<table\b/g) || []).length, 1);
    assert(!/Principais características|Atendimento comercial|Especificações a cadastrar|Validar antes de publicar|A confirmar/.test(html));
    assert.equal((html.match(/>Consultar disponibilidade</g) || []).length, 1);
    assert.equal((html.match(/Consulte a disponibilidade da /g) || []).length, 1);
    assert(equipmentFaq(equipment).length <= 4);
    assert.equal(equipment.seo.canonical, `/equipamentos/${equipment.slug}/`);
    assert(equipment.seo.title.includes(equipment.model));
    assert(equipment.seo.h1.includes(equipment.model));
    assert(equipmentWhatsappMessage(equipment).includes(`${equipment.brand} ${equipment.model}`));
    assert.equal(equipmentEventPayload(equipment).equipment_model, equipment.model);
    const related = getRelatedEquipment(equipment);
    assert(related.length <= 3);
    assert(related.every(item => item.category === equipment.category && item.status === "published" && item.id !== equipment.id));
    const card = renderToStaticMarkup(createElement(EquipmentCard, { equipment, compact: true, quoteLabel: "Solicitar cotação" }));
    assert(!card.includes(equipment.summary));
    assert(!card.includes("Alcance horizontal"));
  });
}

test("missing specifications do not render an empty table or labels", () => {
  const equipment = { ...mockEquipments[0], specs: { alturaTrabalho: null, alturaPlataforma: null, capacidade: null, alimentacao: null, peso: null, largura: null } };
  const html = renderToStaticMarkup(createElement(EquipmentDetailPage, { equipment }));
  assert(!html.includes("<table"));
  assert(!html.includes("Especificações técnicas"));
});

const approvedSpecs: Record<string, [string, string | null, string, string, string | null, string | null, string | null]> = {
  "jlg-1930es": ["1930ES", null, "5,70 m", "227 kg", "0,76 m", null, null],
  "jlg-2630es": ["2630ES", null, "7,77 m", "363 kg sem restrição / 113 kg com restrição", "0,76 m", null, null],
  "jlg-2632es": ["ES2632", null, "7,80 m interna", "230 kg interna / 125 kg externa", "0,81 m", null, null],
  "jlg-3246es": ["ES3246", null, "9,80 m", "320 kg interna / 230 kg externa", "1,17 m", null, null],
  "genie-gs1930": ["GS-1930", "7,85 m interna / 6,47 m externa", "5,85 m interna", "227 kg", "0,77 m", null, null],
  "genie-gs2632": ["GS-2632", "9,85 m interna / 7,33 m externa", "7,85 m interna", "227 kg", "0,81 m", null, null],
  "skyjack-sj3219": ["SJ3219 E", "7,47 m", "5,64 m", "227 kg", "0,81 m", null, null],
  "skyjack-sj3226": ["SJ3226 E", "9,63 m", "7,79 m", "227 kg", "0,81 m", null, null],
  "skyjack-sj4732": ["SJ4732 E", "11,48 m", "9,65 m", "318 kg", "1,20 m", null, null],
  "zoomlion-zs1212ac": ["ZS1212AC", "13,80 m interna / 10 m externa", "11,80 m interna / 8 m externa", "350 kg", "1,15 m", null, null],
  "genie-z34": ["Z-34/22", "12,50 m", "10,50 m", "227 kg", null, "6,80 m", "4,50 m"],
  "genie-z45": ["Z-45/25 DC", "15,87 m", "13,87 m", "227 kg", null, "7,37 m", "7,10 m"],
  "jlg-e450aj": ["E450AJ", "15,72 m", "13,72 m", "227 kg", null, "7,24 m", "7,70 m"],
  "zoomlion-za14je-li": ["ZA14JE-Li", "16,00 m", "14,00 m", "230 kg", null, "8,10 m", "7,74 m"],
};

for (const equipment of mockEquipments) {
  test(`approved September equipment revision: ${equipment.slug}`, () => {
    const spec = equipment.specs;
    assert.deepEqual([equipment.model, spec.alturaTrabalho, spec.alturaPlataforma, spec.capacidade,
      spec.largura, spec.alcanceHorizontal ?? null, spec.alturaSobreObstaculo ?? null], approvedSpecs[equipment.slug]);
    assert(!Object.values(spec).some(value => typeof value === "string" && value.includes("*")));
    const html = renderToStaticMarkup(createElement(EquipmentDetailPage, { equipment }));
    const table = html.match(/<table[\s\S]*?<\/table>/)?.[0] || "";
    assert(table.includes(">Tipo</th>"));
    assert(!/Raio de giro|Peso|Bateria|Carregador|Dimensões da plataforma|Sistema elétrico/.test(table));
    assert(!/documentação.*consultad|documentada|go-live|serial|informação histórica/i.test(JSON.stringify(equipmentFaq(equipment))));
    assert.equal((html.match(/aria-label="Ampliar imagem:/g) || []).length, equipment.images.filter(image => image.src).length);
    assert(html.includes("Informe o local da operação, período e características da operação"));
    assert.equal(html.includes("Documentos do equipamento"), Boolean(equipment.technicalSheetPdf));
    assert(!html.includes("Baixar manual"));
    if (equipment.brand === "JLG" && equipment.category === "plataformas-tesoura") {
      assert(!table.includes("Altura de trabalho"));
      assert(equipmentFaq(equipment).some(item => /altura da plataforma/i.test(item.question)));
      const card = renderToStaticMarkup(createElement(EquipmentCard, { equipment }));
      assert(card.includes("Altura da plataforma"));
      assert(!card.includes("Altura de trabalho"));
    }
    if (spec.capacidade?.includes("interna")) {
      assert(table.includes("Capacidade (interna)") && table.includes("Capacidade (externa)"));
    }
  });
}

test("ES2632 excludes disputed outdoor height and manuals never replace sheets", () => {
  const equipment = mockEquipments.find(item => item.slug === "jlg-2632es")!;
  assert.equal(equipment.specs.alturaTrabalho, null);
  assert.equal(equipment.specs.alturaPlataforma, "7,80 m interna");
  const html = renderToStaticMarkup(createElement(EquipmentDetailPage, {
    equipment: { ...equipment, manualPdf: "/manual.pdf", technicalSheetPdf: null },
  }));
  assert(!html.includes("/manual.pdf"));
  assert(!html.includes("Documentos do equipamento"));
});

test("scissor extension capacities and dimensions match the approved versions", () => {
  for (const [slug, capacity, extension] of [
    ["jlg-1930es", "113 kg", "0,90 m"],
    ["jlg-2630es", "113 kg", "0,90 m"],
    ["jlg-2632es", "120 kg", "0,91 m"],
    ["jlg-3246es", "120 kg", "0,91 m"],
    ["genie-gs1930", "113 kg", undefined],
    ["genie-gs2632", "113 kg", "0,91 m"],
    ["skyjack-sj3219", "113 kg", "0,91 m"],
    ["skyjack-sj3226", "113 kg", "0,91 m"],
    ["skyjack-sj4732", "113 kg", "1,22 m"],
    ["zoomlion-zs1212ac", "113 kg", "0,91 m"],
  ]) {
    const specs = mockEquipments.find(item => item.slug === slug)!.specs;
    assert.equal(specs.capacidadeExtensao, capacity, slug);
    assert.equal(specs.extensaoDeck, extension, slug);
  }
  assert.equal(mockEquipments.find(item => item.slug === "zoomlion-zs1212ac")!.specs.alimentacao, "Elétrica – AC");
  assert.equal(mockEquipments.find(item => item.slug === "zoomlion-za14je-li")!.specs.alimentacao, "Elétrica – Li-ion");
});
