import { getCategoryBySlug, getEquipmentByCategory, sortEquipment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton } from "../../components/buttons/CtaButtons";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { categoryGalleryBySlug } from "../../data/officialMedia";
import type { EquipmentCategorySlug } from "../../types/equipment";

type CategoryTemplateProps = {
  slug: EquipmentCategorySlug;
};

const categoryContent = {
  "plataformas-tesoura": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Elevatorias Tesoura",
    description:
      "Pagina de categoria real para plataformas tesoura, independente dos filtros do catalogo.",
    bestFor: ["Trabalhos verticais", "Ambientes com acesso direto", "Operacoes de manutencao e instalacao"],
    choiceNote: "A altura de trabalho deve ser avaliada junto com as caracteristicas do local. Esta pagina nao cria URLs artificiais por metragem.",
    counterpartHref: "/plataformas-articuladas/",
    counterpartLabel: "Ver plataformas articuladas",
  },
  "plataformas-articuladas": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Elevatorias Articuladas",
    description:
      "Pagina de categoria real para plataformas articuladas, preparada para equipamentos com alcance horizontal quando aplicavel.",
    bestFor: ["Acesso com obstaculos", "Aplicacoes externas e industriais", "Demandas com alcance lateral quando validado"],
    choiceNote: "Altura de trabalho e alcance horizontal sao medidas diferentes. Ambas devem ser avaliadas com as caracteristicas da operacao.",
    counterpartHref: "/plataformas-tesoura/",
    counterpartLabel: "Ver plataformas tesoura",
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

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
          <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary">
            Ver opcoes de locacao
          </Button>
          <Button href="/segmentos-e-aplicacoes/" variant="ghost">
            Ver aplicacoes
          </Button>
          <Button href="/equipamentos/" variant="ghost">
            Ver todos os equipamentos
          </Button>
          <Button href={content.counterpartHref} variant="ghost">
            {content.counterpartLabel}
          </Button>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-black text-slate-950">Como avaliar a escolha</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{content.choiceNote}</p>
        </div>
      </section>
      <OfficialMediaGallery
        title={slug === "plataformas-tesoura" ? "Plataformas tesoura da frota" : "Plataformas articuladas da frota"}
        description="Imagens sem identificacao legivel de modelo permanecem na categoria e nao sao usadas como foto de um equipamento especifico."
        images={categoryGalleryBySlug[slug]}
      />
    </>
  );
}
