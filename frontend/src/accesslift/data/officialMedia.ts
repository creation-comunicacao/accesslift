export type OfficialMediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

const official = (filename: string) => `/images/accesslift/oficiais/${filename}`;

export const companyGallery: OfficialMediaItem[] = [
  { src: official("empresa-01.jpeg"), alt: "Frota de plataformas elevatorias da Accesslift" },
  { src: official("empresa-02.jpeg"), alt: "Patio operacional da Accesslift" },
  { src: official("plataformas-01.jpeg"), alt: "Plataformas elevatorias em operacao pela Accesslift" },
];

export const deliveryGallery: OfficialMediaItem[] = [
  { src: official("entrega-retirada-plataforma-frota.jpeg"), alt: "Transporte de plataforma elevatoria pela Accesslift" },
  { src: official("entrega-retirada-plataforma-frota-propria.jpeg"), alt: "Frota propria Accesslift para entrega e retirada" },
  { src: official("entrega-retirada-plataforma-frota-propria-01.jpeg"), alt: "Veiculo da frota propria Accesslift em operacao" },
  { src: official("entrega-retirada-plataforma-frota-propria-02.jpeg"), alt: "Entrega de plataforma elevatoria pela Accesslift" },
  { src: official("entrega-retirada-plataforma-frota-propria-03.jpeg"), alt: "Retirada de plataforma elevatoria pela Accesslift" },
  { src: official("entrega-retirada-plataforma-frota-propria-04.jpeg"), alt: "Logistica de plataforma elevatoria Accesslift" },
  { src: official("entrega-retirada-plataforma-frota-propria-05.jpeg"), alt: "Transporte de equipamento pela frota Accesslift" },
  { src: official("entrega-retirada-plataforma-frota-propria-06.jpeg"), alt: "Frota Accesslift em atendimento logistico" },
  { src: official("plataformas-07.jpeg"), alt: "Entrega de plataformas elevatorias pela Accesslift" },
];

export const trainingGallery: OfficialMediaItem[] = [
  { src: official("treinamento-assistencia.jpeg"), alt: "Equipe Accesslift em atendimento em ambiente industrial" },
  { src: official("treinamento-assistencia-01.jpeg"), alt: "Equipe Accesslift em atividade de apoio operacional" },
  { src: official("treinamento-assistencia-02.jpeg"), alt: "Profissional Accesslift em ambiente de trabalho" },
  { src: official("treinamento-assistencia-03.jpeg"), alt: "Atendimento da equipe Accesslift em ambiente industrial" },
];

export const categoryGalleryBySlug = {
  "plataformas-articuladas": [
    { src: official("genie.jpeg"), alt: "Plataforma articulada Genie da frota Accesslift", caption: "Modelo nao identificado na imagem." },
    { src: official("genie-0.jpeg"), alt: "Plataforma articulada Genie em ambiente interno", caption: "Modelo nao identificado na imagem." },
    { src: official("genie-01.jpeg"), alt: "Cesto de plataforma articulada Genie", caption: "Modelo nao identificado na imagem." },
    { src: official("plataformas-02.jpeg"), alt: "Plataforma articulada Genie em operacao interna", caption: "Modelo nao identificado na imagem." },
    { src: official("plataformas-03.jpeg"), alt: "Plataforma articulada Genie em operacao entre estruturas", caption: "Modelo nao identificado na imagem." },
    { src: official("plataformas-04.jpeg"), alt: "Plataforma articulada Genie em ambiente industrial", caption: "Modelo nao identificado na imagem." },
    { src: official("plataformas-08.jpeg"), alt: "Plataforma articulada Genie em operacao industrial", caption: "Modelo nao identificado na imagem." },
    { src: official("plataformas-09.jpeg"), alt: "Plataformas articuladas Genie da frota Accesslift", caption: "Modelos nao identificados na imagem." },
  ],
  "plataformas-tesoura": [
    { src: official("skyjet.jpeg"), alt: "Plataforma tesoura Skyjack da frota Accesslift", caption: "Modelo nao identificado na imagem." },
  ],
} satisfies Record<string, OfficialMediaItem[]>;
