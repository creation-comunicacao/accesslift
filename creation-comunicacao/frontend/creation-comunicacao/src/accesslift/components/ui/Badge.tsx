import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "lime" | "steel" | "amber" | "outline";
  className?: string;
  key?: string;
};

const tones = {
  lime: "bg-lime-100 text-slate-950 ring-lime-200",
  steel: "bg-slate-100 text-slate-700 ring-slate-200",
  amber: "bg-amber-100 text-amber-900 ring-amber-200",
  outline: "bg-white text-slate-700 ring-slate-300",
};

export function Badge({ children, tone = "steel", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-extrabold uppercase tracking-wider ring-1 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
