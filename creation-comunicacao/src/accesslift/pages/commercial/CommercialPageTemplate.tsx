import type { CommercialPageConfig } from "../../data/pageContent";
import {
  ConversionHero,
  DifferentialsSection,
  FaqSection,
  FinalConversionSection,
  ProcessSection,
  RelatedEquipmentSection,
  SectionList,
  ValueSection,
} from "../shared/StructuredPageSections";

type CommercialPageTemplateProps = {
  page: CommercialPageConfig;
};

export function CommercialPageTemplate({ page }: CommercialPageTemplateProps) {
  return (
    <>
      <ConversionHero
        eyebrow={page.eyebrow}
        title={page.seo.h1}
        description={page.description}
      />
      <ValueSection title="Proposta de valor" description={page.valueProposition} />
      <SectionList eyebrow="Beneficios" title="Beneficios preparados" items={page.benefits} />
      <RelatedEquipmentSection categories={page.relatedCategories} />
      <DifferentialsSection />
      <ProcessSection title="Como funciona" steps={page.process} />
      <FaqSection items={page.faq} />
      <FinalConversionSection />
    </>
  );
}
