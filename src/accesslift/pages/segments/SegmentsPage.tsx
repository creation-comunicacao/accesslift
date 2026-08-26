import { segments } from "../../data/segments";
import { ServiceCard } from "../../components/cards/ServiceCard";
import { PageIntro } from "../../components/layout/PageIntro";

export function SegmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Segmentos"
        title="Segmentos e aplicacoes"
        description="Base preparada para paginas administraveis por segmento, sem gerar combinacoes automaticas indexaveis."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {segments.map((segment) => (
          <ServiceCard key={segment.slug} title={segment.title} summary={segment.summary} />
        ))}
      </section>
    </>
  );
}
