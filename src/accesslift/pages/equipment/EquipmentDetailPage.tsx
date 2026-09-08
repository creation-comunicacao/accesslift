import { Download, Headphones, ImageIcon, MessageCircle, PackageCheck, Ruler, Send, ShieldCheck } from "lucide-react";
import { getRelatedEquipment } from "../../catalog/catalog";
import { equipmentEventPayload, equipmentFaq, equipmentOperationalPoints, equipmentWhatsappMessage } from "../../catalog/equipmentPresentation";
import { trackEvent } from "../../analytics/analytics";
import { contactConfig } from "../../data/contact";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { Button } from "../../components/buttons/Button";
import { Accordion } from "../../components/ui/Accordion";
import { Badge } from "../../components/ui/Badge";
import { getManufacturerAccent } from "../../design/manufacturerAccents";
import type { Equipment } from "../../types/equipment";
import { formatPublicSpecValue } from "../../utils/publicText";

type EquipmentDetailPageProps = {
  equipment: Equipment;
};

const specLabels: Array<{
  key: keyof Equipment["specs"];
  label: string;
}> = [
  { key: "alturaTrabalho", label: "Altura de trabalho" },
  { key: "alturaPlataforma", label: "Altura da plataforma" },
  { key: "capacidade", label: "Capacidade" },
  { key: "capacidadeExtensao", label: "Capacidade da extensão" },
  { key: "alimentacao", label: "Alimentação" },
  { key: "peso", label: "Peso" },
  { key: "largura", label: "Largura" },
  { key: "comprimento", label: "Comprimento" },
  { key: "alturaMaquina", label: "Altura da máquina" },
  { key: "alturaRecolhida", label: "Altura recolhida" },
  { key: "dimensaoPlataforma", label: "Dimensões da plataforma" },
  { key: "extensaoDeck", label: "Extensão do deck" },
  { key: "distanciaEntreEixos", label: "Distância entre eixos" },
  { key: "distanciaSolo", label: "Distância do solo" },
  { key: "raioGiro", label: "Raio de giro" },
  { key: "raioGiroInterno", label: "Raio de giro interno" },
  { key: "raioGiroExterno", label: "Raio de giro externo" },
  { key: "sistemaEletrico", label: "Sistema elétrico" },
  { key: "pneus", label: "Pneus" },
  { key: "bateria", label: "Bateria" },
  { key: "carregador", label: "Carregador" },
  { key: "alcanceHorizontal", label: "Alcance horizontal" },
  { key: "alturaSobreObstaculo", label: "Altura sobre obstáculo" },
];

