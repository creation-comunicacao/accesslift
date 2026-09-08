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
