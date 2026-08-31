import type { CommercialPageConfig } from "../../data/pageContent";
import { Fragment } from "react";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { operationGallery } from "../../data/officialMedia";
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
  const showOperationGallery =
    page.path === "/plataformas-elevatorias/" ||
    page.path === "/locacao-de-plataformas-elevatorias/";

  return (
    <>
      <ConversionHero
        eyebrow={page.eyebrow}
        title={page.seo.h1}
        description={page.description}
      />
      {showOperationGallery && (
        <OfficialMediaGallery
          title="Plataformas em operação"
          description="Registros de plataformas elevatórias em ambientes industriais e internos, usados como apoio visual para aplicações e benefícios da locação."
          images={operationGallery}
        />
      )}
      <ValueSection title="Proposta de valor" description={page.valueProposition} />
      <SectionList eyebrow="Beneficios" title="Beneficios preparados" items={page.benefits} />
      {page.contentSections?.map((section) => (
        <Fragment key={section.title}>
          {section.items ? (
            <SectionList eyebrow="Guia de locacao" title={section.title} items={section.items} />
          ) : section.description ? (
            <ValueSection title={section.title} description={section.description} />
          ) : null}
        </Fragment>
      ))}
      <RelatedEquipmentSection categories={page.relatedCategories} />
      <DifferentialsSection />
      <ProcessSection title="Como funciona" steps={page.process} />
      <FaqSection items={page.faq} />
      <FinalConversionSection />
    </>
  );
}
