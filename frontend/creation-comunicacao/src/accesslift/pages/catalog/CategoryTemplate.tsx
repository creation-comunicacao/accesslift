import { getCategoryBySlug, getEquipmentByCategory, sortEquipment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton } from "../../components/buttons/CtaButtons";
import { Badge } from "../../components/ui/Badge";
import type { EquipmentCategorySlug } from "../../types/equipment";

type CategoryTemplateProps = {
  slug: EquipmentCategorySlug;
};

const categoryContent = {
  "plataformas-tesoura": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Tesoura",
    description:
      "Pagina de categoria real para plataformas tesoura, independente dos filtros do catalogo.",
    bestFor: ["Trabalhos verticais", "Ambientes com acesso direto", "Operacoes de manutencao e instalacao"],
  },
  "plataformas-articuladas": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Articuladas",
    description:
      "Pagina de categoria real para plataformas articuladas, preparada para equipamentos com alcance horizontal quando aplicavel.",
    bestFor: ["Acesso com obstaculos", "Aplicacoes externas e industriais", "Demandas com alcance lateral quando validado"],
  },
};

export function CategoryTemplate({ slug }: CategoryTemplateProps) {
  const category = getCategoryBySlug(slug);
  const content = categoryContent[slug];
  const equipments = sortEquipment(getEquipmentByCategory(slug), "brand-asc");

  if (!category) {
    return null;
  }

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <Badge tone="lime">{content.eyebrow}</Badge>
            <h1 className="mt-5 text-slate-950">{content.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{content.description}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
            <h2 className="text-xl font-black text-slate-950">Aplicacoes comuns</h2>
            <ul className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
              {content.bestFor.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <RequestQuoteButton />
              <TalkToSpecialistButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="steel">
              {equipments.length} equipamento{equipments.length === 1 ? "" : "s"}
            </Badge>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Lista alimentada pelos dados do catalogo, sem transformar filtros em paginas SEO.
            </p>
          </div>
          <CheckAvailabilityButton />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {equipments.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </section>
    </>
  );
}
