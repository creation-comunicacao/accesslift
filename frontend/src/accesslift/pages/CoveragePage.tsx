import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { coveragePageConfig } from "../data/pageContent";
import { lookupCoverageCity } from "../data/coverage";
import { Button } from "../components/buttons/Button";
import { Badge } from "../components/ui/Badge";
import { FaqSection } from "./shared/StructuredPageSections";

export function CoveragePage() {
  const page = coveragePageConfig;
  const [city, setCity] = useState("");
  const [result, setResult] = useState<ReturnType<typeof lookupCoverageCity> | null>(null);

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
          <div>
            <Badge tone="lime">{page.eyebrow}</Badge>
            <h1 className="mt-5 text-slate-950">{page.seo.h1}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{page.description}</p>
          </div>
          <div className="grid gap-2 rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
            <Button href="#consultar-cidade" className="w-full">
              {page.heroPrimaryCta.label}
            </Button>
            <Button href={page.heroSecondaryCta.href} variant="secondary" className="w-full">
              {page.heroSecondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {page.sections.slice(0, 1).map((section) => (
        <section key={section.title} className="py-12">
          <article className="mx-auto max-w-3xl px-4 md:px-6">
            <h2 className="text-slate-950">{section.title}</h2>
            {section.description && <p className="mt-4 text-base leading-7 text-slate-600">{section.description}</p>}
          </article>
        </section>
      ))}

      <section className="bg-slate-50 py-12" id="consultar-cidade">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <MapPin className="h-9 w-9 text-lime-700" aria-hidden />
            <h2 className="mt-4 text-slate-950">Consulte atendimento para sua cidade</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A consulta funciona como facilitador comercial. Nao recusamos automaticamente cidades fora de uma lista fixa.
            </p>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Cidades frequentemente atendidas: {page.referenceCities.join(", ")}.
            </p>
          </div>
          <form
            className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow"
            onSubmit={(event) => {
              event.preventDefault();
              setResult(lookupCoverageCity(city));
            }}
          >
            <p className="text-xs font-black uppercase tracking-wider text-lime-700">Consultar atendimento</p>
            <h2 className="mt-3 text-slate-950">Digite sua cidade</h2>
            <label className="mt-5 grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
              Cidade da operacao
              <input
                className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                  setResult(null);
                }}
                placeholder="Digite sua cidade"
                autoComplete="address-level2"
              />
            </label>
            {result === "positive" && (
              <div className="mt-4 rounded-md bg-lime-50 p-4 text-sm leading-6 text-lime-950" role="status">
                <p className="font-bold">Atendemos operacoes nesta regiao.</p>
                <p className="mt-2">
                  Envie os dados do trabalho para verificarmos disponibilidade de equipamento, periodo e logistica.
                </p>
                <Button href="/solicite-orcamento/" className="mt-4">
                  Solicitar orcamento
                </Button>
              </div>
            )}
            {result === "confirm" && city.trim() && (
              <div className="mt-4 rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-700" role="status">
                <p className="font-bold">Vamos confirmar o atendimento para sua localizacao.</p>
                <p className="mt-2">
                  Envie a cidade e as informacoes da operacao para nossa equipe avaliar a disponibilidade.
                </p>
                <Button href="/contato/" variant="secondary" className="mt-4">
                  Consultar com a Accesslift
                </Button>
              </div>
            )}
            <Button type="submit" className="mt-5" icon={<Search className="h-4 w-4" aria-hidden />}>
              Consultar atendimento
            </Button>
          </form>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-slate-950">Da entrega ao suporte tecnico</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Dentro de sua operacao de locacao, a Accesslift conta com estrutura para:
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {page.serviceHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                <h3 className="text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-6">
            Conhecer nossos servicos
          </Button>
        </div>
      </section>

      {page.sections.slice(1).map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? "bg-slate-50 py-12" : "py-12"}>
          <article className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-slate-950">{section.title}</h2>
              {section.description && <p className="mt-4 text-base leading-7 text-slate-600">{section.description}</p>}
              {section.items && (
                <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.cta && (
                <Button href={section.cta.href} variant="secondary" className="mt-6">
                  {section.cta.label}
                </Button>
              )}
            </div>
          </article>
        </section>
      ))}

      <FaqSection items={page.faq} title={page.faqTitle} />

      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <h2 className="text-white">{page.finalCta.title}</h2>
            {page.finalCta.description && (
              <p className="mt-3 max-w-2xl text-slate-300">{page.finalCta.description}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={page.finalCta.primary.href}>{page.finalCta.primary.label}</Button>
            <Button href={page.finalCta.secondary.href} variant="secondary">
              {page.finalCta.secondary.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
