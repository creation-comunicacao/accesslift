import type { ContentSection, CtaLink, FaqItem } from "./pageContent";
import { contactConfig } from "./contact";

export type ClientSection = ContentSection & {
  paragraphs?: string[];
  closing?: string;
  secondaryCta?: CtaLink;
  media?: "services" | "assistance" | "training" | "company" | "company-gallery";
  form?: "assistance";
};

export type ClientPage = {
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  actions: CtaLink[];
  seoTitle?: string;
  seoDescription?: string;
  sections: ClientSection[];
  faq: FaqItem[];
  faqTitle?: string;
  reference?: CtaLink;
  final: { title: string; description: string; actions: CtaLink[] };
};

export const link = (label: string, href: string, event?: string): CtaLink => ({ label, href, event });
export const whatsapp = (label: string, message: string, event?: string): CtaLink =>
  link(label, `${contactConfig.whatsappUrl}?text=${encodeURIComponent(message)}`, event);
export const quote = (event?: string, label = "Solicitar orçamento") => link(label, event ? `/solicite-orcamento/?origem=${encodeURIComponent(event.replace(/_quote_click$/, ""))}` : "/solicite-orcamento/", event);
const assistance = "/servicos/assistencia-tecnica/";
const maintenance = "/servicos/manutencao-preventiva/";
const training = "/servicos/treinamento-de-operadores/";
const assistanceChat = whatsapp("Falar pelo WhatsApp", "Olá! Estou no site da Accesslift e preciso de assistência técnica para uma plataforma elevatória.", "assistencia_whatsapp_third_party");
const trainingChat = whatsapp("Falar pelo WhatsApp", "Olá! Gostaria de informações sobre treinamento para operadores de plataformas elevatórias.", "training_whatsapp_click");
const maintenanceChat = whatsapp("Falar com a Accesslift", "Olá! Estou consultando a manutenção preventiva da frota Accesslift e gostaria de saber mais.", "preventiva_whatsapp_click");
const supportCta = link("Solicitar suporte técnico", "#solicitar-assistencia", "assistencia_cta_click");
const qa = (question: string, answer: string, contextLink?: CtaLink): FaqItem => ({ question, answer, link: contextLink });

