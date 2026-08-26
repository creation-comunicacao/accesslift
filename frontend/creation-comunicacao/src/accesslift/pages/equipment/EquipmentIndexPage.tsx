import { SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { defaultCatalogFilters, filterEquipment, hasActiveCatalogFilters, sortEquipment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CatalogFiltersPanel } from "../../components/catalog/CatalogFiltersPanel";
import { CatalogState } from "../../components/catalog/CatalogState";
import { PageIntro } from "../../components/layout/PageIntro";
import { Badge } from "../../components/ui/Badge";
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
        title="Catalogo dinamico de equipamentos"
        description="Equipamentos renderizados a partir de dados, com filtros combinaveis sem gerar URLs indexaveis ou paginas automaticas por combinacao."
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <div className="mb-6 rounded-lg border border-slate-200 bg-white p-4 premium-shadow">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge tone={activeFilters ? "lime" : "steel"}>
                {results.length} resultado{results.length === 1 ? "" : "s"}
              </Badge>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Canonical controlado em /equipamentos/. Filtros funcionam em estado local.
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                <p className="text-xs font-black uppercase tracking-wider text-lime-700">
                  Catalogo
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
              compact
            />
            <button
              type="button"
              className="mt-4 min-h-12 w-full rounded-md bg-lime-300 px-4 text-sm font-extrabold text-slate-950 transition hover:bg-lime-200"
              onClick={() => setIsFilterDrawerOpen(false)}
            >
              Ver resultados
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
