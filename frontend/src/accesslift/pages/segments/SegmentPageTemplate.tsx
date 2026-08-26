import type { SegmentPageConfig } from "../../data/pageContent";
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
  return (
    <>
      <ConversionHero eyebrow={page.eyebrow} title={page.seo.h1} description={page.description} />
      <ValueSection title="Contexto do segmento" description={page.context} />
      <SectionList eyebrow="Necessidades" title="Principais necessidades" items={page.needs} />
      <SectionList eyebrow="Solucoes" title="Solucoes previstas" items={page.solutions} />
      <RelatedEquipmentSection categories={page.relatedCategories} />
      <SectionList eyebrow="Aplicacoes" title="Aplicacoes" items={page.applications} />
      <SectionList eyebrow="Diferenciais" title="Diferenciais para o segmento" items={page.differentials} />
      <FaqSection items={page.faq} />
      <FinalConversionSection />
    </>
  );
}
