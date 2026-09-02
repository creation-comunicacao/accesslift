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
    title: "Plataformas Elevatórias Tesoura",
    description:
      "Soluções para trabalhos que exigem elevação predominantemente vertical, com diferentes opções de altura, dimensões e capacidade.",
    primaryCta: { label: "Ver modelos disponíveis", href: "#modelos" },
    introTitle: "Quando utilizar uma plataforma tesoura?",
    intro:
      "A plataforma tesoura realiza a elevação da área de trabalho predominantemente na vertical. Essa característica torna o equipamento adequado para atividades em que o ponto de execução está acima da posição da máquina e não exige grande alcance horizontal.",
    introComplement:
      "Pode ser utilizada em diferentes atividades de manutenção, instalações, montagens, construção e operações industriais e comerciais, sempre considerando as características do equipamento e do local.",
    modelsTitle: "Modelos de plataformas tesoura disponíveis",
    bestFor: ["Trabalhos verticais", "Espaço adequado para posicionamento", "Manutenção, instalação, montagem e construção"],
    choiceTitle: "Como escolher uma plataforma tesoura?",
    choiceItems: [
      { title: "Altura de trabalho", description: "O equipamento deve atender a altura necessária para execução da atividade." },
      { title: "Dimensões", description: "Largura, comprimento e altura recolhida são relevantes quando existem corredores, portas ou acessos limitados." },
      { title: "Capacidade", description: "Considere o número de operadores e os materiais e ferramentas necessários para a atividade." },
      { title: "Área da plataforma", description: "As dimensões da plataforma podem ser importantes quando a atividade exige movimentação do operador ou transporte de materiais." },
      { title: "Condições da operação", description: "O ambiente e as características do piso e dos acessos devem ser avaliados antes da escolha." },
    ],
    counterpartTitle: "Quando considerar uma plataforma articulada?",
    counterpartDescription:
      "Se o ponto de trabalho não estiver diretamente acima da posição do equipamento ou houver obstáculos que precisem ser contornados, uma plataforma articulada pode ser mais adequada. A principal diferença está no tipo de movimentação: a tesoura prioriza elevação vertical, enquanto a articulada acrescenta alcance horizontal.",
    counterpartHref: "/plataformas-articuladas/",
    counterpartLabel: "Ver plataformas articuladas",
    rentalTitle: "Locação de plataforma tesoura",
    rentalDescription:
      "A Accesslift disponibiliza plataformas tesoura para locações diárias, semanais e mensais, com entrega e retirada próprias e suporte técnico durante a operação. Não sabe qual modelo escolher? Informe a altura aproximada, cidade e características do trabalho para que nossa equipe possa auxiliar.",
    faq: [
      {
        question: "Para que serve uma plataforma tesoura?",
        answer: "É utilizada para trabalhos em altura que exigem principalmente elevação vertical, em atividades como manutenção, instalações, montagens e diferentes operações industriais, comerciais e de construção.",
      },
      {
        question: "Qual a diferença entre plataforma tesoura e articulada?",
        answer: "A tesoura realiza movimentação predominantemente vertical. A articulada acrescenta alcance horizontal e permite acessar pontos sobre ou ao redor de obstáculos.",
      },
      {
        question: "Como saber a altura da plataforma que preciso?",
        answer: "É necessário considerar a altura do ponto onde o trabalho será executado e as especificações de altura de trabalho de cada modelo.",
      },
      {
        question: "Posso alugar uma plataforma tesoura por apenas um dia?",
        answer: "A Accesslift trabalha com locações diárias, semanais e mensais, conforme disponibilidade e condições da operação.",
      },
      {
        question: "A Accesslift entrega a plataforma?",
        answer: "Sim. A empresa possui entrega e retirada próprias dentro da sua área de atendimento.",
      },
    ],
    finalTitle: "Encontre a plataforma tesoura para sua operação",
    finalDescription: "Compare os modelos disponíveis ou fale com nossa equipe.",
  },
  "plataformas-articuladas": {
    eyebrow: "Categoria SEO",
    title: "Plataformas Elevatórias Articuladas",
    description:
      "Equipamentos para trabalhos em altura que exigem alcance vertical e horizontal, oferecendo maior flexibilidade para acessar pontos sobre ou ao redor de obstáculos.",
    primaryCta: { label: "Ver modelos disponíveis", href: "#modelos" },
    introTitle: "Altura e alcance para acessar pontos de trabalho",
    intro:
      "Nem todo trabalho em altura pode ser alcançado posicionando o equipamento diretamente abaixo do ponto de execução. A plataforma articulada utiliza seções articuladas para combinar elevação e alcance horizontal, permitindo posicionar o operador em locais que exigem maior flexibilidade de acesso.",
    introComplement:
      "Essa característica torna a categoria especialmente útil quando existem estruturas, equipamentos, instalações ou outros obstáculos entre a base da plataforma e o ponto de trabalho.",
    modelsTitle: "Modelos de plataformas articuladas disponíveis",
    bestFor: ["Altura com alcance horizontal", "Acesso sobre ou ao redor de obstáculos", "Trabalhos industriais, comerciais e de infraestrutura"],
    choiceTitle: "O que considerar ao escolher uma plataforma articulada?",
    choiceItems: [
      { title: "Altura de trabalho", description: "Determine a altura necessária para chegar ao ponto onde a atividade será executada." },
      { title: "Alcance horizontal", description: "É uma das especificações mais importantes nessa categoria e indica até onde o equipamento pode alcançar lateralmente." },
      { title: "Obstáculos", description: "Estruturas, instalações e equipamentos existentes no caminho influenciam a escolha e o posicionamento da plataforma." },
      { title: "Espaço para posicionamento e manobra", description: "Dimensões do equipamento e características do local devem ser consideradas." },
      { title: "Capacidade", description: "Considere operadores, ferramentas e materiais necessários para realizar a atividade." },
    ],
    applications: [
      "manutenção de instalações e estruturas",
      "trabalhos industriais",
      "instalações elétricas e infraestrutura",
      "montagens",
      "intervenções em fachadas e estruturas",
      "trabalhos em áreas comerciais e logisticas",
      "atividades de construção",
    ],
    counterpartTitle: "Quando uma plataforma tesoura pode ser suficiente?",
    counterpartDescription:
      "Se o trabalho exige principalmente elevação vertical e o equipamento pode ser posicionado diretamente abaixo da área de execução, uma plataforma tesoura pode atender melhor a necessidade. Quando há necessidade de alcance horizontal ou de superar obstáculos, a plataforma articulada ganha vantagem.",
    counterpartHref: "/plataformas-tesoura/",
    counterpartLabel: "Ver plataformas tesoura",
    rentalTitle: "Locação de plataforma articulada",
    rentalDescription:
      "A Accesslift disponibiliza plataformas articuladas para locações diárias, semanais e mensais, com entrega e retirada próprias e suporte técnico durante a operação. Caso ainda não saiba qual modelo utilizar, informe a altura aproximada e as características do acesso ao ponto de trabalho.",
    faq: [
      {
        question: "Para que serve uma plataforma articulada?",
        answer: "É utilizada em trabalhos em altura que, além da elevação, exigem alcance horizontal ou acesso sobre e ao redor de obstáculos.",
      },
      {
        question: "Qual a diferença entre plataforma articulada e tesoura?",
        answer: "A plataforma tesoura prioriza movimentação vertical. A articulada combina altura e alcance horizontal.",
      },
      {
        question: "O que significa alcance horizontal?",
        answer: "É a capacidade de a plataforma alcançar lateralmente um ponto de trabalho em relação à posição do equipamento, dentro das especificações e condições definidas pelo fabricante.",
      },
      {
        question: "Como escolher o modelo adequado?",
        answer: "Altura, alcance horizontal, capacidade, espaço para posicionamento e características do local estão entre os fatores que precisam ser considerados.",
      },
      {
        question: "A Accesslift trabalha com locação diária?",
        answer: "Sim. A empresa disponibiliza locações diárias, semanais e mensais, conforme disponibilidade e condições da operação.",
      },
    ],
    finalTitle: "Precisa alcançar um ponto de difícil acesso?",
    finalDescription: "Compare as plataformas articuladas disponíveis ou fale com a Accesslift para identificar as opções adequadas a sua operação.",
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
                Solicitar orçamento
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 premium-shadow">
            <h2 className="text-xl font-black text-slate-950">Aplicações comuns</h2>
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
              Grade dinâmica alimentada pelo cadastro central de equipamentos, sem transformar filtros de altura, marca ou elétrica em páginas indexáveis.
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
            Ver opções de locação
          </Button>
          <Button href="/segmentos-e-aplicacoes/" variant="ghost">
            Ver aplicações
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
            <Badge tone="lime">Aplicações</Badge>
            <h2 className="mt-4 text-slate-950">Onde uma plataforma articulada pode ser utilizada?</h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Dependendo do modelo e das condições do local, plataformas articuladas podem atender atividades como:
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {content.applications.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm text-slate-600">
              A indicação final do equipamento deve considerar as características específicas da operação.
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
            <Badge tone="lime">Locação</Badge>
            <h2 className="mt-4 text-slate-950">{content.rentalTitle}</h2>
            <p className="mt-3 text-slate-600">{content.rentalDescription}</p>
            <RequestQuoteButton className="mt-5" />
          </article>
        </div>
      </section>

      <OfficialMediaGallery
        title={slug === "plataformas-tesoura" ? "Plataformas tesoura da frota" : "Plataformas articuladas da frota"}
        description="Imagens sem identificação legivel de modelo permanecem na categoria e não são usadas como foto de um equipamento especifico."
        images={categoryGalleryBySlug[slug]}
      />

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Badge tone="lime">FAQ</Badge>
          <h2 className="mt-4 text-slate-950">
            {slug === "plataformas-tesoura" ? "Dúvidas sobre plataformas tesoura" : "Dúvidas sobre plataformas articuladas"}
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
