import type { CommercialPageConfig } from "../../data/pageContent";
import { heroImages } from "../../data/heroImages";
import { PlatformsPage } from "./PlatformsPage";
import { Fragment } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ClipboardCheck,
  HelpCircle,
  MapPin,
  PackageCheck,
  Ruler,
  ShieldCheck,
} from "lucide-react";
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
import { Button } from "../../components/buttons/Button";
import {
  RequestQuoteButton,
  TalkToSpecialistButton,
  WhatsAppButton,
} from "../../components/buttons/CtaButtons";

type CommercialPageTemplateProps = {
  page: CommercialPageConfig;
};

const rentalWhatsappMessage =
  "Olá! Estou no site da AccessLift e gostaria de solicitar informações sobre locação de plataformas elevatórias.";

const rentalPeriodItems = [
  {
    title: "Diária",
    description:
      "Indicada para serviços pontuais ou atividades que exigem o equipamento por poucos dias.",
  },
  {
    title: "Semanal",
    description:
      "Indicada para operações que demandam utilização por um período intermediário.",
  },
  {
    title: "Mensal",
    description:
      "Indicada para projetos, obras, manutenções, operações contínuas ou demandas de maior duração.",
  },
];

const rentalSupportItems = [
  "Equipamentos revisados e preparados para locação",
  "Assistência técnica própria",
  "Manutenção preventiva",
  "Suporte técnico durante o período contratado",
  "Atendimento em caso de necessidade durante a locação",
  "Orientação sobre utilização quando aplicável",
];

const rentalSteps = [
  {
    title: "Conte sua necessidade",
    description:
      "Informe as características do trabalho, altura aproximada, local e período necessário.",
  },
  {
    title: "Definimos o equipamento",
    description: "A equipe auxilia na identificação do modelo mais adequado à operação.",
  },
  {
    title: "Confirmamos a locação",
    description: "Alinhamos disponibilidade, período, condições comerciais e logística.",
  },
  {
    title: "Entrega do equipamento",
    description: "A AccessLift realiza a entrega conforme as condições acordadas.",
  },
  {
    title: "Suporte durante a utilização",
    description:
      "O cliente conta com suporte técnico durante o período da locação, conforme a necessidade.",
  },
  {
    title: "Retirada",
    description:
      "Ao término do período contratado, a retirada é realizada conforme o processo da AccessLift.",
  },
];

function RentalSectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div data-reveal="fade-up">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-4 max-w-3xl text-slate-950">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-slate-600">{description}</p>}
    </div>
  );
}

