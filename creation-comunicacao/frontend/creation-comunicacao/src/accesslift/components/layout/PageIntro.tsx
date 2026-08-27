import type { ReactNode } from "react";
import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton } from "../buttons/CtaButtons";
import { Badge } from "../ui/Badge";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="industrial-grid relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 md:py-14 lg:grid-cols-[1fr_0.74fr] lg:items-end">
      <div>
        {eyebrow && (
          <Badge tone="lime" className="mb-4">{eyebrow}</Badge>
        )}
        <h1 className="max-w-4xl text-4xl font-black tracking-normal text-slate-950 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white/90 p-4 soft-shadow backdrop-blur">
        <p className="mb-3 text-xs font-black uppercase tracking-wider text-slate-500">
          Atendimento comercial
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        {children || (
          <>
            <RequestQuoteButton />
            <CheckAvailabilityButton />
            <TalkToSpecialistButton className="sm:col-span-2 lg:col-span-1" />
          </>
        )}
        </div>
      </div>
      </div>
    </section>
  );
}
