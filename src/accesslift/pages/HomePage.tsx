import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ClipboardCheck,
  Construction,
  Factory,
  Headphones,
  MapPin,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { getEquipmentBySlug } from "../catalog/catalog";
import { EquipmentCard } from "../components/cards/EquipmentCard";
import {
  RequestQuoteButton,
  TalkToSpecialistButton,
  WhatsAppButton,
} from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";
import { Accordion } from "../components/ui/Accordion";
import { Badge } from "../components/ui/Badge";
import { blogPosts } from "../data/blog";
import { equipmentBrands, homeFeaturedEquipmentSlugs } from "../data/equipment";
import {
  homeCategoryCards,
  homeDifferentials,
  homeFaqItems,
  homeFinderFields,
  homeRentalSteps,
  homeTrustItems,
} from "../data/homeContent";
import type { CatalogFilters } from "../types/equipment";
import { navigateTo } from "../utils/navigation";

const defaultFinderFilters: CatalogFilters = {
  category: "all",
  brand: "all",
  heightRange: "all",
};

const featuredEquipment = homeFeaturedEquipmentSlugs
  .map(getEquipmentBySlug)
  .filter((equipment): equipment is NonNullable<typeof equipment> => Boolean(equipment));

const differentialIcons = [Truck, Headphones, Wrench, Zap, ClipboardCheck];
const trustIcons = [ShieldCheck, Truck, Headphones, MapPin];

const segments = [
  { title: "Industria", description: "Manutencao, instalacoes e intervencoes em areas industriais.", href: "/segmentos/industria/", icon: Factory },
  { title: "Construcao civil", description: "Obras, fachadas e etapas de execucao em altura.", href: "/segmentos/construcao-civil/", icon: Construction },
  { title: "Supermercados e Hipermercados", description: "Manutencao, iluminacao e comunicacao visual em lojas.", href: "/segmentos/supermercados-e-hipermercados/", icon: ShoppingCart },
  { title: "Atacados", description: "Operacoes em grandes espacos comerciais e de abastecimento.", href: "/segmentos/atacados/", icon: Building2 },
];

const clients = ["Lorenzetti", "Assai", "Atacadao", "Claro", "EZTEC"];

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
      <figcaption className="absolute right-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-lime-200">
        Imagem da frota a cadastrar
      </figcaption>
    </figure>
  );
}

