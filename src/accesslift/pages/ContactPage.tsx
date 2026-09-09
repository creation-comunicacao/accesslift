import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "../analytics/analytics";
import { LeadForm } from "../components/forms/LeadForm";
import { contactConfig } from "../data/contact";
import { ConversionHero } from "./shared/StructuredPageSections";
import { RequestQuoteButton, WhatsAppButton } from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";

export function ContactPage() {
  const phoneHref = contactConfig.phone?.replace(/\D/g, "");
  const contactItems = [
    { label: "Telefone", value: contactConfig.phone || "a configurar", icon: Phone },
    { label: "WhatsApp", value: contactConfig.whatsappNumber || "a configurar", icon: MessageCircle },
    { label: "E-mail", value: contactConfig.email || "a configurar", icon: Mail },
    { label: "Endereço", value: contactConfig.address, icon: MapPin },
  ];

  return (
    <>
      <ConversionHero
        compact
        eyebrow="Contato"
        title="Fale com a AccessLift"
        description="Entre em contato para locação de plataformas elevatórias, suporte técnico ou outras informações."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-slate-950">Locação e orçamento</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Precisa alugar uma plataforma ou falar com nossa equipe?
          </p>
          <div className="mt-5 grid gap-3">
            {contactItems.map(({ label, value, icon: Icon }) => (
              <article key={label} className="rounded-lg border border-slate-200 bg-white p-4 soft-shadow">
                <Icon className="h-6 w-6 text-[#0b2d4d]" aria-hidden />
                <h3 className="mt-3 text-base text-slate-950">{label}</h3>
                {label === "Telefone" && contactConfig.phone ? (
                  <a
                    className="mt-1 block text-sm font-semibold text-slate-600 hover:text-slate-950"
                    href={`tel:+55${phoneHref}`}
                    onClick={() => trackEvent({ name: "contact_phone_click", payload: { source: "contact_page" } })}
                  >
                    {value}
                  </a>
                ) : label === "E-mail" ? (
                  <a className="mt-1 block break-all text-sm font-semibold text-slate-600" href={`mailto:${contactConfig.email}`} onClick={() => trackEvent({ name: "contact_email_click" })}>{value}</a>
                ) : label === "WhatsApp" ? (
                  <a className="mt-1 block text-sm font-semibold text-slate-600" href={`${contactConfig.whatsappUrl}?text=${encodeURIComponent("Olá! Estou entrando em contato pelo site da AccessLift e gostaria de informações.")}`} onClick={() => trackEvent({ name: "contact_whatsapp_click" })}>{value}</a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-slate-600">{value}</p>
                )}
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2" onClick={(event) => {
            const href = (event.target as Element).closest("a")?.getAttribute("href");
            if (href) trackEvent({ name: href.includes("wa.me") ? "contact_whatsapp_click" : "contact_quote_click" });
          }}>
            <RequestQuoteButton />
            <WhatsAppButton message="Olá! Estou entrando em contato pelo site da AccessLift e gostaria de informações." />
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-slate-950">Envie uma mensagem</h2>
          <LeadForm />
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 md:px-6">
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-slate-950">Precisa de suporte técnico?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Para ocorrências relacionadas a equipamentos em operação, informe o modelo da plataforma, local e descrição da situação.
            </p>
            <Button href="/servicos/assistencia-tecnica/" variant="secondary" className="mt-4" onClick={() => trackEvent({ name: "contact_assistance_click" })}>Solicitar assistência</Button>
          </div>
      </section>
    </>
  );
}