function RentalPage() {
  return (
    <>
      <section className="hero-photo surface-dark overflow-hidden">
        <img
          {...heroImages.locacao}
          loading="eager"
          decoding="async"
        />
        <div className="site-container flex min-h-[clamp(32rem,68vh,44rem)] items-center py-16 md:py-20">
          <div data-reveal="fade-right" className="max-w-3xl">
            <span className="section-eyebrow text-white">Locação</span>
            <h1 className="mt-6 text-white">Locação de Plataformas Elevatórias em São Paulo</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Plataformas tesoura e articuladas para locação, com períodos flexíveis,
              entrega e retirada próprias e suporte técnico durante a operação.
            </p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <RequestQuoteButton label="Solicite seu orçamento" />
              <WhatsAppButton label="Falar pelo WhatsApp" message={rentalWhatsappMessage} />
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <RentalSectionHeading
            eyebrow="Escolha"
            title="Uma locação que começa pela escolha do equipamento"
            description="A escolha da plataforma deve considerar altura necessária, alcance horizontal, acesso ao local, espaço disponível e características da operação. Caso você ainda não saiba exatamente qual modelo precisa, a equipe AccessLift pode auxiliar na identificação da plataforma adequada ao seu trabalho."
          />
          <div data-reveal="fade-left" className="premium-card rounded-lg p-6 md:p-8">
            <HelpCircle className="h-8 w-8 text-[#0b2d4d]" aria-hidden />
            <h3 className="mt-4 text-slate-950">Não sabe qual equipamento escolher?</h3>
            <p className="mt-3 text-slate-600">
              Nossa equipe pode ajudar a identificar a plataforma adequada às características do seu trabalho.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TalkToSpecialistButton label="Fale com um especialista" />
              <Button href="/equipamentos/" variant="ghost" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
                Ver equipamentos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space-compact">
        <div className="site-container">
          <RentalSectionHeading
            eyebrow="Período"
            title="Locação pelo período que sua operação precisa"
            description="A locação pode acompanhar o tempo necessário da operação, sem exigir uma tabela extensa ou valores fixos sem validação comercial."
          />
          <div className="reveal-stagger mt-8 grid gap-5 md:grid-cols-3">
            {rentalPeriodItems.map((item) => (
              <article key={item.title} data-reveal="fade-up" className="premium-card premium-card-hover rounded-lg p-6">
                <CalendarDays className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
                <h3 className="mt-4 text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space-compact">
        <RentalSectionHeading
          eyebrow="Tipos"
          title="Plataforma tesoura ou articulada?"
          description="Um comparativo curto para orientar o próximo passo, sem duplicar o conteúdo das páginas específicas."
        />
        <div className="reveal-stagger mt-8 grid gap-5 lg:grid-cols-2">
          <article data-reveal="fade-up" className="premium-card premium-card-hover rounded-lg p-6 md:p-8">
            <Ruler className="h-8 w-8 text-[#0b2d4d]" aria-hidden />
            <h3 className="mt-5 text-slate-950">Plataforma Tesoura</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Indicada principalmente para trabalhos que exigem elevação predominantemente vertical,
              estabilidade e boa área de trabalho.
            </p>
            <Button href="/plataformas-tesoura/" variant="secondary" className="mt-6" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Ver plataformas tesoura
            </Button>
          </article>
          <article data-reveal="fade-up" className="premium-card premium-card-hover rounded-lg p-6 md:p-8">
            <PackageCheck className="h-8 w-8 text-[#0b2d4d]" aria-hidden />
            <h3 className="mt-5 text-slate-950">Plataforma Articulada</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Indicada quando, além da altura, é necessário alcance horizontal ou acesso a pontos
              sobre ou ao redor de obstáculos.
            </p>
            <Button href="/plataformas-articuladas/" variant="secondary" className="mt-6" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Ver plataformas articuladas
            </Button>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 section-space-compact">
        <div className="site-container">
          <RentalSectionHeading
            eyebrow="Suporte"
            title="Suporte durante a locação"
            description="A locação não termina quando o equipamento é entregue. A AccessLift oferece estrutura própria para acompanhar a operação durante o período contratado."
          />
          <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rentalSupportItems.map((item) => (
              <div key={item} data-reveal="fade-up" className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0b2d4d]" aria-hidden />
                <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space-compact">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <RentalSectionHeading
            eyebrow="Orçamento"
            title="Quanto custa alugar uma plataforma elevatória?"
            description="O valor da locação varia conforme modelo do equipamento, altura de trabalho, características da plataforma, período da locação, local de entrega e necessidades específicas da operação."
          />
          <div data-reveal="fade-left" className="premium-card rounded-lg p-6 md:p-8">
            <ClipboardCheck className="h-8 w-8 text-[#0b2d4d]" aria-hidden />
            <p className="mt-4 text-slate-600">
              Para receber um valor adequado à sua necessidade, informe as características da operação e o período desejado.
            </p>
            <RequestQuoteButton label="Solicite seu orçamento" className="mt-6" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 section-space-compact">
        <div className="site-container">
          <RentalSectionHeading eyebrow="Processo" title="Como funciona a locação?" />
          <div className="reveal-stagger mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rentalSteps.map((step, index) => (
              <article key={step.title} data-reveal="fade-up" className="premium-card rounded-lg p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b2d4d] text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base text-slate-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-container section-space-compact">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <RentalSectionHeading
              eyebrow="Atendimento"
              title="Atendimento em São Paulo e região"
              description="A AccessLift atende São Paulo e municípios dentro de um raio aproximado de até 150 km de sua base, conforme disponibilidade e condições da operação."
            />
            <div data-reveal="fade-up" className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
              <MapPin className="h-7 w-7 text-[#d8242f]" aria-hidden />
              <h3 className="mt-4 text-slate-950">Não sabe se sua região está dentro da área de atendimento?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Consulte nossa equipe antes de solicitar a locação para validar disponibilidade e logística.
              </p>
              <Button href="/area-de-atendimento/" variant="secondary" className="mt-5">
                Consultar atendimento na minha região
              </Button>
            </div>
          </div>
          <figure data-reveal="fade-left" className="media-frame overflow-hidden rounded-lg p-2">
            <img
              src="/images/accesslift/atendimento/mapa-raio-atendimento-accesslift.jpeg"
              alt="Mapa ilustrando a área de atendimento da AccessLift em um raio aproximado de 150 km"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-md object-cover"
            />
          </figure>
        </div>
      </section>

      <FaqSection
        title="Perguntas frequentes sobre locação de plataformas elevatórias"
        items={[
          {
            question: "Por quanto tempo posso alugar uma plataforma elevatória?",
            answer:
              "Existem opções diárias, semanais e mensais, de acordo com a necessidade da operação.",
          },
          {
            question: "Como saber qual plataforma preciso?",
            answer:
              "A escolha depende de fatores como altura, tipo de acesso, alcance horizontal, ambiente e espaço disponível. A equipe AccessLift pode auxiliar nessa definição.",
          },
          {
            question: "A AccessLift entrega o equipamento?",
            answer:
              "Sim. A AccessLift realiza entrega e retirada próprias dentro da área de atendimento, conforme as condições acordadas para a locação.",
          },
          {
            question: "Existe suporte durante a locação?",
            answer:
              "Sim. A AccessLift oferece suporte técnico durante o período contratado, conforme a necessidade da operação.",
          },
          {
            question: "Vocês atendem minha região?",
            answer:
              "A AccessLift atende São Paulo e municípios em um raio aproximado de até 150 km da base. Consulte a equipe para validar sua localização.",
          },
        ]}
      />

      <section className="bg-[#0b2d4d] section-space-compact text-white">
        <div className="site-container grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div data-reveal="fade-right">
            <ShieldCheck className="h-9 w-9 text-white" aria-hidden />
            <h2 className="mt-4 text-white">Precisa alugar uma plataforma elevatória?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Conte para nossa equipe as características da sua operação e ajudamos a identificar o equipamento, período e condições adequadas para sua necessidade.
            </p>
          </div>
          <div data-reveal="fade-left" className="grid gap-3 sm:grid-cols-2">
            <RequestQuoteButton label="Solicite seu orçamento" />
            <WhatsAppButton label="Falar pelo WhatsApp" message={rentalWhatsappMessage} />
          </div>
        </div>
      </section>
    </>
  );
}

export function CommercialPageTemplate({ page }: CommercialPageTemplateProps) {
  if (page.path === "/plataformas-elevatorias/") {
    return <PlatformsPage />;
  }
  if (page.path === "/locacao-de-plataformas-elevatorias/") {
    return <RentalPage />;
  }

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
              eyebrow={section.eyebrow || "Guia de locação"}
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
