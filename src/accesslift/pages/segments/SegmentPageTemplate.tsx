import type { SegmentPageConfig } from "../../data/pageContent";
import { ApplicationsPage } from "./ApplicationsPage";
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
  if (isSegmentHub) return <ApplicationsPage />;

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
              eyebrow={section.eyebrow || "Aplicação"}
              title={section.title}
              description={section.description}
              items={section.items}
              cta={section.cta}
            />
          ) : (
            <ValueSection
              key={section.title}
              eyebrow={section.eyebrow || "Aplicação"}
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
          <SectionList eyebrow="Soluções" title="Soluções previstas" items={page.solutions} />
        </>
      )}
      <RelatedEquipmentSection categories={page.relatedCategories} />
      {!page.contentSections && (
        <>
          <SectionList eyebrow="Aplicações" title="Aplicações" items={page.applications} />
          <SectionList eyebrow="Diferenciais" title="Diferenciais para o segmento" items={page.differentials} />
        </>
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
