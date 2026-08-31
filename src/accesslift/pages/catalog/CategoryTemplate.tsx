import { getCategoryBySlug, getEquipmentByCategory, sortEquipment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton } from "../../components/buttons/CtaButtons";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { Accordion } from "../../components/ui/Accordion";
import { categoryGalleryBySlug } from "../../data/officialMedia";
import type { EquipmentCategorySlug } from "../../types/equipment";

type CategoryTemplateProps = {
  slug: EquipmentCategorySlug;
};

type CategoryContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  introTitle: string;
  intro: string;
  introComplement: string;
  modelsTitle: string;
  bestFor: string[];
  choiceTitle: string;
  choiceItems: Array<{ title: string; description: string }>;
  applications?: string[];
  counterpartTitle: string;
  counterpartDescription: string;
  counterpartHref: string;
  counterpartLabel: string;
  rentalTitle: string;
  rentalDescription: string;
  faq: Array<{ question: string; answer: string }>;
  finalTitle: string;
  finalDescription: string;
};

const categoryContent: Record<EquipmentCategorySlug, CategoryContent> = {
  "plataformas-tesoura": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Elevatorias Tesoura",
    description:
      "Solucoes para trabalhos que exigem elevacao predominantemente vertical, com diferentes opcoes de altura, dimensoes e capacidade.",
    primaryCta: { label: "Ver modelos disponiveis", href: "#modelos" },
    introTitle: "Quando utilizar uma plataforma tesoura?",
    intro:
      "A plataforma tesoura realiza a elevacao da area de trabalho predominantemente na vertical. Essa caracteristica torna o equipamento adequado para atividades em que o ponto de execucao esta acima da posicao da maquina e nao exige grande alcance horizontal.",
    introComplement:
      "Pode ser utilizada em diferentes atividades de manutencao, instalacoes, montagens, construcao e operacoes industriais e comerciais, sempre considerando as caracteristicas do equipamento e do local.",
    modelsTitle: "Modelos de plataformas tesoura disponiveis",
    bestFor: ["Trabalhos verticais", "Espaco adequado para posicionamento", "Manutencao, instalacao, montagem e construcao"],
    choiceTitle: "Como escolher uma plataforma tesoura?",
    choiceItems: [
      { title: "Altura de trabalho", description: "O equipamento deve atender a altura necessaria para execucao da atividade." },
      { title: "Dimensoes", description: "Largura, comprimento e altura recolhida sao relevantes quando existem corredores, portas ou acessos limitados." },
      { title: "Capacidade", description: "Considere o numero de operadores e os materiais e ferramentas necessarios para a atividade." },
      { title: "Area da plataforma", description: "As dimensoes da plataforma podem ser importantes quando a atividade exige movimentacao do operador ou transporte de materiais." },
      { title: "Condicoes da operacao", description: "O ambiente e as caracteristicas do piso e dos acessos devem ser avaliados antes da escolha." },
    ],
    counterpartTitle: "Quando considerar uma plataforma articulada?",
    counterpartDescription:
      "Se o ponto de trabalho nao estiver diretamente acima da posicao do equipamento ou houver obstaculos que precisem ser contornados, uma plataforma articulada pode ser mais adequada. A principal diferenca esta no tipo de movimentacao: a tesoura prioriza elevacao vertical, enquanto a articulada acrescenta alcance horizontal.",
    counterpartHref: "/plataformas-articuladas/",
    counterpartLabel: "Ver plataformas articuladas",
    rentalTitle: "Locacao de plataforma tesoura",
    rentalDescription:
      "A Accesslift disponibiliza plataformas tesoura para locacoes diarias, semanais e mensais, com entrega e retirada proprias e suporte tecnico durante a operacao. Nao sabe qual modelo escolher? Informe a altura aproximada, cidade e caracteristicas do trabalho para que nossa equipe possa auxiliar.",
    faq: [
      {
        question: "Para que serve uma plataforma tesoura?",
        answer: "E utilizada para trabalhos em altura que exigem principalmente elevacao vertical, em atividades como manutencao, instalacoes, montagens e diferentes operacoes industriais, comerciais e de construcao.",
      },
      {
        question: "Qual a diferenca entre plataforma tesoura e articulada?",
        answer: "A tesoura realiza movimentacao predominantemente vertical. A articulada acrescenta alcance horizontal e permite acessar pontos sobre ou ao redor de obstaculos.",
      },
      {
        question: "Como saber a altura da plataforma que preciso?",
        answer: "E necessario considerar a altura do ponto onde o trabalho sera executado e as especificacoes de altura de trabalho de cada modelo.",
      },
      {
        question: "Posso alugar uma plataforma tesoura por apenas um dia?",
        answer: "A Accesslift trabalha com locacoes diarias, semanais e mensais, conforme disponibilidade e condicoes da operacao.",
      },
      {
        question: "A Accesslift entrega a plataforma?",
        answer: "Sim. A empresa possui entrega e retirada proprias dentro da sua area de atendimento.",
      },
    ],
    finalTitle: "Encontre a plataforma tesoura para sua operacao",
    finalDescription: "Compare os modelos disponiveis ou fale com nossa equipe.",
  },
  "plataformas-articuladas": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Elevatorias Articuladas",
    description:
      "Equipamentos para trabalhos em altura que exigem alcance vertical e horizontal, oferecendo maior flexibilidade para acessar pontos sobre ou ao redor de obstaculos.",
    primaryCta: { label: "Ver modelos disponiveis", href: "#modelos" },
    introTitle: "Altura e alcance para acessar pontos de trabalho",
    intro:
      "Nem todo trabalho em altura pode ser alcancado posicionando o equipamento diretamente abaixo do ponto de execucao. A plataforma articulada utiliza secoes articuladas para combinar elevacao e alcance horizontal, permitindo posicionar o operador em locais que exigem maior flexibilidade de acesso.",
    introComplement:
      "Essa caracteristica torna a categoria especialmente util quando existem estruturas, equipamentos, instalacoes ou outros obstaculos entre a base da plataforma e o ponto de trabalho.",
    modelsTitle: "Modelos de plataformas articuladas disponiveis",
    bestFor: ["Altura com alcance horizontal", "Acesso sobre ou ao redor de obstaculos", "Trabalhos industriais, comerciais e de infraestrutura"],
    choiceTitle: "O que considerar ao escolher uma plataforma articulada?",
    choiceItems: [
      { title: "Altura de trabalho", description: "Determine a altura necessaria para chegar ao ponto onde a atividade sera executada." },
      { title: "Alcance horizontal", description: "E uma das especificacoes mais importantes nessa categoria e indica ate onde o equipamento pode alcancar lateralmente." },
      { title: "Obstaculos", description: "Estruturas, instalacoes e equipamentos existentes no caminho influenciam a escolha e o posicionamento da plataforma." },
      { title: "Espaco para posicionamento e manobra", description: "Dimensoes do equipamento e caracteristicas do local devem ser consideradas." },
      { title: "Capacidade", description: "Considere operadores, ferramentas e materiais necessarios para realizar a atividade." },
    ],
    applications: [
      "manutencao de instalacoes e estruturas",
      "trabalhos industriais",
      "instalacoes eletricas e infraestrutura",
      "montagens",
      "intervencoes em fachadas e estruturas",
      "trabalhos em areas comerciais e logisticas",
      "atividades de construcao",
    ],
    counterpartTitle: "Quando uma plataforma tesoura pode ser suficiente?",
    counterpartDescription:
      "Se o trabalho exige principalmente elevacao vertical e o equipamento pode ser posicionado diretamente abaixo da area de execucao, uma plataforma tesoura pode atender melhor a necessidade. Quando ha necessidade de alcance horizontal ou de superar obstaculos, a plataforma articulada ganha vantagem.",
    counterpartHref: "/plataformas-tesoura/",
    counterpartLabel: "Ver plataformas tesoura",
    rentalTitle: "Locacao de plataforma articulada",
    rentalDescription:
      "A Accesslift disponibiliza plataformas articuladas para locacoes diarias, semanais e mensais, com entrega e retirada proprias e suporte tecnico durante a operacao. Caso ainda nao saiba qual modelo utilizar, informe a altura aproximada e as caracteristicas do acesso ao ponto de trabalho.",
    faq: [
      {
        question: "Para que serve uma plataforma articulada?",
        answer: "E utilizada em trabalhos em altura que, alem da elevacao, exigem alcance horizontal ou acesso sobre e ao redor de obstaculos.",
      },
      {
        question: "Qual a diferenca entre plataforma articulada e tesoura?",
        answer: "A plataforma tesoura prioriza movimentacao vertical. A articulada combina altura e alcance horizontal.",
      },
      {
        question: "O que significa alcance horizontal?",
        answer: "E a capacidade de a plataforma alcancar lateralmente um ponto de trabalho em relacao a posicao do equipamento, dentro das especificacoes e condicoes definidas pelo fabricante.",
      },
      {
        question: "Como escolher o modelo adequado?",
        answer: "Altura, alcance horizontal, capacidade, espaco para posicionamento e caracteristicas do local estao entre os fatores que precisam ser considerados.",
      },
      {
        question: "A Accesslift trabalha com locacao diaria?",
        answer: "Sim. A empresa disponibiliza locacoes diarias, semanais e mensais, conforme disponibilidade e condicoes da operacao.",
      },
    ],
    finalTitle: "Precisa alcancar um ponto de dificil acesso?",
    finalDescription: "Compare as plataformas articuladas disponiveis ou fale com a Accesslift para identificar as opcoes adequadas a sua operacao.",
  },
};

