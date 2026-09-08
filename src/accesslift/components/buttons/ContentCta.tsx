import { trackEvent } from "../../analytics/analytics";
import type { CtaLink } from "../../data/pageContent";
import { Button } from "./Button";

export function ContentCta({ cta, variant = "secondary", className }: {
  cta: CtaLink;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  key?: string;
}) {
  return <Button href={cta.href} variant={variant} className={className} onClick={() => {
    if (cta.event) trackEvent({ name: cta.event, payload: { source: window.location.pathname } });
    if (cta.href.startsWith("https://wa.me/") && cta.event) {
      const whatsappEvents: Record<string, string> = {
        training_rental_click: "training_whatsapp_rental", training_standalone_click: "training_whatsapp_standalone",
        nr35_specialist_click: "nr35_whatsapp_click", service_area_contact_click: "service_area_whatsapp_click",
        construction_specialist_click: "construction_whatsapp_click", industry_specialist_click: "industry_whatsapp_click",
        wholesale_specialist_click: "wholesale_whatsapp_click", retail_specialist_click: "retail_whatsapp_click",
      };
      const name = whatsappEvents[cta.event];
      if (name) trackEvent({ name, payload: { source: window.location.pathname } });
    }
  }}>{cta.label}</Button>;
}