function ImagePanel({ equipment }: EquipmentDetailPageProps) {
  const accent = getManufacturerAccent(equipment.brand);

  return (
    <div className="grid gap-4">
      {equipment.mainImage.src ? (
        <div className={`media-frame overflow-hidden rounded-lg p-3 premium-shadow ring-4 ${accent.ring}`}>
          <img
            src={equipment.mainImage.src}
            alt={equipment.mainImage.alt}
            width={equipment.mainImage.width}
            height={equipment.mainImage.height}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] w-full rounded-md object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      ) : (
        <div className={`media-frame flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border-dashed px-6 text-center premium-shadow ring-4 ${accent.ring}`}>
          <ImageIcon className="h-12 w-12 text-slate-400" aria-hidden />
          <p className="mt-4 text-sm font-extrabold text-slate-600">
            Foto específica deste modelo ainda não cadastrada.
          </p>
        </div>
      )}

      {equipment.gallery.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {equipment.gallery.map((image) =>
            image.src ? (
              <img
                key={`${image.src}-${image.alt}`}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 160px, 33vw"
                className="aspect-square rounded-md border border-slate-200 bg-slate-50 object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}

function TextBlock({ children }: { children: string }) {
  return (
    <div className="grid max-w-3xl gap-3 text-base leading-7 text-slate-600">
      {children.split("\n\n").map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

const getAvailableSpecs = (equipment: Equipment) =>
  specLabels
    .map((item) => ({ ...item, value: formatPublicSpecValue(equipment.specs[item.key]) }))
    .filter((item) => Boolean(item.value));

function HeroSpecs({ equipment }: EquipmentDetailPageProps) {
  const highlightKeys: Array<keyof Equipment["specs"]> = [
    "alturaTrabalho",
    "alturaPlataforma",
    "capacidade",
    "alimentacao",
  ];
  const specs = specLabels
    .filter((item) => highlightKeys.includes(item.key))
    .map((item) => ({ ...item, value: formatPublicSpecValue(equipment.specs[item.key]) }))
    .filter((item) => Boolean(item.value));

  if (specs.length === 0) {
    return null;
  }

  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2">
      {specs.map((spec) => (
        <div key={spec.key} className="rounded-md border border-slate-200 bg-white px-3 py-2">
          <dt className="text-[11px] font-black uppercase tracking-wider text-slate-500">{spec.label}</dt>
          <dd className="mt-1 text-base font-black text-slate-950">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function SpecsTable({ equipment }: EquipmentDetailPageProps) {
  const specs = getAvailableSpecs(equipment);

  if (specs.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white soft-shadow">
      <table className="w-full text-left text-sm">
        <tbody>
          {specs.map((spec) => (
            <tr key={spec.key} className="border-b border-slate-100 last:border-b-0">
              <th className="w-1/2 bg-slate-50 px-4 py-3 font-black uppercase tracking-wider text-slate-500">
                {spec.label}
              </th>
              <td className="px-4 py-3 font-bold text-slate-900">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EquipmentDetailPage({ equipment }: EquipmentDetailPageProps) {
  const accent = getManufacturerAccent(equipment.brand);
  const related = getRelatedEquipment(equipment);
  const modelName = `${equipment.brand} ${equipment.model}`;
  const category = equipment.category === "plataformas-tesoura" ? "Plataforma Tesoura" : "Plataforma Articulada";
  const quoteHref = `/solicite-orcamento/?equipamento=${encodeURIComponent(equipment.slug)}`;
  const track = (name: string) => trackEvent({ name, payload: equipmentEventPayload(equipment) });
  const faqItems = equipmentFaq(equipment).map((item, index) => ({
    id: `${equipment.id}-faq-${index}`,
    title: item.question,
    content: item.answer,
  }));
  const operationalPoints = equipmentOperationalPoints(equipment);
  const quoteButton = (
    <Button href={quoteHref} icon={<Send className="h-4 w-4" aria-hidden />} onClick={() => track("equipment_quote_click")}>
      Solicitar cotação
    </Button>
  );

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div data-reveal="fade-right"><ImagePanel equipment={equipment} /></div>
          <div data-reveal="fade-left" className="relative overflow-hidden rounded-lg bg-white/70 p-5 shadow-[0_18px_45px_rgba(11,45,77,0.08)] ring-1 ring-slate-200/70 md:p-6">
            <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} aria-hidden />
            <div className="flex flex-wrap gap-2">
              <Badge tone="outline" className={accent.badge}>{equipment.brand}</Badge>
              <Badge tone="outline">{equipment.model}</Badge>
              <Badge tone="steel">{category}</Badge>
            </div>
            <h1 className="mt-5 text-slate-950">{equipment.seo.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{equipment.summary}</p>
            <HeroSpecs equipment={equipment} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {quoteButton}
              <Button href={quoteHref} variant="secondary" icon={<PackageCheck className="h-4 w-4" aria-hidden />} onClick={() => track("equipment_availability_click")}>
                Consultar disponibilidade
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 md:px-6">
        <section data-reveal="fade-up">
          <div className="mb-5 flex items-center gap-2">
            <PackageCheck className="h-6 w-6 text-[#0b2d4d]" aria-hidden />
            <h2 className="text-2xl font-black text-slate-950">Conheça a {modelName}</h2>
          </div>
          <TextBlock>{equipment.overview}</TextBlock>
          {getAvailableSpecs(equipment).length > 0 && (
            <div className="mt-8">
              <div className="mb-5 flex items-center gap-2">
                <Ruler className="h-6 w-6 text-[#0b2d4d]" aria-hidden />
                <h3 className="text-xl font-black text-slate-950">Especificações técnicas</h3>
              </div>
              <SpecsTable equipment={equipment} />
            </div>
          )}
          {(equipment.technicalSheetPdf || equipment.manualPdf) && (
            <div className="mt-5 flex flex-wrap gap-3">
              {equipment.technicalSheetPdf && <Button variant="secondary" href={equipment.technicalSheetPdf} icon={<Download className="h-4 w-4" aria-hidden />} onClick={() => track("technical_sheet_download")}>Baixar ficha técnica</Button>}
              {equipment.manualPdf && <Button variant="secondary" href={equipment.manualPdf} icon={<Download className="h-4 w-4" aria-hidden />} onClick={() => track("technical_sheet_download")}>Baixar manual</Button>}
            </div>
          )}
        </section>

        <section data-reveal="fade-up">
          <div className="mb-5 flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
            <h2 className="text-2xl font-black text-slate-950">Quando considerar a {modelName}?</h2>
          </div>
          <TextBlock>{equipment.considerationText}</TextBlock>
          {operationalPoints.length > 0 && (
            <ul className="mt-5 grid gap-2 text-sm font-semibold text-slate-600">
              {operationalPoints.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {equipment.applications.length > 0 && (
            <div className="mt-5">
              <h3 className="text-xl font-black text-slate-950">Aplicações possíveis</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{equipment.applications.join(" • ")}</p>
            </div>
          )}
          <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
            A indicação do equipamento depende das características do local, acessos, altura necessária, piso, obstáculos e condições da operação.
          </p>
          <p className="mt-5 text-sm font-semibold text-slate-600">Precisa de ajuda para avaliar?</p>
          <Button className="mt-3" href="/contato/" variant="secondary" icon={<Headphones className="h-4 w-4" aria-hidden />} onClick={() => track("equipment_specialist_click")}>
            Fale com um especialista
          </Button>
        </section>

        {faqItems.length > 0 && (
          <section data-reveal="fade-up">
            <h2 className="mb-5 text-2xl font-black text-slate-950">FAQ do equipamento</h2>
            <Accordion items={faqItems} />
          </section>
        )}

        {related.length > 0 && (
          <section data-reveal="fade-up">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-2xl font-black text-slate-950">Equipamentos relacionados</h2>
              <Button href="/equipamentos/" variant="secondary">Ver catálogo</Button>
            </div>
            <div className={`reveal-stagger grid gap-5 md:grid-cols-2 ${related.length === 3 ? "xl:grid-cols-3" : ""}`}>
              {related.map((item) => (
                <EquipmentCard key={item.id} equipment={item} compact quoteLabel="Solicitar cotação"
                  onDetailsClick={() => trackEvent({ name: "equipment_related_click", payload: { ...equipmentEventPayload(item), source_equipment_slug: equipment.slug } })}
                  onQuoteClick={() => trackEvent({ name: "equipment_quote_click", payload: equipmentEventPayload(item) })}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      <section data-reveal="fade-up" className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2>Consulte a disponibilidade da {modelName}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
            Informe a cidade, período e características da operação para consultar a disponibilidade deste equipamento e solicitar uma cotação.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {quoteButton}
            <Button href={`${contactConfig.whatsappUrl}?text=${encodeURIComponent(equipmentWhatsappMessage(equipment))}`} variant="whatsapp" icon={<MessageCircle className="h-4 w-4" aria-hidden />} onClick={() => track("equipment_whatsapp_click")}>
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
