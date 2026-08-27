import { Building2, MapPin, ShieldCheck } from "lucide-react";
import { RelatedEquipmentSection, SectionList, ValueSection, FinalConversionSection } from "../shared/StructuredPageSections";
import { ConversionHero } from "../shared/StructuredPageSections";
import { Badge } from "../../components/ui/Badge";
import type { InstitutionalPageConfig } from "../../data/institutional";

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
      {page.path === "/sobre-a-accesslift/" && (
        <>
          <SectionList
            eyebrow="Diferenciais"
            title="Diferenciais preparados"
            items={["Entrega", "Retirada", "Assistencia", "Manutencao", "Atendimento emergencial", "Treinamento"]}
          />
          <RelatedEquipmentSection categories={["plataformas-tesoura", "plataformas-articuladas"]} />
        </>
      )}
      {page.path === "/area-de-atendimento/" && (
        <ValueSection
          title="Sao Paulo + raio de ate 150 km"
          description="Esta pagina comunica apenas a area estrutural definida no blueprint. Nao foram criadas paginas por cidade ou bairro."
        />
      )}
      <FinalConversionSection />
    </>
  );
}
