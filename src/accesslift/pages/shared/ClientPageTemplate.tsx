import type { ClientPage, ClientSection } from "../../data/clientPages";
import { ContentCta } from "../../components/buttons/ContentCta";
import { SupportRequestForm } from "../../components/forms/SupportRequestForm";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { companyGallery, trainingGallery } from "../../data/officialMedia";
import { clientProofs } from "../../data/institutional";
import { heroImages } from "../../data/heroImages";
import { ConversionHero, FaqSection, FinalConversionSection, SectionList, ValueSection } from "./StructuredPageSections";

const media = {
  services: heroImages.servicos,
  assistance: { src: "/images/accesslift/servicos/treinamento-assistencia-03.jpeg", alt: "Equipe Accesslift em atendimento em ambiente industrial", width: 960, height: 1280 },
  training: { src: "/images/accesslift/servicos/treinamento-assistencia.jpeg", alt: "Equipe Accesslift em atendimento em ambiente industrial", width: 960, height: 1280 },
  company: { src: "/images/accesslift/empresa/operacao-access-lift-em-ambiente-industrial.jpeg", alt: "Operação da Accesslift em ambiente industrial", width: 1086, height: 1448 },
};

const assistanceLogos = {
  JLG: "/images/accesslift/marcas/jlg.png",
  Genie: "/images/accesslift/marcas/genie.png",
  Skyjack: "/images/accesslift/marcas/skyjack.png",
  Zoomlion: "/images/accesslift/marcas/zoomlion.png",
};

const heroMediaByPath: Record<string, keyof typeof media> = {
  "/servicos/": "services",
  "/empresa/": "company",
  "/servicos/treinamento-de-operadores/": "training",
  "/servicos/assistencia-tecnica/": "assistance",
};

const editorialOpeningPaths = new Set([
  "/empresa/", "/servicos/treinamento-de-operadores/", "/servicos/assistencia-tecnica/",
  "/segmentos/construcao-civil/", "/segmentos/industria/",
  "/segmentos/supermercados-e-hipermercados/", "/segmentos/atacados/", "/area-de-atendimento/",
]);

const heroImageByPath: Record<string, (typeof heroImages)[keyof typeof heroImages]> = {
  "/area-de-atendimento/": heroImages.atendimento,
  "/servicos/": heroImages.servicos,
  "/empresa/": heroImages.empresa,
  "/servicos/assistencia-tecnica/": heroImages.assistencia,
  "/servicos/manutencao-preventiva/": heroImages.manutencao,
  "/servicos/treinamento-de-operadores/": heroImages.treinamento,
  "/segmentos/atacados/": heroImages.atacados,
  "/segmentos/construcao-civil/": heroImages.construcao,
  "/segmentos/industria/": heroImages.industria,
  "/segmentos/supermercados-e-hipermercados/": heroImages.supermercados,
};

function SectionMedia({ section, heroMedia }: { section: ClientSection; heroMedia?: keyof typeof media }) {
  const photo = section.media && section.media !== "company-gallery" ? media[section.media] : null;
  return <>
    {photo && section.media !== heroMedia && <div className="mx-auto max-w-7xl px-4 pt-12 md:px-6"><img {...photo} sizes="(min-width: 1024px) 1184px, 100vw" className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow" loading="lazy" decoding="async" /></div>}
    {section.media === "training" && <OfficialMediaGallery title="Treinamento de operadores" description="Registros de orientação para operação de plataformas elevatórias." images={trainingGallery} />}
    {section.media === "company-gallery" && <>
      <OfficialMediaGallery eyebrow={heroMedia === "company" ? section.eyebrow : undefined} title={section.title} description={section.description} images={companyGallery.filter((image) => heroMedia !== "company" || image.src !== "/images/accesslift/empresa/empresa.jpeg")} />
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <span className="section-eyebrow">Clientes</span>
        <h2 className="mt-4 text-slate-950">Empresas que já confiaram na Accesslift</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{clientProofs.map((client) => <article key={client.name} className="flex min-h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center soft-shadow">
          {client.logoUrl ? <img src={client.logoUrl} alt={client.name} className="max-h-20 w-auto max-w-full object-contain" loading="lazy" decoding="async" /> : client.name}
        </article>)}</div>
      </div>
    </>}
  </>;
}

export function ClientPageTemplate({ page }: { page: ClientPage }) {
  const heroMedia = heroMediaByPath[page.path];
  return <>
    <ConversionHero compact image={heroImageByPath[page.path]} eyebrow={page.eyebrow} title={page.title} description={page.description} primaryCta={page.actions[0]} secondaryCta={page.actions[1]} />
    {page.sections.map((section, index) => <div key={section.title} data-client-block={index + 2} id={section.form ? "solicitar-assistencia" : section.eyebrow === "Modalidades" ? "modalidades-treinamento" : undefined} className="scroll-mt-32">
      {section.media !== "company-gallery" && (section.items ? <SectionList {...section} logos={page.path === "/servicos/assistencia-tecnica/" && section.eyebrow === "Marcas" ? assistanceLogos : undefined} items={section.items} eyebrow={section.eyebrow || page.eyebrow} cta={undefined} /> : <ValueSection {...section} description={section.description || ""}
        lineEyebrow={page.path === "/servicos/" && index === 0}
        editorial={(index === 0 && editorialOpeningPaths.has(page.path)) || (page.path === "/servicos/manutencao-preventiva/" && ["Frota", "Equipamentos de terceiros"].includes(section.eyebrow || ""))}
        ctaClassName={page.path === "/area-de-atendimento/" && index === 0 ? "!border-[#0b2d4d] !bg-[#0b2d4d] !font-semibold !text-white !shadow-[0_12px_28px_rgba(11,45,77,0.18)] hover:!border-[#09243d] hover:!bg-[#09243d] hover:!text-white" : undefined}
      />)}
      {section.items && (section.paragraphs || section.closing || section.cta) && <div className="site-container pb-8">
        <div className="max-w-3xl space-y-5 text-slate-600">{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.closing && <p>{section.closing}</p>}</div>
        {section.cta && <div className="mt-5 flex flex-wrap gap-3"><ContentCta cta={section.cta} />{section.secondaryCta && <ContentCta cta={section.secondaryCta} />}</div>}
      </div>}
      <SectionMedia section={section} heroMedia={heroMedia} />
      {section.form && <div className="site-container pb-12"><SupportRequestForm /></div>}
    </div>)}
    <div data-client-block="closing">
      <FaqSection items={page.faq} title={page.faqTitle} />
      {page.reference && <div className="site-container pb-12">
        <ContentCta cta={page.reference} />
        <p className="mt-4 max-w-3xl text-sm text-slate-600">Atenção: normas e requisitos podem ser atualizados. Consulte sempre a versão vigente da NR-35 disponibilizada pelo Ministério do Trabalho e Emprego.</p>
      </div>}
      <FinalConversionSection {...page.final} />
    </div>
  </>;
}
