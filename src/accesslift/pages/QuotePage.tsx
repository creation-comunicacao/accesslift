import { QuoteRequestForm } from "../components/forms/QuoteRequestForm";
import { ConversionHero } from "./shared/StructuredPageSections";

export function QuotePage() {
  return (
    <>
      <ConversionHero
        eyebrow="Orcamento"
        title="Solicitar orcamento"
        description="Formulario estruturado para locacao, venda, suporte e equipamentos, com validacao local e integracao backend desacoplada."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.65fr]">
        <QuoteRequestForm />
        <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-black text-slate-950">Integracao preparada</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            O envio usa uma camada desacoplada em `services/leadService.ts`. Quando houver backend ou CRM, a chamada mock deve ser substituida nesse ponto.
          </p>
          <div className="mt-5 rounded-md border border-dashed border-slate-300 bg-white p-3 text-sm font-semibold text-slate-600">
            Antispam preparado com campo honeypot local, sem dependencia externa.
          </div>
        </aside>
      </section>
    </>
  );
}
