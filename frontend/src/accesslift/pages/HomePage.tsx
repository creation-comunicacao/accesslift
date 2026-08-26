import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Construction,
  Factory,
  Headphones,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { EquipmentCard } from "../components/cards/EquipmentCard";
import {
  CheckAvailabilityButton,
  RequestQuoteButton,
  TalkToSpecialistButton,
  WhatsAppButton,
} from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";
import { Accordion } from "../components/ui/Accordion";
import { Badge } from "../components/ui/Badge";
import { equipmentBrands, mockEquipments } from "../data/equipment";

const categoryCards = [
  {
    title: "Plataformas Tesoura",
    description:
      "Indicadas para trabalhos verticais com operacao organizada, acesso direto e demanda por produtividade em altura.",
    href: "/plataformas-tesoura/",
    label: "Ver plataformas tesoura",
    visual: "tesoura" as const,
  },
  {
    title: "Plataformas Articuladas",
    description:
      "Indicadas para aplicacoes que podem exigir alcance horizontal e acesso a pontos com obstaculos.",
    href: "/plataformas-articuladas/",
    label: "Ver plataformas articuladas",
    visual: "articulada" as const,
  },
];

const trustItems = [
  { value: "12 anos", label: "experiencia no setor" },
  { value: "Entrega propria", label: "logistica preparada" },
  { value: "Assistencia", label: "suporte operacional" },
];

const finderFilters = [
  {
    title: "Tipo",
    options: ["Tesoura", "Articulada", "A definir"],
  },
  {
    title: "Altura",
    options: ["Baixa", "Media", "Alta"],
  },
  {
    title: "Ambiente",
    options: ["Interno", "Externo", "Industrial"],
  },
  {
    title: "Energia",
    options: ["Eletrica", "Diesel", "A definir"],
  },
];

const differentials = [
  { title: "Entrega", icon: Truck },
  { title: "Retirada", icon: PackageCheck },
  { title: "Assistencia", icon: Headphones },
  { title: "Manutencao", icon: Wrench },
  { title: "Atendimento emergencial", icon: Zap },
  { title: "Treinamento", icon: ClipboardCheck },
];

const segments = [
  { title: "Industria", href: "/segmentos/industria/", icon: Factory },
  { title: "Construcao civil", href: "/segmentos/construcao-civil/", icon: Construction },
  { title: "Supermercados", href: "/segmentos/supermercados/", icon: ShoppingCart },
  { title: "Atacados", href: "/segmentos/atacados/", icon: Building2 },
];

const rentalSteps = [
  "Necessidade",
  "Escolha do equipamento",
  "Suporte",
  "Entrega",
  "Operacao",
];

const clients = ["Lorenzetti", "Assai", "Atacadao", "Claro", "EZTEC"];

const contentCards = [
  {
    title: "Como escolher uma plataforma elevatoria",
    summary: "Guia preparado para orientar escolha por tipo, ambiente e necessidade.",
  },
  {
    title: "Locacao diaria, semanal ou mensal",
    summary: "Conteudo previsto para explicar modelos comerciais sem gerar paginas duplicadas.",
  },
  {
    title: "Seguranca e operacao em altura",
    summary: "Base editorial preparada para conteudos sobre seguranca e NR35.",
  },
];

const faqItems = [
  {
    id: "faq-1",
    title: "Como escolher entre tesoura e articulada?",
    content:
      "A resposta real deve considerar ambiente, altura, tipo de acesso e obstaculos. Esta estrutura esta pronta para receber orientacao tecnica validada.",
  },
  {
    id: "faq-2",
    title: "A Accesslift atende fora de Sao Paulo?",
    content:
      "A area comunicada nesta fase e Sao Paulo e regioes em raio de ate 150 km da base.",
  },
  {
    id: "faq-3",
    title: "E possivel solicitar locacao diaria, semanal ou mensal?",
    content:
      "Sim. A arquitetura comercial contempla locacao diaria, semanal e mensal, alem de venda.",
  },
  {
    id: "faq-4",
    title: "Os dados tecnicos dos equipamentos ja estao publicados?",
    content:
      "Ainda nao. Os cards estao preparados para receber ficha tecnica oficial, imagens, ALT, PDFs e SEO por equipamento.",
  },
];

