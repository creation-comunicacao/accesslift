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
        eyebrow="Área de atendimento"
        title="Locação de Plataformas Elevatórias em São Paulo e Região"
        description="Atendimento a operações em São Paulo e municípios dentro de um raio de até 150 km da base Accesslift, conforme disponibilidade e condições da operação."
        primaryCta={{ label: "Consultar atendimento na minha cidade", href: "#consulta-cidade" }}
        secondaryCta={{ label: "Solicitar orçamento", href: "/solicite-orcamento/" }}
      />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <MapPin className="h-9 w-9 text-lime-700" aria-hidden />
          <h2 className="mt-4 text-slate-950">Atendimento em um raio de até 150 km</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A disponibilidade para determinada localidade pode variar de acordo com equipamento, período, logística e condições da operação. Mesmo dentro da região atendida, confirme disponibilidade para a data e equipamento necessários.</p>
          <RequestQuoteButton className="mt-5" />
        </div>
        <form
          id="consulta-cidade"
          className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage(city.trim() ? "Atendemos operações nesta região ou podemos confirmar o atendimento para sua localizacao. Envie os dados do trabalho para verificarmos disponibilidade de equipamento, período e logística." : "Informe a cidade da operação para consultar o atendimento.");
          }}
        >
          <p className="text-xs font-black uppercase tracking-wider text-lime-700">Consultar atendimento</p>
          <h2 className="mt-3 text-slate-950">Sua operação fica em qual cidade?</h2>
          <label className="mt-5 grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
            Cidade da operação
            <input className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200" value={city} onChange={(event) => setCity(event.target.value)} placeholder="Digite a cidade" autoComplete="address-level2" />
          </label>
          {message && <p className="mt-3 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700" role="status">{message}</p>}
          <Button className="mt-5" icon={<Search className="h-4 w-4" aria-hidden />}>Consultar atendimento</Button>
        </form>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Badge tone="lime">Estrutura</Badge>
          <h2 className="mt-4 text-slate-950">Da entrega ao suporte técnico</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["Entrega própria", "Logística dos equipamentos conforme condições definidas para a locação."],
              ["Retirada própria", "Retirada ao termino do período conforme programacao acordada."],
              ["Assistência técnica própria", "Suporte técnico integrado a operação dos equipamentos Accesslift."],
              ["Atendimento emergencial", "Recebimento e avaliação de ocorrências durante a locação."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                <h3 className="text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-6">
            Conhecer nossos serviços
          </Button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 md:grid-cols-2 md:px-6">
        <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
          <Badge tone="steel">Equipamentos</Badge>
          <h2 className="mt-4 text-slate-950">Plataformas tesoura e articuladas</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">A área de atendimento contempla a operação de locação da frota Accesslift, composta por plataformas elétricas tesoura e articuladas de diferentes alturas, dimensões e capacidades.</p>
          <Button href="/equipamentos/" variant="secondary" className="mt-5">
            Ver equipamentos
          </Button>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
          <Badge tone="steel">Como solicitar</Badge>
          <h2 className="mt-4 text-slate-950">O que informar para consultar uma locação?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Informe cidade e local da operação, altura aproximada, período desejado, tipo de acesso, existencia de obstáculos e plataforma desejada, caso já saiba o modelo.</p>
          <RequestQuoteButton className="mt-5" />
        </article>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge tone="lime">FAQ</Badge>
          <h2 className="mt-4 text-slate-950">Dúvidas sobre a área de atendimento</h2>
          <div className="mt-6">
            <Accordion
              items={[
                {
                  id: "coverage-sp",
                  title: "A Accesslift atende somente a cidade de São Paulo?",
                  content: "Não. A operação contempla São Paulo e municípios dentro de um raio de até 150 km da base, conforme disponibilidade e condições da locação.",
                },
                {
                  id: "coverage-city",
                  title: "Como saber se minha cidade e atendida?",
                  content: "Informe a cidade ou endereço da operação para que a equipe confirme a disponibilidade e as condições de atendimento.",
                },
                {
                  id: "coverage-delivery",
                  title: "A Accesslift entrega a plataforma no local?",
                  content: "A Accesslift possui estrutura própria para entrega e retirada dos equipamentos dentro de sua área de atendimento, conforme as condições acordadas.",
                },
                {
                  id: "coverage-support",
                  title: "Ha suporte técnico fora da cidade de São Paulo?",
                  content: "O suporte esta integrado a operação de locação e deve ser avaliado conforme localidade e situação do equipamento.",
                },
                {
                  id: "coverage-quote",
                  title: "Posso solicitar orçamento mesmo sem saber qual plataforma preciso?",
                  content: "Sim. Informe a altura aproximada e as características do trabalho para que a equipe possa auxiliar na escolha.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <h2>Consulte a disponibilidade para sua região</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">Informe onde sera realizado o trabalho e as características da operação.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href="#consulta-cidade">Consultar minha cidade</Button>
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </>
  );
}
