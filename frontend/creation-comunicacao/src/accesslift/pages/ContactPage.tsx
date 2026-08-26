import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "../analytics/analytics";
import { LeadForm } from "../components/forms/LeadForm";
import { contactConfig } from "../data/contact";
import { ConversionHero, FinalConversionSection } from "./shared/StructuredPageSections";
import { RequestQuoteButton, WhatsAppButton } from "../components/buttons/CtaButtons";

export function ContactPage() {
  const contactItems = [
    { label: "Telefone", value: contactConfig.phone || "a configurar", icon: Phone },
    { label: "WhatsApp", value: contactConfig.whatsappNumber || "a configurar", icon: MessageCircle },
    { label: "E-mail", value: contactConfig.email || "a configurar", icon: Mail },
    { label: "Area", value: contactConfig.address, icon: MapPin },
  ];

  return (
    <>
      <ConversionHero
        eyebrow="Contato"
        title="Fale com a Accesslift"
        description="Pagina preparada para telefone, WhatsApp, e-mail, formulario e informacoes comerciais quando os dados reais forem fornecidos."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-slate-950">Canais de contato</h2>
          <div className="mt-5 grid gap-3">
            {contactItems.map(({ label, value, icon: Icon }) => (
              <article key={label} className="rounded-lg border border-slate-200 bg-white p-4 soft-shadow">
                <Icon className="h-6 w-6 text-lime-700" aria-hidden />
                <h3 className="mt-3 text-base text-slate-950">{label}</h3>
                {label === "Telefone" && contactConfig.phone ? (
                  <a
                    className="mt-1 block text-sm font-semibold text-slate-600 hover:text-slate-950"
                    href={`tel:${contactConfig.phone}`}
                    onClick={() => trackEvent({ name: "phone_click", payload: { source: "contact_page" } })}
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm font-semibold text-slate-600">{value}</p>
                )}
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            <RequestQuoteButton />
            <WhatsAppButton />
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-slate-950">Formulario de contato</h2>
          <LeadForm />
        </div>
      </section>
      <FinalConversionSection />
    </>
  );
}
