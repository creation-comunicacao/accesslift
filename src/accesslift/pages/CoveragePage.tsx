import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { RequestQuoteButton } from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";
import { ConversionHero } from "./shared/StructuredPageSections";

export function CoveragePage() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ConversionHero
        eyebrow="Area de atendimento"
        title="Locacao de Plataformas Elevatorias em Sao Paulo e Regiao"
        description="Atendimento em Sao Paulo e localidades dentro de raio de ate 150 km da base, conforme condicoes de logistica."
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <MapPin className="h-9 w-9 text-lime-700" aria-hidden />
          <h2 className="mt-4 text-slate-950">Sao Paulo + raio de ate 150 km</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Entrega propria, retirada e estrutura de suporte estao sujeitas a avaliacao comercial e logistica da operacao.</p>
          <RequestQuoteButton className="mt-5" />
        </div>
        <form
          className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(city.trim() ? "Cidade registrada para consulta. A confirmacao de atendimento depende da avaliacao da equipe." : "Informe a cidade da operacao para consultar o atendimento.");
          }}
        >
          <p className="text-xs font-black uppercase tracking-wider text-lime-700">Consultar atendimento</p>
          <h2 className="mt-3 text-slate-950">Sua operacao fica em qual cidade?</h2>
          <label className="mt-5 grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
            Cidade da operacao
            <input className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Digite a cidade" autoComplete="address-level2" />
          </label>
          {message && <p className="mt-3 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700" role="status">{message}</p>}
          <Button className="mt-5" icon={<Search className="h-4 w-4" aria-hidden />}>Consultar atendimento</Button>
        </form>
      </section>
    </>
  );
}
