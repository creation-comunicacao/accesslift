import type {
  Equipment,
  EquipmentBrand,
  EquipmentCategory,
  EquipmentCategorySlug,
  EquipmentSpecs,
  HeightRangeFilter,
} from "../types/equipment";

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "plataformas-tesoura",
    name: "Plataformas Tesoura",
    summary: "Categoria principal para trabalhos verticais com catalogo dinamico.",
  },
  {
    slug: "plataformas-articuladas",
    name: "Plataformas Articuladas",
    summary: "Categoria principal para aplicacoes com alcance horizontal quando aplicavel.",
  },
];

export const equipmentBrands = ["JLG", "Genie", "Skyjack", "Zoomlion"] as const;

type EquipmentSeed = {
  brand: EquipmentBrand;
  model: string;
  category: EquipmentCategorySlug;
  slug?: string;
  validateBeforePublish?: boolean;
};

const categoryLabelBySlug: Record<EquipmentCategorySlug, string> = {
  "plataformas-tesoura": "Plataforma Tesoura",
  "plataformas-articuladas": "Plataforma Articulada",
};

const asset = (filename: string) => `/images/accesslift/${filename}`;

const officialImagesBySlug: Partial<
  Record<string, { mainImage: Equipment["mainImage"]; gallery: Equipment["gallery"] }>
> = {
  "jlg-1930es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-vista-lateral.jpeg"),
      alt: "Plataforma tesoura JLG 1930ES da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-vista-frontal.jpeg"), alt: "Vista frontal da plataforma tesoura JLG 1930ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-em-transporte.jpeg"), alt: "Transporte da plataforma JLG 1930ES pela Access Lift", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930es-catalogo.jpg"), alt: "Imagem de catálogo da plataforma tesoura JLG 1930ES", width: 286, height: 600 },
    ],
  },
  "jlg-2630es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-2630es.jpg"),
      alt: "Plataforma tesoura JLG 2630ES",
      width: 286,
      height: 600,
    },
    gallery: [],
  },
  "jlg-2632es": {
    mainImage: {
      src: asset("operacoes/plataforma-elevatoria-operacao-em-galpao.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em operação interna",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "jlg-3246es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-access-lift.jpeg"),
      alt: "Plataforma tesoura JLG 3246ES da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-vista-frontal.jpeg"), alt: "Vista frontal da plataforma tesoura JLG 3246ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-vista-lateral.jpeg"), alt: "Vista lateral da plataforma tesoura JLG 3246ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-em-operacao-interna.jpeg"), alt: "Plataforma tesoura JLG 3246ES em operação interna", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246es-detalhe-frota.jpeg"), alt: "Detalhe da plataforma tesoura JLG 3246ES da frota", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-3246-render.png"), alt: "Imagem de catálogo da plataforma tesoura JLG 3246", width: 317, height: 600 },
    ],
  },
  "jlg-e450aj": {
    mainImage: {
      src: asset("operacoes/plataforma-articulada-manutencao-em-estrutura.jpeg"),
      alt: "Imagem representativa de plataforma articulada em manutenção de estrutura",
      width: 1600,
      height: 1200,
    },
    gallery: [],
  },
  "genie-gs1930": {
    mainImage: {
      src: asset("operacoes/plataforma-elevatoria-manutencao-industrial.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em manutenção industrial",
      width: 960,
      height: 1280,
    },
    gallery: [],
  },
  "genie-gs2632": {
    mainImage: {
      src: asset("operacoes/plataforma-articulada-trabalho-proximo-ao-teto.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em trabalho próximo ao teto",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "genie-z34": {
    mainImage: {
      src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-principal.jpeg"),
      alt: "Plataforma articulada Genie Z-34/22 da Access Lift",
      width: 868,
      height: 1160,
    },
    gallery: [
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-em-operacao.jpeg"), alt: "Plataforma Genie Z-34/22 em operação", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-detalhe-cesto.jpeg"), alt: "Cesto da plataforma articulada Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-evento-lubrax.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento Lubrax", width: 1197, height: 1600 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-22-evento-byd-ford.jpeg"), alt: "Plataforma articulada Genie Z-34/22 da Access Lift em evento BYD e Ford", width: 1197, height: 1600 },
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z34-render.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-34", width: 313, height: 599 },
      { src: asset("logistica/transporte-plataforma-genie-z34-22-frota-propria.jpeg"), alt: "Transporte da plataforma Genie Z-34/22 pela frota própria", width: 868, height: 1160 },
    ],
  },
  "genie-z45": {
    mainImage: {
      src: asset("equipamentos/genie/plataforma-articulada-genie-z45-25-principal.jpeg"),
      alt: "Plataforma articulada Genie Z-45 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/genie/plataforma-articulada-genie-z45.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-45", width: 286, height: 600 },
    ],
  },
  "skyjack-sj3219": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3219 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ3219", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3219", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3219-em-operacao.jpeg"), alt: "Plataforma tesoura Skyjack SJ3219 em operação", width: 957, height: 1280 },
    ],
  },
  "skyjack-sj3226": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3226-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3226 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [{ src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj3226-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3226", width: 957, height: 1280 }],
  },
  "skyjack-sj4732": {
    mainImage: {
      src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-principal.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ4732 da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-vista-lateral.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ4732", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/plataforma-tesoura-skyjack-sj4732-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ4732", width: 957, height: 1280 },
    ],
  },
  "zoomlion-zs1212ac": {
    mainImage: {
      src: asset("equipamentos/zoomlion/plataforma-tesoura-zoomlion-zs1212ac-principal.jpeg"),
      alt: "Plataforma tesoura Zoomlion ZS1212AC da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/plataforma-tesoura-zoomlion-zs1212ac-vista-frontal.jpeg"), alt: "Vista frontal da plataforma Zoomlion ZS1212AC", width: 957, height: 1280 },
    ],
  },
  "zoomlion-za14je-li": {
    mainImage: {
      src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-vista-lateral.jpeg"),
      alt: "Plataforma articulada Zoomlion ZA14JE-Li da Access Lift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-vista-traseira.jpeg"), alt: "Vista traseira da plataforma Zoomlion ZA14JE-Li", width: 957, height: 1280 },
      { src: asset("equipamentos/zoomlion/plataforma-articulada-zoomlion-za14je-li-em-transporte.jpeg"), alt: "Plataforma Zoomlion ZA14JE-Li em transporte", width: 1170, height: 1273 },
      { src: asset("logistica/entrega-plataforma-zoomlion-za14je-li-frota-propria.jpeg"), alt: "Entrega da plataforma Zoomlion ZA14JE-Li pela frota própria", width: 957, height: 1280 },
    ],
  },
};

