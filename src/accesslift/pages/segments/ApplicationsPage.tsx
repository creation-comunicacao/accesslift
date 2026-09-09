import { MessageCircle } from "lucide-react";
import { applicationsPage as page, applicationsWhatsappMessage } from "../../data/applicationsPage";
import { contactConfig } from "../../data/contact";
import { heroImages } from "../../data/heroImages";
import { trackEvent } from "../../analytics/analytics";
import { Button } from "../../components/buttons/Button";
import { ContentCta } from "../../components/buttons/ContentCta";
import { ConversionHero, SectionList, ValueSection, FaqSection } from "../shared/StructuredPageSections";

export function ApplicationsPage() {
  return <>
    <ConversionHero compact image={heroImages.segmentos} eyebrow={page.eyebrow} title={page.title} description={page.description} />
    {page.contentSections!.map(section => section.items
      ? <SectionList key={section.title} columns={2} eyebrow={section.eyebrow!} title={section.title} items={section.items} />
      : <ValueSection key={section.title} eyebrow={section.eyebrow} lineEyebrow={section.eyebrow === "Escolha"} title={section.title} description={section.description!} cta={section.cta} />)}
    <FaqSection items={page.faq} />
    <section className="bg-[#0b2d4d] section-space-compact text-white">
      <div className="site-container" data-reveal="fade-up">
        <h2 className="text-white">{page.finalCta!.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-300">{page.finalCta!.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ContentCta cta={page.finalCta!.primary} variant="primary" />
          <ContentCta cta={page.finalCta!.secondary!} />
          <Button href={`${contactConfig.whatsappUrl}?text=${encodeURIComponent(applicationsWhatsappMessage)}`} variant="whatsapp" icon={<MessageCircle className="h-4 w-4" aria-hidden />} onClick={() => trackEvent({ name: "applications_whatsapp_click", payload: { source_page: page.path } })}>Falar pelo WhatsApp</Button>
        </div>
      </div>
    </section>
  </>;
}
