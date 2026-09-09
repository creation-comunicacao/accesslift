import { ArrowRight, BadgeCheck, Headphones, MessageCircle, Send } from "lucide-react";
import { Button } from "../../components/buttons/Button";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { getEquipmentBySlug } from "../../catalog/catalog";
import { homeFeaturedEquipmentSlugs } from "../../data/equipment";
import { contactConfig } from "../../data/contact";
import { operationGallery } from "../../data/officialMedia";
import { platformsContent as content, platformsPageConfig as page } from "../../data/platformsPage";
import { trackEvent } from "../../analytics/analytics";

function ConversionActions() {
  return <div className="mt-6 flex flex-wrap gap-3">
    <Button href="/solicite-orcamento/" icon={<Send className="h-4 w-4" aria-hidden />} onClick={() => trackEvent({ name: "quote_request", payload: { source: "/plataformas-elevatorias/" } })}>
      Solicite seu orçamento
    </Button>
    <Button href={contactConfig.whatsappUrl} variant="secondary" icon={<MessageCircle className="h-4 w-4" aria-hidden />} onClick={() => trackEvent({ name: "whatsapp_click", payload: { source: "/plataformas-elevatorias/" } })}>
      Falar pelo WhatsApp
    </Button>
  </div>;
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div data-reveal="fade-up">
    <span className="section-eyebrow">{eyebrow}</span>
    <h2 className="mt-4 text-slate-950">{title}</h2>
  </div>;
}

export function PlatformsPage() {
  const heroImage = operationGallery[3];
  const related = homeFeaturedEquipmentSlugs.map(getEquipmentBySlug).filter(item => item !== undefined);

  return <>
    <section data-platform-block="hero" className="relative isolate overflow-hidden bg-[#0b2d4d] text-white">
      <img src={heroImage.src} alt={heroImage.alt} width={heroImage.width} height={heroImage.height}
        className="absolute inset-0 -z-20 h-full w-full object-cover" loading="eager" decoding="async" />
      <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden />
      <div className="site-container py-12 md:py-16" data-reveal="fade-up">
        <span className="section-eyebrow text-white">{page.eyebrow}</span>
        <h1 className="mt-5 max-w-3xl text-white">{page.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-white">{page.description}</p>
        <ConversionActions />
      </div>
    </section>

    <section data-platform-block="definition" className="section-space-compact">
      <div className="site-container">
        <SectionHeading eyebrow="O que é" title={content.definition.title} />
        <div data-reveal="fade-up" className="mt-5 grid max-w-3xl gap-5 text-slate-600">
          {content.definition.paragraphs.map(text => <p key={text}>{text}</p>)}
        </div>
      </div>
    </section>

    <section data-platform-block="comparison" className="section-space-compact bg-slate-50">
      <div className="site-container">
        <SectionHeading eyebrow="Tesoura x articulada" title={content.comparison.title} />
        <div className="reveal-stagger mt-8 grid gap-6 md:grid-cols-2">
          {content.comparison.categories.map(category => {
            const equipment = getEquipmentBySlug(category.equipmentSlug);
            return <article key={category.href} data-reveal="fade-up" className="premium-card rounded-lg p-5 md:p-6">
              {equipment?.mainImage.src && <div className="media-frame mb-5 rounded-md p-3">
                <img src={equipment.mainImage.src} alt={equipment.mainImage.alt} width={equipment.mainImage.width} height={equipment.mainImage.height}
                  className="aspect-[4/3] w-full rounded-md object-contain" sizes="(min-width: 768px) 45vw, 100vw" loading="lazy" decoding="async" />
              </div>}
              <h3 className="text-slate-950">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{category.description}</p>
              <Button href={category.href} variant="dark" className="mt-5" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>{category.label}</Button>
            </article>;
          })}
        </div>
      </div>
    </section>

    <section data-platform-block="selection" className="section-space-compact">
      <div className="site-container">
        <SectionHeading eyebrow="Como escolher" title={content.selection.title} />
        <ul className="reveal-stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.selection.criteria.map(criterion => <li key={criterion} data-reveal="fade-up" className="flex items-center gap-3 text-slate-700">
            <BadgeCheck className="h-6 w-6 shrink-0 text-[#0b2d4d]" aria-hidden />{criterion}
          </li>)}
        </ul>
        <div className="mt-8 max-w-3xl" data-reveal="fade-up">
          <h3 className="text-slate-950">Precisa de ajuda para escolher?</h3>
          <p className="mt-3 text-slate-600">{content.selection.closing}</p>
          <Button href="/contato/" variant="dark" className="mt-5" icon={<Headphones className="h-4 w-4" aria-hidden />}>Fale com um especialista</Button>
        </div>
      </div>
    </section>

    <section data-platform-block="applications" className="section-space-compact bg-slate-50">
      <div className="site-container">
        <SectionHeading eyebrow="Aplicações" title={content.applications.title} />
        <div className="mt-5 grid max-w-3xl gap-5 text-slate-600" data-reveal="fade-up">
          {content.applications.paragraphs.map(text => <p key={text}>{text}</p>)}
        </div>
      </div>
    </section>

    <section data-platform-block="equipment" className="section-space-compact">
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading eyebrow="Catálogo" title="Equipamentos relacionados" />
          <Button href="/equipamentos/" variant="dark" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>Ver todos os equipamentos</Button>
        </div>
        <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map(equipment => <EquipmentCard key={equipment.id} equipment={equipment} compact detailsVariant="dark" quoteLabel="Solicitar cotação" />)}
        </div>
      </div>
    </section>

    <section data-platform-block="differentials" className="section-space-compact bg-slate-50">
      <div className="site-container">
        <SectionHeading eyebrow="AccessLift" title="Diferenciais AccessLift" />
        <ul className="reveal-stagger mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.differentials.map(item => <li key={item} data-reveal="fade-up" className="flex items-center gap-3 text-slate-700">
            <BadgeCheck className="h-6 w-6 shrink-0 text-[#0b2d4d]" aria-hidden />{item}
          </li>)}
        </ul>
      </div>
    </section>

    <section data-platform-block="rental" className="section-space-compact bg-[#0b2d4d] text-white">
      <div className="site-container" data-reveal="fade-up">
        <span className="section-eyebrow text-white">Locação</span>
        <h2 className="mt-4 text-white">{content.rental.title}</h2>
        <p className="mt-5 text-lg font-semibold text-white">{content.rental.periods}</p>
        <p className="mt-3 max-w-3xl text-slate-300">{content.rental.description}</p>
        <ConversionActions />
      </div>
    </section>
  </>;
}