function SectionHeader({ eyebrow, title, description, inverted = false }: { eyebrow: string; title: string; description?: string; inverted?: boolean }) {
  return (
    <div className="mb-8 max-w-3xl">
      <Badge tone="lime">{eyebrow}</Badge>
      <h2 className={`mt-4 ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description && <p className={`mt-3 text-base ${inverted ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}

export function HomePage() {
  const [finderFilters, setFinderFilters] = useState<CatalogFilters>(defaultFinderFilters);

  const updateFinderFilter = (key: keyof CatalogFilters, value: string) => {
    setFinderFilters((current) => ({ ...current, [key]: value } as CatalogFilters));
  };

  const openCatalogWithFinder = () => {
    window.sessionStorage.setItem("accesslift-catalog-filters", JSON.stringify(finderFilters));
    navigateTo("/equipamentos/");
  };

  return (
    <>
      <section className="industrial-grid overflow-hidden bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:py-16">
          <div>
            <Badge tone="lime">Accesslift</Badge>
            <h1 className="mt-5 max-w-4xl text-slate-950">Locacao de Plataformas Elevatorias em Sao Paulo</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Locacao de plataformas elevatorias tesoura e articuladas, com frota eletrica, entrega propria, assistencia tecnica e suporte especializado para operacoes em Sao Paulo e regiao.</p>
            <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
              <RequestQuoteButton />
              <Button href="/equipamentos/" variant="secondary" icon={<Search className="h-4 w-4" aria-hidden />}>Ver equipamentos</Button>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-600">Locacao diaria, semanal ou mensal <span aria-hidden>•</span> Atendimento em um raio de ate 150 km da nossa base</p>
          </div>
          <EquipmentVisual type="hero" />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 md:grid-cols-4 md:px-6">
          {homeTrustItems.map((item, index) => {
            const Icon = trustIcons[index];
            return (
            <div key={item.value} className="flex items-center gap-3 rounded-lg bg-slate-50 p-4">
              <Icon className="h-6 w-6 shrink-0 text-lime-700" aria-hidden />
              <div><p className="text-lg font-black text-slate-950">{item.value}</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p></div>
            </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Descoberta" title="Encontre a plataforma certa para o seu trabalho" description="Cada operacao exige uma combinacao diferente de altura, alcance e espaco de trabalho. Selecione as caracteristicas da sua necessidade e conheca os equipamentos mais adequados." />
        <div className="rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:p-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {homeFinderFields.map((field) => (
              <label key={field.key} className="grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
                {field.label}
                <select className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-bold normal-case text-slate-800 outline-none transition hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200" value={finderFilters[field.key]} onChange={(event) => updateFinderFilter(field.key, event.target.value)}>
                  {field.options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </select>
              </label>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5">
            <p className="max-w-2xl text-sm font-semibold text-slate-600">Nao sabe qual plataforma escolher? Nossa equipe pode ajudar a identificar o equipamento adequado para sua operacao.</p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={openCatalogWithFinder} icon={<Search className="h-4 w-4" aria-hidden />}>Ver equipamentos</Button>
              <TalkToSpecialistButton />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Categorias" title="Uma plataforma para cada necessidade de acesso em altura" description="Conheca as duas categorias principais do catalogo Accesslift." inverted />
          <div className="grid gap-5 lg:grid-cols-2">
            {homeCategoryCards.map((category) => (
              <article key={category.title} className="grid gap-5 rounded-lg border border-slate-800 bg-slate-900 p-4 md:grid-cols-[0.9fr_1fr] md:p-5">
                <EquipmentVisual type={category.visual} />
                <div className="flex flex-col justify-center">
                  <Badge tone="amber">{category.title}</Badge>
                  <h3 className="mt-4 text-2xl font-black text-white">{category.heading}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{category.description}</p>
                  <Button href={category.href} className="mt-5 w-fit">{category.label}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Catalogo" title="Equipamentos para diferentes alturas e aplicacoes" description="Nossa frota reune plataformas elevatorias de fabricantes reconhecidos, com modelos para diferentes necessidades de acesso e trabalho em altura." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{featuredEquipment.map((equipment) => <EquipmentCard key={equipment.id} equipment={equipment} />)}</div>
        <Button href="/equipamentos/" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>Ver todos os equipamentos</Button>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Diferencial Accesslift" title="Mais do que alugar uma plataforma. Suporte para sua operacao." description="Da escolha do equipamento a retirada, a Accesslift acompanha sua operacao com estrutura propria e servicos que ajudam a manter o trabalho em movimento." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeDifferentials.map(({ title, description }, index) => {
              const Icon = differentialIcons[index];
              return <article key={title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow"><Icon className="h-7 w-7 text-lime-700" aria-hidden /><h3 className="mt-4 text-slate-950">{title}</h3><p className="mt-2 text-sm text-slate-600">{description}</p></article>;
            })}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>Conheca nossos servicos</Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Aplicacoes" title="Solucoes para diferentes tipos de operacao" description="A Accesslift atende empresas de diversos segmentos, com equipamentos adequados a cada ambiente e atividade." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ title, description, href, icon: Icon }) => (
            <a key={href} href={href} className="group rounded-lg border border-slate-200 bg-white p-5 soft-shadow transition hover:-translate-y-0.5 hover:border-slate-300"><Icon className="h-8 w-8 text-slate-950" aria-hidden /><h3 className="mt-5 text-slate-950">{title}</h3><p className="mt-2 text-sm text-slate-600">{description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-lime-700">Ver solucoes <ArrowRight className="h-4 w-4" aria-hidden /></span></a>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeader eyebrow="Marcas" title="Fabricantes reconhecidos em plataformas elevatorias" description="Marcas presentes no catalogo Accesslift." />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{equipmentBrands.map((brand) => <div key={brand} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-2xl font-black text-slate-950">{brand}</div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Locacao" title="Alugar uma plataforma pode ser simples" />
        <div className="grid gap-3 md:grid-cols-5">
          {homeRentalSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-lg border border-slate-200 bg-white p-5 soft-shadow"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300 text-sm font-black text-slate-950">{index + 1}</span><h3 className="mt-4 text-base text-slate-950">{step.title}</h3><p className="mt-2 text-sm text-slate-600">{step.description}</p>{index < homeRentalSteps.length - 1 && <ArrowRight className="absolute right-4 top-6 hidden h-5 w-5 text-slate-300 md:block" aria-hidden />}</article>
          ))}
        </div>
        <RequestQuoteButton className="mt-8" />
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><Badge tone="amber">Suporte operacional</Badge><h2 className="mt-4 text-white">Atendimento que acompanha a sua operacao</h2><p className="mt-4 max-w-2xl text-slate-300">Da escolha do equipamento ao suporte durante a locacao, nossa equipe esta pronta para ajudar sua operacao a seguir em movimento.</p></div>
          <div className="grid gap-3 sm:grid-cols-2"><TalkToSpecialistButton /><RequestQuoteButton /><WhatsAppButton className="sm:col-span-2" /></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Prova social" title="Experiencia em operacoes que trabalham em altura" description="Nomes citados no blueprint. Logos e depoimentos permanecem pendentes de autorizacao e validacao." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{clients.map((client) => <div key={client} className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5 text-center"><p className="text-lg font-black text-slate-950">{client}</p><p className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">Referencia a validar</p></div>)}</div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div className="rounded-lg border border-slate-200 bg-white p-6 premium-shadow"><MapPin className="h-9 w-9 text-lime-700" aria-hidden /><h2 className="mt-5 text-slate-950">Sao Paulo e regiao</h2><p className="mt-3 text-slate-600">Atendimento em um raio de ate 150 km da nossa base.</p><Button href="/area-de-atendimento/" variant="secondary" className="mt-5">Consulte a area de atendimento</Button></div>
          <div className="industrial-grid min-h-72 rounded-lg border border-slate-200 bg-white p-6"><div className="flex h-full items-center justify-center rounded-full border-2 border-dashed border-lime-500 bg-lime-50 text-center"><div><p className="text-4xl font-black text-slate-950">150 km</p><p className="mt-2 text-sm font-bold text-slate-600">raio de atendimento</p></div></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeader eyebrow="Central de Conhecimento" title="Conteudos para orientar sua decisao" description="Materiais preparados para a base editorial da Accesslift." />
        <div className="grid gap-4 md:grid-cols-3">{blogPosts.slice(0, 3).map((post) => <article key={post.id} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow"><Sparkles className="h-7 w-7 text-lime-700" aria-hidden /><h3 className="mt-5 text-slate-950">{post.title}</h3><p className="mt-2 text-sm text-slate-600">{post.summary}</p><Button href="/blog/" variant="ghost" className="mt-4 px-0">Ver na Central de Conhecimento</Button></article>)}</div>
      </section>

      <section className="bg-slate-50 py-14"><div className="mx-auto max-w-4xl px-4 md:px-6"><SectionHeader eyebrow="FAQ" title="Perguntas frequentes" /><Accordion items={homeFaqItems} /></div></section>

      <section className="bg-lime-300 py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div><Badge tone="outline">Vamos conversar</Badge><h2 className="mt-4 text-slate-950">Precisa de uma plataforma para sua operacao?</h2><p className="mt-3 max-w-2xl text-slate-800">Solicite um orcamento ou fale com nossa equipe para encontrar a solucao mais adequada.</p></div>
          <div className="grid gap-3 sm:grid-cols-2"><RequestQuoteButton /><WhatsAppButton /></div>
        </div>
      </section>
    </>
  );
}
