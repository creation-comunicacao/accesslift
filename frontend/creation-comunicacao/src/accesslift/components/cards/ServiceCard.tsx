import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  summary: string;
  key?: string;
};

export function ServiceCard({ title, summary }: ServiceCardProps) {
  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-5 soft-shadow transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-lime-300 transition group-hover:bg-lime-300 group-hover:text-slate-950">
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-base font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  );
}
