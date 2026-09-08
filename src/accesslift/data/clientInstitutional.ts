import { link, quote, whatsapp, type ClientPage } from "./clientPages";

const equipment = link("Consultar equipamentos", "/equipamentos/", "nr35_equipment_click");
const specialist = whatsapp("Falar com um especialista", "Olá! Estou consultando informações sobre plataformas elevatórias para um trabalho em altura e gostaria de ajuda para identificar o equipamento adequado à operação.", "nr35_specialist_click");
const consult = whatsapp("Consultar atendimento", "Olá! Gostaria de verificar a possibilidade de atendimento da AccessLift para uma operação. Vou informar a cidade e as características da locação.", "service_area_contact_click");

export const clientInstitutionalPages: ClientPage[] = [
  {
    path: "/empresa/", eyebrow: "Institucional", title: "AccessLift Plataformas Elevatórias",
    description: "Há 12 anos, a AccessLift atua com locação de plataformas elevatórias e serviços relacionados, combinando equipamentos, estrutura própria e atendimento próximo para apoiar operações em altura.",
    actions: [quote("company_quote_click"), link("Falar com a AccessLift", "/contato/", "company_contact_click")],
    sections: [
      { eyebrow: "Empresa", title: "Quem somos", description: "A AccessLift é especializada em locação de plataformas elevatórias para trabalhos em altura, atendendo empresas em diferentes necessidades de manutenção, instalação, construção e operação.", paragraphs: ["Nossa estrutura reúne frota própria, logística de entrega e retirada, assistência técnica, manutenção preventiva e treinamento de operadores, permitindo acompanhar o cliente antes e durante a utilização dos equipamentos."], media: "company" },
      { eyebrow: "Estrutura", title: "Estrutura para apoiar cada operação", items: [
        { title: "12 anos de experiência", description: "Experiência no atendimento a empresas que utilizam plataformas elevatórias em trabalhos em altura." },
        { title: "Frota própria", description: "Equipamentos para diferentes necessidades de elevação e acesso." },
        { title: "Entrega e retirada próprias", description: "Estrutura logística própria para entrega e retirada dos equipamentos dentro da área atendida." },
        { title: "Assistência técnica própria", description: "Estrutura técnica para atendimento aos equipamentos e suporte às operações.", cta: link("Assistência Técnica", "/servicos/assistencia-tecnica/") },
        { title: "Manutenção preventiva", description: "Cuidado contínuo com a frota para manter os equipamentos preparados para utilização.", cta: link("Manutenção Preventiva", "/servicos/manutencao-preventiva/") },
        { title: "Treinamento de operadores", description: "Treinamento para utilização das plataformas, realizado conforme a necessidade do cliente.", cta: link("Treinamento de Operadores", "/servicos/treinamento-de-operadores/") },
      ] },
      { eyebrow: "Operação", title: "AccessLift em operação", description: "Estrutura, equipamentos e equipe fazendo parte da rotina de atendimento da AccessLift.", media: "company-gallery" },
    ], faq: [],
    final: { title: "Precisa de uma plataforma elevatória?", description: "Conte para a AccessLift sobre sua necessidade. Nossa equipe pode ajudar a identificar o equipamento e a solução adequados para sua operação.", actions: [quote("company_quote_click"), link("Falar com a AccessLift", "/contato/", "company_contact_click"), whatsapp("Falar pelo WhatsApp", "Olá! Conheci a AccessLift pelo site e gostaria de informações para minha operação.", "company_whatsapp_click")] },
  },
  {
    path: "/area-de-atendimento/", eyebrow: "Área de atendimento", title: "Locação de Plataformas Elevatórias em São Paulo e Região",
    description: "Atendimento a operações em São Paulo e diversos municípios da região, com análise de outras localidades conforme as características de cada locação.",
    actions: [consult, quote("service_area_quote_click")],
    sections: [
      { eyebrow: "Atendimento", title: "Atendimento em São Paulo e região", description: "A AccessLift atende operações em São Paulo e diversos municípios da região, considerando como referência uma área aproximada de 150 km da base.", paragraphs: ["Solicitações para outras localidades também podem ser avaliadas pela equipe comercial, considerando distância, logística, período de locação, equipamento e características da operação.", "Sua operação está mais distante? Fale com nossa equipe para avaliarmos a possibilidade de atendimento."], cta: consult },
      { eyebrow: "Estrutura", title: "Como funciona o atendimento na região", items: [
        { title: "Entrega e retirada próprias", description: "Logística dos equipamentos conforme as condições definidas para a locação." },
        { title: "Avaliação de cada operação", description: "Localidade, período, equipamento e características da operação são considerados na análise do atendimento." },
        { title: "Suporte durante a locação", description: "Estrutura técnica para apoiar as necessidades relacionadas aos equipamentos durante o período contratado." },
      ] },
    ],
    faq: [
      { question: "A AccessLift atende somente a cidade de São Paulo?", answer: "Não. A AccessLift atende São Paulo e diversos municípios da região. Cada solicitação é avaliada conforme a localização e as características da operação." },
      { question: "A AccessLift atende localidades além de 150 km?", answer: "A área aproximada de 150 km é uma referência de atendimento, e não necessariamente um limite absoluto. Solicitações para localidades mais distantes podem ser avaliadas pela equipe comercial conforme as características da operação." },
      { question: "Como saber se a AccessLift atende minha cidade?", answer: "Entre em contato e informe a cidade onde será realizada a operação. Nossa equipe avaliará a possibilidade de atendimento considerando a localização e as demais características da locação." },
      { question: "A AccessLift entrega e retira a plataforma no local?", answer: "A AccessLift possui estrutura própria para entrega e retirada dos equipamentos, conforme as condições definidas para cada locação." },
      { question: "Posso solicitar uma avaliação mesmo estando mais distante?", answer: "Sim. Entre em contato e informe a localização e as características da operação para que a equipe comercial possa avaliar a possibilidade de atendimento." },
    ],
    final: { title: "Consulte o atendimento para sua operação", description: "Mesmo que sua localidade esteja além da região habitual de atendimento, fale com nossa equipe. Cada solicitação é avaliada individualmente.", actions: [consult, quote("service_area_quote_click")] },
  },
  {
    path: "/seguranca-e-nr35/", eyebrow: "Segurança", title: "NR-35 e Plataformas Elevatórias no Trabalho em Altura",
    description: "A utilização de plataformas elevatórias em trabalhos em altura deve considerar as características da atividade, as condições da operação e os requisitos de segurança aplicáveis.",
    actions: [equipment, specialist],
    sections: [
      { eyebrow: "Contexto", title: "Plataforma elevatória e NR-35: o que é importante entender", items: [
        { title: "A NR-35 trata do trabalho em altura", description: "A NR-35 estabelece requisitos e medidas de prevenção para o trabalho em altura, envolvendo planejamento, organização e execução da atividade." },
        { title: "O equipamento é parte da operação", description: "Equipamento não é a norma. A escolha de uma plataforma compatível com a atividade contribui para o acesso ao ponto de trabalho, mas não substitui os demais requisitos aplicáveis à operação." },
        { title: "Treinamento de operador e NR-35 têm escopos diferentes", description: "O treinamento relacionado à utilização da plataforma e a capacitação prevista na NR-35 possuem objetivos e conteúdos distintos e não devem ser tratados como equivalentes.", cta: link("Conhecer treinamento de operadores", "/servicos/treinamento-de-operadores/", "nr35_training_click") },
        { title: "A atividade precisa ser avaliada", description: "As características do trabalho, as condições do local, os riscos existentes e os requisitos aplicáveis devem ser considerados no planejamento da atividade." },
        { title: "Documentação do equipamento", description: "As informações técnicas de cada equipamento devem ser observadas de acordo com o modelo utilizado e a documentação correspondente disponível." },
      ] },
      { eyebrow: "Escolha", title: "O que considerar na escolha da plataforma?", items: [
        { title: "Altura de trabalho", description: "Considerar a altura necessária para alcançar o ponto da atividade." },
        { title: "Alcance horizontal, quando necessário", description: "Avaliar se o ponto de trabalho exige acesso além da elevação predominantemente vertical." },
        { title: "Capacidade", description: "Considerar as características da atividade, operador, ferramentas e materiais dentro dos limites do equipamento." },
        { title: "Dimensões e acessos", description: "Verificar espaço disponível, entradas, passagens e condições de posicionamento." },
        { title: "Obstáculos", description: "Estruturas, instalações e outros elementos podem influenciar o tipo de plataforma necessário." },
        { title: "Condições do ambiente e do piso", description: "As características do local onde o equipamento será utilizado devem ser consideradas na escolha." },
      ], closing: "A definição do equipamento deve considerar as características reais da atividade e do local onde será utilizado.", cta: equipment, secondaryCta: specialist },
    ],
    faqTitle: "Dúvidas sobre NR-35 e plataformas elevatórias",
    faq: [
      { question: "A NR-35 se aplica a todo uso de plataforma elevatória?", answer: "A aplicação dos requisitos deve considerar as características da atividade realizada e o campo de aplicação da norma. A NR-35 vigente trata de trabalho em altura e estabelece seus requisitos e medidas de prevenção." },
      { question: "Utilizar uma plataforma significa que a operação está automaticamente adequada à NR-35?", answer: "Não. A utilização do equipamento é apenas um dos elementos envolvidos na operação. Devem ser observados os requisitos aplicáveis ao trabalho realizado." },
      { question: "Treinamento de operador substitui a capacitação prevista na NR-35?", answer: "Não. O treinamento relacionado à operação da plataforma e a capacitação prevista na NR-35 possuem escopos distintos e devem ser tratados de acordo com os requisitos aplicáveis." },
      { question: "Quem deve avaliar os requisitos aplicáveis à atividade?", answer: "A organização responsável pela atividade deve avaliar as condições do trabalho e os requisitos aplicáveis, considerando as características da operação e as medidas de prevenção necessárias." },
      { question: "Onde consultar a NR-35 atualizada?", answer: "Para informações sobre requisitos, alterações e texto vigente da NR-35, consulte o portal oficial do Ministério do Trabalho e Emprego." },
    ],
    reference: link("Consultar a NR-35 no portal oficial do Ministério do Trabalho e Emprego", "https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-35-nr-35", "nr35_official_source_click"),
    final: { title: "Precisa definir uma plataforma para sua operação?", description: "Informe as características da atividade e do local para que nossa equipe possa ajudar na identificação do equipamento adequado.", actions: [equipment, specialist] },
  },
];
