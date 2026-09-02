import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  label: ReactNode;
  items: DropdownItem[];
  currentPath: string;
  onNavigate: (path: string) => void;
};

export function Dropdown({ label, items, currentPath, onNavigate }: DropdownProps) {
  const active = items.some((item) => item.href === currentPath);

  return (
    <div className="group relative">
      <button
        type="button"
        className={`inline-flex h-10 items-center gap-1 rounded-md px-3 text-sm font-extrabold transition ${
          active
            ? "bg-[#0b2d4d]/8 text-[#0b2d4d]"
            : "text-slate-700 hover:bg-[#0b2d4d]/6 hover:text-[#0b2d4d]"
        }`}
      >
        {label}
        <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" aria-hidden />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 premium-shadow transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`block rounded-md px-3 py-3 text-sm font-bold transition ${
              currentPath === item.href
                ? "bg-[#0b2d4d] text-white"
                : "text-slate-700 hover:bg-[#0b2d4d]/6 hover:text-[#0b2d4d]"
            }`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.href);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
