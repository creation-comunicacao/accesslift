import { Building2, MapPin, ShieldCheck } from "lucide-react";
import { RelatedEquipmentSection, SectionList, ValueSection, FinalConversionSection } from "../shared/StructuredPageSections";
import { ConversionHero } from "../shared/StructuredPageSections";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import type { InstitutionalPageConfig } from "../../data/institutional";
import { companyGallery } from "../../data/officialMedia";

type InstitutionalPageProps = {
  page: InstitutionalPageConfig;
};

export function InstitutionalPage({ page }: InstitutionalPageProps) {
  const iconByTitle: Record<string, typeof Building2> = {
    Historia: Building2,
    Atuacao: MapPin,
    "NR-35": ShieldCheck,
  };

  return (
    <>
      <ConversionHero eyebrow={page.eyebrow} title={page.seo.h1} description={page.description} />
      {page.path === "/empresa/" && (
        <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <img
            src="/images/accesslift/empresa/operacao-access-lift-em-ambiente-industrial.jpeg"
            alt="Operação da Access Lift em ambiente industrial"
            width={1086}
            height={1448}
            sizes="(min-width: 1024px) 1184px, 100vw"
            className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {page.sections.map((section) => {
            const Icon = iconByTitle[section.title] || Building2;

            return (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
                <Icon className="h-8 w-8 text-lime-700" aria-hidden />
                <h2 className="mt-4 text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{section.description}</p>
                {section.items && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Badge key={item} tone="steel">
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
      {page.path === "/empresa/" && (
        <>
          <OfficialMediaGallery
            title="Frota e operacao"
            description="Registro fotografico da frota e da operacao Accesslift. As imagens apoiam a apresentacao institucional sem substituir dados tecnicos do catalogo."
            images={companyGallery}
          />
          <SectionList
            eyebrow="Diferenciais"
            title="Diferenciais preparados"
            items={["Entrega", "Retirada", "Assistencia", "Manutencao", "Atendimento emergencial", "Treinamento"]}
          />
          <RelatedEquipmentSection categories={["plataformas-tesoura", "plataformas-articuladas"]} />
          <section className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 pb-12 md:px-6">
            <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary">Conhecer locacao</Button>
            <Button href="/servicos/" variant="secondary">Conhecer servicos</Button>
            <Button href="/area-de-atendimento/" variant="ghost">Area de atendimento</Button>
          </section>
        </>
      )}
      {page.path === "/area-de-atendimento/" && (
        <ValueSection
          title="Sao Paulo + raio de ate 150 km"
          description="Esta pagina comunica apenas a area estrutural definida no blueprint. Nao foram criadas paginas por cidade ou bairro."
        />
      )}
      {page.referenceLink && (
        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
          <a
            href={page.referenceLink.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-4 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50"
          >
            {page.referenceLink.label}
          </a>
        </section>
      )}
      <FinalConversionSection />
    </>
  );
}
