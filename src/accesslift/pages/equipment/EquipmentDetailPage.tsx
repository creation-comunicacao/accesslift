import {
  BadgeCheck,
  Download,
  FileText,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { getCategoryBySlug, getRelatedEquipment } from "../../catalog/catalog";
import { trackEvent } from "../../analytics/analytics";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import {
  CheckAvailabilityButton,
  RequestQuoteButton,
  TalkToSpecialistButton,
} from "../../components/buttons/CtaButtons";
import { Button } from "../../components/buttons/Button";
import { Accordion } from "../../components/ui/Accordion";
import { Badge } from "../../components/ui/Badge";
import type { Equipment } from "../../types/equipment";

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
  { key: "alimentacao", label: "Alimentacao" },
  { key: "peso", label: "Peso" },
  { key: "largura", label: "Largura" },
  { key: "comprimento", label: "Comprimento" },
  { key: "alturaRecolhida", label: "Altura recolhida" },
  { key: "dimensaoPlataforma", label: "Dimensoes da plataforma" },
  { key: "raioGiro", label: "Raio de giro" },
  { key: "pneus", label: "Pneus" },
  { key: "bateria", label: "Bateria" },
  { key: "alcanceHorizontal", label: "Alcance horizontal" },
];

const categoryName = (equipment: Equipment) =>
  getCategoryBySlug(equipment.category)?.name || "Equipamento";

