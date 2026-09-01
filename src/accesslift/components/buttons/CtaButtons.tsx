import { Headphones, MessageCircle, PackageCheck, Send } from "lucide-react";
import { trackEvent } from "../../analytics/analytics";
import { contactConfig } from "../../data/contact";
import { Button } from "./Button";

export function RequestQuoteButton({
  className = "",
  equipmentSlug,
}: {
  className?: string;
  equipmentSlug?: string;
}) {
  const href = equipmentSlug
    ? `/solicite-orcamento/?equipamento=${encodeURIComponent(equipmentSlug)}`
    : "/solicite-orcamento/";

  return (
    <Button
      href={href}
      className={className}
      icon={<Send className="h-4 w-4" aria-hidden />}
      onClick={() =>
        trackEvent({
          name: "quote_request",
          payload: { source: "cta", equipment_slug: equipmentSlug || null },
        })
      }
    >
      Solicitar orcamento
    </Button>
  );
}

export function CheckAvailabilityButton({
  className = "",
  equipmentSlug,
}: {
  className?: string;
  equipmentSlug?: string;
}) {
  return (
    <Button
      href={equipmentSlug ? `/solicite-orcamento/?equipamento=${encodeURIComponent(equipmentSlug)}` : "/solicite-orcamento/"}
      variant="secondary"
      className={className}
      icon={<PackageCheck className="h-4 w-4" aria-hidden />}
      onClick={() =>
        trackEvent({
          name: "equipment_availability_click",
          payload: { equipment_slug: equipmentSlug || null },
        })
      }
    >
      Consultar disponibilidade
    </Button>
  );
}

export function TalkToSpecialistButton({ className = "" }: { className?: string }) {
  return (
    <Button href="/contato/" variant="secondary" className={className} icon={<Headphones className="h-4 w-4" aria-hidden />}>
      Falar com especialista
    </Button>
  );
}

export function WhatsAppButton({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const label = compact ? "WhatsApp" : "Falar no WhatsApp";

  return (
    <Button
      href={contactConfig.whatsappUrl || undefined}
      variant="whatsapp"
      className={className}
      disabled={!contactConfig.whatsappUrl}
      icon={<MessageCircle className="h-4 w-4" aria-hidden />}
      title={!contactConfig.whatsappUrl ? "WhatsApp a configurar" : label}
      onClick={() => trackEvent({ name: "whatsapp_click", payload: { configured: Boolean(contactConfig.whatsappUrl) } })}
    >
      {label}
    </Button>
  );
}
