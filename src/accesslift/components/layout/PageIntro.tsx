import type { ReactNode } from "react";
import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton } from "../buttons/CtaButtons";

type PageIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="industrial-grid relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <div className="site-container grid gap-8 py-12 md:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          {eyebrow && (
            <span className="section-eyebrow mb-5">{eyebrow}</span>
          )}
          <h1 className="max-w-4xl text-slate-950">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
        </div>
        <div className="premium-card rounded-lg p-5 backdrop-blur md:p-6">
          <p className="mb-4 text-xs font-black uppercase tracking-wider text-slate-500">
            Atendimento comercial
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
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
