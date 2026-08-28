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
        src: "/images/accesslift/oficiais/plataformas-07.jpeg",
        alt: "Entrega de plataformas elevatorias da frota Accesslift",
      }
    : isAssistance || isTraining
      ? {
          src: "/images/accesslift/oficiais/treinamento-assistencia.jpeg",
          alt: "Equipe Accesslift em atendimento em ambiente industrial",
        }
      : null;

  return (
    <>
      <ConversionHero eyebrow={page.eyebrow} title={page.seo.h1} description={page.description} />
      {serviceImage && (
        <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <img
            src={serviceImage.src}
            alt={serviceImage.alt}
            className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}
      {isDelivery && (
        <OfficialMediaGallery
          title="Entrega e retirada com frota propria"
          description="Imagens da operacao logistica Accesslift para apoiar a explicacao do servico."
          images={deliveryGallery}
        />
      )}
      {isTraining && (
        <OfficialMediaGallery
          title="Equipe em atendimento"
          description="Registro visual de atividades da equipe. Detalhes de treinamento, carga horaria e certificacao dependem de confirmacao comercial."
          images={trainingGallery}
        />
      )}
      <ValueSection title="Problema ou oportunidade" description={page.problem} />
      <ValueSection title="Proposta do servico" description={page.proposal} />
      <SectionList eyebrow="Beneficios" title="Beneficios do servico" items={page.benefits} />
      <ProcessSection title="Como funciona" steps={page.process} />
      <SectionList eyebrow="Aplicacoes" title="Aplicacoes previstas" items={page.applications} />
      <RelatedEquipmentSection categories={page.relatedCategories} />
      {isServicesHub && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <h2 className="text-slate-950">Conheca os servicos</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/servicos/assistencia-tecnica/" variant="secondary">Assistencia tecnica</Button>
            <Button href="/servicos/manutencao-preventiva/" variant="secondary">Manutencao preventiva</Button>
            <Button href="/servicos/treinamento-de-operadores/" variant="secondary">Treinamento</Button>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="ghost">Locacao</Button>
            <Button href="/area-de-atendimento/" variant="ghost">Area de atendimento</Button>
            <Button href="/seguranca-e-nr35/" variant="ghost">Seguranca e NR-35</Button>
          </div>
        </section>
      )}
      {isAssistance && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-lime-700">Solicitar assistencia</p>
              <h2 className="mt-3 text-slate-950">Conte o que esta acontecendo</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">O atendimento emergencial depende das condicoes do servico. Esta pagina nao promete prazo ou atendimento a terceiros.</p>
            </div>
            <SupportRequestForm />
          </div>
        </section>
      )}
      {isMaintenance && (
        <SectionList
          eyebrow="Orientacao"
          title="Preventiva, corretiva e assistencia"
          items={[
            "Preventiva: acompanhamento das condicoes de funcionamento e identificacao de necessidades de intervencao.",
            "Corretiva: intervencao aplicavel quando uma necessidade tecnica e identificada.",
            "Assistencia: suporte tecnico e orientacao conforme a solicitacao e as condicoes do servico.",
          ]}
        />
      )}
      {isTraining && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-slate-950">Treinamento e NR-35</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Treinamento de operadores e NR-35 possuem objetivos e requisitos proprios. A pagina de seguranca apresenta esse contexto sem declarar carga horaria, certificado ou validade sem confirmacao.</p>
            <Button href="/seguranca-e-nr35/" variant="secondary" className="mt-5">Entender NR-35</Button>
          </div>
        </section>
      )}
      <FaqSection items={page.faq} />
      <FinalConversionSection />
    </>
  );
}
