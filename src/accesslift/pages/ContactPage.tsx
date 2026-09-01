import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { trackEvent } from "../analytics/analytics";
import { LeadForm } from "../components/forms/LeadForm";
import { contactConfig } from "../data/contact";
import { ConversionHero, FinalConversionSection } from "./shared/StructuredPageSections";
import { RequestQuoteButton, WhatsAppButton } from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";

export function ContactPage() {
  const phoneHref = contactConfig.phone?.replace(/\D/g, "");
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
        description="Entre em contato para locacao de plataformas elevatorias, suporte tecnico ou outras informacoes."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-slate-950">Locacao e orcamento</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Precisa alugar uma plataforma ou consultar disponibilidade?
          </p>
          <div className="mt-5 grid gap-3">
            {contactItems.map(({ label, value, icon: Icon }) => (
              <article key={label} className="rounded-lg border border-slate-200 bg-white p-4 soft-shadow">
                <Icon className="h-6 w-6 text-lime-700" aria-hidden />
                <h3 className="mt-3 text-base text-slate-950">{label}</h3>
                {label === "Telefone" && contactConfig.phone ? (
                  <a
                    className="mt-1 block text-sm font-semibold text-slate-600 hover:text-slate-950"
                    href={`tel:+55${phoneHref}`}
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
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-slate-950">Precisa de suporte tecnico?</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Para ocorrencias relacionadas a equipamentos em operacao, informe o modelo da plataforma, local e descricao da situacao.
            </p>
            <Button href="/servicos/assistencia-tecnica/" variant="secondary" className="mt-4">Solicitar assistencia</Button>
          </div>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
            <h3 className="text-slate-950">Onde estamos</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Accesslift Plataformas Elevatorias</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">{contactConfig.address}</p>
            <p className="mt-3 text-xs leading-5 text-slate-500">Mapa e horario de atendimento devem ser exibidos somente apos validacao final do cliente.</p>
          </div>
        </div>
        <div>
          <h2 className="mb-5 text-slate-950">Envie uma mensagem</h2>
          <LeadForm />
        </div>
      </section>
      <FinalConversionSection
        title="Procurando uma plataforma elevatoria?"
        description="Se o contato for para cotacao, utilize nosso formulario de orcamento para enviar as principais informacoes da operacao."
        primary={{ label: "Solicitar orcamento", href: "/solicite-orcamento/" }}
      />
    </>
  );
}
