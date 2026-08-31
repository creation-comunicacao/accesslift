import type { SegmentPageConfig, SegmentSection } from "../../data/pageContent";
import { getEquipmentBySegment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { Button } from "../../components/buttons/Button";
import { Badge } from "../../components/ui/Badge";
import { FaqSection } from "../shared/StructuredPageSections";

type SegmentPageTemplateProps = {
  page: SegmentPageConfig;
};

function SegmentHero({ page }: { page: SegmentPageConfig }) {
  return (
    <section className="industrial-grid border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
        <div>
          <Badge tone="lime">{page.eyebrow}</Badge>
          <h1 className="mt-5 text-slate-950">{page.seo.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{page.description}</p>
        </div>
        {(page.heroCta || page.heroSecondaryCta) && (
          <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
            {page.heroCta && (
              <Button href={page.heroCta.href} className="w-full">
                {page.heroCta.label}
              </Button>
            )}
            {page.heroSecondaryCta && (
              <Button href={page.heroSecondaryCta.href} variant="secondary" className="w-full">
                {page.heroSecondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function EditorialSection({ section, index }: { section: SegmentSection; index: number }) {
  const isAlternate = index % 2 === 1;

  return (
    <section className={isAlternate ? "bg-slate-50 py-12" : "py-12"}>
      <article className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-slate-950">{section.title}</h2>
          {section.description && (
            <p className="mt-4 text-base leading-7 text-slate-600">{section.description}</p>
          )}
          {section.items && section.items.length > 0 && (
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.cta && (
            <Button href={section.cta.href} variant="secondary" className="mt-6">
              {section.cta.label}
            </Button>
          )}
        </div>
      </article>
    </section>
  );
}

function SegmentCardsSection({ cards }: { cards: SegmentSection[] }) {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
              <h2 className="text-slate-950">{card.title}</h2>
              {card.description && <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>}
              {card.cta && (
                <Button href={card.cta.href} variant="secondary" className="mt-5">
                  {card.cta.label}
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryGuidanceSection({
  guidance,
}: {
  guidance: NonNullable<SegmentPageConfig["categoryGuidance"]>;
}) {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-slate-950">O tipo de trabalho ajuda a definir a plataforma</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[guidance.tesoura, guidance.articulada].map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
              <h3 className="text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              <Button href={item.cta.href} variant="secondary" className="mt-5">
                {item.cta.label}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SegmentRelatedEquipmentSection({ segmentSlug }: { segmentSlug: NonNullable<SegmentPageConfig["relatedSegmentSlug"]> }) {
  const related = getEquipmentBySegment(segmentSlug, 4);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge tone="lime">Catalogo</Badge>
          <h2 className="mt-4 text-slate-950">Equipamentos relacionados</h2>
          <p className="mt-2 text-sm font-semibold text-slate-600">
            Selecionados pelo cadastro do segmento, sem afirmar adequacao universal a todas as operacoes.
          </p>
        </div>
        <Button href="/equipamentos/" variant="secondary">
          Ver equipamentos
        </Button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {related.map((equipment) => (
          <EquipmentCard key={equipment.id} equipment={equipment} />
        ))}
      </div>
    </section>
  );
}

function SegmentFinalCta({ page }: { page: SegmentPageConfig }) {
  return (
    <section className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div>
          <h2 className="text-white">{page.finalCta.title}</h2>
          {page.finalCta.description && (
            <p className="mt-3 max-w-2xl text-slate-300">{page.finalCta.description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Button>
          {page.finalCta.secondary && (
            <Button href={page.finalCta.secondary.href} variant="secondary">
              {page.finalCta.secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export function SegmentPageTemplate({ page }: SegmentPageTemplateProps) {
  const isSegmentHub = page.path === "/segmentos-e-aplicacoes/";

  return (
    <>
      <SegmentHero page={page} />
      {page.sections.slice(0, 1).map((section, index) => (
        <EditorialSection key={section.title} section={section} index={index} />
      ))}
      {page.segmentCards && page.segmentCards.length > 0 && <SegmentCardsSection cards={page.segmentCards} />}
      {page.categoryGuidance && <CategoryGuidanceSection guidance={page.categoryGuidance} />}
      {page.sections.slice(1).map((section, index) => (
        <EditorialSection key={section.title} section={section} index={index + 1} />
      ))}
      {page.relatedSegmentSlug && <SegmentRelatedEquipmentSection segmentSlug={page.relatedSegmentSlug} />}
      {isSegmentHub && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <h2 className="text-slate-950">Navegue por segmento, categoria e equipamento</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Segmentos conectam aplicacoes reais ao catalogo, locacao e area de atendimento, sem transformar segmento em filtro tecnico do equipamento.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/plataformas-tesoura/" variant="secondary">
              Plataformas tesoura
            </Button>
            <Button href="/plataformas-articuladas/" variant="secondary">
              Plataformas articuladas
            </Button>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="ghost">
              Locacao
            </Button>
            <Button href="/area-de-atendimento/" variant="ghost">
              Area de atendimento
            </Button>
          </div>
        </section>
      )}
      {page.faq.length > 0 && <FaqSection items={page.faq} title={page.faqTitle} />}
      <SegmentFinalCta page={page} />
    </>
  );
}
