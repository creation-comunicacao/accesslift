import type { SegmentPageConfig } from "../../data/pageContent";
import { Button } from "../../components/buttons/Button";
import {
  ConversionHero,
  FaqSection,
  FinalConversionSection,
  RelatedEquipmentSection,
  SectionList,
  ValueSection,
} from "../shared/StructuredPageSections";

type SegmentPageTemplateProps = {
  page: SegmentPageConfig;
};

export function SegmentPageTemplate({ page }: SegmentPageTemplateProps) {
  const isSegmentHub = page.path === "/segmentos-e-aplicacoes/";

  return (
    <>
      <ConversionHero
        eyebrow={page.eyebrow}
        title={page.seo.h1}
        description={page.description}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
        supportItems={page.supportItems}
      />
      {page.contentSections ? (
        page.contentSections.map((section) =>
          section.items ? (
            <SectionList
              key={section.title}
              eyebrow={section.eyebrow || "Aplicacao"}
              title={section.title}
              description={section.description}
              items={section.items}
              cta={section.cta}
            />
          ) : (
            <ValueSection
              key={section.title}
              eyebrow={section.eyebrow || "Aplicacao"}
              title={section.title}
              description={section.description || ""}
              cta={section.cta}
            />
          ),
        )
      ) : (
        <>
          <ValueSection title="Contexto do segmento" description={page.context} />
          <SectionList eyebrow="Necessidades" title="Principais necessidades" items={page.needs} />
          <SectionList eyebrow="Solucoes" title="Solucoes previstas" items={page.solutions} />
        </>
      )}
      <RelatedEquipmentSection categories={page.relatedCategories} />
      {!page.contentSections && (
        <>
          <SectionList eyebrow="Aplicacoes" title="Aplicacoes" items={page.applications} />
          <SectionList eyebrow="Diferenciais" title="Diferenciais para o segmento" items={page.differentials} />
        </>
      )}
      {isSegmentHub && (
        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
          <div className="flex flex-wrap gap-3">
            <Button href="/segmentos/industria/" variant="secondary">Solucoes para industria</Button>
            <Button href="/segmentos/construcao-civil/" variant="secondary">Solucoes para construcao</Button>
            <Button href="/segmentos/supermercados-e-hipermercados/" variant="secondary">Solucoes para supermercados</Button>
            <Button href="/segmentos/atacados/" variant="secondary">Solucoes para atacados</Button>
            <Button href="/equipamentos/" variant="ghost">Encontrar uma plataforma</Button>
          </div>
        </section>
      )}
      <FaqSection items={page.faq} />
      <FinalConversionSection
        title={page.finalCta?.title}
        description={page.finalCta?.description}
        primary={page.finalCta?.primary}
        secondary={page.finalCta?.secondary}
      />
    </>
  );
}
