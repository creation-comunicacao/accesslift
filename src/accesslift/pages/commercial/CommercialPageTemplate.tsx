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
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
        supportItems={page.supportItems}
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
            <SectionList
              eyebrow={section.eyebrow || "Guia de locacao"}
              title={section.title}
              description={section.description}
              items={section.items}
              cta={section.cta}
            />
          ) : section.description ? (
            <ValueSection
              eyebrow={section.eyebrow}
              title={section.title}
              description={section.description}
              cta={section.cta}
            />
          ) : null}
        </Fragment>
      ))}
      <RelatedEquipmentSection categories={page.relatedCategories} />
      <DifferentialsSection />
      <ProcessSection title="Como funciona" steps={page.process} />
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
