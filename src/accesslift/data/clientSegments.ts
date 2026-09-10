import { link, quote, whatsapp, type ClientPage } from "./clientPages";
import type { ContentItem, FaqItem } from "./pageContent";

type SegmentContent = {
  slug: string; name: string; event: string; description: string;
  introduction: [string, string]; applications: Array<string | ContentItem>; closing: string;
  comparisonTitle: string; scissor: string; articulated: string;
  rental: [string, string]; selectionTitle: string; criteria: Array<[string, string]>;
  selectionClosing: string; finalTitle: string; finalText: string;
  chat: string; quoteChat: string; faq: Array<[string, string]>;
};

const content: SegmentContent[] = [
  {
    slug: "construcao-civil", name: "Construção Civil", event: "construction",
    description: "Plataformas elevatórias para trabalhos em altura em diferentes etapas da obra, apoiando instalações, montagens, acabamentos e intervenções em estruturas.",
    introduction: ["Acesso elevado em diferentes etapas da construção", "Instalações, montagens, infraestrutura, acabamentos e outras atividades podem exigir equipamentos com diferentes alturas, dimensões e formas de alcance. A escolha deve considerar a etapa da obra e as características do trabalho a ser realizado."],
    applications: ["Instalações elétricas", "Instalações hidráulicas e infraestrutura", "Montagens", "Acabamentos", "Instalação de sistemas", "Intervenções em estruturas", "Trabalhos em fachadas, quando compatíveis", "Manutenção e ajustes durante a obra"],
    closing: "A plataforma adequada depende das características da atividade, da altura necessária e das condições do ambiente da obra.",
    comparisonTitle: "Tesoura ou articulada na construção?",
    scissor: "Indicada principalmente quando o trabalho exige elevação vertical, estabilidade e área de trabalho para operador, ferramentas e materiais.",
    articulated: "Indicada quando, além da altura, é necessário alcance horizontal ou acesso a pontos posicionados além de obstáculos.",
    rental: ["Locação para diferentes etapas da obra", "A necessidade de acesso em altura pode mudar conforme o avanço do projeto. A Accesslift oferece períodos flexíveis de locação para atender desde atividades pontuais até etapas mais longas da obra."],
    selectionTitle: "O que considerar na escolha da plataforma para a obra?",
    criteria: [
      ["Altura necessária", "Considerar a altura aproximada do ponto de trabalho."],
      ["Necessidade de alcance horizontal", "Verificar se o acesso ocorre diretamente abaixo do ponto ou se será necessário alcançar áreas além de obstáculos."],
      ["Espaço disponível para movimentação", "Considerar circulação, posicionamento e manobras do equipamento."],
      ["Condições e características do piso", "Avaliar as condições do local onde a plataforma será posicionada e utilizada."],
      ["Acessos e obstáculos existentes", "Considerar portas, corredores, estruturas e demais limitações do ambiente."],
      ["Área necessária para operador, ferramentas e materiais", "Avaliar as características da atividade que será realizada na plataforma."],
    ],
    selectionClosing: "Não sabe qual plataforma atende sua obra? Nossa equipe pode ajudar a avaliar as características da operação e identificar uma opção adequada à necessidade do trabalho.",
    finalTitle: "Sua obra precisa de acesso em altura?",
    finalText: "Informe a atividade, a altura aproximada, as características do local e o período necessário. Nossa equipe pode ajudar a identificar a plataforma adequada para sua operação.",
    chat: "Olá! Estou consultando plataformas elevatórias para uma obra e gostaria de ajuda para escolher o equipamento adequado.",
    quoteChat: "Olá! Preciso de uma plataforma elevatória para uma obra e gostaria de solicitar uma cotação.",
    faq: [
      ["Qual plataforma elevatória é indicada para construção civil?", "A escolha depende da atividade, da altura necessária, da necessidade de alcance horizontal, das condições de acesso e das características do local da obra."],
      ["Quando utilizar uma plataforma tesoura na obra?", "A plataforma tesoura é indicada principalmente para atividades que exigem elevação predominantemente vertical, estabilidade e área de trabalho para operador, ferramentas e materiais."],
      ["Quando utilizar uma plataforma articulada na construção?", "A plataforma articulada é indicada quando a atividade exige, além da altura, alcance horizontal ou acesso a pontos posicionados além de obstáculos."],
      ["É possível alugar uma plataforma somente para uma etapa da obra?", "Sim. A locação pode ser adequada ao período necessário para a atividade, com opções de diária, semanal ou mensal."],
      ["Como saber qual altura de plataforma preciso?", "É importante considerar a altura do ponto onde o trabalho será realizado e as características de acesso e posicionamento do equipamento. A equipe Accesslift pode auxiliar na escolha."],
    ],
  },
  {
    slug: "industria", name: "Indústria", event: "industry",
    description: "Plataformas elevatórias para trabalhos em altura em operações industriais, com opções para elevação vertical e acesso a pontos que exigem alcance horizontal.",
    introduction: ["Acesso em altura para diferentes necessidades da indústria", "Ambientes industriais podem reunir estruturas, máquinas, instalações, sistemas elétricos, iluminação e outros pontos que exigem acesso em altura para inspeções, manutenções, montagens e intervenções."],
    applications: ["Manutenção de instalações", "Inspeções em altura", "Instalações elétricas e infraestrutura", "Manutenção de iluminação", "Montagens", "Intervenções em estruturas", "Instalação e manutenção de sistemas", "Trabalhos em áreas produtivas da planta"],
    closing: "A escolha do equipamento deve considerar as características da atividade, do ambiente industrial e das condições de acesso ao ponto de trabalho.",
    comparisonTitle: "Tesoura ou articulada na indústria?",
    scissor: "Quando o ponto de trabalho puder ser acessado predominantemente na vertical, uma plataforma tesoura pode oferecer área elevada para operador, ferramentas e materiais.",
    articulated: "Quando estruturas, máquinas ou instalações exigirem acesso além de obstáculos ou deslocamento horizontal até o ponto de trabalho, uma plataforma articulada pode oferecer maior flexibilidade de posicionamento.",
    rental: ["Locação com estrutura de suporte", "A Accesslift realiza locações diárias, semanais e mensais, com entrega e retirada próprias e estrutura técnica para suporte aos equipamentos durante a locação. A necessidade pode envolver desde uma intervenção pontual ou manutenção programada até atividades realizadas por períodos mais longos."],
    selectionTitle: "O que considerar na escolha da plataforma para uma operação industrial?",
    criteria: [
      ["Altura do ponto de trabalho", "Considerar a altura aproximada que precisa ser alcançada."],
      ["Necessidade de alcance horizontal", "Avaliar se existem máquinas, estruturas ou instalações entre a plataforma e o ponto de trabalho."],
      ["Espaço para circulação e posicionamento", "Verificar as condições disponíveis para acesso, movimentação, manobra e posicionamento do equipamento."],
      ["Características do ambiente", "Considerar se a atividade ocorre em área interna ou externa e as demais condições do local."],
      ["Condições do piso", "As características do piso devem ser consideradas na seleção e utilização do equipamento."],
      ["Características da atividade", "Avaliar operador, ferramentas, materiais e movimentações necessárias para a realização do trabalho."],
    ],
    selectionClosing: "Não sabe qual plataforma atende sua operação? Informe as características do local, a altura aproximada e o tipo de atividade. Nossa equipe pode ajudar a identificar o equipamento adequado à necessidade.",
    finalTitle: "Sua operação industrial precisa de acesso em altura?",
    finalText: "Informe a atividade, a altura aproximada e as características do ambiente. Nossa equipe pode ajudar a identificar a plataforma adequada à sua necessidade.",
    chat: "Olá! Preciso de uma plataforma elevatória para uma operação industrial e gostaria de ajuda para escolher o equipamento adequado.",
    quoteChat: "Olá! Gostaria de solicitar uma cotação de plataforma elevatória para uma operação industrial.",
    faq: [
      ["Qual plataforma pode ser usada na indústria?", "A escolha depende da altura necessária, do tipo de acesso, do espaço disponível, da existência de obstáculos e das características da atividade e do ambiente."],
      ["Plataforma articulada é sempre necessária em ambientes industriais?", "Não. Quando o acesso ao ponto de trabalho ocorre predominantemente na vertical, uma plataforma tesoura pode atender à necessidade. A articulada é especialmente útil quando também existe necessidade de alcance horizontal ou acesso além de obstáculos."],
      ["A locação pode atender uma manutenção programada?", "Sim. O período de locação pode ser definido conforme a necessidade da operação, incluindo intervenções pontuais ou atividades realizadas por períodos mais longos."],
      ["É possível utilizar plataformas em áreas internas?", "A utilização depende das características do equipamento, do ambiente, dos acessos e das condições da operação. A equipe Accesslift pode auxiliar na avaliação da necessidade."],
      ["Como escolher a plataforma para minha operação industrial?", "Informe a atividade, a altura aproximada, as condições de acesso e as características do ambiente para que a necessidade possa ser avaliada."],
    ],
  },
  {
    slug: "atacados", name: "Atacados", event: "wholesale",
    description: "Plataformas elevatórias para trabalhos em altura em grandes instalações atacadistas, apoiando atividades de manutenção, infraestrutura, inspeções e montagens.",
    introduction: ["Acesso elevado em instalações de grande porte", "Estabelecimentos atacadistas podem reunir grandes áreas, estruturas elevadas, iluminação, comunicação visual e infraestrutura que exigem acesso em altura para manutenção, inspeções, instalações e intervenções."],
    applications: ["Manutenção de iluminação", "Instalações elétricas", "Manutenção de infraestrutura", "Comunicação visual", "Inspeções", "Montagens", "Manutenção de estruturas e instalações elevadas"],
    closing: "A escolha do equipamento deve considerar a atividade, a altura necessária e as características de acesso e movimentação dentro do estabelecimento.",
    comparisonTitle: "Tesoura ou articulada em atacados?",
    scissor: "Para pontos de trabalho acessíveis predominantemente na vertical, a plataforma tesoura pode oferecer área elevada para operador, ferramentas e materiais em atividades de manutenção e instalação.",
    articulated: "Quando estruturas, instalações ou outros obstáculos dificultarem o acesso direto ao ponto de trabalho, a plataforma articulada pode oferecer alcance horizontal e maior flexibilidade de posicionamento.",
    rental: ["Locação diária, semanal ou mensal", "O período de locação pode ser definido de acordo com a duração da atividade, atendendo desde intervenções pontuais até trabalhos realizados por períodos mais longos. A Accesslift realiza entrega e retirada próprias e oferece estrutura técnica para suporte aos equipamentos durante a locação."],
    selectionTitle: "O que considerar na escolha da plataforma para um atacado?",
    criteria: [
      ["Altura do ponto de trabalho", "Considerar a altura das estruturas, instalações ou sistemas que precisam ser acessados."],
      ["Espaço para circulação e posicionamento", "Avaliar corredores, áreas operacionais e o espaço disponível para movimentação e posicionamento do equipamento."],
      ["Acessos ao ambiente", "Entradas, portas, passagens e outras limitações de acesso devem ser consideradas."],
      ["Estruturas e obstáculos", "Instalações, estruturas, equipamentos e outros elementos podem exigir alcance além da elevação predominantemente vertical."],
      ["Condições do piso", "As características do piso devem ser consideradas na seleção e utilização da plataforma."],
      ["Características da atividade", "Manutenção, inspeção, montagem ou instalação podem exigir características diferentes do equipamento."],
    ],
    selectionClosing: "Não sabe qual plataforma atende sua operação? Informe a atividade, a altura aproximada e as características do estabelecimento. Nossa equipe pode ajudar a avaliar a necessidade.",
    finalTitle: "Seu estabelecimento precisa de acesso em altura?",
    finalText: "Informe a atividade, a altura aproximada e as características do local. Nossa equipe pode ajudar a identificar uma plataforma adequada à sua necessidade.",
    chat: "Olá! Preciso de uma plataforma elevatória para uma operação em atacado e gostaria de ajuda para escolher o equipamento adequado.",
    quoteChat: "Olá! Gostaria de solicitar uma cotação de plataforma elevatória para uma atividade em um estabelecimento atacadista.",
    faq: [
      ["Qual plataforma pode ser utilizada em atacados?", "A escolha depende da altura necessária, do espaço disponível, dos acessos, dos obstáculos existentes e das características da atividade."],
      ["Plataforma tesoura pode atender ambientes atacadistas?", "Pode ser considerada quando o acesso ao ponto de trabalho ocorre predominantemente na vertical e as características do ambiente são compatíveis com o equipamento."],
      ["Quando considerar uma plataforma articulada?", "Quando a atividade exigir alcance horizontal ou acesso a pontos posicionados além de estruturas, instalações ou outros obstáculos."],
      ["Posso alugar uma plataforma para uma manutenção pontual?", "Sim. A Accesslift trabalha com períodos flexíveis de locação, de acordo com a necessidade da atividade."],
      ["Como escolher a plataforma adequada?", "Informe a atividade, a altura aproximada e as características de acesso e do ambiente para que a necessidade possa ser avaliada."],
    ],
  },
  {
    slug: "supermercados-e-hipermercados", name: "Supermercados e Hipermercados", event: "retail",
    description: "Equipamentos para trabalhos em altura em supermercados e hipermercados, apoiando atividades de manutenção, instalações e intervenções em grandes áreas comerciais.",
    introduction: ["Acesso em altura em grandes áreas comerciais", "Supermercados e hipermercados possuem instalações, iluminação, comunicação visual, estruturas e sistemas localizados em pontos elevados que podem exigir equipamentos específicos para manutenção, instalação e intervenção."],
    applications: [
      { title: "Manutenção de iluminação", description: "Intervenções em luminárias e estruturas de iluminação instaladas em pontos elevados." },
      { title: "Instalações elétricas e infraestrutura", description: "Acesso a instalações e infraestrutura localizadas em altura." },
      { title: "Comunicação visual e sinalização", description: "Instalação e manutenção de elementos de comunicação visual posicionados em áreas elevadas." },
      { title: "Instalação e manutenção de sistemas", description: "Acesso a sistemas instalados em pontos superiores do ambiente." },
      { title: "Manutenção de estruturas", description: "Intervenções em estruturas existentes no estabelecimento." },
      { title: "Montagens e instalações", description: "Atividades que exijam posicionamento do operador em altura." },
      { title: "Inspeções em pontos elevados", description: "Acesso para verificações e avaliações em áreas de difícil alcance." },
      { title: "Manutenções em áreas internas", description: "Atividades realizadas dentro da área comercial ou operacional do estabelecimento." },
    ],
    closing: "A escolha da plataforma deve considerar a atividade, a altura necessária e as características de acesso e utilização do ambiente.",
    comparisonTitle: "Tesoura ou articulada em supermercados e hipermercados?",
    scissor: "Quando o ponto de trabalho estiver acessível predominantemente na vertical e houver espaço adequado para posicionamento, uma plataforma tesoura pode atender atividades de manutenção, instalação e intervenção em áreas elevadas.",
    articulated: "Quando estruturas, instalações, equipamentos ou outros elementos dificultarem o acesso direto ao ponto de trabalho, uma plataforma articulada pode oferecer alcance horizontal e maior flexibilidade de posicionamento.",
    rental: ["Planejamento para intervenções no ambiente comercial", "Trabalhos em altura em supermercados e hipermercados precisam considerar não apenas o ponto que será acessado, mas também as características de circulação, posicionamento e utilização do espaço onde a atividade será realizada. A Accesslift oferece locações diárias, semanais e mensais, permitindo adequar o período de utilização à necessidade da intervenção."],
    selectionTitle: "O que considerar na escolha da plataforma para supermercados e hipermercados?",
    criteria: [
      ["Altura do ponto de trabalho", "Iluminação, instalações e estruturas podem estar posicionadas em diferentes alturas."],
      ["Espaço disponível", "Avaliar corredores, áreas de circulação e espaço necessário para posicionamento e movimentação."],
      ["Acessos ao local", "Portas, entradas, passagens e demais acessos devem ser considerados."],
      ["Obstáculos existentes", "Gôndolas, estruturas, equipamentos e instalações podem influenciar o tipo de plataforma necessário."],
      ["Condições do piso", "As características do piso e do ambiente devem ser consideradas na seleção e utilização do equipamento."],
      ["Tipo de atividade", "Manutenção, instalação, inspeção ou montagem podem exigir características diferentes do equipamento."],
    ],
    selectionClosing: "Não sabe qual plataforma atende seu estabelecimento? Informe a atividade, a altura aproximada e as características do local. Nossa equipe pode ajudar a avaliar a necessidade.",
    finalTitle: "Seu estabelecimento precisa de acesso em altura?",
    finalText: "Informe a atividade, a altura aproximada e as características do local. Nossa equipe pode ajudar a identificar uma plataforma adequada à necessidade.",
    chat: "Olá! Preciso de uma plataforma elevatória para um supermercado/hipermercado e gostaria de ajuda para escolher o equipamento adequado.",
    quoteChat: "Olá! Gostaria de solicitar uma cotação de plataforma elevatória para uma atividade em supermercado/hipermercado.",
    faq: [
      ["Qual plataforma pode ser utilizada em supermercados e hipermercados?", "A escolha depende da altura necessária, do espaço disponível, das condições de acesso, dos obstáculos existentes e das características da atividade."],
      ["Plataforma tesoura pode ser utilizada em áreas internas?", "A utilização depende das características do equipamento e das condições do ambiente. É necessário avaliar acessos, espaço disponível, piso e características da operação."],
      ["Quando considerar uma plataforma articulada?", "Quando o ponto de trabalho exigir alcance horizontal ou estiver posicionado além de estruturas, instalações ou outros obstáculos."],
      ["É possível alugar uma plataforma para uma manutenção pontual?", "Sim. A Accesslift trabalha com períodos flexíveis de locação, conforme a necessidade da atividade."],
      ["Como saber qual plataforma utilizar no estabelecimento?", "Informe a atividade, a altura aproximada e as características de acesso e do ambiente para que a necessidade possa ser avaliada."],
    ],
  },
];

