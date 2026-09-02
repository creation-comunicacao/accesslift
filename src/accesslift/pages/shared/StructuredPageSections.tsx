import { ArrowRight, BadgeCheck, ClipboardCheck, PackageCheck } from "lucide-react";
import { getEquipmentByCategory } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import {
  CheckAvailabilityButton,
  RequestQuoteButton,
  TalkToSpecialistButton,
  WhatsAppButton,
} from "../../components/buttons/CtaButtons";
import { Button } from "../../components/buttons/Button";
import { Accordion } from "../../components/ui/Accordion";
import { Badge } from "../../components/ui/Badge";
import type { EquipmentCategorySlug } from "../../types/equipment";
import type { ContentItem, CtaLink, FaqItem } from "../../data/pageContent";

type SectionListProps = {
  eyebrow: string;
  title: string;
  description?: string;
  items: Array<string | ContentItem>;
  cta?: CtaLink;
  key?: string;
};

type ProcessSectionProps = {
  title: string;
  steps: string[];
};

type RelatedEquipmentSectionProps = {
  categories: EquipmentCategorySlug[];
};

type FaqSectionProps = {
  items: FaqItem[];
};

export function ConversionHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  supportItems = [],
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  supportItems?: string[];
}) {
  return (
    <section className="industrial-grid border-b border-slate-200 bg-slate-50">
      <div className="site-container grid gap-8 py-12 md:py-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
        <div>
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="mt-5 text-slate-950">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-600">{description}</p>
          {supportItems.length > 0 && (
            <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2">
              {supportItems.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="premium-card rounded-lg p-5 md:p-6">
          <p className="text-xs font-black uppercase tracking-wider text-slate-500">
            Conversão
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {primaryCta ? (
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
            ) : (
              <RequestQuoteButton />
            )}
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="secondary">{secondaryCta.label}</Button>
            ) : (
              <TalkToSpecialistButton />
            )}
            <WhatsAppButton className="sm:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ValueSection({
  title,
  description,
  eyebrow = "Proposta de valor",
  cta,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  cta?: CtaLink;
  key?: string;
}) {
  return (
    <section className="site-container section-space-compact">
      <div className="premium-card rounded-lg p-6 md:p-8">
        <Badge tone="steel">{eyebrow}</Badge>
        <h2 className="mt-4 text-slate-950">{title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{description}</p>
        {cta && (
          <Button href={cta.href} variant="secondary" className="mt-5">
            {cta.label}
          </Button>
        )}
      </div>
    </section>
  );
}

export function SectionList({ eyebrow, title, description, items, cta }: SectionListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="site-container section-space-compact">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-slate-950">{title}</h2>
      {description && <p className="mt-3 max-w-3xl text-slate-600">{description}</p>}
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((item) => {
          const normalized = typeof item === "string" ? { title: item, description: "" } : item;

          return (
          <article key={normalized.title} className="premium-card premium-card-hover rounded-lg p-5 md:p-6">
            <BadgeCheck className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
            <h3 className="mt-4 text-slate-950">{normalized.title}</h3>
            {normalized.description && <p className="mt-2 text-sm leading-6 text-slate-600">{normalized.description}</p>}
            {normalized.cta && (
              <Button href={normalized.cta.href} variant="ghost" className="mt-4">
                {normalized.cta.label}
              </Button>
            )}
          </article>
          );
        })}
      </div>
      {cta && (
        <div className="mt-6">
          <Button href={cta.href} variant="secondary">{cta.label}</Button>
        </div>
      )}
    </section>
  );
}

export function ProcessSection({ title, steps }: ProcessSectionProps) {
  if (steps.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 section-space-compact">
      <div className="site-container">
        <span className="section-eyebrow">Processo</span>
        <h2 className="mt-4 text-slate-950">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <article key={`${step}-${index}`} className="premium-card relative rounded-lg p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b2d4d] text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base text-slate-950">{step}</h3>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute right-4 top-6 hidden h-5 w-5 text-slate-300 lg:block" aria-hidden />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  const items = ["Entrega", "Retirada", "Assistência", "Manutenção", "Atendimento emergencial", "Treinamento"];

  return (
    <section className="site-container section-space-compact">
      <span className="section-eyebrow">Accesslift</span>
      <h2 className="mt-4 text-slate-950">Diferenciais Accesslift</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="premium-card premium-card-hover rounded-lg p-5 md:p-6">
            <ClipboardCheck className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
            <h3 className="mt-4 text-slate-950">{item}</h3>
            <p className="mt-2 text-sm text-slate-600">
              Estrutura pronta para detalhamento real do serviço.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RelatedEquipmentSection({ categories }: RelatedEquipmentSectionProps) {
  const related = categories
    .flatMap((category) => getEquipmentByCategory(category))
    .filter((equipment, index, list) => list.findIndex((item) => item.id === equipment.id) === index)
    .slice(0, 6);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="site-container section-space-compact">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <span className="section-eyebrow">Catálogo</span>
          <h2 className="mt-4 text-slate-950">Equipamentos relacionados</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            Carregados do catálogo por categoria, sem duplicar dados na página.
          </p>
        </div>
        <Button href="/equipamentos/" variant="secondary">
          Ver catálogo
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {related.map((equipment) => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </section>
  );
}

export function FaqSection({ items }: FaqSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 section-space-compact">
      <div className="mx-auto w-[min(100%-2rem,56rem)]">
        <span className="section-eyebrow">FAQ</span>
        <h2 className="mt-4 text-slate-950">Perguntas frequentes</h2>
        <div className="mt-6">
          <Accordion
            items={items.map((item, index) => ({
              id: `faq-${index}`,
              title: item.question,
              content: item.answer,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

export function FinalConversionSection({
  title = "Precisa consultar disponibilidade ou orçamento?",
  description = "Use os canais de conversão preparados para atendimento comercial, sem número de WhatsApp fictício.",
  primary,
  secondary,
}: {
  title?: string;
  description?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="bg-[#0b2d4d] section-space-compact text-white">
      <div className="site-container grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <PackageCheck className="h-9 w-9 text-white" aria-hidden />
          <h2 className="mt-4 text-white">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            {description}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {primary ? <Button href={primary.href}>{primary.label}</Button> : <CheckAvailabilityButton />}
          {secondary ? <Button href={secondary.href} variant="secondary">{secondary.label}</Button> : <RequestQuoteButton />}
          <TalkToSpecialistButton />
        </div>
      </div>
    </section>
  );
}
