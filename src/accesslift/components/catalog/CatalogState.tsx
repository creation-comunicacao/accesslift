import { Loader2, SearchX } from "lucide-react";
import { TalkToSpecialistButton } from "../buttons/CtaButtons";

type CatalogStateProps = {
  type: "loading" | "empty" | "no-results";
  onClear?: () => void;
};

const copy = {
  loading: {
    title: "Carregando catálogo",
    description: "Preparando equipamentos e filtros disponíveis.",
  },
  empty: {
    title: "Catálogo em preparação",
    description: "Nenhum equipamento cadastrado nesta base de desenvolvimento.",
  },
  "no-results": {
    title: "Nenhum equipamento encontrado",
    description:
      "Nenhum equipamento encontrado com esses filtros. Ajuste os critérios ou fale com nossa equipe para ajudarmos a encontrar uma opção adequada.",
  },
};

export function CatalogState({ type, onClear }: CatalogStateProps) {
  const content = copy[type];

  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-12 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-700">
        {type === "loading" ? (
          <Loader2 className="h-6 w-6 animate-spin" aria-hidden />
        ) : (
          <SearchX className="h-6 w-6" aria-hidden />
        )}
      </div>
      <h2 className="mt-4 text-2xl font-black text-slate-950">{content.title}</h2>
      <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">{content.description}</p>
      {type === "no-results" && (
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <TalkToSpecialistButton label="Fale com um especialista" />
          {onClear && (
            <button
              type="button"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-extrabold text-slate-950 transition hover:border-slate-500 hover:bg-slate-50"
              onClick={onClear}
            >
              Limpar filtros
            </button>
          )}
        </div>
      )}
    </div>
  );
}