const applicationTitles: Record<string, string> = {
  construction: "Aplicações na construção civil", industry: "Aplicações em ambientes industriais",
  wholesale: "Aplicações em ambientes atacadistas", retail: "Aplicações em supermercados e hipermercados",
};

export const clientSegmentPages: ClientPage[] = content.map((segment) => {
  const specialist = whatsapp("Falar com especialista", segment.chat, `${segment.event}_specialist_click`);
  const budget = quote(`${segment.event}_quote_click`);
  return {
    path: `/segmentos/${segment.slug}/`, eyebrow: segment.name, title: `Plataformas Elevatórias para ${segment.name}`,
    description: segment.description, actions: [budget, specialist],
    sections: [
      { eyebrow: "Aplicação", title: segment.introduction[0], description: segment.introduction[1] },
      { eyebrow: "Aplicações", title: applicationTitles[segment.event], items: segment.applications, closing: segment.closing },
      { eyebrow: "Tipos de plataforma", title: segment.comparisonTitle, items: [
        { title: "Quando considerar uma plataforma tesoura?", description: segment.scissor, cta: link("Ver plataformas tesoura", "/plataformas-tesoura/", `${segment.event}_scissor_click`) },
        { title: "Quando considerar uma plataforma articulada?", description: segment.articulated, cta: link("Ver plataformas articuladas", "/plataformas-articuladas/", `${segment.event}_articulated_click`) },
      ] },
      { eyebrow: "Locação", title: segment.rental[0], description: segment.rental[1], paragraphs: ["Diária • Semanal • Mensal"], cta: segment.event === "construction" ? whatsapp("Solicitar cotação para minha obra", segment.quoteChat, "construction_quote_click") : link("Consultar locação", "/locacao-de-plataformas-elevatorias/", `${segment.event}_rental_click`) },
      { eyebrow: "Escolha", title: segment.selectionTitle, items: segment.criteria.map(([title, description]) => ({ title, description })), closing: segment.selectionClosing, cta: { ...specialist, label: "Falar com um especialista" } },
    ],
    faq: segment.faq.map(([question, answer]): FaqItem => ({ question, answer })),
    final: { title: segment.finalTitle, description: segment.finalText, actions: [budget, specialist, whatsapp("Falar pelo WhatsApp", segment.chat, `${segment.event}_whatsapp_click`)] },
  };
});
