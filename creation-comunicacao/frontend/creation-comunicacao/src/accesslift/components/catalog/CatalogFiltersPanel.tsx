import type { CatalogFilters, CatalogSort, EquipmentBrand, EquipmentCategorySlug } from "../../types/equipment";
import { energyFilters, environmentFilters, equipmentBrands, heightRangeFilters } from "../../data/equipment";

type CatalogFiltersPanelProps = {
  filters: CatalogFilters;
  sort: CatalogSort;
  onFiltersChange: (filters: CatalogFilters) => void;
  onSortChange: (sort: CatalogSort) => void;
  onClear: () => void;
  compact?: boolean;
};

const labelClasses = "grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600";
const selectClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-bold text-slate-800 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500";

export function CatalogFiltersPanel({
  filters,
  sort,
  onFiltersChange,
  onSortChange,
  onClear,
  compact = false,
}: CatalogFiltersPanelProps) {
  const updateFilter = <Key extends keyof CatalogFilters>(
    key: Key,
    value: CatalogFilters[Key],
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className={`grid gap-4 ${compact ? "" : "lg:grid-cols-3 xl:grid-cols-6"}`}>
      <label className={labelClasses}>
        Tipo
        <select
          className={selectClasses}
          aria-label="Filtrar por tipo"
          value={filters.category}
          onChange={(event) =>
            updateFilter("category", event.target.value as EquipmentCategorySlug | "all")
          }
        >
          <option value="all">Todos</option>
          <option value="plataformas-tesoura">Tesoura</option>
          <option value="plataformas-articuladas">Articulada</option>
        </select>
      </label>

      <label className={labelClasses}>
        Marca
        <select
          className={selectClasses}
          aria-label="Filtrar por marca"
          value={filters.brand}
          onChange={(event) => updateFilter("brand", event.target.value as EquipmentBrand | "all")}
        >
          <option value="all">Todas</option>
          {equipmentBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClasses}>
        Altura de trabalho
        <select
          className={selectClasses}
          aria-label="Filtrar por altura de trabalho"
          value={filters.heightRange}
          onChange={(event) => updateFilter("heightRange", event.target.value)}
        >
          <option value="all">Todas</option>
          {heightRangeFilters.map((range) => (
            <option key={range.id} value={range.id}>
              {range.label}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClasses}>
        Energia
        <select
          className={selectClasses}
          aria-label="Filtrar por energia"
          value={filters.energy}
          onChange={(event) => updateFilter("energy", event.target.value)}
        >
          <option value="all">Todas</option>
          {energyFilters.map((energy) => (
            <option key={energy.id} value={energy.id}>
              {energy.label}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClasses}>
        Ambiente
        <select
          className={selectClasses}
          aria-label="Filtrar por ambiente"
          value={filters.environment}
          onChange={(event) => updateFilter("environment", event.target.value)}
        >
          <option value="all">Todos</option>
          {environmentFilters.map((environment) => (
            <option key={environment.id} value={environment.id}>
              {environment.label}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClasses}>
        Ordenacao
        <select
          className={selectClasses}
          aria-label="Ordenar equipamentos"
          value={sort}
          onChange={(event) => onSortChange(event.target.value as CatalogSort)}
        >
          <option value="featured">Destaques</option>
          <option value="brand-asc">Marca A-Z</option>
          <option value="model-asc">Modelo A-Z</option>
          <option value="category-asc">Categoria</option>
        </select>
      </label>

      <button
        type="button"
        className="min-h-12 rounded-md border border-slate-300 px-4 text-sm font-extrabold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 lg:col-span-3 xl:col-span-6"
        onClick={onClear}
      >
        Limpar filtros
      </button>
    </div>
  );
}
