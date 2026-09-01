import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { RequestQuoteButton } from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";
import { Accordion } from "../components/ui/Accordion";
import { Badge } from "../components/ui/Badge";
import { ConversionHero } from "./shared/StructuredPageSections";

export function CoveragePage() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ConversionHero
        eyebrow="Area de atendimento"
        title="Locacao de Plataformas Elevatorias em Sao Paulo e Regiao"
        description="Atendimento a operacoes em Sao Paulo e municipios dentro de um raio de ate 150 km da base Accesslift, conforme disponibilidade e condicoes da operacao."
        primaryCta={{ label: "Consultar atendimento na minha cidade", href: "#consulta-cidade" }}
        secondaryCta={{ label: "Solicitar orcamento", href: "/solicite-orcamento/" }}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <MapPin className="h-9 w-9 text-lime-700" aria-hidden />
          <h2 className="mt-4 text-slate-950">Atendimento em um raio de ate 150 km</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A disponibilidade para determinada localidade pode variar de acordo com equipamento, periodo, logistica e condicoes da operacao. Mesmo dentro da regiao atendida, confirme disponibilidade para a data e equipamento necessarios.</p>
          <RequestQuoteButton className="mt-5" />
        </div>
        <form
          id="consulta-cidade"
          className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(city.trim() ? "Atendemos operacoes nesta regiao ou podemos confirmar o atendimento para sua localizacao. Envie os dados do trabalho para verificarmos disponibilidade de equipamento, periodo e logistica." : "Informe a cidade da operacao para consultar o atendimento.");
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

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Badge tone="lime">Estrutura</Badge>
          <h2 className="mt-4 text-slate-950">Da entrega ao suporte tecnico</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["Entrega propria", "Logistica dos equipamentos conforme condicoes definidas para a locacao."],
              ["Retirada propria", "Retirada ao termino do periodo conforme programacao acordada."],
              ["Assistencia tecnica propria", "Suporte tecnico integrado a operacao dos equipamentos Accesslift."],
              ["Atendimento emergencial", "Recebimento e avaliacao de ocorrencias durante a locacao."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                <h3 className="text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-6">
            Conhecer nossos servicos
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:grid-cols-2 md:px-6">
        <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
          <Badge tone="steel">Equipamentos</Badge>
          <h2 className="mt-4 text-slate-950">Plataformas tesoura e articuladas</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A area de atendimento contempla a operacao de locacao da frota Accesslift, composta por plataformas eletricas tesoura e articuladas de diferentes alturas, dimensoes e capacidades.</p>
          <Button href="/equipamentos/" variant="secondary" className="mt-5">
            Ver equipamentos
          </Button>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
          <Badge tone="steel">Como solicitar</Badge>
          <h2 className="mt-4 text-slate-950">O que informar para consultar uma locacao?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Informe cidade e local da operacao, altura aproximada, periodo desejado, tipo de acesso, existencia de obstaculos e plataforma desejada, caso ja saiba o modelo.</p>
          <RequestQuoteButton className="mt-5" />
        </article>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge tone="lime">FAQ</Badge>
          <h2 className="mt-4 text-slate-950">Duvidas sobre a area de atendimento</h2>
          <div className="mt-6">
            <Accordion
              items={[
                {
                  id: "coverage-sp",
                  title: "A Accesslift atende somente a cidade de Sao Paulo?",
                  content: "Nao. A operacao contempla Sao Paulo e municipios dentro de um raio de ate 150 km da base, conforme disponibilidade e condicoes da locacao.",
                },
                {
                  id: "coverage-city",
                  title: "Como saber se minha cidade e atendida?",
                  content: "Informe a cidade ou endereco da operacao para que a equipe confirme a disponibilidade e as condicoes de atendimento.",
                },
                {
                  id: "coverage-delivery",
                  title: "A Accesslift entrega a plataforma no local?",
                  content: "A Accesslift possui estrutura propria para entrega e retirada dos equipamentos dentro de sua area de atendimento, conforme as condicoes acordadas.",
                },
                {
                  id: "coverage-support",
                  title: "Ha suporte tecnico fora da cidade de Sao Paulo?",
                  content: "O suporte esta integrado a operacao de locacao e deve ser avaliado conforme localidade e situacao do equipamento.",
                },
                {
                  id: "coverage-quote",
                  title: "Posso solicitar orcamento mesmo sem saber qual plataforma preciso?",
                  content: "Sim. Informe a altura aproximada e as caracteristicas do trabalho para que a equipe possa auxiliar na escolha.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2>Consulte a disponibilidade para sua regiao</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">Informe onde sera realizado o trabalho e as caracteristicas da operacao.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="#consulta-cidade">Consultar minha cidade</Button>
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </>
  );
}
