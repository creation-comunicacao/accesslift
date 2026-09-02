import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "lime" | "steel" | "amber" | "outline";
  className?: string;
  key?: string;
};

const tones = {
  lime: "bg-[#0b2d4d]/8 text-[#0b2d4d] ring-[#0b2d4d]/12",
  steel: "bg-slate-100 text-slate-700 ring-slate-200",
  amber: "bg-[#d8242f]/10 text-[#a8141d] ring-[#d8242f]/15",
  outline: "bg-white text-slate-700 ring-slate-300",
};

export function Badge({ children, tone = "steel", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider ring-1 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
