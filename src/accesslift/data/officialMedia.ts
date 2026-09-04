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
    src: asset("empresa/empresa.jpeg"),
    alt: "Operação da Access Lift em ambiente industrial",
    width: 1086,
    height: 1448,
  },
  {
    src: asset("empresa/empresa-01.jpeg"),
    alt: "Plataforma elevatória da Access Lift em operação",
    width: 720,
    height: 1280,
  },
  {
    src: asset("empresa/empresa-02.jpeg"),
    alt: "Equipe da Access Lift no escritório",
    width: 900,
    height: 1600,
  },
];

export const deliveryGallery: OfficialMediaItem[] = [
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-04.jpeg"), alt: "Caminhão transportando plataformas elevatórias", width: 1280, height: 957 },
  { src: asset("logistica/entrega-retirada-plataforma-frota.jpeg"), alt: "Entrega de plataformas elevatórias por caminhão", width: 957, height: 1280 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria.jpeg"), alt: "Transporte de plataforma elevatória pela frota da Access Lift", width: 868, height: 1160 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-01.jpeg"), alt: "Entrega de plataforma elevatória pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-02.jpeg"), alt: "Plataforma elevatória transportada pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-03.jpeg"), alt: "Entrega de plataforma JLG pela frota própria", width: 720, height: 1280 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-05.jpeg"), alt: "Entrega urbana de plataforma elevatória pela frota própria", width: 957, height: 1280 },
  { src: asset("logistica/entrega-retirada-plataforma-frota-propria-06.jpeg"), alt: "Entrega de plataformas elevatórias em obra", width: 957, height: 1280 },
];

export const trainingGallery: OfficialMediaItem[] = [
  { src: asset("servicos/treinamento-assistencia.jpeg"), alt: "Treinamento para operação de plataforma elevatória", width: 960, height: 1280 },
  { src: asset("servicos/treinamento-assistencia-01.jpeg"), alt: "Treinamento de plataforma elevatória em ambiente industrial", width: 960, height: 1280 },
  { src: asset("servicos/treinamento-assistencia-02.jpeg"), alt: "Assistência técnica em plataforma elevatória compacta", width: 960, height: 1280 },
  { src: asset("servicos/treinamento-assistencia-03.jpeg"), alt: "Profissional realizando assistência em plataforma elevatória", width: 960, height: 1280 },
];

export const operationGallery: OfficialMediaItem[] = [
  { src: asset("operacoes/plataformas-01.jpeg"), alt: "Plataforma articulada em operação dentro de ambiente industrial", width: 1086, height: 1448 },
  { src: asset("operacoes/plataformas.jpeg"), alt: "Plataformas articuladas reunidas em ambiente industrial", width: 896, height: 1195 },
  { src: asset("operacoes/plataformas-02.jpeg"), alt: "Cesto de plataforma articulada próximo ao teto", width: 1200, height: 1600 },
  { src: asset("operacoes/plataformas-03.jpeg"), alt: "Plataforma articulada trabalhando em estrutura interna", width: 1600, height: 1200 },
  { src: asset("operacoes/plataformas-04.jpeg"), alt: "Plataforma elevatória utilizada em operação interna de galpão", width: 1200, height: 1600 },
  { src: asset("operacoes/plataformas-05.jpeg"), alt: "Operação com plataformas elevatórias da Accesslift", width: 1600, height: 739 },
  { src: asset("operacoes/plataformas-06.jpeg"), alt: "Plataforma elevatória em operação comercial", width: 1280, height: 960 },
  { src: asset("operacoes/plataformas-07.jpeg"), alt: "Transporte e operação de plataformas elevatórias", width: 1599, height: 899 },
  { src: asset("operacoes/plataformas-08.jpeg"), alt: "Plataforma articulada elevada em estrutura interna", width: 1200, height: 1600 },
  { src: asset("operacoes/plataformas-09.jpeg"), alt: "Plataforma elevatória usada em trabalho industrial", width: 960, height: 1280 },
];

export const categoryGalleryBySlug = {
  "plataformas-articuladas": [
    { src: asset("equipamentos/zoomlion/Zoomlion-ZA14JE.jpeg"), alt: "Plataforma articulada Zoomlion em ambiente operacional", width: 957, height: 1280, caption: "Plataforma articulada em operação." },
    { src: asset("equipamentos/genie/genie-z34-22-02.jpeg"), alt: "Cesto de plataforma articulada Genie visto de frente", width: 957, height: 1280, caption: "Genie Z-34/22." },
    { src: asset("equipamentos/genie/genie-z34-22-01.jpeg"), alt: "Vista traseira de plataforma articulada Genie", width: 957, height: 1280, caption: "Genie Z-34/22." },
    { src: asset("equipamentos/genie/genie-z34-22-03.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento Lubrax", width: 957, height: 1280, caption: "Genie Z-34/22 em evento externo." },
    { src: asset("equipamentos/genie/genie-z34-22-04.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento BYD e Ford", width: 957, height: 1280, caption: "Genie Z-34/22 em evento externo." },
  ],
  "plataformas-tesoura": [
    { src: asset("equipamentos/skyjack/skyjet.jpeg"), alt: "Plataforma tesoura Skyjack da frota Access Lift", width: 957, height: 1280, caption: "Modelo não identificado na imagem." },
  ],
} satisfies Record<string, OfficialMediaItem[]>;
