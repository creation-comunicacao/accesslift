import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { defaultCatalogFilters, filterEquipment, getAvailableHeightRangeFilters, hasActiveCatalogFilters, sortEquipment } from "../../catalog/catalog";
import { RequestQuoteButton } from "../../components/buttons/CtaButtons";
import { Button } from "../../components/buttons/Button";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CatalogFiltersPanel } from "../../components/catalog/CatalogFiltersPanel";
import { CatalogState } from "../../components/catalog/CatalogState";
import { PageIntro } from "../../components/layout/PageIntro";
import { Badge } from "../../components/ui/Badge";
import { Accordion } from "../../components/ui/Accordion";
import { mockEquipments } from "../../data/equipment";
import type { CatalogFilters, CatalogSort } from "../../types/equipment";

const getFinderFilters = (): CatalogFilters => {
  const stored = window.sessionStorage.getItem("accesslift-catalog-filters");
  window.sessionStorage.removeItem("accesslift-catalog-filters");

  if (!stored) {
    return defaultCatalogFilters;
  }

  try {
    return { ...defaultCatalogFilters, ...JSON.parse(stored) } as CatalogFilters;
  } catch {
    return defaultCatalogFilters;
  }
};

export function EquipmentIndexPage() {
  const [filters, setFilters] = useState<CatalogFilters>(getFinderFilters);
  const [sort, setSort] = useState<CatalogSort>("featured");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const heightRanges = useMemo(() => getAvailableHeightRangeFilters(mockEquipments), []);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 180);
    return () => window.clearTimeout(timer);
  }, []);

  const results = useMemo(
    () => sortEquipment(filterEquipment(mockEquipments, filters), sort),
    [filters, sort],
  );

  const clearFilters = () => {
    setFilters(defaultCatalogFilters);
    setSort("featured");
  };

  const activeFilters = hasActiveCatalogFilters(filters);

  return (
    <>
      <PageIntro
        eyebrow="Equipamentos"
        title="Plataformas Elevatórias para Locação"
        description="Compare plataformas tesoura e articuladas de diferentes marcas, alturas de trabalho e capacidades para encontrar equipamentos adequados a sua operação."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <div data-reveal="fade-up" className="mb-6 rounded-lg border border-slate-200 bg-white p-4 premium-shadow">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge tone={activeFilters ? "lime" : "steel"}>
                {results.length} resultado{results.length === 1 ? "" : "s"}
              </Badge>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Filtre por tipo, marca e faixas de altura disponíveis na frota cadastrada.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800 lg:hidden"
              onClick={() => setIsFilterDrawerOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
              Filtros
            </button>
          </div>

          <div className="hidden lg:block">
            <CatalogFiltersPanel
              filters={filters}
              sort={sort}
              onFiltersChange={setFilters}
              onSortChange={setSort}
              onClear={clearFilters}
              heightRanges={heightRanges}
            />
          </div>
        </div>

        {isLoading ? (
          <CatalogState type="loading" />
        ) : mockEquipments.length === 0 ? (
          <CatalogState type="empty" />
        ) : results.length === 0 ? (
          <CatalogState type="no-results" onClear={clearFilters} />
        ) : (
          <div className="reveal-stagger grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((equipment) => (
              <EquipmentCard key={equipment.id} equipment={equipment} />
            ))}
          </div>
        )}
      </section>

      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/60"
            onClick={() => setIsFilterDrawerOpen(false)}
            aria-label="Fechar filtros"
          />
          <aside className="absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-auto rounded-t-lg bg-white p-4 premium-shadow">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wider text-[#0b2d4d]">
                  Catálogo
                </p>
                <h2 className="text-2xl font-black text-slate-950">Filtros</h2>
              </div>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-800"
                onClick={() => setIsFilterDrawerOpen(false)}
                aria-label="Fechar filtros"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <CatalogFiltersPanel
              filters={filters}
              sort={sort}
              onFiltersChange={setFilters}
              onSortChange={setSort}
              onClear={clearFilters}
              heightRanges={heightRanges}
              compact
            />
            <button
              type="button"
              className="mt-4 min-h-12 w-full rounded-md bg-[#0b2d4d] px-4 text-sm font-extrabold text-white transition hover:bg-[#09243d]"
              onClick={() => setIsFilterDrawerOpen(false)}
            >
              Ver resultados
            </button>
          </aside>
        </div>
      )}

      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 md:grid-cols-2 md:px-6">
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <Badge tone="lime">Escolha</Badge>
            <h2 className="mt-4 text-slate-950">Não sabe qual plataforma escolher?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Não é necessário conhecer previamente o modelo. Informe altura aproximada, cidade, espaço disponível, existência de obstáculos e período de utilização para que a equipe Accesslift auxilie na avaliação das opções.
            </p>
            <RequestQuoteButton className="mt-5" />
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <Badge tone="steel">Locação</Badge>
            <h2 className="mt-4 text-slate-950">Equipamento com suporte Accesslift</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A locação pode ser diária, semanal ou mensal, com entrega e retirada próprias, assistência técnica, manutenção preventiva e suporte durante a operação.
            </p>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary" className="mt-5">
              Conhecer locação
            </Button>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Badge tone="lime">Categorias</Badge>
        <h2 className="mt-4 text-slate-950">Tesoura ou articulada?</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <h3 className="text-slate-950">Plataforma Tesoura</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Para trabalhos predominantemente verticais, quando e possível posicionar o equipamento abaixo ou próximo da área de execução.
            </p>
            <Button href="/plataformas-tesoura/" variant="secondary" className="mt-5">
              Ver plataformas tesoura
            </Button>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <h3 className="text-slate-950">Plataforma Articulada</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Para operações que combinam altura e alcance horizontal, especialmente quando existem obstáculos ou acesso lateral ao ponto de trabalho.
            </p>
            <Button href="/plataformas-articuladas/" variant="secondary" className="mt-5">
              Ver plataformas articuladas
            </Button>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge tone="lime">FAQ</Badge>
          <h2 className="mt-4 text-slate-950">Dúvidas sobre equipamentos</h2>
          <div className="mt-6">
            <Accordion
              items={[
                {
                  id: "equipamentos-tipos",
                  title: "Quais tipos de plataformas a Accesslift possui?",
                  content: "A frota atual reúne plataformas das categorias tesoura e articulada.",
                },
                {
                  id: "equipamentos-marcas",
                  title: "Quais marcas estão disponíveis?",
                  content: "O catálogo trabalha com equipamentos JLG, Genie, Skyjack e Zoomlion.",
                },
                {
                  id: "equipamentos-comparar",
                  title: "Como comparar os modelos?",
                  content: "Compare altura de trabalho, capacidade, dimensões e, no caso das articuladas, alcance horizontal quando esse dado estiver cadastrado.",
                },
                {
                  id: "equipamentos-sem-modelo",
                  title: "Posso solicitar orçamento sem escolher modelo?",
                  content: "Sim. Informe as características do trabalho para que a equipe Accesslift auxilie na escolha.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2>Encontrou o equipamento ou ainda precisa de ajuda?</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
            Fale com a Accesslift e informe as características da sua operação.
          </p>
          <RequestQuoteButton className="mt-5" />
        </div>
      </section>
    </>
  );
}
