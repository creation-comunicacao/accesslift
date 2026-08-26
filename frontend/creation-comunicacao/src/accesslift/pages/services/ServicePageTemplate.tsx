import type { ServicePageConfig } from "../../data/pageContent";
import {
  ConversionHero,
  FaqSection,
  FinalConversionSection,
  ProcessSection,
  RelatedEquipmentSection,
  SectionList,
  ValueSection,
} from "../shared/StructuredPageSections";

type ServicePageTemplateProps = {
  page: ServicePageConfig;
};

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  return (
    <>
      <ConversionHero eyebrow={page.eyebrow} title={page.seo.h1} description={page.description} />
      <ValueSection title="Problema ou oportunidade" description={page.problem} />
      <ValueSection title="Proposta do servico" description={page.proposal} />
      <SectionList eyebrow="Beneficios" title="Beneficios do servico" items={page.benefits} />
      <ProcessSection title="Como funciona" steps={page.process} />
      <SectionList eyebrow="Aplicacoes" title="Aplicacoes previstas" items={page.applications} />
      <RelatedEquipmentSection categories={page.relatedCategories} />
      <FaqSection items={page.faq} />
      <FinalConversionSection />
    </>
  );
}
