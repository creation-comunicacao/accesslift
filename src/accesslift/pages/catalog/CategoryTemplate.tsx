import { getCategoryBySlug, getEquipmentByCategory, sortEquipment } from "../../catalog/catalog";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { RequestQuoteButton, TalkToSpecialistButton, WhatsAppButton } from "../../components/buttons/CtaButtons";
import { Button } from "../../components/buttons/Button";
import { Accordion } from "../../components/ui/Accordion";
import { heroImages } from "../../data/heroImages";
import type { EquipmentCategorySlug } from "../../types/equipment";

type CategoryTemplateProps = {
  slug: EquipmentCategorySlug;
};

export function CategoryTemplate({ slug }: CategoryTemplateProps) {
  const category = getCategoryBySlug(slug);
  const equipments = sortEquipment(getEquipmentByCategory(slug), "brand-asc");

  if (!category) {
    return null;
  }

  if (slug === "plataformas-tesoura") {
    const heroImage = heroImages.tesoura;
    const useCases = [
      "Elevação vertical",
      "Estabilidade durante a operação",
      "Boa área de trabalho",
      "Espaço para operador, ferramentas e materiais",
    ];
    const choiceItems = [
      {
        title: "Altura de trabalho",
        description: "Verificar a altura necessária para alcançar o ponto onde o serviço será executado.",
      },
      {
        title: "Capacidade da plataforma",
        description: "Considerar operador, ferramentas e materiais que serão elevados.",
      },
      {
        title: "Dimensões da plataforma",
        description: "Avaliar o espaço necessário para a execução do trabalho.",
      },
      {
        title: "Espaço e acesso disponíveis",
        description: "Considerar portas, corredores, áreas de circulação e espaço para posicionamento do equipamento.",
      },
      {
        title: "Condição do piso",
        description: "Verificar as características da superfície onde a plataforma será utilizada.",
      },
    ];
    const faq = [
      {
        question: "O que é uma plataforma tesoura?",
        answer:
          "É uma plataforma de trabalho aéreo destinada principalmente à elevação vertical de pessoas, ferramentas e materiais.",
      },
      {
        question: "Quando utilizar uma plataforma tesoura?",
        answer:
          "Ela é indicada quando o ponto de trabalho está predominantemente acima da base do equipamento e a operação exige estabilidade e área de trabalho.",
      },
      {
        question: "Qual altura uma plataforma tesoura pode alcançar?",
        answer:
          "A altura varia de acordo com o modelo. Consulte as especificações dos equipamentos disponíveis para comparar a opção adequada.",
      },
      {
        question: "Existem plataformas tesoura elétricas?",
        answer:
          "Sim. A frota cadastrada da AccessLift inclui modelos de plataforma tesoura com alimentação elétrica.",
      },
      {
        question: "Como solicitar a locação de uma plataforma tesoura?",
        answer:
          "Solicite um orçamento ou fale pelo WhatsApp para que a equipe AccessLift avalie período, local e características da operação.",
      },
    ];
    const scissorWhatsAppMessage =
      "Olá! Estou no site da AccessLift e gostaria de informações sobre locação de plataformas tesoura.";

    return (
      <>
        <section className="relative isolate overflow-hidden bg-[#0b2d4d] text-white">
          <img {...heroImage} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden />
          <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
            <div>
              <span className="section-eyebrow !text-white">Plataforma Tesoura</span>
              <h1 className="mt-5 max-w-3xl text-white">Plataformas Elevatórias Tesoura</h1>
              <p className="mt-4 max-w-2xl text-lg text-white">
                Plataformas tesoura para trabalhos que exigem elevação predominantemente vertical, estabilidade e área de trabalho para operador, ferramentas e materiais.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <RequestQuoteButton label="Solicite seu orçamento" />
                <WhatsAppButton label="Falar pelo WhatsApp" message={scissorWhatsAppMessage} />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <span className="section-eyebrow">Quando utilizar</span>
          <h2 className="mt-4 text-slate-950">Quando utilizar uma plataforma tesoura?</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="max-w-3xl space-y-4 text-slate-600">
              <p>
                A plataforma tesoura é indicada principalmente para trabalhos que exigem elevação vertical, oferecendo estabilidade e uma área de trabalho adequada para o operador, ferramentas e materiais.
              </p>
              <p>
                É uma solução utilizada em diferentes atividades de manutenção, instalações, obras e operações industriais, especialmente quando o ponto de trabalho está localizado predominantemente acima da base do equipamento.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <span key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="modelos" className="bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="section-eyebrow">
                  {equipments.length} equipamento{equipments.length === 1 ? "" : "s"}
                </span>
                <h2 className="mt-4 text-slate-950">Modelos de plataformas tesoura disponíveis</h2>
                <p className="mt-2 max-w-3xl text-slate-600">
                  Equipamentos da categoria Plataforma Tesoura disponíveis na frota AccessLift, com as principais informações para comparação.
                </p>
              </div>
              <Button href="/equipamentos/" variant="secondary">
                Ver todos os equipamentos
              </Button>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {equipments.map((equipment) => (
                <EquipmentCard
                  key={equipment.id}
                  equipment={equipment}
                  quoteLabel="Solicitar cotação"
                  quoteWhatsappMessage={`Olá! Vi a plataforma ${equipment.brand} ${equipment.model} no site da AccessLift e gostaria de consultar disponibilidade e solicitar uma cotação.`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <span className="section-eyebrow">Escolha do equipamento</span>
          <h2 className="mt-4 text-slate-950">Como escolher uma plataforma tesoura?</h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            A escolha do equipamento deve considerar as características do trabalho e do ambiente onde a plataforma será utilizada.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {choiceItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                <h3 className="text-base text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
            <h3 className="text-xl text-slate-950">Precisa de ajuda para escolher?</h3>
            <p className="mt-2 max-w-3xl text-slate-600">
              A equipe AccessLift pode auxiliar na identificação do modelo mais adequado às características da sua operação.
            </p>
            <TalkToSpecialistButton className="mt-5" label="Fale com um especialista" />
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="section-eyebrow">Comparativo</span>
              <h2 className="mt-4 text-slate-950">Tesoura ou articulada?</h2>
              <div className="mt-4 max-w-3xl space-y-4 text-slate-600">
                <p>Se o trabalho exige principalmente elevação vertical, a plataforma tesoura tende a ser a opção mais adequada.</p>
                <p>
                  Quando, além da altura, é necessário alcance horizontal ou acesso a pontos com obstáculos, uma plataforma articulada pode ser mais indicada.
                </p>
              </div>
            </div>
            <Button href="/plataformas-articuladas/" variant="secondary" className="w-fit lg:col-start-1">
              Conhecer plataformas articuladas
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="mt-4 text-slate-950">Dúvidas sobre plataformas tesoura</h2>
          <div className="mt-6">
            <Accordion
              items={faq.map((item, index) => ({
                id: `plataformas-tesoura-faq-${index}`,
                title: item.question,
                content: item.answer,
              }))}
            />
          </div>
        </section>

        <section className="bg-slate-950 py-12 text-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
            <div>
              <span className="section-eyebrow text-white">Locação</span>
              <h2 className="mt-4 text-white">Encontre a plataforma tesoura adequada à sua operação</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Locação diária, semanal ou mensal, com suporte da equipe AccessLift para ajudar na escolha do equipamento adequado ao seu trabalho.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <RequestQuoteButton label="Solicite seu orçamento" />
              <WhatsAppButton label="Falar pelo WhatsApp" message={scissorWhatsAppMessage} />
            </div>
          </div>
        </section>
      </>
    );
  }

  const heroImage = heroImages.articuladas;
  const useCases = [
    "Elevação em altura",
    "Alcance horizontal",
    "Acesso sobre obstáculos",
    "Flexibilidade de posicionamento",
  ];
  const choiceItems = [
    {
      title: "Altura de trabalho",
      description: "Verificar a altura necessária para alcançar o ponto onde o serviço será executado.",
    },
    {
      title: "Alcance horizontal",
      description: "Considerar a distância horizontal necessária entre o posicionamento do equipamento e o ponto de trabalho.",
    },
    {
      title: "Obstáculos e acesso",
      description: "Avaliar estruturas, equipamentos ou outros elementos que possam existir entre a plataforma e o local que precisa ser alcançado.",
    },
    {
      title: "Espaço para posicionamento e manobra",
      description: "Considerar as dimensões disponíveis para posicionamento e movimentação segura do equipamento.",
    },
    {
      title: "Capacidade da plataforma",
      description: "Considerar operador, ferramentas e materiais necessários durante o trabalho.",
    },
  ];
  const faq = [
    {
      question: "O que é uma plataforma articulada?",
      answer:
        "É uma plataforma de trabalho aéreo que combina elevação em altura e alcance horizontal por meio de um braço articulado.",
    },
    {
      question: "Quando utilizar uma plataforma articulada?",
      answer:
        "Ela é indicada quando o trabalho exige altura, alcance horizontal ou acesso sobre ou ao redor de obstáculos.",
    },
    {
      question: "Qual a diferença entre plataforma articulada e plataforma tesoura?",
      answer:
        "A articulada oferece maior flexibilidade de alcance vertical e horizontal. A tesoura é indicada principalmente para elevação vertical.",
    },
    {
      question: "Existem plataformas articuladas elétricas?",
      answer:
        "Sim. A frota cadastrada da AccessLift inclui modelos de plataforma articulada com alimentação elétrica.",
    },
    {
      question: "Como solicitar a locação de uma plataforma articulada?",
      answer:
        "Solicite um orçamento ou entre em contato com a equipe AccessLift para avaliar modelo, período e condições da operação.",
    },
  ];
  const articulatedWhatsAppMessage =
    "Olá! Estou no site da AccessLift e gostaria de informações sobre locação de plataformas articuladas.";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#0b2d4d] text-white">
        <img {...heroImage} className="absolute inset-0 -z-20 h-full w-full object-cover" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div>
            <span className="section-eyebrow !text-white">Plataforma Articulada</span>
            <h1 className="mt-5 max-w-3xl text-white">Plataformas Elevatórias Articuladas</h1>
            <p className="mt-4 max-w-2xl text-lg text-white">
              Plataformas articuladas para trabalhos em altura que exigem alcance vertical e horizontal, oferecendo maior flexibilidade para acessar pontos sobre ou ao redor de obstáculos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <RequestQuoteButton label="Solicite seu orçamento" />
              <WhatsAppButton label="Falar pelo WhatsApp" message={articulatedWhatsAppMessage} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <span className="section-eyebrow">Altura e alcance para acessar pontos de trabalho</span>
        <h2 className="mt-4 text-slate-950">Quando utilizar uma plataforma articulada?</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <div className="max-w-3xl space-y-4 text-slate-600">
            <p>
              A plataforma articulada é indicada para trabalhos em altura que, além da elevação vertical, exigem alcance horizontal ou acesso a pontos localizados sobre ou ao redor de obstáculos.
            </p>
            <p>
              A movimentação do braço articulado proporciona maior flexibilidade de posicionamento, permitindo alcançar áreas onde uma elevação predominantemente vertical pode não ser suficiente.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((item) => (
              <span key={item} className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="modelos" className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">
                {equipments.length} equipamento{equipments.length === 1 ? "" : "s"}
              </span>
              <h2 className="mt-4 text-slate-950">Modelos de plataformas articuladas disponíveis</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                Equipamentos da categoria Plataforma Articulada disponíveis na frota AccessLift, com as principais informações para comparação.
              </p>
            </div>
            <Button href="/equipamentos/" variant="secondary">
              Ver todos os equipamentos
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {equipments.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
                quoteLabel="Solicitar cotação"
                quoteWhatsappMessage={`Olá! Vi a plataforma ${equipment.brand} ${equipment.model} no site da AccessLift e gostaria de consultar disponibilidade e solicitar uma cotação.`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <span className="section-eyebrow">Escolha do equipamento</span>
        <h2 className="mt-4 text-slate-950">Como escolher uma plataforma articulada?</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          A escolha do equipamento deve considerar não apenas a altura necessária, mas também a forma como o ponto de trabalho precisa ser alcançado e as condições do local de operação.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {choiceItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
              <h3 className="text-base text-slate-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 md:p-6">
          <h3 className="text-xl text-slate-950">Precisa de ajuda para escolher?</h3>
          <p className="mt-2 max-w-3xl text-slate-600">
            A equipe AccessLift pode auxiliar na identificação do modelo mais adequado às características da sua operação.
          </p>
          <TalkToSpecialistButton className="mt-5" label="Fale com um especialista" />
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="section-eyebrow">Comparativo</span>
            <h2 className="mt-4 text-slate-950">Articulada ou tesoura?</h2>
            <div className="mt-4 max-w-3xl space-y-4 text-slate-600">
              <p>
                Quando o trabalho exige altura combinada com alcance horizontal ou acesso sobre obstáculos, a plataforma articulada tende a ser a opção mais adequada.
              </p>
              <p>Para operações que exigem principalmente elevação vertical, uma plataforma tesoura pode ser suficiente.</p>
            </div>
          </div>
          <Button href="/plataformas-tesoura/" variant="secondary" className="w-fit lg:col-start-1 !border-[#0b2d4d] !bg-[#0b2d4d] !text-white hover:!border-[#09243d] hover:!bg-[#09243d] hover:!text-white">
            Conhecer plataformas tesoura
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <span className="section-eyebrow">FAQ</span>
        <h2 className="mt-4 text-slate-950">Dúvidas sobre plataformas articuladas</h2>
        <div className="mt-6">
          <Accordion
            items={faq.map((item, index) => ({
              id: `plataformas-articuladas-faq-${index}`,
              title: item.question,
              content: item.answer,
            }))}
          />
        </div>
      </section>

      <section className="bg-slate-950 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1fr_auto] md:items-center md:px-6">
          <div>
            <span className="section-eyebrow text-white">Locação</span>
            <h2 className="mt-4 text-white">Encontre a plataforma articulada adequada à sua operação</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Locação diária, semanal ou mensal, com suporte da equipe AccessLift para ajudar na escolha do equipamento adequado ao seu trabalho.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <RequestQuoteButton label="Solicite seu orçamento" />
            <WhatsAppButton label="Falar pelo WhatsApp" message={articulatedWhatsAppMessage} />
          </div>
        </div>
      </section>
    </>
  );
}
