import { commercialServices } from "../../data/services";
import { ServiceCard } from "../../components/cards/ServiceCard";
import { CTASection } from "../../components/layout/CTASection";
import { PageIntro } from "../../components/layout/PageIntro";

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Serviços"
        title="Serviços Accesslift"
        description="Arquitetura preparada para serviços comerciais e operacionais sem duplicacao de componentes."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-12 md:grid-cols-3 md:px-6">
        {commercialServices.map((service) => (
          <ServiceCard key={service.slug} title={service.title} summary={service.summary} />
        ))}
      </section>
      <CTASection />
    </>
  );
}
