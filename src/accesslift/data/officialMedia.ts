export type OfficialMediaItem = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
};

const asset = (filename: string) => `/images/accesslift/${filename}`;

export const companyGallery: OfficialMediaItem[] = [
  {
    src: asset("empresa/operacao-access-lift-em-ambiente-industrial.jpeg"),
    alt: "Operação da Access Lift em ambiente industrial",
    width: 1086,
    height: 1448,
  },
  {
    src: asset("empresa/operacao-plataforma-elevatoria-access-lift.jpeg"),
    alt: "Plataforma elevatória da Access Lift em operação",
    width: 720,
    height: 1280,
  },
  {
    src: asset("empresa/equipe-access-lift-no-escritorio.jpeg"),
    alt: "Equipe da Access Lift no escritório",
    width: 900,
    height: 1600,
  },
];

export const deliveryGallery: OfficialMediaItem[] = [
  { src: asset("logistica/transporte-plataformas-elevatorias-caminhao-01.jpeg"), alt: "Caminhão transportando plataformas elevatórias", width: 1600, height: 739 },
  { src: asset("logistica/entrega-plataformas-elevatorias-caminhao-02.jpeg"), alt: "Entrega de plataformas elevatórias por caminhão", width: 1280, height: 960 },
  { src: asset("logistica/transporte-plataformas-elevatorias-frota-03.jpeg"), alt: "Transporte de plataformas elevatórias pela frota da Access Lift", width: 1599, height: 899 },
  { src: asset("logistica/entrega-plataforma-elevatoria-frota-propria-01.jpeg"), alt: "Entrega de plataforma elevatória pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-plataforma-elevatoria-frota-propria-02.jpeg"), alt: "Plataforma elevatória transportada pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-plataforma-jlg-frota-propria-03.jpeg"), alt: "Entrega de plataforma JLG pela frota própria", width: 720, height: 1280 },
  { src: asset("logistica/transporte-plataformas-frota-propria-04.jpeg"), alt: "Caminhão transportando mais de uma plataforma elevatória", width: 1280, height: 957 },
  { src: asset("logistica/entrega-plataforma-elevatoria-frota-propria-05.jpeg"), alt: "Entrega urbana de plataforma elevatória pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-plataformas-elevatorias-em-obra-06.jpeg"), alt: "Entrega de plataformas elevatórias em obra", width: 957, height: 1280 },
];

export const trainingGallery: OfficialMediaItem[] = [
  { src: asset("servicos/treinamento-operacao-plataforma-elevatoria.jpeg"), alt: "Treinamento para operação de plataforma elevatória", width: 960, height: 1280 },
  { src: asset("servicos/treinamento-plataforma-elevatoria-industria.jpeg"), alt: "Treinamento de plataforma elevatória em ambiente industrial", width: 960, height: 1280 },
  { src: asset("servicos/assistencia-tecnica-plataforma-elevatoria-compacta.jpeg"), alt: "Assistência técnica em plataforma elevatória compacta", width: 960, height: 1280 },
  { src: asset("servicos/assistencia-tecnica-em-plataforma-elevatoria.jpeg"), alt: "Profissional realizando assistência em plataforma elevatória", width: 960, height: 1280 },
];

export const operationGallery: OfficialMediaItem[] = [
  { src: asset("operacoes/plataforma-articulada-em-operacao-industrial-01.jpeg"), alt: "Plataforma articulada em operação dentro de ambiente industrial", width: 1086, height: 1448 },
  { src: asset("operacoes/plataformas-articuladas-em-ambiente-industrial.jpeg"), alt: "Plataformas articuladas reunidas em ambiente industrial", width: 896, height: 1195 },
  { src: asset("operacoes/plataforma-articulada-trabalho-proximo-ao-teto.jpeg"), alt: "Cesto de plataforma articulada próximo ao teto", width: 1200, height: 1600 },
  { src: asset("operacoes/plataforma-articulada-manutencao-em-estrutura.jpeg"), alt: "Plataforma articulada trabalhando em estrutura interna", width: 1600, height: 1200 },
  { src: asset("operacoes/plataforma-elevatoria-operacao-em-galpao.jpeg"), alt: "Plataforma elevatória utilizada em operação interna de galpão", width: 1200, height: 1600 },
  { src: asset("operacoes/plataforma-articulada-em-estrutura-industrial.jpeg"), alt: "Plataforma articulada elevada em estrutura interna", width: 1200, height: 1600 },
  { src: asset("operacoes/plataforma-elevatoria-manutencao-industrial.jpeg"), alt: "Plataforma elevatória usada em trabalho industrial", width: 960, height: 1280 },
];

export const categoryGalleryBySlug = {
  "plataformas-articuladas": [
    { src: asset("equipamentos/galeria/plataforma-articulada-genie-vista-operacional-01.jpeg"), alt: "Plataforma articulada Genie em ambiente operacional", width: 957, height: 1280, caption: "Modelo nao identificado na imagem." },
    { src: asset("equipamentos/galeria/plataforma-articulada-genie-cesto-frontal.jpeg"), alt: "Cesto de plataforma articulada Genie visto de frente", width: 957, height: 1280, caption: "Modelo nao identificado na imagem." },
    { src: asset("equipamentos/galeria/plataforma-articulada-genie-vista-traseira.jpeg"), alt: "Vista traseira de plataforma articulada Genie", width: 957, height: 1280, caption: "Modelo nao identificado na imagem." },
    { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-evento-lubrax.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento Lubrax", width: 1197, height: 1600, caption: "Genie Z-34/22 em evento externo." },
    { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-evento-byd-ford.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento BYD e Ford", width: 1197, height: 1600, caption: "Genie Z-34/22 em evento externo." },
  ],
  "plataformas-tesoura": [
    { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-frota-access-lift.jpeg"), alt: "Plataforma tesoura Skyjack da frota Access Lift", width: 957, height: 1280, caption: "Modelo nao identificado na imagem." },
  ],
} satisfies Record<string, OfficialMediaItem[]>;
