import { SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  defaultCatalogFilters,
  filterEquipment,
  getAvailableBrands,
  getAvailableHeightRangeFilters,
  getAvailablePowerOptions,
  hasActiveCatalogFilters,
  sortEquipment,
} from "../../catalog/catalog";
import { RequestQuoteButton, TalkToSpecialistButton, WhatsAppButton } from "../../components/buttons/CtaButtons";
import { Button } from "../../components/buttons/Button";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CatalogFiltersPanel } from "../../components/catalog/CatalogFiltersPanel";
import { CatalogState } from "../../components/catalog/CatalogState";
import { Badge } from "../../components/ui/Badge";
import { Accordion } from "../../components/ui/Accordion";
import { mockEquipments } from "../../data/equipment";
import { heroImages } from "../../data/heroImages";
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
  const brands = useMemo(() => getAvailableBrands(mockEquipments), []);
  const heightRanges = useMemo(() => getAvailableHeightRangeFilters(mockEquipments), []);
  const powerOptions = useMemo(() => getAvailablePowerOptions(mockEquipments), []);
  const equipmentWhatsAppMessage =
    "Olá! Estou consultando os equipamentos no site da AccessLift e gostaria de ajuda para escolher uma plataforma para minha operação.";

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
      <section className="relative isolate overflow-hidden bg-[#0b2d4d] text-white">
        <img {...heroImages.equipamentos} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-12">
          <span className="section-eyebrow !text-white">Equipamentos</span>
          <h1 className="mt-5 max-w-4xl text-white">Plataformas Elevatórias para Locação</h1>
          <p className="mt-4 max-w-3xl text-lg text-white">
            Compare os modelos disponíveis de plataformas tesoura e articuladas e encontre o equipamento adequado às características da sua operação.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <RequestQuoteButton label="Solicite seu orçamento" />
            <WhatsAppButton label="Falar pelo WhatsApp" message={equipmentWhatsAppMessage} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div data-reveal="fade-up" className="mb-6 rounded-lg border border-slate-200 bg-white p-4 premium-shadow">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <Badge tone={activeFilters ? "lime" : "steel"}>
                {results.length} resultado{results.length === 1 ? "" : "s"}
              </Badge>
              <p className="mt-2 text-sm font-semibold text-slate-600">
                Filtre por tipo, marca, altura de trabalho e alimentação disponíveis na frota cadastrada.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800 lg:hidden"
              onClick={() => setIsFilterDrawerOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
              {activeFilters ? "Filtros ativos" : "Filtros"}
            </button>
          </div>

          <div className="hidden lg:block">
            <CatalogFiltersPanel
              filters={filters}
              sort={sort}
              onFiltersChange={setFilters}
              onSortChange={setSort}
              onClear={clearFilters}
              brands={brands}
              heightRanges={heightRanges}
              powerOptions={powerOptions}
            />
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-3 text-sm font-bold">
          <Button href="/plataformas-tesoura/" variant="ghost">
            Ver todas as plataformas tesoura
          </Button>
          <Button href="/plataformas-articuladas/" variant="ghost">
            Ver todas as plataformas articuladas
          </Button>
        </div>

        {mockEquipments.length === 0 ? (
          <CatalogState type="empty" />
        ) : results.length === 0 ? (
          <CatalogState type="no-results" onClear={clearFilters} />
        ) : (
          <div className="reveal-stagger grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
                quoteLabel="Solicitar cotação"
                quoteWhatsappMessage={`Olá! Vi a plataforma ${equipment.brand} ${equipment.model} no site da AccessLift e gostaria de consultar disponibilidade e solicitar uma cotação.`}
              />
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
              brands={brands}
              heightRanges={heightRanges}
              powerOptions={powerOptions}
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
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow md:p-8">
            <span className="section-eyebrow">Escolha</span>
            <div className="mt-4 grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-slate-950">Não sabe qual plataforma escolher?</h2>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                  Informe a altura aproximada, o tipo de acesso e as características do local. Nossa equipe pode ajudar a identificar o equipamento mais adequado para o seu trabalho.
                </p>
              </div>
              <TalkToSpecialistButton label="Fale com um especialista" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 text-slate-950">Dúvidas sobre equipamentos</h2>
          <div className="mt-6">
            <Accordion
              items={[
                {
                  id: "equipamentos-escolha",
                  title: "Como saber qual plataforma é adequada para o meu trabalho?",
                  content:
                    "Considere altura, acesso, obstáculos e características do local. Se ainda tiver dúvida, fale com a equipe AccessLift para orientar a escolha.",
                },
                {
                  id: "equipamentos-diferenca-categorias",
                  title: "Qual a diferença entre plataforma tesoura e articulada?",
                  content:
                    "A tesoura é indicada principalmente para elevação vertical. A articulada é indicada quando também há necessidade de alcance horizontal ou acesso sobre obstáculos.",
                },
                {
                  id: "equipamentos-disponibilidade",
                  title: "Como consultar a disponibilidade de um equipamento?",
                  content:
                    "Use a cotação do modelo desejado ou entre em contato com a equipe AccessLift informando qual plataforma você quer consultar.",
                },
                {
                  id: "equipamentos-cotacao",
                  title: "Como solicitar uma cotação?",
                  content:
                    "Você pode solicitar a cotação pelo próprio equipamento, pelo formulário de orçamento ou pelo contato direto com a equipe.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <span className="section-eyebrow text-white">Orçamento</span>
            <h2 className="mt-4 text-white">Ainda não encontrou o equipamento ideal?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Conte para nossa equipe as características do seu trabalho e ajudamos a identificar a plataforma adequada para sua operação.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <RequestQuoteButton label="Solicite seu orçamento" />
            <WhatsAppButton label="Falar pelo WhatsApp" message={equipmentWhatsAppMessage} />
          </div>
        </div>
      </section>
    </>
  );
}
