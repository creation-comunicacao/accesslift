import type { Equipment } from "../types/equipment";
import { formatPublicSpecValue } from "../utils/publicText";

export const equipmentEventPayload = (equipment: Equipment) => ({
  equipment_slug: equipment.slug,
  equipment_brand: equipment.brand,
  equipment_model: equipment.model,
  equipment_category: equipment.category,
});

export const equipmentWhatsappMessage = (equipment: Equipment) =>
  `Olá! Vi a plataforma ${equipment.brand} ${equipment.model} no site da Accesslift e gostaria de consultar disponibilidade e solicitar uma cotação.`;

export const equipmentFaq = (equipment: Equipment) => equipment.faq.filter((item) => {
  if (!formatPublicSpecValue(item.answer) || /go-live|definitiv|serial|deve.*confirm|precisa.*confirm/i.test(item.answer)) return false;
  if (/capacidade/i.test(item.question) && !formatPublicSpecValue(equipment.specs.capacidade)) return false;
  if (/altura de trabalho/i.test(item.question) && !formatPublicSpecValue(equipment.specs.alturaTrabalho)) return false;
  if (/elétrica|alimentação/i.test(item.question) && !formatPublicSpecValue(equipment.specs.alimentacao)) return false;
  if (/largura/i.test(item.question) && !formatPublicSpecValue(equipment.specs.largura)) return false;
  if (/alcance horizontal/i.test(item.question) && !formatPublicSpecValue(equipment.specs.alcanceHorizontal)) return false;
  return !/como consultar disponibilidade/i.test(item.question);
}).slice(0, 4);

export const equipmentOperationalPoints = (equipment: Equipment) =>
  [...new Set(equipment.characteristics)].filter((item) =>
    // Numeric highlights belong in the hero/table, not another specification list.
    !/\d|capacidade|altura de trabalho|alimentação:|alcance horizontal:/i.test(item) &&
    Boolean(formatPublicSpecValue(item)),
  );