export const clientServicePages: ClientPage[] = [
  {
    path: "/servicos/", eyebrow: "Serviços", title: "Serviços e Suporte para Plataformas Elevatórias",
    description: "Estrutura para apoiar sua operação antes, durante e após a entrega dos equipamentos.",
    seoDescription: "Assistência técnica, manutenção preventiva e treinamento para plataformas elevatórias, com suporte da Accesslift antes, durante e após a locação.",
    actions: [quote("services_quote_click", "Solicite seu orçamento"), link("Falar com a Accesslift", "/contato/", "services_contact_click")],
    sections: [
      { eyebrow: "Suporte", title: "Suporte que acompanha a operação", description: "A locação não termina quando a plataforma é entregue.", paragraphs: ["A Accesslift mantém uma estrutura de suporte para acompanhar necessidades relacionadas aos equipamentos e à operação antes, durante e após a entrega."], media: "services" },
      { eyebrow: "Serviços", title: "Serviços para Plataformas Elevatórias", items: [
        { title: "Assistência técnica", description: "Suporte técnico para plataformas elevatórias, com estrutura própria para atendimento dos equipamentos.", cta: link("Conhecer assistência técnica", assistance, "services_assistance_click") },
        { title: "Manutenção preventiva", description: "Manutenção voltada à conservação das condições de operação dos equipamentos e à prevenção de ocorrências durante sua utilização.", cta: link("Conhecer manutenção preventiva", maintenance, "services_maintenance_click") },
        { title: "Treinamento de operadores", description: "Treinamento voltado à utilização de plataformas elevatórias, considerando equipamentos, controles, limites e cuidados necessários durante a operação.", cta: link("Conhecer treinamento", training, "services_training_click") },
      ] },
      { eyebrow: "Estrutura", title: "Estrutura que apoia a locação", items: [
        { title: "Entrega e retirada próprias", description: "Estrutura logística para entrega e retirada dos equipamentos dentro da área de atendimento." },
        { title: "Atendimento emergencial", description: "Suporte para necessidades relacionadas ao equipamento durante o período de locação." },
        { title: "Segurança e NR-35", description: "Informações sobre plataformas, características da operação e a diferença entre treinamento de operador e NR-35.", cta: link("Segurança e NR-35", "/seguranca-e-nr35/") },
      ] },
    ],
    faq: [
      qa("A Accesslift oferece suporte durante a locação?", "Sim. A Accesslift possui estrutura técnica para apoiar necessidades relacionadas ao equipamento durante a locação."),
      qa("A entrega e retirada dos equipamentos são próprias?", "Sim. A Accesslift possui estrutura logística própria para entrega e retirada, conforme as condições definidas para a locação."),
      qa("A Accesslift realiza assistência técnica em plataformas elevatórias?", "Sim. Atende equipamentos da frota e de terceiros, conforme marca, modelo, localização e necessidade.", link("Saiba mais sobre Assistência Técnica", assistance)),
      qa("É possível contratar treinamento para operadores?", "Sim. Pode ser solicitado junto à locação ou contratado de forma avulsa, mediante agendamento no pátio da Accesslift. Não está automaticamente incluído na locação.", link("Conhecer treinamento", training)),
    ],
    final: { title: "Precisa de locação ou suporte técnico?", description: "Fale com a equipe Accesslift para entender a solução adequada à sua necessidade.", actions: [quote("services_quote_click", "Solicite seu orçamento"), link("Entrar em contato", "/contato/", "services_contact_click"), whatsapp("Falar pelo WhatsApp", "Olá! Estou consultando os serviços da Accesslift e gostaria de informações.", "services_whatsapp_click")] },
  },
  {
    path: assistance, eyebrow: "Assistência técnica", title: "Assistência Técnica para Plataformas Elevatórias",
    description: "Suporte técnico para plataformas elevatórias da frota Accesslift e equipamentos de terceiros, com atendimento para diagnóstico, manutenção e necessidades técnicas da operação.",
    actions: [supportCta, assistanceChat],
    sections: [
      { eyebrow: "Suporte", title: "Suporte técnico para sua operação", description: "A Accesslift oferece assistência técnica para equipamentos da própria frota e também para plataformas elevatórias de terceiros, com atendimento direcionado de acordo com a marca, o modelo e a necessidade apresentada.", paragraphs: ["A estrutura técnica também acompanha os equipamentos durante as locações Accesslift, oferecendo suporte quando necessário ao longo da operação."], media: "assistance" },
      { eyebrow: "Atendimento", title: "Atendimento para diferentes necessidades", items: [
        { title: "Ajustes técnicos e verificações", description: "Avaliação de situações relacionadas ao funcionamento e às condições do equipamento." },
        { title: "Diagnóstico de ocorrências", description: "Identificação da possível origem de ocorrências apresentadas pelo equipamento." },
        { title: "Reparos técnicos", description: "Atendimento conforme a necessidade identificada e o escopo de atuação da equipe técnica." },
        { title: "Suporte durante a locação", description: "Atendimento aos equipamentos em locação com a Accesslift." },
        { title: "Manutenção em equipamentos", description: "Avaliação e intervenções técnicas de acordo com o equipamento e a necessidade apresentada." },
        { title: "Orientações e avaliações técnicas", description: "Orientações relacionadas às condições do equipamento conforme o atendimento realizado." },
      ] },
      { eyebrow: "Locação", title: "Precisa de suporte durante uma locação?", description: "Abra um chamado informando os dados da operação e a ocorrência apresentada. A equipe realiza uma triagem remota, inclusive por vídeo, e, quando necessário, um técnico se desloca com as peças e os recursos adequados ao atendimento.", cta: whatsapp("Solicitar atendimento", "Olá! Tenho uma plataforma Accesslift em locação e preciso de suporte técnico.", "assistencia_whatsapp_rental") },
      { eyebrow: "Marcas", title: "Assistência técnica para diferentes marcas de plataformas", description: "A Accesslift realiza atendimento técnico em plataformas elevatórias de terceiros, conforme marca, modelo, localização e necessidade apresentada.", items: ["JLG", "Genie", "Skyjack", "Zoomlion"] },
      { eyebrow: "Solicitação", title: "Precisa de assistência? Envie as informações da ocorrência", description: "Quanto mais informações forem enviadas, mais fácil será direcionar a solicitação para a equipe técnica.", form: "assistance" },
    ],
    faqTitle: "Perguntas frequentes sobre assistência técnica",
    faq: [
      qa("A Accesslift presta assistência técnica em equipamentos de terceiros?", "Sim. A Accesslift também realiza assistência técnica em plataformas elevatórias de terceiros, conforme marca, modelo, localização e necessidade apresentada."),
      qa("Quais marcas de plataformas são atendidas?", "Consulte atendimento para JLG, Genie, Skyjack e Zoomlion, informando modelo, localização e necessidade para avaliação da equipe técnica."),
      qa("Como solicitar suporte para um equipamento em locação?", "Informe os dados da operação e a ocorrência apresentada para direcionamento do atendimento."),
      qa("Quais informações devo enviar para solicitar assistência técnica?", "Informe marca, modelo, localização e descrição da ocorrência. Fotografias disponíveis podem ser compartilhadas pelo WhatsApp para auxiliar a avaliação."),
      qa("A Accesslift também realiza manutenção preventiva?", "Sim. A manutenção preventiva faz parte do cuidado com a frota, e a equipe também avalia necessidades de equipamentos de terceiros.", link("Conhecer Manutenção Preventiva", maintenance, "manutencao_preventiva_click")),
    ],
    final: { title: "Precisa de assistência técnica?", description: "Envie as informações do equipamento e da ocorrência para que nossa equipe possa direcionar sua solicitação.", actions: [link("Solicitar assistência", "#solicitar-assistencia", "assistencia_cta_click"), assistanceChat] },
  },
  {
    path: maintenance, eyebrow: "Manutenção preventiva", title: "Manutenção Preventiva de Plataformas Elevatórias",
    description: "A manutenção preventiva faz parte do cuidado contínuo com a frota Accesslift, contribuindo para que nossos equipamentos estejam preparados e em excelentes condições para cada nova operação.",
    actions: [link("Conheça nossa frota", "/equipamentos/", "preventiva_frota_click"), maintenanceChat],
    sections: [
      { eyebrow: "Manutenção", title: "Por que a manutenção preventiva é importante?", description: "A manutenção preventiva permite acompanhar as condições dos equipamentos ao longo do tempo, identificar necessidades antecipadamente e realizar os cuidados necessários para preservar suas condições de funcionamento.", items: ["Acompanhamento das condições do equipamento", "Identificação antecipada de necessidades", "Redução da possibilidade de ocorrências inesperadas", "Conservação e cuidado contínuo"] },
      { eyebrow: "Frota", title: "Uma frota cuidada antes de chegar à sua operação", description: "Os equipamentos da Accesslift recebem acompanhamento e manutenção preventiva regular como parte da rotina de cuidado da frota.", paragraphs: ["Esse processo permite acompanhar as condições dos equipamentos, identificar necessidades de manutenção e prepará-los para as próximas operações."] },
      { eyebrow: "Cuidados", title: "Preventiva, corretiva e assistência técnica", items: [
        { title: "Preventiva", description: "Acompanhamento programado das condições e do funcionamento do equipamento, permitindo identificar necessidades antecipadamente." },
        { title: "Corretiva", description: "Intervenção realizada quando uma necessidade técnica ou ocorrência já foi identificada." },
        { title: "Assistência técnica", description: "Atendimento técnico para diagnóstico, orientação e direcionamento diante de uma necessidade apresentada." },
      ], cta: link("Precisa resolver uma ocorrência? Conheça nossa Assistência Técnica", assistance, "preventiva_assistencia_click") },
      { eyebrow: "Locação", title: "Cuidado que acompanha a locação", description: "O cuidado com os equipamentos não termina na preparação para a entrega. A estrutura técnica da Accesslift também oferece suporte durante a locação quando uma necessidade é identificada.", items: [
        { title: "Manutenção preventiva da frota", description: "Acompanhamento periódico dos equipamentos como parte da rotina de conservação e preparação." },
        { title: "Suporte durante a locação", description: "Atendimento às necessidades relacionadas ao equipamento durante sua utilização." },
        { title: "Assistência técnica própria", description: "Estrutura técnica para avaliação e direcionamento quando uma ocorrência é identificada." },
      ] },
      { eyebrow: "Equipamentos de terceiros", title: "Precisa de manutenção para seu próprio equipamento?", description: "Além dos cuidados realizados na frota Accesslift, nossa equipe também atende necessidades de manutenção em plataformas elevatórias de terceiros, conforme marca, modelo, localização e serviço necessário.", cta: whatsapp("Consultar atendimento", "Olá! Tenho uma plataforma própria e gostaria de consultar atendimento para manutenção.", "preventiva_third_party_click") },
    ],
    faq: [
      qa("Por que a manutenção preventiva é importante?", "Permite acompanhar as condições do equipamento, identificar necessidades antecipadamente e auxiliar na conservação."),
      qa("Os equipamentos Accesslift passam por manutenção preventiva?", "Sim. A manutenção preventiva faz parte da rotina de cuidado e acompanhamento da frota."),
      qa("A manutenção preventiva elimina a possibilidade de falhas?", "Não. A manutenção preventiva contribui para acompanhar as condições do equipamento, identificar necessidades antecipadamente e reduzir a possibilidade de ocorrências, mas não representa garantia absoluta de ausência de falhas."),
      qa("A Accesslift realiza manutenção em equipamentos de terceiros?", "Sim. A Accesslift também atende necessidades de manutenção em plataformas elevatórias de terceiros, conforme marca, modelo, localização e serviço necessário."),
      qa("O que acontece se um equipamento precisar de suporte durante a locação?", "A Accesslift possui estrutura de suporte e assistência técnica para avaliar e direcionar as necessidades durante a locação."),
    ],
    final: { title: "Equipamentos preparados para sua operação", description: "O cuidado com a frota faz parte da experiência de locação Accesslift, da preparação do equipamento ao suporte durante sua utilização.", actions: [link("Conhecer equipamentos", "/equipamentos/", "preventiva_frota_click"), quote("preventiva_quote_click", "Solicitar cotação"), { ...maintenanceChat, label: "Falar pelo WhatsApp" }] },
  },
  {
    path: training, eyebrow: "Treinamento", title: "Treinamento para Operadores de Plataformas Elevatórias",
    description: "Treinamento voltado à utilização de plataformas elevatórias, com orientação sobre o equipamento, seus controles, limites e cuidados necessários durante a operação.",
    actions: [link("Consultar treinamento", "#modalidades-treinamento", "training_consult_click"), trainingChat],
    sections: [
      { eyebrow: "Operação", title: "Conhecer o equipamento faz parte da operação", description: "Antes de utilizar uma plataforma elevatória, é importante conhecer seus comandos, características, limites e os cuidados relacionados à operação.", paragraphs: ["O treinamento ajuda o operador a compreender o equipamento que será utilizado e sua forma adequada de operação."], media: "training" },
      { eyebrow: "Conteúdo", title: "O que é abordado no treinamento?", items: [
        { title: "Identificação e conhecimento do equipamento", description: "Reconhecimento das principais características do equipamento utilizado." },
        { title: "Comandos e controles", description: "Orientação sobre os comandos e controles necessários à operação." },
        { title: "Limites de utilização", description: "Compreensão dos limites relacionados à utilização do equipamento." },
        { title: "Verificações antes da utilização", description: "Orientações sobre verificações necessárias antes do início da operação." },
        { title: "Cuidados durante a operação", description: "Cuidados relacionados à utilização adequada do equipamento durante o trabalho." },
        { title: "Orientações relacionadas à segurança", description: "Orientações de segurança relacionadas à utilização da plataforma elevatória." },
      ] },
      { eyebrow: "Plataformas", title: "Treinamento para plataformas tesoura e articuladas", description: "O treinamento considera as características e a forma de utilização do tipo de plataforma que será operado.", items: [
        { title: "Plataforma Tesoura", description: "Orientações relacionadas às características, controles e utilização das plataformas de elevação predominantemente vertical." },
        { title: "Plataforma Articulada", description: "Orientações relacionadas às características, controles, movimentação e utilização das plataformas articuladas." },
      ] },
      { eyebrow: "Escopos", title: "Treinamento de operador e NR-35 não são a mesma coisa", description: "Os treinamentos possuem objetivos e escopos diferentes e não devem ser apresentados como equivalentes.", items: [
        { title: "Treinamento de operador de plataforma", description: "Voltado ao conhecimento e à utilização do equipamento, incluindo características, comandos, controles, limites e cuidados durante a operação." },
        { title: "NR-35", description: "Possui escopo próprio relacionado ao trabalho em altura e não deve ser confundida automaticamente com o treinamento específico para utilização da plataforma." },
      ], cta: link("Saiba mais sobre Segurança e NR-35", "/seguranca-e-nr35/", "training_nr35_click") },
      { eyebrow: "Modalidades", title: "Treinamento de acordo com a necessidade da sua operação", items: [
        { title: "Treinamento junto à locação", description: "Ao contratar uma plataforma Accesslift, nossa equipe verifica se haverá necessidade de treinamento para os operadores. Quando solicitado pelo cliente, o treinamento é programado de acordo com a operação.", cta: whatsapp("Consultar treinamento para minha locação", "Olá! Estou consultando uma plataforma Accesslift e gostaria de informações sobre treinamento para os operadores.", "training_rental_click") },
        { title: "Precisa somente do treinamento?", description: "A Accesslift também realiza treinamento avulso para operadores, sem necessidade de contratação de uma locação. O atendimento é realizado mediante agendamento no pátio da Accesslift, onde o participante recebe o treinamento e o respectivo certificado.", cta: whatsapp("Agendar treinamento", "Olá! Gostaria de informações sobre treinamento avulso para operador de plataforma elevatória no pátio da Accesslift.", "training_standalone_click") },
      ] },
    ],
    faqTitle: "Perguntas frequentes sobre treinamento",
    faq: [
      qa("O treinamento está automaticamente incluído na locação?", "Não. A Accesslift verifica com o cliente se haverá necessidade de treinamento e, quando solicitado, programa o atendimento de acordo com a operação."),
      qa("Posso contratar somente o treinamento sem alugar uma plataforma?", "Sim. A Accesslift também realiza treinamentos avulsos, sem necessidade de contratação de uma locação, mediante agendamento no pátio da empresa."),
      qa("O treinamento avulso possui certificado?", "Sim. No treinamento avulso realizado no pátio da Accesslift, o participante recebe certificado após a realização do treinamento."),
      qa("O treinamento atende plataformas tesoura e articuladas?", "Sim. O conteúdo considera as características e a forma de utilização do tipo de plataforma que será operado."),
      qa("Treinamento de operador e NR-35 são a mesma coisa?", "Não. São treinamentos com objetivos e escopos distintos. O treinamento de operador é direcionado à utilização da plataforma, enquanto a NR-35 possui escopo próprio relacionado ao trabalho em altura."),
    ],
    final: { title: "Precisa de treinamento para sua equipe?", description: "Fale com a Accesslift para consultar treinamento junto à locação ou agendar um treinamento avulso.", actions: [link("Consultar treinamento", "#modalidades-treinamento", "training_consult_click"), trainingChat] },
  },
];
