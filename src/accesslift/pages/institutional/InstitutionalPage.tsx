import { Building2, MapPin, ShieldCheck } from "lucide-react";
import { RelatedEquipmentSection, SectionList, ValueSection, FinalConversionSection } from "../shared/StructuredPageSections";
import { ConversionHero } from "../shared/StructuredPageSections";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { Accordion } from "../../components/ui/Accordion";
import type { InstitutionalPageConfig } from "../../data/institutional";
import { clientProofs } from "../../data/institutional";
import { companyGallery } from "../../data/officialMedia";

type InstitutionalPageProps = {
  page: InstitutionalPageConfig;
};

export function InstitutionalPage({ page }: InstitutionalPageProps) {
  const iconByTitle: Record<string, typeof Building2> = {
    Historia: Building2,
    Atuacao: MapPin,
    "NR-35": ShieldCheck,
  };

  return (
    <>
      <ConversionHero eyebrow={page.eyebrow} title={page.seo.h1} description={page.description} />
      {page.path === "/empresa/" && (
        <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
          <img
            src="/images/accesslift/empresa/operacao-access-lift-em-ambiente-industrial.jpeg"
            alt="Operação da Access Lift em ambiente industrial"
            width={1086}
            height={1448}
            sizes="(min-width: 1024px) 1184px, 100vw"
            className="aspect-[16/7] w-full rounded-lg border border-slate-200 object-cover premium-shadow"
            loading="lazy"
            decoding="async"
          />
        </section>
      )}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {page.sections.map((section) => {
            const Icon = iconByTitle[section.title] || Building2;

            return (
              <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
                <Icon className="h-8 w-8 text-lime-700" aria-hidden />
                <h2 className="mt-4 text-2xl font-black text-slate-950">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{section.description}</p>
                {section.items && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Badge key={item} tone="steel">
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
      {page.path === "/empresa/" && (
        <>
          <OfficialMediaGallery
            title="Frota e operacao"
            description="Registro fotografico da frota e da operacao Accesslift. As imagens apoiam a apresentacao institucional sem substituir dados tecnicos do catalogo."
            images={companyGallery}
          />
          <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
            <Badge tone="lime">Clientes</Badge>
            <h2 className="mt-4 text-slate-950">Empresas que ja confiaram na Accesslift</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {clientProofs.map((client) => (
                <article key={client.name} className="flex min-h-24 items-center justify-center rounded-lg border border-slate-200 bg-white p-4 text-center soft-shadow">
                  {client.logoUrl ? (
                    <img src={client.logoUrl} alt={client.name} className="max-h-12 w-auto object-contain" loading="lazy" decoding="async" />
                  ) : (
                    <span className="text-base font-black text-slate-800">{client.name}</span>
                  )}
                </article>
              ))}
            </div>
          </section>
          <SectionList
            eyebrow="Diferenciais"
            title="Estrutura para acompanhar a locacao"
            items={["Locacao diaria, semanal e mensal", "Entrega e retirada proprias", "Assistencia tecnica propria", "Manutencao preventiva", "Atendimento emergencial", "Treinamento de operadores"]}
          />
          <RelatedEquipmentSection categories={["plataformas-tesoura", "plataformas-articuladas"]} />
          <section className="mx-auto flex max-w-7xl flex-wrap gap-3 px-4 pb-12 md:px-6">
            <Button href="/equipamentos/" variant="secondary">Conhecer equipamentos</Button>
            <Button href="/servicos/" variant="secondary">Conhecer servicos</Button>
            <Button href="/segmentos-e-aplicacoes/" variant="ghost">Segmentos e aplicacoes</Button>
            <Button href="/area-de-atendimento/" variant="ghost">Area de atendimento</Button>
          </section>
        </>
      )}
      {page.path === "/seguranca-e-nr35/" && (
        <>
          <SectionList
            eyebrow="Planejamento"
            title="O que considerar ao escolher a plataforma?"
            items={[
              "Altura de trabalho",
              "Alcance horizontal, quando necessario",
              "Capacidade",
              "Dimensoes",
              "Acessos ao local",
              "Obstaculos",
              "Condicoes do ambiente e do piso",
              "Caracteristicas da atividade",
            ]}
            cta={{ label: "Consultar equipamentos", href: "/equipamentos/" }}
          />
          <section className="mx-auto max-w-4xl px-4 pb-12 md:px-6">
            <Badge tone="lime">FAQ</Badge>
            <h2 className="mt-4 text-slate-950">Duvidas sobre NR-35 e plataformas elevatorias</h2>
            <div className="mt-6">
              <Accordion
                items={[
                  {
                    id: "nr35-aplicacao",
                    title: "A NR-35 se aplica a todo uso de plataforma elevatoria?",
                    content: "A aplicabilidade dos requisitos depende das caracteristicas da atividade e deve ser avaliada de acordo com a regulamentacao vigente.",
                  },
                  {
                    id: "nr35-locacao",
                    title: "Alugar uma plataforma significa que a operacao esta automaticamente adequada a NR-35?",
                    content: "Nao. O equipamento e apenas um dos elementos envolvidos no planejamento e execucao do trabalho.",
                  },
                  {
                    id: "nr35-treinamento",
                    title: "Treinamento de operador substitui treinamento de NR-35?",
                    content: "Os treinamentos possuem objetivos e escopos diferentes e nao devem ser tratados automaticamente como equivalentes.",
                  },
                  {
                    id: "nr35-documentacao",
                    title: "A Accesslift disponibiliza informacoes tecnicas dos equipamentos?",
                    content: "Sim. As paginas dos modelos apresentam especificacoes e podem disponibilizar ficha tecnica e manual quando a documentacao correspondente estiver validada.",
                  },
                ]}
              />
            </div>
          </section>
        </>
      )}
      {page.path === "/area-de-atendimento/" && (
        <ValueSection
          title="Sao Paulo + raio de ate 150 km"
          description="Esta pagina comunica apenas a area estrutural definida no blueprint. Nao foram criadas paginas por cidade ou bairro."
        />
      )}
      {page.referenceLink && (
        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
          <a
            href={page.referenceLink.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-4 text-sm font-extrabold text-slate-800 transition hover:bg-slate-50"
          >
            {page.referenceLink.label}
          </a>
        </section>
      )}
      <FinalConversionSection
        title={page.path === "/seguranca-e-nr35/" ? "Precisa definir uma plataforma para seu trabalho em altura?" : "Precisa de uma plataforma elevatoria?"}
        description={page.path === "/seguranca-e-nr35/" ? "Informe as caracteristicas da operacao para consultar os equipamentos disponiveis." : "Conte para a Accesslift onde sera realizado o trabalho, a altura aproximada e o periodo de utilizacao."}
        primary={{ label: "Solicitar orcamento", href: "/solicite-orcamento/" }}
        secondary={page.path === "/empresa/" ? { label: "Ver equipamentos", href: "/equipamentos/" } : undefined}
      />
    </>
  );
}