export function CategoryTemplate({ slug }: CategoryTemplateProps) {
  const category = getCategoryBySlug(slug);
  const content = categoryContent[slug];
  const equipments = sortEquipment(getEquipmentByCategory(slug), "brand-asc");

  if (!category) {
    return null;
  }

  return (
    <>
      <section className="industrial-grid border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <Badge tone="lime">{content.eyebrow}</Badge>
            <h1 className="mt-5 text-slate-950">{content.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-600">{content.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
              <Button href="/solicite-orcamento/" variant="secondary">
                Solicitar orcamento
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
            <h2 className="text-xl font-black text-slate-950">Aplicacoes comuns</h2>
            <ul className="mt-4 grid gap-3 text-sm font-semibold text-slate-600">
              {content.bestFor.map((item) => (
                <li key={item} className="rounded-md bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              <RequestQuoteButton />
              <TalkToSpecialistButton />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <Badge tone="steel">Contexto</Badge>
        <h2 className="mt-4 text-slate-950">{content.introTitle}</h2>
        <div className="mt-4 grid gap-4 text-slate-600 lg:grid-cols-2">
          <p>{content.intro}</p>
          <p>{content.introComplement}</p>
        </div>
      </section>

      <section id="modelos" className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="steel">
              {equipments.length} equipamento{equipments.length === 1 ? "" : "s"}
            </Badge>
            <h2 className="mt-4 text-slate-950">{content.modelsTitle}</h2>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              Grade dinamica alimentada pelo cadastro central de equipamentos, sem transformar filtros de altura, marca ou eletrica em paginas indexaveis.
            </p>
          </div>
          <CheckAvailabilityButton />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {equipments.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
          <Button href="/locacao-de-plataformas-elevatorias/" variant="secondary">
            Ver opcoes de locacao
          </Button>
          <Button href="/segmentos-e-aplicacoes/" variant="ghost">
            Ver aplicacoes
          </Button>
          <Button href="/equipamentos/" variant="ghost">
            Ver todos os equipamentos
          </Button>
          <Button href={content.counterpartHref} variant="ghost">
            {content.counterpartLabel}
          </Button>
        </div>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-black text-slate-950">{content.choiceTitle}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {content.choiceItems.map((item) => (
              <article key={item.title} className="rounded-md bg-white p-4">
                <h3 className="text-base text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.applications && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <Badge tone="lime">Aplicacoes</Badge>
            <h2 className="mt-4 text-slate-950">Onde uma plataforma articulada pode ser utilizada?</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Dependendo do modelo e das condicoes do local, plataformas articuladas podem atender atividades como:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.applications.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm text-slate-600">
              A indicacao final do equipamento deve considerar as caracteristicas especificas da operacao.
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <Badge tone="steel">Comparacao</Badge>
            <h2 className="mt-4 text-slate-950">{content.counterpartTitle}</h2>
            <p className="mt-3 text-slate-600">{content.counterpartDescription}</p>
            <Button href={content.counterpartHref} variant="secondary" className="mt-5">
              {content.counterpartLabel}
            </Button>
          </article>
          <article className="rounded-lg border border-slate-200 bg-white p-6 soft-shadow">
            <Badge tone="lime">Locacao</Badge>
            <h2 className="mt-4 text-slate-950">{content.rentalTitle}</h2>
            <p className="mt-3 text-slate-600">{content.rentalDescription}</p>
            <RequestQuoteButton className="mt-5" />
          </article>
        </div>
      </section>

      <OfficialMediaGallery
        title={slug === "plataformas-tesoura" ? "Plataformas tesoura da frota" : "Plataformas articuladas da frota"}
        description="Imagens sem identificacao legivel de modelo permanecem na categoria e nao sao usadas como foto de um equipamento especifico."
        images={categoryGalleryBySlug[slug]}
      />

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge tone="lime">FAQ</Badge>
          <h2 className="mt-4 text-slate-950">
            {slug === "plataformas-tesoura" ? "Duvidas sobre plataformas tesoura" : "Duvidas sobre plataformas articuladas"}
          </h2>
          <div className="mt-6">
            <Accordion
              items={content.faq.map((item, index) => ({
                id: `${slug}-faq-${index}`,
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <h2 className="text-white">{content.finalTitle}</h2>
            <p className="mt-3 max-w-2xl text-slate-300">{content.finalDescription}</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <Button href="/equipamentos/">Ver equipamentos</Button>
            <RequestQuoteButton />
          </div>
        </div>
      </section>
    </>
  );
}