const equipmentSeeds: EquipmentSeed[] = [
  { brand: "JLG", model: "1930ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "2630ES", category: "plataformas-tesoura", slug: "jlg-2630es", validateBeforePublish: true },
  { brand: "JLG", model: "2632ES", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "JLG", model: "3246ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "E450AJ", category: "plataformas-articuladas", validateBeforePublish: true },
  { brand: "Genie", model: "GS-1930", category: "plataformas-tesoura", slug: "genie-gs1930" },
  { brand: "Genie", model: "GS-2632", category: "plataformas-tesoura", slug: "genie-gs2632", validateBeforePublish: true },
  { brand: "Genie", model: "Z-34/22", category: "plataformas-articuladas", slug: "genie-z34", validateBeforePublish: true },
  { brand: "Genie", model: "Z-45/25 DC", category: "plataformas-articuladas", slug: "genie-z45", validateBeforePublish: true },
  { brand: "Skyjack", model: "SJ3219", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ3226", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ4732", category: "plataformas-tesoura", validateBeforePublish: true },
  { brand: "Zoomlion", model: "ZS1212AC", category: "plataformas-tesoura", slug: "zoomlion-zs1212ac", validateBeforePublish: true },
  { brand: "Zoomlion", model: "ZA14JE-Li", category: "plataformas-articuladas", slug: "zoomlion-za14je-li", validateBeforePublish: true },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const heightRangeFilters: HeightRangeFilter[] = [
  { id: "ate-8m", label: "Ate 8 m", minMeters: null, maxMeters: 8 },
  { id: "8-a-10m", label: "8 m a 10 m", minMeters: 8, maxMeters: 10 },
  { id: "10-a-14m", label: "10 m a 14 m", minMeters: 10, maxMeters: 14 },
  { id: "14-a-16m", label: "14 m a 16 m", minMeters: 14, maxMeters: 16 },
];

const modelApplicationsByCategory: Record<EquipmentCategorySlug, string[]> = {
  "plataformas-tesoura": [
    "Manutencao predial e industrial",
    "Instalacoes em ambientes internos",
    "Montagens e operacoes com elevacao vertical",
  ],
  "plataformas-articuladas": [
    "Acesso a pontos com obstaculos",
    "Manutencao de estruturas e instalacoes",
    "Operacoes com necessidade de alcance horizontal",
  ],
};

const createEquipmentOverview = (seed: EquipmentSeed, categoryLabel: string) => {
  if (seed.category === "plataformas-tesoura") {
    return `A ${seed.brand} ${seed.model} e uma ${categoryLabel.toLowerCase()} da frota Accesslift voltada a trabalhos em altura com elevacao predominantemente vertical. O modelo deve ser considerado quando a operacao permite posicionar a maquina abaixo ou proxima ao ponto de trabalho e exige comparacao de altura, capacidade, dimensoes e acesso ao local.`;
  }

  return `A ${seed.brand} ${seed.model} e uma ${categoryLabel.toLowerCase()} da frota Accesslift para operacoes que combinam altura com necessidade de alcance horizontal. A escolha desse tipo de equipamento deve considerar obstaculos, espaco de posicionamento, capacidade e as condicoes reais do ponto de acesso.`;
};

const createEquipmentConsideration = (seed: EquipmentSeed) => {
  if (seed.category === "plataformas-tesoura") {
    return `Considere a ${seed.brand} ${seed.model} quando o trabalho exigir elevacao vertical, area de plataforma para operador e ferramentas e condicoes de acesso compativeis com as dimensoes do equipamento.`;
  }

  return `Considere a ${seed.brand} ${seed.model} quando o ponto de trabalho nao estiver diretamente acima da base do equipamento ou quando houver estruturas, fachadas, instalacoes ou outros obstaculos a contornar.`;
};

const createEquipmentCharacteristics = (specs: EquipmentSpecs, seed: EquipmentSeed) =>
  [
    specs.alturaTrabalho ? `Altura de trabalho: ${specs.alturaTrabalho}` : null,
    specs.capacidade ? `Capacidade: ${specs.capacidade}` : null,
    specs.alcanceHorizontal ? `Alcance horizontal: ${specs.alcanceHorizontal}` : null,
    specs.alimentacao ? `Alimentacao: ${specs.alimentacao}` : null,
    seed.category === "plataformas-tesoura"
      ? "Movimentacao predominantemente vertical"
      : "Altura combinada com alcance horizontal",
  ].filter((item): item is string => Boolean(item));

const createEquipmentFaq = (seed: EquipmentSeed, specs: EquipmentSpecs) => [
  {
    question: `Qual a altura de trabalho da ${seed.brand} ${seed.model}?`,
    answer: specs.alturaTrabalho
      ? `A altura de trabalho cadastrada para a ${seed.brand} ${seed.model} e ${specs.alturaTrabalho}.`
      : `A altura de trabalho da ${seed.brand} ${seed.model} deve ser confirmada com a equipe Accesslift antes da locacao.`,
  },
  {
    question: `Qual a capacidade da plataforma ${seed.brand} ${seed.model}?`,
    answer: specs.capacidade
      ? `A capacidade cadastrada para a ${seed.brand} ${seed.model} e ${specs.capacidade}.`
      : `A capacidade da ${seed.brand} ${seed.model} ainda precisa ser confirmada na ficha tecnica correta do equipamento.`,
  },
  {
    question: `A ${seed.brand} ${seed.model} e eletrica?`,
    answer: specs.alimentacao
      ? `A alimentacao cadastrada para este equipamento e ${specs.alimentacao.toLowerCase()}.`
      : "A alimentacao deve ser confirmada com a Accesslift conforme a versao disponivel para locacao.",
  },
  {
    question: `Para quais aplicacoes a ${seed.brand} ${seed.model} pode ser utilizada?`,
    answer: seed.category === "plataformas-tesoura"
      ? "Pode ser considerada para trabalhos com elevacao predominantemente vertical, desde que altura, capacidade, acesso e condicoes do local sejam compativeis."
      : "Pode ser considerada para trabalhos que exigem altura e alcance horizontal, especialmente quando ha obstaculos ou acesso lateral ao ponto de trabalho.",
  },
  {
    question: "Como consultar disponibilidade?",
    answer: `Use o botao de disponibilidade na pagina da ${seed.brand} ${seed.model}. O formulario de orcamento recebe automaticamente o equipamento selecionado.`,
  },
];

type EquipmentContentOverride = {
  summary?: string;
  overview?: string;
  considerationText?: string;
  characteristics?: string[];
  applications?: string[];
  faq?: Equipment["faq"];
  seo?: Partial<Equipment["seo"]>;
  oldUrl?: string | null;
  technicalDataSource?: string | null;
};

const sharedScissorApplications = [
  "Manutencao industrial",
  "Instalacoes eletricas e infraestrutura",
  "Manutencao de iluminacao",
  "Montagens",
  "Construcao civil",
  "Instalacoes comerciais",
  "Supermercados, hipermercados e atacados",
];

const sharedArticulatedApplications = [
  "Manutencao industrial",
  "Instalacoes eletricas",
  "Iluminacao",
  "Infraestrutura",
  "Montagens",
  "Intervencoes em estruturas",
  "Construcao civil",
  "Instalacoes comerciais com obstaculos",
  "Supermercados, hipermercados e atacados",
];

const equipmentSpecsBySlug: Record<string, Partial<EquipmentSpecs>> = {
  "jlg-1930es": {
    alturaTrabalho: "7,72 m",
    alimentacao: "Eletrica",
  },
  "jlg-2632es": {
    alturaTrabalho: "9,77 m",
    alturaPlataforma: "7,77 m",
    capacidade: "230 kg",
    alimentacao: "Eletrica",
    largura: "0,81 m",
    comprimento: "2,30 m",
    dimensaoPlataforma: "0,76 x 2,30 m",
    extensaoDeck: "0,90 m",
    alturaRecolhida: "1,98 m com guarda-corpo dobrado",
    distanciaEntreEixos: "1,88 m",
  },
  "jlg-3246es": {
    alturaTrabalho: "11,68 m",
    alturaPlataforma: "9,68 m",
    capacidade: "320 kg",
    alimentacao: "Eletrica",
    largura: "1,17 m",
    comprimento: "2,50 m",
    dimensaoPlataforma: "1,12 x 2,50 m",
    extensaoDeck: "1,27 m",
    alturaRecolhida: "2,01 m com guarda-corpo dobrado",
    distanciaEntreEixos: "2,09 m",
    peso: "2.905 kg",
  },
  "jlg-e450aj": {
    alturaTrabalho: "15,72 m",
    alturaPlataforma: "13,72 m",
    capacidade: "230 kg*",
    alimentacao: "Eletrica",
    largura: "1,75 m",
    alturaRecolhida: "2,01 m",
    dimensaoPlataforma: "0,76 x 1,52 m",
    raioGiro: "360 graus nao continuo",
    raioGiroInterno: "0,61 m",
    raioGiroExterno: "3,15 m",
    sistemaEletrico: "48 V DC",
    alcanceHorizontal: "7,24 m",
    alturaSobreObstaculo: "7,70 m",
  },
  "genie-gs1930": {
    alturaTrabalho: "7,85 m interna / 6,30 m externa*",
    alturaPlataforma: "5,85 m interna*",
    capacidade: "227 kg",
    alimentacao: "Eletrica",
    largura: "0,76 m",
    comprimento: "1,83 m",
    dimensaoPlataforma: "aprox. 1,66 x 0,76 m",
    extensaoDeck: "0,91 m",
    peso: "1.456 kg*",
  },
  "genie-gs2632": {
    alturaTrabalho: "9,85 m interna / 7,33 m externa",
    alturaPlataforma: "7,85 m interna / 5,33 m externa",
    capacidade: "227 kg",
    alimentacao: "Eletrica AC E-Drive",
    largura: "0,81 m",
    comprimento: "2,36 m",
    dimensaoPlataforma: "aprox. 2,16 x 0,78 m",
    extensaoDeck: "0,91 m",
    peso: "2.037 kg",
  },
  "genie-z34": {
    alturaTrabalho: "12,52 m",
    alturaPlataforma: "10,52 m",
    capacidade: "227 kg",
    alimentacao: "Eletrica",
    alcanceHorizontal: "6,78 m",
  },
  "genie-z45": {
    alturaTrabalho: "15,8 m",
    alturaPlataforma: "13,8 m",
    capacidade: "227 kg",
    alimentacao: "Eletrica - DC",
    largura: "1,79 m",
    comprimento: "5,56 m recolhido",
    alturaRecolhida: "2,0 m",
    sistemaEletrico: "48 V DC",
  },
  "skyjack-sj3219": {
    alturaTrabalho: "7,65 m*",
    alturaPlataforma: "5,65 m*",
    capacidade: "227 kg",
    alimentacao: "Eletrica",
    largura: "0,81 m",
    comprimento: "1,80 m",
    dimensaoPlataforma: "0,66 x 1,55 m",
    extensaoDeck: "0,91 m",
    peso: "1.476 kg",
    raioGiroInterno: "0",
  },
  "skyjack-sj3226": {
    alturaTrabalho: "9,79 m*",
    alturaPlataforma: "7,79 m",
    capacidade: "227 kg",
    alimentacao: "Eletrica",
    largura: "0,81 m",
    comprimento: "2,32 m",
    dimensaoPlataforma: "0,71 x 2,11 m",
    extensaoDeck: "0,91 m",
    peso: "1.900 kg",
    raioGiroInterno: "1,09 m",
    raioGiroExterno: "2,64 m",
  },
  "skyjack-sj4732": {
    alturaTrabalho: "11,65 m*",
    alturaPlataforma: "9,65 m*",
    capacidade: "318 kg*",
    alimentacao: "Eletrica",
    largura: "1,19 m*",
    comprimento: "2,32 m*",
    dimensaoPlataforma: "1,07 x 2,11 m*",
    extensaoDeck: "1,22 m*",
    peso: "2.571 kg*",
  },
  "zoomlion-zs1212ac": {
    alturaTrabalho: "13,80 m interna / 10 m externa*",
    alturaPlataforma: "11,80 m interna / 8 m externa*",
    capacidade: "350 kg",
    alimentacao: "Eletrica",
    largura: "1,15 m",
    comprimento: "2,49 m",
    dimensaoPlataforma: "2,30 x 1,12 m",
    extensaoDeck: "0,91 m",
    alturaRecolhida: "2,66 m com guarda-corpo",
    distanciaEntreEixos: "1,85 m",
    peso: "3.000 kg",
    raioGiroInterno: "0,10 m",
    raioGiroExterno: "2,20 m",
  },
  "zoomlion-za14je-li": {
    alturaTrabalho: "16,00 m",
    alturaPlataforma: "14,00 m",
    capacidade: "230 kg",
    alimentacao: "Eletrica",
    bateria: "Li-ion 48 V / 315 Ah",
    largura: "1,75 m",
    comprimento: "6,60 m recolhida",
    alturaRecolhida: "2,00 m",
    dimensaoPlataforma: "1,52 x 0,76 m",
    distanciaEntreEixos: "2,05 m",
    distanciaSolo: "0,20 m",
    peso: "6.800 kg",
    raioGiroInterno: "0,79 m",
    raioGiroExterno: "3,15 m",
  },
};

const equipmentContentBySlug: Record<string, EquipmentContentOverride> = {
  "jlg-2630es": {
    summary: "Plataforma tesoura eletrica para trabalhos de elevacao vertical, com configuracao mais estreita dentro da faixa de altura correspondente.",
    overview: "A JLG 2630ES amplia as opcoes de plataforma tesoura da Accesslift para operacoes em que altura e largura da maquina precisam ser avaliadas em conjunto. A principal diferenca pratica informada em relacao a 2632ES e a largura: a 2630ES e a configuracao mais estreita, enquanto ambas trabalham em faixa semelhante de altura.",
    considerationText: "Pode ser considerada quando o trabalho exige elevacao vertical, largura da maquina e um criterio relevante, nao existe necessidade de alcance articulado e acesso, piso e condicoes do local sao compativeis.",
    characteristics: ["Configuracao mais estreita que a JLG 2632ES", "Elevacao predominantemente vertical", "Alimentacao eletrica", "Dados numericos dependem da ficha 2630ES validada"],
    applications: sharedScissorApplications,
    faq: [
      { question: "A JLG 2630ES e a mesma maquina que a 2632ES?", answer: "Nao. O cadastro deve permanecer separado. Uma das principais diferencas praticas informadas e a largura." },
      { question: "Por que alguns dados tecnicos nao aparecem?", answer: "Porque a ficha especifica da 2630ES ainda precisa ser validada. Dados de uma maquina parecida nao devem ser copiados." },
      { question: "Quando considerar a JLG 2630ES?", answer: "Quando a operacao exige elevacao vertical e a largura do equipamento e um criterio relevante para acesso e circulacao." },
    ],
    seo: {
      title: "JLG 2630ES: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura eletrica JLG 2630ES para locacao, indicada para elevacao vertical com configuracao estreita. Consulte disponibilidade.",
      h1: "Plataforma Tesoura JLG 2630ES",
    },
    oldUrl: "/site/index.php/modelos/plataformas-tesoura-accesslift/jlg-2630es",
  },
  "jlg-2632es": {
    summary: "Plataforma tesoura eletrica para trabalhos de elevacao vertical, com configuracao mais larga que a JLG 2630ES em faixa semelhante de altura.",
    overview: "A JLG 2632ES e uma plataforma tesoura eletrica para operacoes em que o acesso ao trabalho ocorre predominantemente na vertical. Dentro da frota Accesslift, ela complementa a JLG 2630ES oferecendo uma configuracao mais larga, conforme confirmado pela equipe da empresa.",
    considerationText: "Considere a JLG 2632ES quando a faixa de altura atende a operacao, aproximadamente 81 cm de largura sao compativeis com o acesso e nao ha necessidade de contornar obstaculos com lanca articulada.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da JLG 2632ES?", answer: "A documentacao historica JLG consultada registra 9,77 m de altura de trabalho." },
      { question: "Qual a capacidade da JLG 2632ES?", answer: "A capacidade cadastrada a partir da documentacao historica e 230 kg." },
      { question: "Qual a diferenca entre 2630ES e 2632ES?", answer: "Uma das principais diferencas praticas e a largura. A escolha tambem deve considerar acesso, circulacao, plataforma, capacidade e demais caracteristicas tecnicas." },
    ],
    seo: {
      title: "JLG 2632ES: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura eletrica JLG 2632ES para locacao, suas caracteristicas e aplicacoes em trabalhos de elevacao vertical.",
      h1: "Plataforma Tesoura JLG 2632ES",
    },
    technicalDataSource: "Documentacao historica JLG 2632ES - validar serial antes do go-live",
  },
  "jlg-3246es": {
    summary: "Plataforma elevatoria tesoura eletrica para trabalhos que exigem elevacao vertical e plataforma ampla para manutencao, instalacao e montagem.",
    overview: "A JLG 3246ES e uma plataforma tesoura eletrica para operacoes nas quais o ponto de trabalho pode ser acessado predominantemente na vertical. Sua plataforma oferece espaco para operador, ferramentas e materiais dentro dos limites de capacidade da maquina, enquanto o deck extensivel amplia a area util de posicionamento.",
    considerationText: "Considere a JLG 3246ES quando a operacao exige altura proxima de 12 m, area de trabalho maior, capacidade compativel e acesso adequado a aproximadamente 1,17 m de largura.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da JLG 3246ES?", answer: "A documentacao JLG consultada registra 11,68 m de altura de trabalho." },
      { question: "Qual a capacidade da JLG 3246ES?", answer: "A capacidade maxima registrada na documentacao consultada e 320 kg." },
      { question: "Quando escolher uma tesoura em vez de articulada?", answer: "Principalmente quando o acesso ao trabalho e vertical e nao ha necessidade de contornar obstaculos com uma lanca." },
    ],
    seo: {
      title: "JLG 3246ES: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura eletrica JLG 3246ES para locacao, suas dimensoes, capacidade e aplicacoes. Consulte disponibilidade com a Accesslift.",
      h1: "Plataforma Tesoura JLG 3246ES",
    },
    oldUrl: "/site/index.php/modelos/plataformas-tesoura-accesslift/jlg-3246es",
    technicalDataSource: "Documentacao JLG familia ES - validar configuracao da unidade",
  },
  "jlg-e450aj": {
    summary: "Plataforma elevatoria articulada eletrica para trabalhos que exigem altura combinada com alcance horizontal e acesso alem de obstaculos.",
    overview: "A JLG E450AJ e uma plataforma articulada eletrica indicada para situacoes em que a elevacao vertical, sozinha, nao atende as caracteristicas do trabalho. Sua lanca articulada permite combinar altura e alcance horizontal, facilitando o posicionamento quando estruturas, instalacoes, maquinas ou outros obstaculos impedem que o equipamento fique diretamente abaixo do ponto de execucao.",
    considerationText: "A E450AJ pode ser considerada quando a operacao exige faixa proxima de 16 m de altura de trabalho, alcance horizontal, obstaculos entre a maquina e o ponto de execucao e acesso, piso e espaco compativeis.",
    characteristics: ["15,72 m de altura de trabalho", "7,24 m de alcance horizontal", "Capacidade de 230 kg sujeita a validacao da unidade", "Alimentacao eletrica", "Jib articulado"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da JLG E450AJ?", answer: "A documentacao tecnica da JLG informa altura de trabalho de 15,72 m." },
      { question: "Qual o alcance horizontal da E450AJ?", answer: "A ficha tecnica consultada informa 7,24 m de alcance horizontal." },
      { question: "A JLG E450AJ e eletrica?", answer: "Sim. A JLG classifica a E450AJ como plataforma articulada eletrica." },
      { question: "Qual a capacidade da plataforma?", answer: "A pagina trabalha com 230 kg, mas a ficha correspondente a unidade Accesslift deve ser a referencia definitiva antes do go-live." },
    ],
    seo: {
      title: "JLG E450AJ: Plataforma Articulada Eletrica | Accesslift",
      description: "Conheca a plataforma articulada eletrica JLG E450AJ para locacao, com ate 15,72 m de altura de trabalho e alcance horizontal. Consulte disponibilidade.",
      h1: "Plataforma Articulada Eletrica JLG E450AJ",
    },
    technicalDataSource: "Documentacao tecnica JLG E450AJ - validar capacidade/configuracao da unidade",
  },
  "genie-gs1930": {
    summary: "Plataforma tesoura eletrica compacta para trabalhos de elevacao vertical em operacoes onde largura e movimentacao sao criterios importantes.",
    overview: "A Genie GS-1930 e uma plataforma tesoura eletrica para operacoes em que o ponto de trabalho pode ser acessado predominantemente na vertical. Seu formato compacto facilita o posicionamento em locais onde largura e espaco de circulacao precisam ser considerados.",
    considerationText: "Considere a GS-1930 quando o trabalho exige elevacao vertical dentro da faixa da maquina, largura compacta e nao ha necessidade de contornar obstaculos com uma lanca.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie GS-1930?", answer: "A especificacao atual da Genie apresenta ate 7,85 m em condicao interna e 6,30 m em condicao externa. A especificacao definitiva deve ser vinculada ao serial da unidade." },
      { question: "Qual a capacidade da GS-1930?", answer: "A capacidade nominal cadastrada e 227 kg." },
      { question: "Qual a largura da maquina?", answer: "A especificacao atual indica aproximadamente 0,76 m de largura." },
    ],
    seo: {
      title: "Genie GS-1930: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura eletrica Genie GS-1930 para locacao, compacta para trabalhos de elevacao vertical. Consulte disponibilidade com a Accesslift.",
      h1: "Plataforma Tesoura Genie GS-1930",
    },
    technicalDataSource: "Documentacao atual Genie GS-1930 - validar serial para geracoes anteriores",
  },
  "genie-gs2632": {
    summary: "Plataforma tesoura eletrica para elevacao vertical, combinando faixa proxima de 10 m com largura compacta para acesso e circulacao.",
    overview: "A Genie GS-2632 e uma plataforma tesoura eletrica para operacoes em que o ponto de trabalho pode ser acessado predominantemente na vertical. Sua largura de aproximadamente 0,81 m e relevante quando acesso, circulacao e posicionamento precisam ser avaliados junto com a altura necessaria.",
    considerationText: "Pode ser considerada quando o trabalho exige elevacao vertical, faixa proxima de 10 m, largura de 0,81 m compativel com o acesso e nao existe necessidade de transpor obstaculos com uma lanca articulada.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie GS-2632?", answer: "A documentacao atual brasileira informa ate 9,85 m. A ficha internacional tambem diferencia condicoes interna e externa." },
      { question: "Qual a capacidade da GS-2632?", answer: "A capacidade cadastrada e 227 kg na especificacao atual." },
      { question: "Qual a diferenca entre GS-1930 e GS-2632?", answer: "Entre outros aspectos, a GS-2632 trabalha em uma faixa maior de altura. A escolha tambem deve considerar dimensoes, acesso, capacidade e piso." },
      { question: "Quando devo considerar uma plataforma articulada?", answer: "Quando a atividade exigir alcance horizontal ou transposicao de obstaculos alem da altura." },
    ],
    seo: {
      title: "Genie GS-2632: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura eletrica Genie GS-2632 para locacao, com formato estreito para trabalhos de elevacao vertical. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Genie GS-2632",
    },
    technicalDataSource: "Documentacao atual Genie GS-2632 - validar serial da unidade",
  },
  "genie-z34": {
    summary: "Plataforma elevatoria articulada eletrica para trabalhos que exigem altura combinada com alcance horizontal e acesso alem de obstaculos.",
    overview: "A Genie Z-34/22 e uma plataforma elevatoria articulada desenvolvida para operacoes em que nao basta alcancar o ponto de trabalho apenas verticalmente. Sua lanca articulada permite combinar altura e alcance horizontal, facilitando o posicionamento do operador quando estruturas, instalacoes, maquinas ou outros obstaculos impedem que o equipamento seja colocado diretamente abaixo do ponto de execucao.",
    considerationText: "A Genie Z-34/22 ganha relevancia quando a operacao exige alcance horizontal, existem obstaculos entre a maquina e a area de execucao e a altura necessaria esta dentro do envelope operacional.",
    characteristics: ["12,52 m de altura de trabalho", "6,78 m de alcance horizontal", "Capacidade de 227 kg", "Lanca articulada", "Alimentacao eletrica"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie Z-34/22?", answer: "As versoes eletricas pesquisadas na documentacao Genie apresentam altura maxima de trabalho de aproximadamente 12,52 m." },
      { question: "Qual o alcance horizontal da Genie Z-34/22?", answer: "A documentacao consultada para versoes eletricas apresenta alcance horizontal maximo de aproximadamente 6,78 m." },
      { question: "Qual a diferenca entre Z-34/22 e Z-45/25?", answer: "Uma diferenca evidente e a faixa de altura de trabalho. A Z-45/25 alcanca altura superior, mas a escolha tambem depende de alcance, dimensoes, acesso e operacao." },
    ],
    seo: {
      title: "Genie Z-34/22: Plataforma Articulada para Locacao | Accesslift",
      description: "Conheca a plataforma articulada eletrica Genie Z-34/22 para locacao, com altura e alcance horizontal para diferentes trabalhos. Consulte disponibilidade.",
      h1: "Plataforma Articulada Genie Z-34/22",
    },
    oldUrl: "/site/index.php/modelos/plataformas-articulada-accesslift/genie-z34",
    technicalDataSource: "Documentacao Genie Z-34/22 eletrica - validar variante por plaqueta/documentacao",
  },
  "genie-z45": {
    summary: "Plataforma elevatoria articulada eletrica DC para trabalhos em altura que tambem exigem alcance horizontal e acesso alem de obstaculos.",
    overview: "A Genie Z-45/25 DC combina elevacao e movimentacao articulada para operacoes em que o ponto de trabalho nao pode ser acessado apenas verticalmente. Sua configuracao permite posicionar a plataforma em altura e alcancar areas afastadas da base da maquina.",
    considerationText: "Pode ser considerada quando a operacao exige aproximadamente ate 16 m de altura de trabalho, alcance horizontal, obstaculos entre a maquina e o ponto de execucao e dimensoes compativeis com o local.",
    characteristics: ["Altura de trabalho de aproximadamente 15,8 m", "Capacidade de 227 kg", "Alimentacao eletrica DC", "Plataforma articulada", "Faixa superior a Genie Z-34/22"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie Z-45/25 DC?", answer: "A documentacao oficial consultada indica aproximadamente 15,8 m de altura maxima de trabalho." },
      { question: "Qual sua capacidade?", answer: "A capacidade maxima indicada e 227 kg." },
      { question: "Ela e eletrica?", answer: "Sim. A unidade fotografada da frota Accesslift possui identificacao Z-45/25 e DC Power." },
      { question: "Qual a diferenca entre Z-45/25 e Z-34/22?", answer: "A Z-45/25 alcanca faixa superior de altura, mas a decisao deve considerar alcance, dimensoes e condicoes da operacao." },
    ],
    seo: {
      title: "Genie Z-45/25 DC: Plataforma Articulada | Accesslift",
      description: "Conheca a plataforma articulada eletrica Genie Z-45/25 DC para locacao, indicada para trabalhos que exigem altura e alcance horizontal. Consulte disponibilidade.",
      h1: "Plataforma Articulada Genie Z-45/25 DC",
    },
    oldUrl: "/site/index.php/modelos/plataformas-articulada-accesslift/genie-z45",
    technicalDataSource: "Manual oficial Genie Z-45/25 DC - validar serial/configuracao",
  },
  "skyjack-sj3219": {
    summary: "Plataforma elevatoria tesoura compacta para trabalhos de elevacao vertical em operacoes nas quais largura e facilidade de acesso sao criterios importantes.",
    overview: "A SJ3219 combina elevacao vertical com largura total de aproximadamente 81 cm, caracteristica relevante para operacoes em que o espaco de circulacao e posicionamento precisa ser considerado com atencao.",
    considerationText: "Considere a SJ3219 quando a operacao exige elevacao vertical, equipamento relativamente estreito, circulacao em areas com acesso limitado e capacidade compativel com 227 kg.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Skyjack SJ3219?", answer: "A pagina oficial SJ3219 apresenta 7,65 m, mas a geracao da unidade deve ser confirmada por serial antes do dado definitivo." },
      { question: "Qual a capacidade?", answer: "A capacidade cadastrada como referencia e 227 kg." },
      { question: "Quando considerar a SJ3219?", answer: "Quando a operacao exige elevacao vertical compacta e largura do equipamento e um criterio importante." },
    ],
    seo: {
      title: "Skyjack SJ3219: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura Skyjack SJ3219 para locacao, compacta e indicada para trabalhos com elevacao vertical. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Skyjack SJ3219",
    },
    technicalDataSource: "Pagina oficial Skyjack SJ3219 - confirmar serial/geracao",
  },
  "skyjack-sj3226": {
    summary: "Plataforma tesoura para operacoes que exigem maior altura de trabalho mantendo largura total de aproximadamente 81 cm.",
    overview: "A SJ3226 combina uma faixa proxima de 10 metros de trabalho com largura total em torno de 81 cm. Isso nao significa que possa passar por qualquer acesso: portas, corredores, piso, altura recolhida e condicoes de manobra devem ser avaliados.",
    considerationText: "Considere a SJ3226 quando o trabalho exige elevacao vertical, faixa proxima de 10 m, largura da maquina e um criterio importante e nao ha necessidade de alcance articulado sobre obstaculos.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Skyjack SJ3226?", answer: "A Skyjack publica 9,79 m para a SJ3226 atual; pequenas variacoes dependem de geracao e serial." },
      { question: "Qual a largura da SJ3226?", answer: "A referencia cadastrada e aproximadamente 0,81 m." },
      { question: "Como comparar SJ3219, SJ3226 e SJ4732?", answer: "A SJ3219 e mais compacta, a SJ3226 amplia a altura mantendo largura semelhante, e a SJ4732 sobe em faixa superior com maior largura, plataforma e capacidade." },
    ],
    seo: {
      title: "Skyjack SJ3226: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura Skyjack SJ3226 para locacao, com formato estreito e elevacao vertical para diferentes operacoes. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Skyjack SJ3226",
    },
    technicalDataSource: "Pagina oficial Skyjack SJ3226 - confirmar serial/geracao",
  },
  "skyjack-sj4732": {
    summary: "Plataforma elevatoria tesoura para operacoes que exigem elevacao vertical combinada com maior area de plataforma e capacidade.",
    overview: "Dentro das Skyjack confirmadas na frota, a SJ4732 ocupa uma faixa superior a SJ3219 e SJ3226. Alem da altura, sua maior largura e area de plataforma tornam importante avaliar espaco de acesso e circulacao antes da escolha.",
    considerationText: "Pode ser considerada quando a operacao exige aproximadamente 12 m de faixa de trabalho, maior area de plataforma, acesso compativel com sua largura e elevacao predominantemente vertical.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Por que o catalogo nao tem Skyjack SJ4740?", answer: "A maquina real fotografada foi identificada como Skyjack SJ4732. O cadastro SJ4740 nao deve permanecer sem comprovacao do cliente." },
      { question: "Qual a altura de trabalho da SJ4732?", answer: "A referencia atual publicada pela Skyjack apresenta 11,65 m, mas a geracao/serial da unidade deve ser validada." },
      { question: "Qual a capacidade da SJ4732?", answer: "A referencia cadastrada e 318 kg, sujeita a confirmacao da geracao da unidade." },
    ],
    seo: {
      title: "Skyjack SJ4732: Plataforma Tesoura para Locacao | Accesslift",
      description: "Conheca a plataforma tesoura Skyjack SJ4732 para locacao, com maior area de plataforma e capacidade para trabalhos de elevacao vertical.",
      h1: "Plataforma Tesoura Skyjack SJ4732",
    },
    technicalDataSource: "Pagina atual Skyjack SJ4732 - confirmar geracao/serial",
  },
  "zoomlion-zs1212ac": {
    summary: "Plataforma elevatoria tesoura eletrica para operacoes que exigem maior altura de trabalho, capacidade e area de plataforma mantendo elevacao vertical.",
    overview: "A ZS1212AC amplia a faixa de altura disponivel entre as plataformas tesoura confirmadas da Accesslift. Alem da altura, possui capacidade nominal de 350 kg e plataforma extensivel, caracteristicas que devem ser consideradas junto com acesso, largura, piso e condicoes da operacao.",
    considerationText: "Pode ser considerada quando e necessaria maior faixa de elevacao vertical, a operacao comporta aproximadamente 1,15 m de largura, a capacidade e relevante e nao ha necessidade de lanca articulada.",
    characteristics: ["13,80 m de altura de trabalho interna / 10 m externa", "350 kg de capacidade", "Plataforma extensivel", "Sistema AC", "Elevacao predominantemente vertical"],
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da ZS1212AC?", answer: "A Zoomlion informa 13,80 m em condicao interna e 10 m em condicao externa para a especificacao correspondente." },
      { question: "Qual a capacidade?", answer: "A capacidade nominal publicada e 350 kg." },
      { question: "A ficha da ZS1212AC-Li pode ser usada?", answer: "Nao automaticamente. A ZS1212AC e a ZS1212AC-Li devem permanecer separadas quando houver diferencas de bateria e configuracao." },
    ],
    seo: {
      title: "Zoomlion ZS1212AC: Plataforma Tesoura | Accesslift",
      description: "Conheca a plataforma tesoura eletrica Zoomlion ZS1212AC, com 13,80 m de altura de trabalho e capacidade de 350 kg. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Zoomlion ZS1212AC",
    },
    technicalDataSource: "Documentacao Zoomlion ZS1212AC - condicao indoor/outdoor explicita",
  },
  "zoomlion-za14je-li": {
    summary: "Plataforma elevatoria articulada eletrica com bateria de ions de litio para trabalhos que combinam altura e alcance horizontal.",
    overview: "A Zoomlion ZA14JE-Li combina uma altura de trabalho de 16 metros com movimentacao de lanca articulada. Essa configuracao permite acessar pontos elevados mesmo quando nao e possivel posicionar a maquina diretamente abaixo da area de execucao. A versao Li utiliza bateria de ions de litio.",
    considerationText: "Pode ser considerada quando a operacao exige altura, alcance horizontal, capacidade e movimentacao articulada, principalmente quando nao existe possibilidade de posicionar a maquina diretamente abaixo do ponto de execucao.",
    characteristics: ["16 m de altura de trabalho", "230 kg de capacidade", "Bateria de ions de litio 48 V / 315 Ah", "Largura recolhida de 1,75 m", "Movimentacao articulada"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da ZA14JE-Li?", answer: "A altura maxima de trabalho documentada e de 16 metros." },
      { question: "Qual a capacidade da plataforma?", answer: "A capacidade nominal cadastrada e 230 kg." },
      { question: "A ZA14JE-Li e eletrica?", answer: "Sim. A variante Li utiliza bateria de ions de litio 48 V / 315 Ah." },
      { question: "Por que o alcance horizontal nao aparece?", answer: "Foram encontradas edicoes com diferenca entre 7,50 m e 8,10 m. O dado deve ficar pendente ate cruzamento com documento/serial da unidade." },
    ],
    seo: {
      title: "Zoomlion ZA14JE-Li: Plataforma Articulada | Accesslift",
      description: "Conheca a plataforma articulada eletrica Zoomlion ZA14JE-Li, com 16 m de altura de trabalho e capacidade de 230 kg. Consulte disponibilidade para locacao.",
      h1: "Plataforma Articulada Zoomlion ZA14JE-Li",
    },
    technicalDataSource: "Documentacao tecnica Zoomlion ZA14JE-Li - alcance horizontal pendente por divergencia entre edicoes",
  },
};

