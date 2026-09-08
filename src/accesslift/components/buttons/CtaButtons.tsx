import { Headphones, MessageCircle, PackageCheck, Send } from "lucide-react";
import { trackEvent } from "../../analytics/analytics";
import { contactConfig } from "../../data/contact";
import { Button } from "./Button";

export function RequestQuoteButton({
  className = "",
  equipmentSlug,
  label = "Solicitar orçamento",
  whatsappMessage,
  onClick,
}: {
  className?: string;
  equipmentSlug?: string;
  label?: string;
  whatsappMessage?: string;
  onClick?: () => void;
}) {
  const quoteHref = equipmentSlug
    ? `/solicite-orcamento/?equipamento=${encodeURIComponent(equipmentSlug)}`
    : "/solicite-orcamento/";
  const href = contactConfig.whatsappUrl && whatsappMessage
    ? `${contactConfig.whatsappUrl}?text=${encodeURIComponent(whatsappMessage)}`
    : quoteHref;

  return (
    <Button
      href={href}
      className={className}
      icon={<Send className="h-4 w-4" aria-hidden />}
      onClick={onClick || (() =>
        trackEvent({
          name: "quote_request",
          payload: { source: "cta", equipment_slug: equipmentSlug || null },
        })
      )}
    >
      {label}
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

export function TalkToSpecialistButton({ className = "", label = "Falar com especialista" }: { className?: string; label?: string }) {
  return (
    <Button href="/contato/" variant="secondary" className={className} icon={<Headphones className="h-4 w-4" aria-hidden />}>
      {label}
    </Button>
  );
}

export function WhatsAppButton({
  className = "",
  compact = false,
  label,
  message,
}: {
  className?: string;
  compact?: boolean;
  label?: string;
  message?: string;
}) {
  const buttonLabel = label ?? (compact ? "WhatsApp" : "Falar no WhatsApp");
  const href = contactConfig.whatsappUrl && message
    ? `${contactConfig.whatsappUrl}?text=${encodeURIComponent(message)}`
    : contactConfig.whatsappUrl || undefined;

  return (
    <Button
      href={href}
      variant="whatsapp"
      className={className}
      disabled={!contactConfig.whatsappUrl}
      icon={<MessageCircle className="h-4 w-4" aria-hidden />}
      title={!contactConfig.whatsappUrl ? "WhatsApp a configurar" : buttonLabel}
      onClick={() => trackEvent({ name: "whatsapp_click", payload: { configured: Boolean(contactConfig.whatsappUrl) } })}
    >
      {buttonLabel}
    </Button>
  );
}
