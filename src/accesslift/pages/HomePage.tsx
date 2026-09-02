import {
  ArrowRight,
  Award,
  Building2,
  ClipboardCheck,
  Construction,
  Factory,
  Headphones,
  MapPin,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { getEquipmentBySlug } from "../catalog/catalog";
import { EquipmentCard } from "../components/cards/EquipmentCard";
import { RequestQuoteButton } from "../components/buttons/CtaButtons";
import { Button } from "../components/buttons/Button";
import { Badge } from "../components/ui/Badge";
import { homeFeaturedEquipmentSlugs } from "../data/equipment";
import {
  googleReviewsProfileUrl,
  homeCategoryCards,
  homeClients,
  homeDifferentials,
  homeGoogleReviews,
  homeTrustItems,
} from "../data/homeContent";

const featuredEquipment = homeFeaturedEquipmentSlugs
  .map(getEquipmentBySlug)
  .filter((equipment): equipment is NonNullable<typeof equipment> => Boolean(equipment));

const differentialIcons = [Award, Truck, Headphones, Wrench, Zap, ClipboardCheck];
const trustIcons = [ShieldCheck, Truck, Headphones, MapPin];

const segments = [
  {
    title: "Indústria",
    description: "Apoio a atividades de manutenção, instalações, montagens e intervenções em estruturas e instalações industriais.",
    href: "/segmentos/industria/",
    label: "Ver aplicações na indústria",
    icon: Factory,
  },
  {
    title: "Construção Civil",
    description: "Plataformas para diferentes etapas e necessidades de acesso em obras e serviços de construção.",
    href: "/segmentos/construcao-civil/",
    label: "Ver aplicações na construção",
    icon: Construction,
  },
  {
    title: "Supermercados e Hipermercados",
    description: "Equipamentos para manutenção, instalações e trabalhos em altura em grandes áreas comerciais.",
    href: "/segmentos/supermercados-e-hipermercados/",
    label: "Ver aplicações em supermercados",
    icon: ShoppingCart,
  },
  {
    title: "Atacados",
    description: "Soluções para trabalhos em altura em estruturas, instalações e áreas operacionais de estabelecimentos atacadistas.",
    href: "/segmentos/atacados/",
    label: "Ver aplicações em atacados",
    icon: Building2,
  },
];

function EquipmentVisual({ type }: { type: "hero" | "tesoura" | "articulada" }) {
  const visual = {
    hero: {
      src: "/images/accesslift/logistica/transporte-plataformas-elevatorias-frota-03.jpeg",
      alt: "Entrega de plataformas elevatórias pela Accesslift",
      width: 1599,
      height: 899,
    },
    tesoura: {
      src: "/images/accesslift/equipamentos/jlg/plataforma-tesoura-jlg-3246es-access-lift.jpeg",
      alt: "Plataforma tesoura JLG 3246ES da frota Accesslift",
      width: 957,
      height: 1280,
    },
    articulada: {
      src: "/images/accesslift/equipamentos/genie/plataforma-articulada-genie-z34-22-principal.jpeg",
      alt: "Plataforma articulada Genie Z-34/22 da frota Accesslift",
      width: 868,
      height: 1160,
    },
  }[type];

  return (
    <figure className="relative min-h-64 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-white premium-shadow">
      <img
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        sizes={type === "hero" ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 25vw, 100vw"}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
        loading={type === "hero" ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}

function SectionHeader({ eyebrow, title, description, inverted = false }: { eyebrow: string; title: string; description?: string; inverted?: boolean }) {
  return (
    <div data-reveal="fade-up" className="mb-10 max-w-3xl">
      <span className={`section-eyebrow ${inverted ? "text-white" : ""}`}>{eyebrow}</span>
      <h2 className={`mt-5 ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description && <p className={`mt-3 text-base leading-7 ${inverted ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero-photo overflow-hidden">
        <img
          src="/images/accesslift/logistica/transporte-plataformas-elevatorias-frota-03.jpeg"
          alt="Entrega de plataformas elevatórias pela Accesslift"
          width={1599}
          height={899}
          loading="eager"
          decoding="async"
        />
        <div className="site-container flex min-h-[inherit] items-center py-16 md:py-20">
          <div className="hero-sequence max-w-3xl">
            <span className="section-eyebrow text-white">Accesslift</span>
            <h1 className="mt-6 max-w-4xl text-white">Locação de Plataformas Elevatórias em São Paulo</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Plataformas tesoura e articuladas para trabalhos em altura, com frota elétrica, entrega própria e suporte técnico da Accesslift.
            </p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <RequestQuoteButton />
              <Button href="/equipamentos/" variant="secondary">Ver equipamentos</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
          <div className="site-container reveal-stagger grid gap-3 py-6 sm:grid-cols-2 md:grid-cols-4">
            {homeTrustItems.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={item.value} data-reveal="fade-up" className="flex min-h-20 items-center gap-3 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200/80">
                  <Icon className="h-6 w-6 shrink-0 text-[#0b2d4d]" aria-hidden />
                  <div>
                    <p className="text-base font-black text-slate-950">{item.value}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      <section className="site-container section-space">
        <SectionHeader
          eyebrow="Locação"
          title="Plataforma elevatória para a necessidade da sua operação"
          description="A Accesslift atua na locação de plataformas elevatórias para empresas que precisam realizar trabalhos em altura com equipamentos adequados à aplicação, ao ambiente e à altura de trabalho."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal="fade-right" className="max-w-4xl space-y-4 text-base leading-7 text-slate-600">
            <p>Disponibilizamos locações diárias, semanais e mensais, com plataformas para diferentes demandas de manutenção, instalação, construção, montagem e operações industriais e comerciais.</p>
            <p>Nossa equipe auxilia na escolha do equipamento considerando as características do trabalho, como altura necessária, acesso ao local, espaço disponível e necessidade de alcance vertical ou horizontal.</p>
          </div>
          <div data-reveal="fade-left">
          <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
            Conhecer a locação
          </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#0b2d4d] section-space-compact text-white">
        <div className="site-container">
          <SectionHeader
            eyebrow="Tipos de plataforma"
            title="Encontre a plataforma certa para o seu trabalho"
            description="A escolha entre uma plataforma tesoura e uma plataforma articulada depende principalmente do tipo de acesso e da movimentação necessária para executar o serviço."
            inverted
          />
          <div className="reveal-stagger grid gap-5 lg:grid-cols-2">
            {homeCategoryCards.map((category) => (
              <article key={category.title} data-reveal="fade-up" className="group grid gap-5 rounded-lg border border-white/10 bg-white/6 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.14)] md:grid-cols-[0.9fr_1fr] md:p-5">
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

      <section className="bg-slate-50 section-space-compact">
        <div className="site-container">
          <SectionHeader
            eyebrow="Diferenciais Accesslift"
            title="Mais do que disponibilizar equipamentos"
            description="A locação de uma plataforma elevatória precisa funcionar do início ao fim da operação. Por isso, a Accesslift combina equipamentos, logística e suporte para atender cada projeto com proximidade."
          />
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeDifferentials.map(({ title, description }, index) => {
              const Icon = differentialIcons[index];
              return (
                <article key={title} data-reveal="fade-up" className="premium-card premium-card-hover rounded-lg p-5 md:p-6">
                  <Icon className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
                  <h3 className="mt-4 text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              );
            })}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-8">Conheça nossos serviços</Button>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHeader
          eyebrow="Equipamentos"
          title="Plataformas elevatórias para diferentes alturas e aplicações"
          description="A frota Accesslift reúne plataformas elevatórias das categorias tesoura e articulada, com modelos de fabricantes reconhecidos como JLG, Genie, Skyjack e Zoomlion. Compare os equipamentos por categoria, marca, altura de trabalho e capacidade para encontrar as opções mais adequadas à sua necessidade."
        />
        <div className="reveal-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredEquipment.map((equipment) => <EquipmentCard key={equipment.id} equipment={equipment} />)}
        </div>
        <Button href="/equipamentos/" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
          Ver todos os equipamentos
        </Button>
      </section>

      <section className="border-y border-slate-200 bg-white section-space-compact">
        <div className="site-container">
          <SectionHeader
            eyebrow="Segmentos"
            title="Plataformas elevatórias para diferentes setores"
            description="Atendemos empresas que precisam executar trabalhos em altura em diferentes ambientes e condições operacionais."
          />
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map(({ title, description, href, label, icon: Icon }) => (
              <a key={href} href={href} data-reveal="fade-up" className="premium-card premium-card-hover group rounded-lg p-5">
                <Icon className="h-8 w-8 text-[#0b2d4d]" aria-hidden />
                <h3 className="mt-5 text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#0b2d4d]">{label} <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </a>
            ))}
          </div>
          <Button href="/segmentos-e-aplicacoes/" variant="secondary" className="mt-8">Conhecer todas as aplicações</Button>
        </div>
      </section>

      <section className="bg-slate-50 section-space-compact">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="fade-right">
            <Badge tone="lime">Área de atendimento</Badge>
            <h2 className="mt-4 text-slate-950">Locação de plataformas elevatórias em São Paulo e região</h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
              <p>A Accesslift atende empresas em São Paulo e municípios dentro de um raio de até 150 km de nossa base, conforme disponibilidade e condições da operação.</p>
              <p>Nossa estrutura de atendimento integra locação, entrega e retirada dos equipamentos e suporte técnico durante a operação.</p>
              <p className="font-extrabold text-slate-800">Precisa saber se atendemos sua cidade?</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/area-de-atendimento/" variant="secondary">Consultar atendimento</Button>
              <RequestQuoteButton />
            </div>
          </div>
          <div data-reveal="fade-left" className="industrial-grid min-h-72 rounded-lg border border-slate-200 bg-white p-6 premium-shadow">
            <div className="flex h-full min-h-60 items-center justify-center rounded-full border-2 border-dashed border-[#d8242f]/35 bg-[#0b2d4d]/5 text-center">
              <div>
                <p className="text-4xl font-black text-slate-950">150 km</p>
                <p className="mt-2 text-sm font-bold text-slate-600">raio de atendimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container section-space">
        <SectionHeader
          eyebrow="Clientes e avaliações"
          title="A confiança de quem trabalha com a Accesslift"
          description="Há 12 anos, a Accesslift atende empresas de diferentes portes e segmentos, construindo relações baseadas em atendimento próximo, equipamentos adequados e suporte durante a locação. A experiência de nossos clientes ajuda a mostrar, na prática, o compromisso que buscamos manter em cada atendimento."
        />
        <h3 data-reveal="fade-up" className="text-xl font-black text-slate-950">Empresas que já confiaram na Accesslift</h3>
        <div className="reveal-stagger mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {homeClients.map((client) => (
            <div key={client.name} data-reveal="fade-up" className="flex min-h-28 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-5 text-center">
              {client.logoSrc ? (
                <img src={client.logoSrc} alt={client.logoAlt} className="max-h-14 max-w-full object-contain" loading="lazy" decoding="async" />
              ) : (
                <p className="text-lg font-black text-slate-950">{client.name}</p>
              )}
            </div>
          ))}
        </div>

        {(homeGoogleReviews.length > 0 || googleReviewsProfileUrl) && (
          <div className="mt-10 border-t border-slate-200 pt-10">
            <h3 className="text-2xl font-black text-slate-950">Avaliações da Accesslift no Google</h3>
            {homeGoogleReviews.length > 0 ? (
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {homeGoogleReviews.slice(0, 5).map((review) => (
                  <article key={review.id} className="rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
                    <div className="flex gap-1" aria-label={`${review.rating} de 5 estrelas`}>
                      {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />)}
                    </div>
                    <blockquote className="mt-4 text-sm leading-6 text-slate-700">“{review.excerpt}”</blockquote>
                    <p className="mt-4 text-sm font-black text-slate-950">{review.author}</p>
                    <p className="text-xs font-semibold text-slate-500">Avaliação no Google</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Consulte as avaliações publicadas no perfil da Accesslift diretamente no Google.
              </p>
            )}
            {googleReviewsProfileUrl && (
              <a href={googleReviewsProfileUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-[#0b2d4d] hover:text-[#d8242f]">
                Ver avaliações da Accesslift no Google <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        )}
      </section>

      <section className="border-y border-slate-200 bg-white section-space-compact">
        <div className="site-container grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div data-reveal="fade-right">
            <Badge tone="outline">Vamos conversar</Badge>
            <h2 className="mt-4 text-slate-950">Precisa de uma plataforma elevatória?</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-800">Conte para a Accesslift onde será realizado o trabalho, a altura aproximada e o período de utilização. Nossa equipe pode ajudar a identificar a plataforma mais adequada para sua necessidade.</p>
          </div>
          <div data-reveal="fade-left" className="grid gap-3 sm:grid-cols-2">
            <RequestQuoteButton />
            <Button href="/contato/" variant="secondary">Falar com a Accesslift</Button>
          </div>
        </div>
      </section>
    </>
  );
}