const createEquipment = (seed: EquipmentSeed): Equipment => {
  const categoryLabel = categoryLabelBySlug[seed.category];
  const slug = seed.slug || `${slugify(seed.brand)}-${slugify(seed.model)}`;
  const title = `${categoryLabel} ${seed.brand} ${seed.model}`;
  const officialImages = officialImagesBySlug[slug];
  const content = equipmentContentBySlug[slug];
  const specs: EquipmentSpecs = {
    alturaTrabalho: null,
    alturaPlataforma: null,
    capacidade: null,
    alimentacao: null,
    peso: null,
    largura: null,
    alcanceHorizontal: seed.category === "plataformas-articuladas" ? null : undefined,
    ...equipmentSpecsBySlug[slug],
  };

  return {
    id: slug,
    brand: seed.brand,
    model: seed.model,
    category: seed.category,
    slug,
    status: "draft",
    validationStatus: seed.validateBeforePublish ? "validate-before-publish" : "ready",
    mainImage: officialImages?.mainImage || {
      src: null,
      alt: `${title} - imagem principal a cadastrar`,
    },
    gallery: officialImages?.gallery || [],
    title,
    summary: content?.summary || `${categoryLabel} ${seed.brand} ${seed.model} para locacao, com dados tecnicos exibidos somente quando cadastrados e validados na base central.`,
    specs,
    images: officialImages ? [officialImages.mainImage, ...officialImages.gallery] : [],
    characteristics: content?.characteristics || createEquipmentCharacteristics(specs, seed),
    differentials: [
      "Dados tecnicos centralizados no cadastro do equipamento",
      "Orcamento com modelo selecionado automaticamente",
      "Locacao com entrega, retirada e suporte Accesslift",
    ],
    applications: content?.applications || modelApplicationsByCategory[seed.category],
    faq: content?.faq || createEquipmentFaq(seed, specs),
    technicalSheetPdf: null,
    manualPdf: null,
    manualVersion: null,
    manualLanguage: null,
    documentSource: null,
    documentUpdatedAt: null,
    oldUrl: content?.oldUrl || null,
    technicalDataSource: content?.technicalDataSource || null,
    overview: content?.overview || createEquipmentOverview(seed, categoryLabel),
    considerationText: content?.considerationText || createEquipmentConsideration(seed),
    rentalText: `Consulte a disponibilidade da ${seed.brand} ${seed.model} para locacao diaria, semanal ou mensal. A Accesslift realiza entrega e retirada dentro de sua area de atendimento e oferece suporte tecnico durante a locacao.`,
    seo: {
      title: content?.seo?.title || `${seed.brand} ${seed.model}: ${categoryLabel} para Locacao | Accesslift`,
      description: content?.seo?.description || `Conheca a plataforma ${categoryLabel.toLowerCase()} ${seed.brand} ${seed.model}: altura de trabalho, capacidade, especificacoes e aplicacoes. Consulte disponibilidade para locacao.`,
      h1: content?.seo?.h1 || title,
      canonical: `/equipamentos/${slug}/`,
      openGraphTitle: content?.seo?.openGraphTitle || `${title} | Accesslift`,
      openGraphDescription: content?.seo?.openGraphDescription || `Consulte disponibilidade da ${seed.brand} ${seed.model} para locacao com a Accesslift.`,
      indexDirective: content?.seo?.indexDirective || "noindex",
    },
  };
};

export const homeFeaturedEquipmentSlugs = [
  "jlg-1930es",
  "genie-z34",
  "jlg-3246es",
  "skyjack-sj4732",
  "zoomlion-zs1212ac",
  "zoomlion-za14je-li",
] as const;

export const mockEquipments: Equipment[] = equipmentSeeds.map(createEquipment);
