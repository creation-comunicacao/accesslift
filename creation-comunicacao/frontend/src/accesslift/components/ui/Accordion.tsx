import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState(items[0]?.id || "");

  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <section key={item.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-extrabold text-slate-950 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setOpenId(isOpen ? "" : item.id)}
              aria-expanded={isOpen}
            >
              {item.title}
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen && <div className="px-4 pb-4 text-sm leading-6 text-slate-600">{item.content}</div>}
          </section>
        );
      })}
    </div>
  );
}
