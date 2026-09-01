import type { ServicePageConfig } from "../../data/pageContent";
import { SupportRequestForm } from "../../components/forms/SupportRequestForm";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { deliveryGallery, trainingGallery } from "../../data/officialMedia";
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
  const isAssistance = page.path === "/servicos/assistencia-tecnica/";
  const isMaintenance = page.path === "/servicos/manutencao-preventiva/";
  const isTraining = page.path === "/servicos/treinamento-de-operadores/";
  const isDelivery = page.path === "/servicos/entrega-e-retirada/";
  const isServicesHub = page.path === "/servicos/";
  const serviceImage = isServicesHub
    ? {
        src: "/images/accesslift/logistica/transporte-plataformas-elevatorias-frota-03.jpeg",
        alt: "Entrega de plataformas elevatórias da frota Accesslift",
        width: 1599,
        height: 899,
      }
    : isAssistance || isTraining
      ? {
          src: isAssistance
            ? "/images/accesslift/servicos/assistencia-tecnica-em-plataforma-elevatoria.jpeg"
            : "/images/accesslift/servicos/treinamento-operacao-plataforma-elevatoria.jpeg",
          alt: "Equipe Accesslift em atendimento em ambiente industrial",
          width: 960,
          height: 1280,
        }
      : null;

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
      {serviceImage && (
        <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <img
            src={serviceImage.src}
            alt={serviceImage.alt}
            width={serviceImage.width}
            height={serviceImage.height}
            sizes="(min-width: 1024px) 1184px, 100vw"
            className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}
      {isDelivery && (
        <OfficialMediaGallery
          title="Entrega e retirada com frota própria"
          description="Imagens da operação logística Accesslift para apoiar a explicacao do serviço."
          images={deliveryGallery}
        />
      )}
      {isTraining && (
        <OfficialMediaGallery
          title="Equipe em atendimento"
          description="Registro visual de atividades da equipe. Detalhes de treinamento, carga horária e certificação dependem de confirmação comercial."
          images={trainingGallery}
        />
      )}
      {page.contentSections ? (
        page.contentSections.map((section) =>
          section.items ? (
            <SectionList
              key={section.title}
              eyebrow={section.eyebrow || "Serviço"}
              title={section.title}
              description={section.description}
              items={section.items}
              cta={section.cta}
            />
          ) : (
            <ValueSection
              key={section.title}
              eyebrow={section.eyebrow || "Serviço"}
              title={section.title}
              description={section.description || ""}
              cta={section.cta}
            />
          ),
        )
      ) : (
        <>
          <ValueSection title="Problema ou oportunidade" description={page.problem} />
          <ValueSection title="Proposta do serviço" description={page.proposal} />
          <SectionList eyebrow="Beneficios" title="Beneficios do serviço" items={page.benefits} />
          <ProcessSection title="Como funciona" steps={page.process} />
          <SectionList eyebrow="Aplicações" title="Aplicações previstas" items={page.applications} />
        </>
      )}
      <RelatedEquipmentSection categories={page.relatedCategories} />
      {isServicesHub && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <h2 className="text-slate-950">Conheça os serviços</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/servicos/assistencia-tecnica/" variant="secondary">Assistência técnica</Button>
            <Button href="/servicos/manutencao-preventiva/" variant="secondary">Manutenção preventiva</Button>
            <Button href="/servicos/treinamento-de-operadores/" variant="secondary">Treinamento</Button>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="ghost">Locação</Button>
            <Button href="/area-de-atendimento/" variant="ghost">Área de atendimento</Button>
            <Button href="/seguranca-e-nr35/" variant="ghost">Segurança e NR-35</Button>
          </div>
        </section>
      )}
      {isAssistance && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-lime-700">Solicite assistência técnica</p>
              <h2 className="mt-3 text-slate-950">Envie as informações da ocorrência</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Informe modelo, local e descrição da situação. As solicitações sao avaliadas conforme equipamento, localidade e relação com a operação Accesslift.</p>
            </div>
            <SupportRequestForm />
          </div>
        </section>
      )}
      {isMaintenance && (
        <SectionList
          eyebrow="Orientação"
          title="Preventiva, corretiva e assistência"
          items={[
            "Preventiva: acompanhamento das condições de funcionamento e identificação de necessidades de intervenção.",
            "Corretiva: intervenção aplicável quando uma necessidade técnica e identificada.",
            "Assistência: suporte técnico e orientação conforme a solicitação e as condições do serviço.",
          ]}
        />
      )}
      {isTraining && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-slate-950">Treinamento e NR-35</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Treinamento de operadores e NR-35 possuem objetivos e requisitos próprios. A página de segurança apresenta esse contexto sem declarar carga horária, certificado ou validade sem confirmação.</p>
            <Button href="/seguranca-e-nr35/" variant="secondary" className="mt-5">Entender NR-35</Button>
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