function ImagePanel({ equipment }: EquipmentDetailPageProps) {
  return (
    <div className="grid gap-4">
      {equipment.mainImage.src ? (
        <img
          src={equipment.mainImage.src}
          alt={equipment.mainImage.alt}
          className="aspect-[4/3] w-full rounded-lg border border-slate-200 bg-slate-100 object-cover premium-shadow"
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 premium-shadow">
          <img
            src="/images/accesslift/oficiais/plataformas-07.jpeg"
            alt="Frota de plataformas elevatorias da Accesslift"
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-md bg-slate-950/90 p-3 text-center text-sm font-extrabold text-white">
            Imagem geral da frota. A foto especifica deste modelo ainda sera cadastrada.
          </div>
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
                className="aspect-square rounded-md border border-slate-200 bg-slate-100 object-cover"
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

function SpecsGrid({ equipment }: EquipmentDetailPageProps) {
  const specs = specLabels
    .map((item) => ({ ...item, value: equipment.specs[item.key] }))
    .filter((item) => Boolean(item.value));

  if (specs.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5">
        <Ruler className="h-7 w-7 text-slate-500" aria-hidden />
        <h2 className="mt-3 text-xl font-black text-slate-950">Especificacoes a cadastrar</h2>
        <p className="mt-2 text-sm text-slate-600">
          Nenhum dado tecnico oficial foi preenchido para este equipamento.
        </p>
      </div>
    );
  }

  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {specs.map((spec) => (
        <div key={spec.key} className="rounded-lg border border-slate-200 bg-white p-4 soft-shadow">
          <dt className="text-xs font-black uppercase tracking-wider text-slate-500">
            {spec.label}
          </dt>
          <dd className="mt-2 text-lg font-black text-slate-950">{spec.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ListSection({
  title,
  items,
  icon: Icon,
}: {
  title: string;
  items: string[];
  icon: typeof BadgeCheck;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
      <Icon className="h-7 w-7 text-lime-700" aria-hidden />
      <h2 className="mt-3 text-xl font-black text-slate-950">{title}</h2>
      <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-600">
        {items.map((item) => (
          <li key={item} className="rounded-md bg-slate-50 px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function EquipmentDetailPage({ equipment }: EquipmentDetailPageProps) {
  const related = getRelatedEquipment(equipment);
  const faqItems = equipment.faq.map((item, index) => ({
    id: `${equipment.id}-faq-${index}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <ImagePanel equipment={equipment} />
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge tone="lime">{equipment.brand}</Badge>
              <Badge tone="outline">{equipment.model}</Badge>
              <Badge tone="steel">{categoryName(equipment)}</Badge>
              {equipment.validationStatus === "validate-before-publish" && (
                <Badge tone="amber">Validar antes de publicar</Badge>
              )}
            </div>
            <h1 className="mt-5 text-slate-950">{equipment.seo.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{equipment.summary}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <CheckAvailabilityButton equipmentSlug={equipment.slug} />
              <RequestQuoteButton />
              <TalkToSpecialistButton className="sm:col-span-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-8">
          <section>
            <div className="mb-5 flex items-center gap-2">
              <PackageCheck className="h-6 w-6 text-lime-700" aria-hidden />
              <h2 className="text-2xl font-black text-slate-950">Dados tecnicos</h2>
            </div>
            <SpecsGrid equipment={equipment} />
          </section>

          <div className="grid gap-5 md:grid-cols-3">
            <ListSection title="Caracteristicas" items={equipment.characteristics} icon={BadgeCheck} />
            <ListSection title="Diferenciais tecnicos" items={equipment.differentials} icon={ShieldCheck} />
            <ListSection title="Aplicacoes recomendadas" items={equipment.applications} icon={Wrench} />
          </div>

          {faqItems.length > 0 && (
            <section>
              <h2 className="mb-5 text-2xl font-black text-slate-950">FAQ do equipamento</h2>
              <Accordion items={faqItems} />
            </section>
          )}

          {related.length > 0 && (
            <section>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h2 className="text-2xl font-black text-slate-950">Equipamentos relacionados</h2>
                  <p className="mt-2 text-sm font-semibold text-slate-600">
                    Relacionados pela mesma categoria. Faixa de altura sera considerada quando houver dados oficiais.
                  </p>
                </div>
                <Button href="/equipamentos/" variant="secondary">
                  Ver catalogo
                </Button>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {related.map((item) => (
                  <EquipmentCard key={item.id} equipment={item} />
                ))}
              </div>
            </section>
          )}

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-black text-slate-950">Precisa de locacao?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Consulte as modalidades de locacao e fale com a equipe para validar a disponibilidade do equipamento.
            </p>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary" className="mt-4">
              Conhecer locacao
            </Button>
          </section>
        </div>

        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-5 premium-shadow lg:sticky lg:top-28">
          <FileText className="h-8 w-8 text-lime-700" aria-hidden />
          <h2 className="mt-4 text-xl font-black text-slate-950">Ficha tecnica</h2>
          {equipment.technicalSheetPdf ? (
            <a
              href={equipment.technicalSheetPdf}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800"
              download
              onClick={() =>
                trackEvent({
                  name: "technical_sheet_download",
                  payload: { equipment_slug: equipment.slug },
                })
              }
            >
              <Download className="h-4 w-4" aria-hidden />
              Baixar ficha tecnica
            </a>
          ) : (
            <p className="mt-3 rounded-md border border-dashed border-slate-300 bg-slate-50 p-3 text-sm font-semibold text-slate-600">
              PDF ainda nao cadastrado para este equipamento.
            </p>
          )}
          {equipment.manualPdf && (
            <a
              href={equipment.manualPdf}
              className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50"
              download
              onClick={() =>
                trackEvent({
                  name: "technical_sheet_download",
                  payload: { equipment_slug: equipment.slug, document_type: "manual" },
                })
              }
            >
              <Download className="h-4 w-4" aria-hidden />
              Baixar manual
            </a>
          )}
          {(equipment.documentSource || equipment.documentUpdatedAt) && (
            <p className="mt-3 text-xs leading-5 text-slate-500">
              {equipment.documentSource ? `Fonte: ${equipment.documentSource}. ` : ""}
              {equipment.documentUpdatedAt ? `Atualizado em ${equipment.documentUpdatedAt}.` : ""}
            </p>
          )}
          <div className="mt-5 grid gap-2">
            <CheckAvailabilityButton className="w-full" equipmentSlug={equipment.slug} />
            <RequestQuoteButton className="w-full" />
          </div>
        </aside>
      </section>
    </>
  );
}
