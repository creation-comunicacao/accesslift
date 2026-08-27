import type { AppRoute } from "../types/routes";
import { commercialServices } from "../data/services";
import { ServiceCard } from "../components/cards/ServiceCard";
import { CTASection } from "../components/layout/CTASection";
import { PageIntro } from "../components/layout/PageIntro";

type StandardPageProps = {
  route: AppRoute;
};

export function StandardPage({ route }: StandardPageProps) {
  const isCoverage = route.path === "/area-de-atendimento/";

  return (
    <>
      <PageIntro
        eyebrow="Accesslift 2.0"
        title={route.label}
        description={route.seo.description}
      />
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {commercialServices.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} title={service.title} summary={service.summary} />
          ))}
        </div>
        {isCoverage && (
          <div className="mt-8 rounded-md border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-black text-slate-950">Area de atendimento</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Sao Paulo e regioes em raio de ate 150 km da base.
            </p>
          </div>
        )}
      </section>
      <CTASection />
    </>
  );
}
