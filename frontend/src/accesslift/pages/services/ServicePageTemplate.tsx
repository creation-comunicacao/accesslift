import type { ServicePageConfig, ServiceSection } from "../../data/pageContent";
import { SupportRequestForm } from "../../components/forms/SupportRequestForm";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { deliveryGallery, trainingGallery } from "../../data/officialMedia";
import { Badge } from "../../components/ui/Badge";
import { FaqSection, RelatedEquipmentSection } from "../shared/StructuredPageSections";

type ServicePageTemplateProps = {
  page: ServicePageConfig;
};

function ServiceHero({ page }: { page: ServicePageConfig }) {
  const heroImage =
    page.path === "/servicos/"
      ? {
          src: "/images/accesslift/oficiais/plataformas-07.jpeg",
          alt: "Entrega de plataformas elevatorias da frota Accesslift",
        }
      : page.path === "/servicos/assistencia-tecnica/" || page.path === "/servicos/treinamento-de-operadores/"
        ? {
            src: "/images/accesslift/oficiais/treinamento-assistencia.jpeg",
            alt: "Equipe Accesslift em atendimento em ambiente industrial",
          }
        : null;

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <Badge tone="lime">{page.eyebrow}</Badge>
            <h1 className="mt-5 text-slate-950">{page.seo.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{page.description}</p>
          </div>
          {page.heroCta && (
            <div className="rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
              <Button href={page.heroCta.href} className="w-full">
                {page.heroCta.label}
              </Button>
            </div>
          )}
        </div>
      </section>
      {heroImage && (
        <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <img
            src={heroImage.src}
            alt={heroImage.alt}
            className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}
    </>
  );
}

function EditorialSection({ section, index }: { section: ServiceSection; index: number }) {
  const isAlternate = index % 2 === 1;

  return (
    <section className={isAlternate ? "bg-slate-50 py-12" : "py-12"}>
      <article className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-slate-950">{section.title}</h2>
          {section.description && (
            <p className="mt-4 text-base leading-7 text-slate-600">{section.description}</p>
          )}
          {section.items && section.items.length > 0 && (
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.cta && (
            <Button href={section.cta.href} variant="secondary" className="mt-6">
              {section.cta.label}
            </Button>
          )}
        </div>
      </article>
    </section>
  );
}

function ComparisonSection({
  title,
  items,
}: {
  title: string;
  items: NonNullable<ServicePageConfig["comparisonItems"]>;
}) {
  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-slate-950">{title}</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Essas frentes podem se complementar dentro da gestao tecnica dos equipamentos.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.term} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
              <h3 className="text-slate-950">{item.term}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.definition}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceFinalCta({ page }: { page: ServicePageConfig }) {
  return (
    <section className="bg-slate-950 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div>
          <h2 className="text-white">{page.finalCta.title}</h2>
          {page.finalCta.description && (
            <p className="mt-3 max-w-2xl text-slate-300">{page.finalCta.description}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Button>
          {page.finalCta.secondary && (
            <Button href={page.finalCta.secondary.href} variant="secondary">
              {page.finalCta.secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export function ServicePageTemplate({ page }: ServicePageTemplateProps) {
  const isDelivery = page.path === "/servicos/entrega-e-retirada/";
  const isServicesHub = page.path === "/servicos/";

  return (
    <>
      <ServiceHero page={page} />
      {isDelivery && (
        <OfficialMediaGallery
          title="Entrega e retirada com frota propria"
          description="Imagens da operacao logistica Accesslift para apoiar a explicacao do servico."
          images={deliveryGallery}
        />
      )}
      {page.sections.map((section, index) => (
        <EditorialSection key={section.title} section={section} index={index} />
      ))}
      {page.comparisonItems && page.comparisonItems.length > 0 && (
        <ComparisonSection title="Entenda as diferencas" items={page.comparisonItems} />
      )}
      {page.showTrainingGallery && (
        <OfficialMediaGallery
          title="Equipe em atendimento"
          description="Registro visual de atividades da equipe. Detalhes de treinamento, carga horaria e certificacao dependem de confirmacao comercial."
          images={trainingGallery}
        />
      )}
      {page.showSupportForm && (
        <section className="bg-slate-50 py-12" id="solicitar-assistencia">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-lime-700">Solicite assistencia tecnica</p>
              <h2 className="mt-3 text-slate-950">Conte o que esta acontecendo</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                O atendimento emergencial depende das condicoes do servico. Esta pagina nao promete prazo, atendimento
                imediato ou atendimento a equipamentos de terceiros sem confirmacao comercial.
              </p>
            </div>
            <SupportRequestForm />
          </div>
        </section>
      )}
      {page.relatedCategories && page.relatedCategories.length > 0 && (
        <RelatedEquipmentSection categories={page.relatedCategories} />
      )}
      {isServicesHub && (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <h2 className="text-slate-950">Do equipamento ao suporte</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            A arquitetura Accesslift separa quem procura maquina de quem procura suporte: equipamentos levam ao orcamento;
            servicos conectam assistencia, manutencao e treinamento.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="/equipamentos/" variant="secondary">
              Ver equipamentos
            </Button>
            <Button href="/servicos/assistencia-tecnica/" variant="secondary">
              Assistencia tecnica
            </Button>
            <Button href="/servicos/manutencao-preventiva/" variant="secondary">
              Manutencao preventiva
            </Button>
            <Button href="/servicos/treinamento-de-operadores/" variant="secondary">
              Treinamento
            </Button>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="ghost">
              Locacao
            </Button>
          </div>
        </section>
      )}
      {page.faq.length > 0 && <FaqSection items={page.faq} title={page.faqTitle} />}
      <ServiceFinalCta page={page} />
    </>
  );
}
