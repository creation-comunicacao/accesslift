import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "../../types/routes";
import { navigateTo } from "../../utils/navigation";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-xs font-bold text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a
            href="/"
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-1 transition hover:bg-slate-100 hover:text-slate-900"
            onClick={(event) => {
              event.preventDefault();
              navigateTo("/");
            }}
          >
            <Home className="h-3.5 w-3.5" aria-hidden />
            Inicio
          </a>
        </li>
        {items.map((item) => (
          <li key={`${item.label}-${item.path || "current"}`} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            {item.path ? (
              <a
                href={item.path}
                className="rounded-md px-1.5 py-1 transition hover:bg-slate-100 hover:text-slate-900"
                onClick={(event) => {
                  event.preventDefault();
                  navigateTo(item.path || "/");
                }}
              >
                {item.label}
              </a>
            ) : (
              <span className="rounded-md bg-slate-100 px-1.5 py-1 font-extrabold text-slate-700">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
