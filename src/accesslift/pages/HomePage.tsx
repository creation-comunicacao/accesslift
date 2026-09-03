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
import { trackEvent } from "../analytics/analytics";
import { getEquipmentBySlug } from "../catalog/catalog";
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
import type { Equipment } from "../types/equipment";
import { formatPublicSpecValue } from "../utils/publicText";

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
    <figure className="relative min-h-72 overflow-hidden rounded-lg bg-slate-100 text-white">
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
    <div data-reveal="fade-up" className="mb-14 max-w-3xl">
      <span className={`section-eyebrow ${inverted ? "text-white" : ""}`}>{eyebrow}</span>
      <h2 className={`mt-5 ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description && <p className={`mt-5 max-w-2xl text-base leading-7 ${inverted ? "text-slate-300" : "text-zinc-600"}`}>{description}</p>}
    </div>
  );
}

function HomeEquipmentCard({ equipment }: { equipment: Equipment; key?: string }) {
  const categoryLabel =
    equipment.category === "plataformas-tesoura"
      ? "Plataforma Tesoura"
      : "Plataforma Articulada";
  const specs = [
    ["Alimentação", formatPublicSpecValue(equipment.specs.alimentacao)],
    ["Capacidade", formatPublicSpecValue(equipment.specs.capacidade)],
  ].filter((item): item is [string, string] => Boolean(item[1]));
  const primarySpecs = [["Altura de trabalho", formatPublicSpecValue(equipment.specs.alturaTrabalho)]]
    .filter((item): item is [string, string] => Boolean(item[1]))
    .concat(specs)
    .slice(0, 2);

  return (
    <article data-reveal="fade-up" className="home-panel-light home-card-hover group flex h-full flex-col overflow-hidden rounded-lg">
      {equipment.mainImage.src && (
        <div className="bg-slate-50">
          <img
            src={equipment.mainImage.src}
            alt={equipment.mainImage.alt}
            width={equipment.mainImage.width}
            height={equipment.mainImage.height}
            sizes="(min-width: 1280px) 288px, (min-width: 768px) 50vw, 100vw"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.025]"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] text-zinc-500">
          <span>{equipment.brand}</span>
          <span aria-hidden>·</span>
          <span>{categoryLabel}</span>
        </div>
        <h3 className="text-xl text-neutral-950">{equipment.brand} {equipment.model}</h3>
        <p className="home-equipment-summary mt-3 text-sm leading-6 text-zinc-600">{equipment.summary}</p>
        {primarySpecs.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {primarySpecs.map(([label, value]) => (
              <div key={label}>
                <dd className="text-lg font-semibold text-neutral-950">{value}</dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-[0.08em] text-zinc-500">{label}</dt>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-auto flex flex-col gap-3 pt-6">
          <a href={`/equipamentos/${equipment.slug}/`} className="inline-flex min-h-10 items-center justify-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-[#0b2d4d]">
            Ver detalhes <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <Button
            href={`/solicite-orcamento/?equipamento=${encodeURIComponent(equipment.slug)}`}
            className="w-full !font-semibold"
            icon={<ClipboardCheck className="h-4 w-4" aria-hidden />}
            onClick={() =>
              trackEvent({
                name: "equipment_availability_click",
                payload: { equipment_slug: equipment.slug },
              })
            }
          >
            Consultar disponibilidade
          </Button>
        </div>
      </div>
    </article>
  );
}

function ServiceAreaMap() {
  return (
    <figure
      data-reveal="fade-left"
      className="relative overflow-hidden rounded-lg border border-slate-200/70 bg-slate-50 p-5"
      aria-label="Mapa ilustrativo da base da Accesslift em São Paulo com raio aproximado de 150 km"
    >
      <div className="absolute right-5 top-5 z-10 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600">
        raio aproximado
      </div>
      <div className="relative min-h-72 overflow-hidden rounded-md bg-white">
        <svg viewBox="0 0 560 360" role="img" aria-labelledby="service-area-title service-area-desc" className="h-full min-h-72 w-full">
          <title id="service-area-title">Área de atendimento da Accesslift</title>
          <desc id="service-area-desc">Representação visual da base em São Paulo e do raio aproximado de atendimento de até 150 quilômetros.</desc>
          <defs>
            <linearGradient id="mapFade" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f4f6f8" />
            </linearGradient>
          </defs>
          <rect width="560" height="360" fill="url(#mapFade)" />
          <path d="M45 108 C126 91 177 125 240 107 C309 87 367 58 512 87" fill="none" stroke="#d7dde4" strokeWidth="2" />
          <path d="M64 249 C143 217 206 232 281 211 C359 190 424 205 515 165" fill="none" stroke="#d7dde4" strokeWidth="2" />
          <path d="M98 55 L155 315" stroke="#e8edf2" strokeWidth="2" />
          <path d="M236 38 L256 326" stroke="#e8edf2" strokeWidth="2" />
          <path d="M384 48 L349 321" stroke="#e8edf2" strokeWidth="2" />
          <circle cx="280" cy="184" r="116" fill="#0b2d4d" opacity="0.055" />
          <circle cx="280" cy="184" r="116" fill="none" stroke="#0b2d4d" strokeDasharray="6 7" strokeOpacity="0.32" strokeWidth="2" />
          <circle cx="280" cy="184" r="9" fill="#d8242f" />
          <circle cx="280" cy="184" r="17" fill="none" stroke="#d8242f" strokeOpacity="0.22" strokeWidth="8" />
          <text x="302" y="181" fill="#171717" fontSize="16" fontWeight="600">Base Accesslift</text>
          <text x="302" y="203" fill="#71717a" fontSize="13">São Paulo/SP</text>
          <path d="M280 184 L396 184" stroke="#0b2d4d" strokeOpacity="0.38" strokeWidth="2" />
          <text x="360" y="248" fill="#171717" fontSize="24" fontWeight="600">150 km</text>
          <text x="360" y="273" fill="#71717a" fontSize="13">até a região atendida</text>
        </svg>
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
        <span className="inline-flex items-center gap-2 font-medium text-neutral-950">
          <MapPin className="h-4 w-4 text-[#d8242f]" aria-hidden />
          Base em São Paulo
        </span>
        <span>Atendimento em raio de até 150 km, conforme disponibilidade e condições da operação.</span>
      </figcaption>
    </figure>
  );
}

export function HomePage() {
  return (
    <main className="home-refined">
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
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Plataformas tesoura e articuladas para trabalhos em altura, com frota elétrica, entrega própria e suporte técnico da Accesslift.
            </p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <RequestQuoteButton className="!font-semibold" />
              <Button href="/equipamentos/" variant="secondary" className="!font-semibold">Ver equipamentos</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
          <div className="site-container reveal-stagger grid gap-6 py-10 sm:grid-cols-2 md:grid-cols-4">
            {homeTrustItems.map((item, index) => {
              const Icon = trustIcons[index];
              return (
                <div key={item.value} data-reveal="fade-up" className="flex min-h-20 items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-zinc-400" aria-hidden />
                  <div>
                    <p className="text-base font-semibold text-neutral-950">{item.value}</p>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

      <section className="site-container home-section">
        <SectionHeader
          eyebrow="Locação"
          title="Plataforma elevatória para a necessidade da sua operação"
          description="A Accesslift atua na locação de plataformas elevatórias para empresas que precisam realizar trabalhos em altura com equipamentos adequados à aplicação, ao ambiente e à altura de trabalho."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div data-reveal="fade-right" className="max-w-3xl space-y-5 text-base leading-7 text-zinc-600">
            <p>Disponibilizamos locações diárias, semanais e mensais, com plataformas para diferentes demandas de manutenção, instalação, construção, montagem e operações industriais e comerciais.</p>
            <p>Nossa equipe auxilia na escolha do equipamento considerando as características do trabalho, como altura necessária, acesso ao local, espaço disponível e necessidade de alcance vertical ou horizontal.</p>
          </div>
          <div data-reveal="fade-left">
          <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary" className="!font-semibold" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
            Conhecer a locação
          </Button>
          </div>
        </div>
      </section>

      <section className="bg-white home-section-compact text-zinc-700">
        <div className="site-container">
          <SectionHeader
            eyebrow="Tipos de plataforma"
            title="Encontre a plataforma certa para o seu trabalho"
            description="A escolha entre uma plataforma tesoura e uma plataforma articulada depende principalmente do tipo de acesso e da movimentação necessária para executar o serviço."
          />
          <div className="reveal-stagger grid gap-5 lg:grid-cols-2">
            {homeCategoryCards.map((category) => (
              <article key={category.title} data-reveal="fade-up" className="home-panel-light home-card-hover group overflow-hidden rounded-lg">
                <EquipmentVisual type={category.visual} />
                <div className="flex flex-col justify-center p-6 md:p-7">
                  <Badge tone="outline" className="!font-medium !tracking-[0.1em]">{category.title}</Badge>
                  <h3 className="mt-5 text-2xl text-neutral-950">{category.heading}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">{category.description}</p>
                  <Button href={category.href} className="mt-6 w-fit !font-semibold">{category.label}</Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white home-section-compact">
        <div className="site-container">
          <SectionHeader
            eyebrow="Diferenciais Accesslift"
            title="Mais do que disponibilizar equipamentos"
            description="A locação de uma plataforma elevatória precisa funcionar do início ao fim da operação. Por isso, a Accesslift combina equipamentos, logística e suporte para atender cada projeto com proximidade."
          />
          <div className="home-editorial-grid reveal-stagger grid gap-x-10 gap-y-9 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {homeDifferentials.map(({ title, description }, index) => {
              const Icon = differentialIcons[index];
              return (
                <article key={title} data-reveal="fade-up">
                  <Icon className="h-5 w-5 text-zinc-400" aria-hidden />
                  <h3 className="mt-4 text-base text-neutral-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
                </article>
              );
            })}
          </div>
          <Button href="/servicos/" variant="secondary" className="mt-12 !font-semibold">Conheça nossos serviços</Button>
        </div>
      </section>

      <section className="site-container home-section">
        <SectionHeader
          eyebrow="Equipamentos"
          title="Plataformas elevatórias para diferentes alturas e aplicações"
          description="A frota Accesslift reúne plataformas elevatórias das categorias tesoura e articulada, com modelos de fabricantes reconhecidos como JLG, Genie, Skyjack e Zoomlion. Compare os equipamentos por categoria, marca, altura de trabalho e capacidade para encontrar as opções mais adequadas à sua necessidade."
        />
        <div className="reveal-stagger grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredEquipment.map((equipment) => <HomeEquipmentCard key={equipment.id} equipment={equipment} />)}
        </div>
        <Button href="/equipamentos/" variant="secondary" className="mt-12 !font-semibold" icon={<ArrowRight className="h-4 w-4" aria-hidden />}>
          Ver todos os equipamentos
        </Button>
      </section>

      <section className="bg-white home-section-compact">
        <div className="site-container">
          <SectionHeader
            eyebrow="Segmentos"
            title="Plataformas elevatórias para diferentes setores"
            description="Atendemos empresas que precisam executar trabalhos em altura em diferentes ambientes e condições operacionais."
          />
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {segments.map(({ title, description, href, label, icon: Icon }) => (
              <a key={href} href={href} data-reveal="fade-up" className="home-panel-light home-card-hover group rounded-lg p-5 md:p-6">
                <Icon className="h-6 w-6 text-zinc-400" aria-hidden />
                <h3 className="mt-5 text-neutral-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#0b2d4d]">{label} <ArrowRight className="h-4 w-4" aria-hidden /></span>
              </a>
            ))}
          </div>
          <Button href="/segmentos-e-aplicacoes/" variant="secondary" className="mt-12 !font-semibold">Conhecer todas as aplicações</Button>
        </div>
      </section>

      <section className="bg-white home-section-compact">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="fade-right">
            <Badge tone="outline" className="!font-medium !tracking-[0.1em]">Área de atendimento</Badge>
            <h2 className="mt-4 text-slate-950">Locação de plataformas elevatórias em São Paulo e região</h2>
            <div className="mt-5 max-w-2xl space-y-5 text-base leading-7 text-zinc-600">
              <p>A Accesslift atende empresas em São Paulo e municípios dentro de um raio de até 150 km de nossa base, conforme disponibilidade e condições da operação.</p>
              <p>Nossa estrutura de atendimento integra locação, entrega e retirada dos equipamentos e suporte técnico durante a operação.</p>
              <p className="font-medium text-neutral-950">Precisa saber se atendemos sua cidade?</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <RequestQuoteButton className="!font-semibold" />
              <Button href="/area-de-atendimento/" variant="secondary" className="!font-semibold">Consultar atendimento</Button>
            </div>
          </div>
          <ServiceAreaMap />
        </div>
      </section>

      <section className="site-container home-section">
        <SectionHeader
          eyebrow="Clientes e avaliações"
          title="A confiança de quem trabalha com a Accesslift"
          description="Há 12 anos, a Accesslift atende empresas de diferentes portes e segmentos, construindo relações baseadas em atendimento próximo, equipamentos adequados e suporte durante a locação. A experiência de nossos clientes ajuda a mostrar, na prática, o compromisso que buscamos manter em cada atendimento."
        />
        <h3 data-reveal="fade-up" className="text-xl text-neutral-950">Empresas que já confiaram na Accesslift</h3>
        <div className="reveal-stagger mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {homeClients.map((client) => (
            <div key={client.name} data-reveal="fade-up" className="flex min-h-28 items-center justify-center rounded-lg border border-slate-200/70 bg-white p-5 text-center">
              {client.logoSrc ? (
                <img src={client.logoSrc} alt={client.logoAlt} className="max-h-14 max-w-full object-contain" loading="lazy" decoding="async" />
              ) : (
                <p className="text-lg font-semibold text-neutral-950">{client.name}</p>
              )}
            </div>
          ))}
        </div>

        {(homeGoogleReviews.length > 0 || googleReviewsProfileUrl) && (
          <div className="mt-14 border-t border-slate-200/70 pt-12">
            <h3 className="text-2xl text-neutral-950">Avaliações da Accesslift no Google</h3>
            {homeGoogleReviews.length > 0 ? (
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {homeGoogleReviews.slice(0, 5).map((review) => (
                  <article key={review.id} className="rounded-lg border border-slate-200/70 bg-white p-5">
                    <div className="flex gap-1" aria-label={`${review.rating} de 5 estrelas`}>
                      {Array.from({ length: review.rating }, (_, index) => <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />)}
                    </div>
                    <blockquote className="mt-4 text-sm leading-6 text-zinc-700">“{review.excerpt}”</blockquote>
                    <p className="mt-4 text-sm font-semibold text-neutral-950">{review.author}</p>
                    <p className="text-xs font-medium text-zinc-500">Avaliação no Google</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                Consulte as avaliações publicadas no perfil da Accesslift diretamente no Google.
              </p>
            )}
            {googleReviewsProfileUrl && (
              <a href={googleReviewsProfileUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[#0b2d4d] hover:text-[#d8242f]">
                Ver avaliações da Accesslift no Google <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        )}
      </section>

      <section className="home-dark-section bg-[#0b2d4d] home-section-compact text-white">
        <div className="site-container grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div data-reveal="fade-right">
            <Badge tone="outline" className="!font-medium !tracking-[0.1em]">Vamos conversar</Badge>
            <h2 className="mt-4">Precisa de uma plataforma elevatória?</h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200">Conte para a Accesslift onde será realizado o trabalho, a altura aproximada e o período de utilização. Nossa equipe pode ajudar a identificar a plataforma mais adequada para sua necessidade.</p>
          </div>
          <div data-reveal="fade-left" className="grid gap-3 sm:grid-cols-2">
            <RequestQuoteButton className="!font-semibold" />
            <Button href="/contato/" variant="secondary" className="!font-semibold">Falar com a Accesslift</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
