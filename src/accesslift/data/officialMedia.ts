export type OfficialMediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

const official = (filename: string) => `/images/accesslift/oficiais/${filename}`;

export const companyGallery: OfficialMediaItem[] = [
  { src: official("empresa-01.jpeg"), alt: "Frota de plataformas elevatorias da Accesslift" },
  { src: official("empresa-02.jpeg"), alt: "Patio operacional da Accesslift" },
  { src: official("plataformas.jpeg"), alt: "Plataformas elevatorias da frota Accesslift" },
  { src: official("plataformas-01.jpeg"), alt: "Plataformas elevatorias em operacao pela Accesslift" },
  { src: official("plataformas-02.jpeg"), alt: "Frota de plataformas elevatorias Accesslift" },
  { src: official("plataformas-03.jpeg"), alt: "Equipamentos da frota Accesslift" },
  { src: official("plataformas-04.jpeg"), alt: "Plataformas elevatorias para acesso em altura" },
  { src: official("plataformas-05.jpeg"), alt: "Entrega de plataformas JLG pela Accesslift" },
  { src: official("plataformas-06.jpeg"), alt: "Equipamentos da Accesslift em ambiente operacional" },
  { src: official("plataformas-07.jpeg"), alt: "Frota Accesslift em entrega de plataformas elevatorias" },
  { src: official("plataformas-08.jpeg"), alt: "Plataformas elevatorias da frota Accesslift" },
  { src: official("plataformas-09.jpeg"), alt: "Equipamentos Accesslift preparados para operacao" },
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
];

export const trainingGallery: OfficialMediaItem[] = [
  { src: official("treinamento-assistencia.jpeg"), alt: "Equipe Accesslift em atendimento em ambiente industrial" },
  { src: official("treinamento-assistencia-01.jpeg"), alt: "Equipe Accesslift em atividade de apoio operacional" },
  { src: official("treinamento-assistencia-02.jpeg"), alt: "Profissional Accesslift em ambiente de trabalho" },
  { src: official("treinamento-assistencia-03.jpeg"), alt: "Atendimento da equipe Accesslift em ambiente industrial" },
];

export const brandGallery: OfficialMediaItem[] = [
  { src: official("genie.jpeg"), alt: "Plataforma elevatoria Genie presente no acervo Accesslift" },
  { src: official("genie-0.jpeg"), alt: "Equipamento Genie no acervo fotografico Accesslift" },
  { src: official("genie-01.jpeg"), alt: "Plataforma Genie fotografada pela Accesslift" },
  { src: official("skyjet.jpeg"), alt: "Plataforma Skyjack presente no acervo Accesslift" },
];

export const pendingModelGallery: OfficialMediaItem[] = [
  {
    src: official("plataforma-tesoura-jlg-2630.jpg"),
    alt: "Plataforma tesoura JLG identificada no acervo como 2630",
    caption: "Modelo a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("skyjet-sj4732.jpeg"),
    alt: "Plataforma Skyjack identificada no acervo como SJ4732",
    caption: "Modelo a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("skyjet-sj4732-02.jpeg"),
    alt: "Plataforma Skyjack SJ4732 no acervo fotografico",
    caption: "Modelo a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("skyjet-sj4732-03.jpeg"),
    alt: "Plataforma Skyjack SJ4732 em outra perspectiva",
    caption: "Modelo a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("Zoomlion-ZS1212AC.jpeg"),
    alt: "Plataforma tesoura Zoomlion identificada no acervo como ZS1212AC",
    caption: "Variante a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("Zoomlion-ZS1212AC-01.jpeg"),
    alt: "Plataforma Zoomlion ZS1212AC em outra perspectiva",
    caption: "Variante a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("Zoomlion-ZA14JE.jpeg"),
    alt: "Plataforma articulada Zoomlion identificada no acervo como ZA14JE",
    caption: "Variante a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("Zoomlion-ZA14JE-01.jpeg"),
    alt: "Plataforma Zoomlion ZA14JE em outra perspectiva",
    caption: "Variante a confirmar antes de vincular ao catalogo.",
  },
  {
    src: official("Zoomlion-ZA14JE-LI.jpeg"),
    alt: "Plataforma Zoomlion ZA14JE no acervo fotografico",
    caption: "Variante a confirmar antes de vincular ao catalogo.",
  },
];
