import { segments } from "../../data/segments";
import { ServiceCard } from "../../components/cards/ServiceCard";
import { PageIntro } from "../../components/layout/PageIntro";

export function SegmentsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Segmentos"
        title="Plataformas Elevatórias para Diferentes Segmentos e Aplicações"
        description="Soluções para trabalhos em altura em ambientes industriais, obras, instalações comerciais e outras operações que exigem acesso elevado."
      />
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {segments.map((segment) => (
          <ServiceCard key={segment.slug} title={segment.title} summary={segment.summary} href={segment.href} />
        ))}
      </section>
    </>
  );
}
