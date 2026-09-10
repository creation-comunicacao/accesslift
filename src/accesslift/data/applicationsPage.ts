import type { SegmentPageConfig } from "./pageContent";

export const applicationsWhatsappMessage = "Olá! Estou consultando as aplicações de plataformas elevatórias no site da Accesslift e gostaria de ajuda para identificar o equipamento adequado para minha operação.";
export const applicationsPage: SegmentPageConfig = {
  path: "/segmentos-e-aplicacoes/",
  eyebrow: "Aplicações",
  title: "Plataformas Elevatórias para Diferentes Segmentos e Aplicações",
  description: "Encontre uma solução para diferentes ambientes, atividades, instalações comerciais e outras operações que exigem acesso elevado.",
  context: "", needs: [], solutions: [], applications: [], differentials: [], relatedCategories: [],
  contentSections: [
    { eyebrow: "Escolha", title: "O equipamento deve acompanhar as características do trabalho",
      description: "A definição de uma plataforma depende da atividade, do ambiente, da altura, dos acessos, dos obstáculos, do espaço disponível e das condições do local, e não apenas da altura." },
    { eyebrow: "Segmentos", title: "Aplicações por ambiente", items: [
      { title: "Indústria", description: "Plataformas elevatórias para manutenção, instalações, inspeções e outras atividades realizadas em ambientes industriais.", cta: { label: "Conhecer aplicação", href: "/segmentos/industria/", event: "applications_industry_click" } },
      { title: "Construção Civil", description: "Plataformas elevatórias para diferentes etapas da obra, incluindo instalações, montagens, acabamentos e intervenções em estruturas.", cta: { label: "Conhecer aplicação", href: "/segmentos/construcao-civil/", event: "applications_construction_click" } },
      { title: "Supermercados e Hipermercados", description: "Plataformas elevatórias para manutenção, iluminação, instalações, comunicação visual e intervenções em grandes áreas comerciais.", cta: { label: "Conhecer aplicação", href: "/segmentos/supermercados-e-hipermercados/", event: "applications_retail_click" } },
      { title: "Atacados", description: "Plataformas elevatórias para manutenção, infraestrutura, inspeções, montagens e intervenções em instalações de grande porte.", cta: { label: "Conhecer aplicação", href: "/segmentos/atacados/", event: "applications_wholesale_click" } },
    ] },
    { eyebrow: "Tipo", title: "O tipo de trabalho ajuda a definir a plataforma", items: [
      { title: "Plataforma Tesoura", description: "Indicada principalmente para operações que exigem elevação predominantemente vertical, estabilidade e área de trabalho para operador, ferramentas e materiais.", cta: { label: "Ver plataformas tesoura", href: "/plataformas-tesoura/", event: "applications_scissor_click" } },
      { title: "Plataforma Articulada", description: "Indicada para operações que exigem altura combinada com alcance horizontal, especialmente quando existem obstáculos entre o equipamento e o ponto de trabalho.", cta: { label: "Ver plataformas articuladas", href: "/plataformas-articuladas/", event: "applications_articulated_click" } },
    ] },
    { eyebrow: "Planejamento", title: "Não escolha apenas pela altura",
      description: "Para identificar uma plataforma adequada à operação, considere a altura necessária, o alcance horizontal quando necessário, os acessos ao local, o espaço disponível para posicionamento e movimentação, obstáculos, condições do piso, capacidade necessária e características da atividade.",
      cta: { label: "Falar com um especialista", href: "/contato/", event: "applications_specialist_click" } },
  ],
  faqSchemaEligible: true,
  faq: [
    { question: "Como escolher uma plataforma elevatória para minha aplicação?", answer: "A escolha deve considerar fatores como altura necessária, alcance horizontal, acessos, espaço disponível, obstáculos, condições do piso, capacidade e características da atividade." },
    { question: "Qual a diferença entre plataforma tesoura e articulada?", answer: "A plataforma tesoura é utilizada principalmente quando a necessidade é de elevação predominantemente vertical. A articulada permite combinar altura e alcance horizontal, sendo especialmente útil quando existem obstáculos entre o equipamento e o ponto de trabalho." },
    { question: "A altura é o único fator para escolher uma plataforma?", answer: "Não. Além da altura, é importante considerar as características do ambiente, acessos, espaço para posicionamento e movimentação, obstáculos, piso, capacidade e tipo de atividade." },
    { question: "Não encontrei meu segmento entre as aplicações. A Accesslift pode avaliar minha necessidade?", answer: "Sim. Os segmentos apresentados no site representam algumas das aplicações atendidas. Outras necessidades podem ser avaliadas pela equipe Accesslift de acordo com as características da operação." },
  ],
  finalCta: {
    title: "Não encontrou sua aplicação?",
    description: "Conte para a Accesslift onde o trabalho será realizado, a altura aproximada, os acessos e as características da atividade. Nossa equipe pode ajudar a identificar a plataforma adequada para sua operação.",
    primary: { label: "Solicitar cotação", href: "/solicite-orcamento/?origem=applications", event: "applications_quote_click" },
    secondary: { label: "Falar com um especialista", href: "/contato/", event: "applications_specialist_click" },
  },
  seo: {
    h1: "Plataformas Elevatórias para Diferentes Segmentos e Aplicações",
    title: "Plataformas Elevatórias para Diferentes Aplicações | Accesslift",
    description: "Plataformas elevatórias para indústria, construção civil, supermercados, hipermercados e atacados. Conheça aplicações e encontre o equipamento adequado.",
    canonicalPath: "/segmentos-e-aplicacoes/",
  },
};