function EquipmentVisual({ type }: { type: "hero" | "tesoura" | "articulada" }) {
  const isArticulated = type === "articulada";

  return (
    <figure className="relative min-h-64 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-white premium-shadow">
      <div className="industrial-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-6 bottom-8 h-3 rounded-full bg-slate-700" />
      <div className="absolute bottom-10 left-8 h-24 w-36 rounded-md border-4 border-lime-300 bg-slate-900 shadow-2xl">
        <div className="grid h-full grid-cols-4 gap-2 p-3">
          <span className="rounded-sm bg-slate-700" />
          <span className="rounded-sm bg-slate-700" />
          <span className="rounded-sm bg-slate-700" />
          <span className="rounded-sm bg-slate-700" />
        </div>
      </div>
      <div className="absolute bottom-24 left-20 h-28 w-4 rotate-[-18deg] rounded-full bg-lime-300" />
      <div className="absolute bottom-32 left-36 h-24 w-4 rotate-[35deg] rounded-full bg-lime-300" />
      {isArticulated || type === "hero" ? (
        <div className="absolute right-8 top-12 h-14 w-32 rounded-md border-4 border-lime-300 bg-slate-900" />
      ) : (
        <div className="absolute right-8 top-20 h-12 w-40 rounded-md border-4 border-lime-300 bg-slate-900" />
      )}
      <div className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-lime-200">
        Imagem oficial a cadastrar
      </div>
    </figure>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <Badge tone="lime">{eyebrow}</Badge>
      <h2 className={`mt-4 ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description && (
        <p className={`mt-3 text-base ${inverted ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="industrial-grid overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <Badge tone="lime">Accesslift</Badge>
            <h1 className="mt-5 max-w-4xl text-slate-950">
              Plataformas elevatorias para locacao, venda e suporte em Sao Paulo
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              A Accesslift conecta sua operacao ao equipamento certo, com atendimento comercial, entrega e assistencia para demandas em altura.
            </p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <RequestQuoteButton />
              <TalkToSpecialistButton />
            </div>
          </div>
          <div>
            <EquipmentVisual type="hero" />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 md:grid-cols-3 md:px-6">
          {trustItems.map((item) => (
            <div key={item.value} className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
              <ShieldCheck className="h-6 w-6 text-lime-700" aria-hidden />
              <div>
                <p className="text-lg font-black text-slate-950">{item.value}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Descoberta"
          title="Encontre a plataforma ideal"
          description="Filtros rapidos para orientar o usuario ate o catalogo sem criar paginas indexaveis por combinacoes."
        />
        <div className="rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:p-6">
          <div className="grid gap-4 md:grid-cols-4">
            {finderFilters.map((filter) => (
              <div key={filter.title}>
                <label className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                  {filter.title}
                </label>
                <select className="min-h-12 w-full rounded-md border border-slate-300 bg-white px-3 text-sm font-bold text-slate-800 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200">
                  {filter.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <p className="text-sm font-semibold text-slate-600">
              Resultado direcionado para o catalogo principal da V2.
            </p>
            <Button href="/plataformas-elevatorias/" icon={<Search className="h-4 w-4" aria-hidden />}>
              Buscar no catalogo
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Categorias"
            title="Tesoura x Articulada"
            description="Duas entradas fortes para orientar a escolha inicial e levar o usuario para a categoria correta."
            inverted
          />
          <div className="grid gap-5 lg:grid-cols-2">
            {categoryCards.map((category) => (
              <article key={category.title} className="grid gap-5 rounded-lg border border-slate-800 bg-slate-900 p-4 md:grid-cols-[0.9fr_1fr] md:p-5">
                <EquipmentVisual type={category.visual} />
                <div className="flex flex-col justify-center">
                  <Badge tone="amber">Categoria</Badge>
                  <h3 className="mt-4 text-2xl font-black text-white">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                  <Button href={category.href} className="mt-5 w-fit" variant="primary">
                    {category.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Catalogo"
          title="Equipamentos em destaque"
          description="Cards renderizados dinamicamente a partir da estrutura de catalogo mockada para desenvolvimento."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mockEquipments.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader
            eyebrow="Diferenciais"
            title="Diferenciais Accesslift"
            description="Servicos essenciais destacados para reforcar confianca, robustez e suporte profissional."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {differentials.map(({ title, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                <Icon className="h-7 w-7 text-lime-700" aria-hidden />
                <h3 className="mt-4 text-slate-950">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Estrutura preparada para detalhamento comercial e operacional em etapa futura.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Aplicacoes"
          title="Solucoes por segmento"
          description="Entradas por segmento previstas no blueprint, sem criacao automatica de paginas por cidade ou filtros."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ title, href, icon: Icon }) => (
            <a key={href} href={href} className="group rounded-lg border border-slate-200 bg-white p-5 soft-shadow transition hover:-translate-y-0.5 hover:border-slate-300">
              <Icon className="h-8 w-8 text-slate-950" aria-hidden />
              <h3 className="mt-5 text-slate-950">{title}</h3>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-lime-700">
                Ver aplicacao <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Marcas" title="Marcas previstas no catalogo" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentBrands.map((brand) => (
              <div key={brand} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-2xl font-black text-slate-950">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Locacao"
          title="Como funciona a locacao"
          description="Fluxo visual simples para reduzir friccao e orientar a jornada de conversao."
        />
        <div className="grid gap-3 md:grid-cols-5">
          {rentalSteps.map((step, index) => (
            <article key={step} className="relative rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-slate-950">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base text-slate-950">{step}</h3>
              {index < rentalSteps.length - 1 && (
                <ArrowRight className="absolute right-4 top-6 hidden h-5 w-5 text-slate-300 md:block" aria-hidden />
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <Badge tone="amber">Suporte</Badge>
            <h2 className="mt-4 text-white">Assistencia e suporte operacional</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Bloco preparado para reforcar atendimento profissional, suporte comercial, assistencia tecnica, manutencao preventiva e atendimento emergencial.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <TalkToSpecialistButton />
            <CheckAvailabilityButton />
            <WhatsAppButton className="sm:col-span-2" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Clientes"
          title="Prova social preparada"
          description="Nomes citados no blueprint apresentados sem logos ate confirmacao de autorizacao."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((client) => (
            <div key={client} className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
              <p className="text-lg font-black text-slate-950">{client}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                Logo pendente de autorizacao
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow">
            <MapPin className="h-9 w-9 text-lime-700" aria-hidden />
            <h2 className="mt-5 text-slate-950">Area de atendimento</h2>
            <p className="mt-3 text-slate-600">
              Sao Paulo e regioes em raio de ate 150 km da base.
            </p>
          </div>
          <div className="industrial-grid min-h-72 rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex h-full items-center justify-center rounded-full border-2 border-dashed border-lime-500 bg-lime-50 text-center">
              <div>
                <p className="text-4xl font-black text-slate-950">150 km</p>
                <p className="mt-2 text-sm font-bold text-slate-600">raio de atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader
          eyebrow="Conteudos"
          title="Central de Conhecimento"
          description="Cards editoriais prontos para substituicao por posts reais do blog."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {contentCards.map((content) => (
            <article key={content.title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
              <Sparkles className="h-7 w-7 text-lime-700" aria-hidden />
              <h3 className="mt-5 text-slate-950">{content.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{content.summary}</p>
              <Button href="/blog/" variant="ghost" className="mt-4 px-0">
                Ler conteudos
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeader
            eyebrow="FAQ"
            title="Perguntas frequentes"
            description="Accordion pronto para receber perguntas e respostas reais aprovadas."
          />
          <Accordion items={faqItems} />
        </div>
      </section>

      <section className="bg-lime-300 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <Badge tone="outline">CTA final</Badge>
            <h2 className="mt-4 text-slate-950">Vamos encontrar a plataforma certa para sua operacao?</h2>
            <p className="mt-3 max-w-2xl text-slate-800">
              Solicite um orcamento ou fale com um especialista para direcionar sua demanda de locacao, venda ou suporte.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <RequestQuoteButton />
            <TalkToSpecialistButton />
          </div>
        </div>
      </section>
    </>
  );
}
