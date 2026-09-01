import {
  BadgeCheck,
  Download,
  FileText,
  ImageIcon,
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
  { key: "extensaoDeck", label: "Extensao do deck" },
  { key: "distanciaEntreEixos", label: "Distancia entre eixos" },
  { key: "distanciaSolo", label: "Distancia do solo" },
  { key: "raioGiro", label: "Raio de giro" },
  { key: "raioGiroInterno", label: "Raio de giro interno" },
  { key: "raioGiroExterno", label: "Raio de giro externo" },
  { key: "sistemaEletrico", label: "Sistema eletrico" },
  { key: "pneus", label: "Pneus" },
  { key: "bateria", label: "Bateria" },
  { key: "alcanceHorizontal", label: "Alcance horizontal" },
  { key: "alturaSobreObstaculo", label: "Altura sobre obstaculo" },
];

const categoryName = (equipment: Equipment) =>
  getCategoryBySlug(equipment.category)?.name || "Equipamento";

const categorySingularName = (equipment: Equipment) =>
  equipment.category === "plataformas-tesoura" ? "Tesoura" : "Articulada";

function ImagePanel({ equipment }: EquipmentDetailPageProps) {
  return (
    <div className="grid gap-4">
      {equipment.mainImage.src ? (
        <img
          src={equipment.mainImage.src}
          alt={equipment.mainImage.alt}
          width={equipment.mainImage.width}
          height={equipment.mainImage.height}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="aspect-[4/3] w-full rounded-lg border border-slate-200 bg-slate-50 object-contain premium-shadow"
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-6 text-center premium-shadow">
          <ImageIcon className="h-12 w-12 text-slate-400" aria-hidden />
          <p className="mt-4 text-sm font-extrabold text-slate-600">
            Foto especifica deste modelo ainda nao cadastrada.
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

const getAvailableSpecs = (equipment: Equipment) =>
  specLabels
    .map((item) => ({ ...item, value: equipment.specs[item.key] }))
    .filter((item) => Boolean(item.value));

function HeroSpecs({ equipment }: EquipmentDetailPageProps) {
  const highlightKeys: Array<keyof Equipment["specs"]> = [
    "alturaTrabalho",
    "capacidade",
    "alcanceHorizontal",
    "alimentacao",
  ];
  const specs = specLabels
    .filter((item) => highlightKeys.includes(item.key))
    .map((item) => ({ ...item, value: equipment.specs[item.key] }))
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
            <HeroSpecs equipment={equipment} />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <CheckAvailabilityButton equipmentSlug={equipment.slug} />
              <RequestQuoteButton equipmentSlug={equipment.slug} />
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
              <h2 className="text-2xl font-black text-slate-950">Conheca a {equipment.brand} {equipment.model}</h2>
            </div>
            <p className="max-w-3xl text-base leading-7 text-slate-600">{equipment.overview}</p>
          </section>

          <section>
            <div className="mb-5 flex items-center gap-2">
              <PackageCheck className="h-6 w-6 text-lime-700" aria-hidden />
              <h2 className="text-2xl font-black text-slate-950">Principais caracteristicas</h2>
            </div>
            <SpecsGrid equipment={equipment} />
          </section>

          <section>
            <div className="mb-5 flex items-center gap-2">
              <Ruler className="h-6 w-6 text-lime-700" aria-hidden />
              <h2 className="text-2xl font-black text-slate-950">Especificacoes tecnicas</h2>
            </div>
            <SpecsTable equipment={equipment} />
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <ListSection title="Caracteristicas" items={equipment.characteristics} icon={BadgeCheck} />
            <ListSection title="Aplicacoes possiveis" items={equipment.applications} icon={Wrench} />
          </div>

          <section className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
            <ShieldCheck className="h-7 w-7 text-lime-700" aria-hidden />
            <h2 className="mt-3 text-xl font-black text-slate-950">Quando considerar esta plataforma?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{equipment.considerationText}</p>
          </section>

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
            <h2 className="text-xl font-black text-slate-950">Locacao da {equipment.brand} {equipment.model}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{equipment.rentalText}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <CheckAvailabilityButton equipmentSlug={equipment.slug} />
              <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary">
                Conhecer locacao
              </Button>
            </div>
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
            <RequestQuoteButton className="w-full" equipmentSlug={equipment.slug} />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2>Consulte a disponibilidade da {equipment.brand} {equipment.model}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
            Informe local, periodo e caracteristicas da operacao para validar se esta plataforma {categorySingularName(equipment).toLowerCase()} atende ao trabalho.
          </p>
          <RequestQuoteButton className="mt-5" equipmentSlug={equipment.slug} />
        </div>
      </section>
    </>
  );
}
