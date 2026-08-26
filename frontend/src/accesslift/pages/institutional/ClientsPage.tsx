import { Quote, SquareDashedMousePointer } from "lucide-react";
import { ConversionHero, FinalConversionSection } from "../shared/StructuredPageSections";
import { Badge } from "../../components/ui/Badge";
import { clientProofs, clientsPageSeo } from "../../data/institutional";

export function ClientsPage() {
  return (
    <>
      <ConversionHero
        eyebrow="Clientes"
        title={clientsPageSeo.h1}
        description="Estrutura de prova social preparada para nomes, logos, depoimentos, cases e referencias quando houver autorizacao."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6">
          <Badge tone="amber">Logos pendentes de autorizacao</Badge>
          <h2 className="mt-4 text-slate-950">Prova social estruturada</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Os nomes citados no blueprint aparecem como placeholders. Logos, depoimentos, cases e links devem ser cadastrados somente apos confirmacao.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {clientProofs.map((client) => (
            <article key={client.name} className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-white text-slate-500">
                <SquareDashedMousePointer className="h-7 w-7" aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-black text-slate-950">{client.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Logo nao publicado
              </p>
              <div className="mt-4 rounded-md bg-white p-3 text-left text-xs text-slate-600">
                <Quote className="mb-2 h-4 w-4 text-slate-400" aria-hidden />
                Depoimento, case e referencia a cadastrar.
              </div>
            </article>
          ))}
        </div>
      </section>
      <FinalConversionSection />
    </>
  );
}
