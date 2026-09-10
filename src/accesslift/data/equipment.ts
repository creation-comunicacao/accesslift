import type {
  Equipment,
  EquipmentBrand,
  EquipmentCategory,
  EquipmentCategorySlug,
  EquipmentSpecs,
  HeightRangeFilter,
  PublishStatus,
} from "../types/equipment";

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "plataformas-tesoura",
    name: "Plataformas Tesoura",
    summary: "Categoria principal para trabalhos verticais com catálogo dinâmico.",
  },
  {
    slug: "plataformas-articuladas",
    name: "Plataformas Articuladas",
    summary: "Categoria principal para aplicações com alcance horizontal quando aplicável.",
  },
];

export const equipmentBrands = ["JLG", "Genie", "Skyjack", "Zoomlion"] as const;

type EquipmentSeed = {
  brand: EquipmentBrand;
  model: string;
  category: EquipmentCategorySlug;
  slug?: string;
  publicationStatus?: PublishStatus;
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
      src: asset("equipamentos/jlg/jlg-1930ES.jpeg"),
      alt: "Plataforma tesoura JLG 1930ES da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/jlg-1930ES-01.jpeg"), alt: "Vista da plataforma tesoura JLG 1930ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/jlg-1930ES-02.jpeg"), alt: "Detalhe da plataforma tesoura JLG 1930ES", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/plataforma-tesoura-jlg-1930.jpg"), alt: "Imagem de catálogo da plataforma tesoura JLG 1930ES", width: 286, height: 600 },
    ],
  },
  "jlg-2630es": {
    mainImage: {
      src: asset("equipamentos/jlg/plataforma-tesoura-jlg-2630.jpg"),
      alt: "Imagem de catálogo da plataforma tesoura elétrica JLG 2630ES",
      width: 286,
      height: 600,
    },
    gallery: [],
  },
  "jlg-2632es": {
    mainImage: {
      src: asset("operacoes/plataformas-04.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em operação interna",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "jlg-3246es": {
    mainImage: {
      src: asset("equipamentos/jlg/jlg-3246ES.jpeg"),
      alt: "Plataforma tesoura JLG ES3246 da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/jlg/jlg-3246ES-01.jpeg"), alt: "Vista da plataforma tesoura JLG ES3246", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/jlg-3246ES-02.jpeg"), alt: "Vista lateral da plataforma tesoura JLG ES3246", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/jlg-3246ES-03.jpeg"), alt: "Plataforma tesoura JLG ES3246 em operação interna", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/jlg-3246ES-04.jpeg"), alt: "Detalhe da plataforma tesoura JLG ES3246 da frota", width: 957, height: 1280 },
      { src: asset("equipamentos/jlg/jlg-3246.png"), alt: "Imagem de catálogo da plataforma tesoura JLG 3246", width: 317, height: 600 },
    ],
  },
  "jlg-e450aj": {
    mainImage: {
      src: asset("equipamentos/jlg/jlg-e450aj-03.png"),
      alt: "Plataforma articulada JLG E450AJ da Accesslift com lança elevada",
      width: 1086,
      height: 1449,
    },
    gallery: [
      { src: asset("equipamentos/jlg/jlg-e450aj-02.png"), alt: "Vista traseira da JLG E450AJ da Accesslift", width: 1084, height: 1451 },
      { src: asset("equipamentos/jlg/jlg-e450aj-04.png"), alt: "Vista da plataforma articulada JLG E450AJ", width: 1084, height: 1451 },
      { src: asset("equipamentos/jlg/jlg-e450aj.jpg"), alt: "JLG E450AJ em trabalho em altura", width: 547, height: 547 },
      { src: asset("equipamentos/jlg/jlg-e450aj-01.jpg"), alt: "Detalhe da plataforma JLG E450AJ", width: 547, height: 547 },
      { src: asset("equipamentos/jlg/jlg-e450aj-plataforma.jpg"), alt: "Plataforma de trabalho da JLG E450AJ", width: 547, height: 547 },
    ],
  },
  "genie-gs1930": {
    mainImage: {
      src: asset("equipamentos/genie/genie.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em manutenção industrial",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/genie/genie-01.jpeg"), alt: "Imagem representativa de plataforma elevatória Genie", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/genie-0.jpeg"), alt: "Detalhe ilustrativo de plataforma elevatória Genie", width: 957, height: 1280 },
    ],
  },
  "genie-gs2632": {
    mainImage: {
      src: asset("operacoes/plataformas-02.jpeg"),
      alt: "Imagem representativa de plataforma elevatória em trabalho próximo ao teto",
      width: 1200,
      height: 1600,
    },
    gallery: [],
  },
  "genie-z34": {
    mainImage: {
      src: asset("equipamentos/genie/genie-z34-22.jpeg"),
      alt: "Plataforma articulada Genie Z-34/22 da Accesslift",
      width: 868,
      height: 1160,
    },
    gallery: [
      { src: asset("equipamentos/genie/genie-z34-22-01.jpeg"), alt: "Vista lateral da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/genie-z34-22-02.jpeg"), alt: "Vista frontal da plataforma Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/genie-z34-22-03.jpeg"), alt: "Plataforma Genie Z-34/22 em operação", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/genie-z34-22-04.jpeg"), alt: "Cesto da plataforma articulada Genie Z-34/22", width: 957, height: 1280 },
      { src: asset("equipamentos/genie/plataforma-articulada-z34-genie.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-34", width: 313, height: 599 },
    ],
  },
  "genie-z45": {
    mainImage: {
      src: asset("equipamentos/genie/genie-z45-25.jpeg"),
      alt: "Plataforma articulada Genie Z-45/25 DC da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/genie/plataforma-articulada-z45-genie.jpg"), alt: "Imagem de catálogo da plataforma articulada Genie Z-45/25 DC", width: 286, height: 600 },
    ],
  },
  "skyjack-sj3219": {
    mainImage: {
      src: asset("equipamentos/skyjack/skyjet-sj3219.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3219 E da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/skyjet-sj3219-01.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ3219 E", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/skyjet-sj3219-02.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3219 E", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/skyjet-sj3219-03.jpeg"), alt: "Plataforma tesoura Skyjack SJ3219 E em operação", width: 957, height: 1280 },
    ],
  },
  "skyjack-sj3226": {
    mainImage: {
      src: asset("equipamentos/skyjack/skyjet-sj3226.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ3226 E da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [{ src: asset("equipamentos/skyjack/skyjet-sj3226-01.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ3226 E", width: 957, height: 1280 }],
  },
  "skyjack-sj4732": {
    mainImage: {
      src: asset("equipamentos/skyjack/skyjet-sj4732.jpeg"),
      alt: "Plataforma tesoura Skyjack SJ4732 E da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/skyjack/skyjet-sj4732-02.jpeg"), alt: "Vista lateral da plataforma Skyjack SJ4732 E", width: 957, height: 1280 },
      { src: asset("equipamentos/skyjack/skyjet-sj4732-03.jpeg"), alt: "Vista frontal da plataforma Skyjack SJ4732 E", width: 957, height: 1280 },
    ],
  },
  "zoomlion-zs1212ac": {
    mainImage: {
      src: asset("equipamentos/zoomlion/Zoomlion-ZS1212AC.jpeg"),
      alt: "Plataforma tesoura Zoomlion ZS1212AC da Accesslift",
      width: 957,
      height: 1280,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/Zoomlion-ZS1212AC-01.jpeg"), alt: "Vista frontal da plataforma Zoomlion ZS1212AC", width: 957, height: 1280 },
    ],
  },
  "zoomlion-za14je-li": {
    mainImage: {
      src: asset("equipamentos/zoomlion/Zoomlion-ZA14JE-LI.jpeg"),
      alt: "Plataforma articulada Zoomlion ZA14JE-Li da Accesslift",
      width: 1170,
      height: 1273,
    },
    gallery: [
      { src: asset("equipamentos/zoomlion/Zoomlion-ZA14JE.jpeg"), alt: "Vista da plataforma Zoomlion ZA14JE-Li", width: 957, height: 1280 },
      { src: asset("equipamentos/zoomlion/Zoomlion-ZA14JE-01.jpeg"), alt: "Vista traseira da plataforma Zoomlion ZA14JE-Li", width: 957, height: 1280 },
    ],
  },
};

const equipmentSeeds: EquipmentSeed[] = [
  { brand: "JLG", model: "1930ES", category: "plataformas-tesoura" },
  { brand: "JLG", model: "2630ES", category: "plataformas-tesoura", slug: "jlg-2630es", publicationStatus: "published" },
  { brand: "JLG", model: "ES2632", slug: "jlg-2632es", category: "plataformas-tesoura" },
  { brand: "JLG", model: "ES3246", slug: "jlg-3246es", category: "plataformas-tesoura", publicationStatus: "published" },
  { brand: "JLG", model: "E450AJ", category: "plataformas-articuladas", validateBeforePublish: true },
  { brand: "Genie", model: "GS-1930", category: "plataformas-tesoura", slug: "genie-gs1930" },
  { brand: "Genie", model: "GS-2632", category: "plataformas-tesoura", slug: "genie-gs2632", validateBeforePublish: true },
  { brand: "Genie", model: "Z-34/22", category: "plataformas-articuladas", slug: "genie-z34", validateBeforePublish: true },
  { brand: "Genie", model: "Z-45/25 DC", category: "plataformas-articuladas", slug: "genie-z45", validateBeforePublish: true },
  { brand: "Skyjack", model: "SJ3219 E", slug: "skyjack-sj3219", category: "plataformas-tesoura" },
  { brand: "Skyjack", model: "SJ3226 E", slug: "skyjack-sj3226", category: "plataformas-tesoura", publicationStatus: "published" },
  { brand: "Skyjack", model: "SJ4732 E", slug: "skyjack-sj4732", category: "plataformas-tesoura" },
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
  { id: "ate-8m", label: "Até 8 m", minMeters: null, maxMeters: 8 },
  { id: "8-a-10m", label: "8 m a 10 m", minMeters: 8, maxMeters: 10 },
  { id: "10-a-14m", label: "10 m a 14 m", minMeters: 10, maxMeters: 14 },
  { id: "14-a-16m", label: "14 m a 16 m", minMeters: 14, maxMeters: 16 },
];

const modelApplicationsByCategory: Record<EquipmentCategorySlug, string[]> = {
  "plataformas-tesoura": [
    "Manutenção predial e industrial",
    "Instalações em ambientes internos",
    "Montagens e operações com elevação vertical",
  ],
  "plataformas-articuladas": [
    "Acesso a pontos com obstáculos",
    "Manutenção de estruturas e instalações",
    "Operações com necessidade de alcance horizontal",
  ],
};

const createEquipmentOverview = (seed: EquipmentSeed, categoryLabel: string) => {
  if (seed.category === "plataformas-tesoura") {
    return `A ${seed.brand} ${seed.model} é uma ${categoryLabel.toLowerCase()} da frota Accesslift voltada a trabalhos em altura com elevação predominantemente vertical. O modelo deve ser considerado quando a operação permite posicionar a máquina abaixo ou próxima ao ponto de trabalho e exige comparação de altura, capacidade, dimensões e acesso ao local.`;
  }

  return `A ${seed.brand} ${seed.model} é uma ${categoryLabel.toLowerCase()} da frota Accesslift para operações que combinam altura com necessidade de alcance horizontal. A escolha desse tipo de equipamento deve considerar obstáculos, espaço de posicionamento, capacidade e as condições reais do ponto de acesso.`;
};

const createEquipmentConsideration = (seed: EquipmentSeed) => {
  if (seed.category === "plataformas-tesoura") {
    return `Considere a ${seed.brand} ${seed.model} quando o trabalho exigir elevação vertical, área de plataforma para operador e ferramentas e condições de acesso compatíveis com as dimensões do equipamento.`;
  }

  return `Considere a ${seed.brand} ${seed.model} quando o ponto de trabalho não estiver diretamente acima da base do equipamento ou quando houver estruturas, fachadas, instalações ou outros obstáculos a contornar.`;
};

const createEquipmentCharacteristics = (specs: EquipmentSpecs, seed: EquipmentSeed) =>
  [
    specs.alturaTrabalho ? `Altura de trabalho: ${specs.alturaTrabalho}` : null,
    specs.capacidade ? `Capacidade: ${specs.capacidade}` : null,
    specs.alcanceHorizontal ? `Alcance horizontal: ${specs.alcanceHorizontal}` : null,
    specs.alimentacao ? `Alimentação: ${specs.alimentacao}` : null,
    seed.category === "plataformas-tesoura"
      ? "Movimentação predominantemente vertical"
      : "Altura combinada com alcance horizontal",
  ].filter((item): item is string => Boolean(item));

const createEquipmentFaq = (seed: EquipmentSeed, specs: EquipmentSpecs) => [
  {
    question: `Qual a altura ${specs.alturaTrabalho ? "de trabalho" : "da plataforma"} da ${seed.brand} ${seed.model}?`,
    answer: specs.alturaTrabalho
      ? `A altura de trabalho da ${seed.brand} ${seed.model} é ${specs.alturaTrabalho}.`
      : `A altura da plataforma da ${seed.brand} ${seed.model} é ${specs.alturaPlataforma}.`,
  },
  {
    question: `Qual a capacidade da plataforma ${seed.brand} ${seed.model}?`,
    answer: specs.capacidade
      ? `A capacidade da ${seed.brand} ${seed.model} é ${specs.capacidade}.`
      : `A capacidade da ${seed.brand} ${seed.model} ainda precisa ser confirmada na ficha técnica correta do equipamento.`,
  },
  {
    question: `A ${seed.brand} ${seed.model} é elétrica?`,
    answer: specs.alimentacao
      ? `A alimentação deste equipamento é ${specs.alimentacao.toLowerCase()}.`
      : "A alimentação deve ser confirmada com a Accesslift conforme a versão disponível para locação.",
  },
  {
    question: `Para quais aplicações a ${seed.brand} ${seed.model} pode ser utilizada?`,
    answer: seed.category === "plataformas-tesoura"
      ? "Pode ser considerada para trabalhos com elevação predominantemente vertical, desde que altura, capacidade, acesso e condições do local sejam compatíveis."
      : "Pode ser considerada para trabalhos que exigem altura e alcance horizontal, especialmente quando há obstáculos ou acesso lateral ao ponto de trabalho.",
  },
  {
    question: "Como consultar disponibilidade?",
    answer: `Use o botão de disponibilidade na página da ${seed.brand} ${seed.model}. O formulário de orçamento recebe automaticamente o equipamento selecionado.`,
  },
];

type EquipmentContentOverride = {
  summary?: string;
  overview?: string;
  considerationText?: string;
  rentalText?: string;
  characteristics?: string[];
  applications?: string[];
  faq?: Equipment["faq"];
  seo?: Partial<Equipment["seo"]>;
  oldUrl?: string | null;
  technicalDataSource?: string | null;
};

const sharedScissorApplications = [
  "Manutenção industrial",
  "Instalações elétricas e infraestrutura",
  "Manutenção de iluminação",
  "Montagens",
  "Construção civil",
  "Instalações comerciais",
  "Supermercados, hipermercados e atacados",
];

const sharedArticulatedApplications = [
  "Manutenção industrial",
  "Instalações elétricas",
  "Iluminação",
  "Infraestrutura",
  "Montagens",
  "Intervenções em estruturas",
  "Construção civil",
  "Instalações comerciais com obstáculos",
  "Supermercados, hipermercados e atacados",
];

const equipmentSpecsBySlug: Record<string, Partial<EquipmentSpecs>> = {
  "jlg-1930es": {
    alturaPlataforma: "5,70 m", capacidade: "227 kg", capacidadeExtensao: "113 kg",
    largura: "0,76 m", extensaoDeck: "0,90 m", alimentacao: "Elétrica",
  },
  "jlg-2630es": {
    alturaPlataforma: "7,77 m", capacidade: "363 kg sem restrição / 113 kg com restrição",
    capacidadeExtensao: "113 kg", largura: "0,76 m", extensaoDeck: "0,90 m", alimentacao: "Elétrica",
  },
  "jlg-2632es": {
    alturaPlataforma: "7,80 m interna", capacidade: "230 kg interna / 125 kg externa",
    capacidadeExtensao: "120 kg", largura: "0,81 m", extensaoDeck: "0,91 m", alimentacao: "Elétrica",
  },
  "jlg-3246es": {
    alturaPlataforma: "9,80 m", capacidade: "320 kg interna / 230 kg externa",
    capacidadeExtensao: "120 kg", largura: "1,17 m", extensaoDeck: "0,91 m", alimentacao: "Elétrica",
  },
  "jlg-e450aj": {
    alturaTrabalho: "15,72 m", alturaPlataforma: "13,72 m", alcanceHorizontal: "7,24 m",
    alturaSobreObstaculo: "7,70 m", capacidade: "227 kg", alimentacao: "Elétrica",
  },
  "genie-gs1930": {
    alturaTrabalho: "7,85 m interna / 6,47 m externa", alturaPlataforma: "5,85 m interna",
    capacidade: "227 kg", capacidadeExtensao: "113 kg", largura: "0,77 m", alimentacao: "Elétrica",
  },
  "genie-gs2632": {
    alturaTrabalho: "9,85 m interna / 7,33 m externa", alturaPlataforma: "7,85 m interna",
    capacidade: "227 kg", capacidadeExtensao: "113 kg", largura: "0,81 m",
    extensaoDeck: "0,91 m", alimentacao: "Elétrica",
  },
  "genie-z34": {
    alturaTrabalho: "12,50 m", alturaPlataforma: "10,50 m", alcanceHorizontal: "6,80 m",
    alturaSobreObstaculo: "4,50 m", capacidade: "227 kg", alimentacao: "Elétrica",
  },
  "genie-z45": {
    alturaTrabalho: "15,87 m", alturaPlataforma: "13,87 m", alcanceHorizontal: "7,37 m",
    alturaSobreObstaculo: "7,10 m", capacidade: "227 kg", alimentacao: "Elétrica – DC",
  },
  "skyjack-sj3219": {
    alturaTrabalho: "7,47 m", alturaPlataforma: "5,64 m", capacidade: "227 kg",
    capacidadeExtensao: "113 kg", largura: "0,81 m", extensaoDeck: "0,91 m", alimentacao: "Elétrica",
  },
  "skyjack-sj3226": {
    alturaTrabalho: "9,63 m", alturaPlataforma: "7,79 m", capacidade: "227 kg",
    capacidadeExtensao: "113 kg", largura: "0,81 m", extensaoDeck: "0,91 m", alimentacao: "Elétrica",
  },
  "skyjack-sj4732": {
    alturaTrabalho: "11,48 m", alturaPlataforma: "9,65 m", capacidade: "318 kg",
    capacidadeExtensao: "113 kg", largura: "1,20 m", extensaoDeck: "1,22 m", alimentacao: "Elétrica",
  },
  "zoomlion-zs1212ac": {
    alturaTrabalho: "13,80 m interna / 10 m externa", alturaPlataforma: "11,80 m interna / 8 m externa",
    capacidade: "350 kg", capacidadeExtensao: "113 kg", largura: "1,15 m",
    extensaoDeck: "0,91 m", alimentacao: "Elétrica – AC",
  },
  "zoomlion-za14je-li": {
    alturaTrabalho: "16,00 m", alturaPlataforma: "14,00 m", alcanceHorizontal: "8,10 m",
    alturaSobreObstaculo: "7,74 m", capacidade: "230 kg", alimentacao: "Elétrica – Li-ion",
  },
};
const equipmentContentBySlug: Record<string, EquipmentContentOverride> = {
  "jlg-1930es": {
    summary: "Plataforma tesoura elétrica compacta para trabalhos de elevação vertical, manutenção e instalações.",
  },
  "jlg-2630es": {
    summary: "Plataforma elevatória tesoura elétrica para trabalhos de elevação vertical, indicada para operações de manutenção, instalações e montagens em diferentes ambientes.",
    overview: "A JLG 2630ES é uma plataforma tesoura elétrica para trabalhos em que o acesso ao ponto de execução ocorre predominantemente na vertical. Seu formato favorece operações de manutenção, instalações e montagens em ambientes onde circulação e posicionamento do equipamento precisam ser considerados.\n\nA alimentação elétrica contribui para uma operação adequada a diferentes ambientes, sempre respeitando as condições de uso, acesso, piso e capacidade previstas para a máquina.",
    considerationText: "A JLG 2630ES pode ser considerada quando o trabalho exige elevação predominantemente vertical e uma plataforma tesoura elétrica é compatível com o ambiente da operação.\n\nPara definir o equipamento adequado, devem ser avaliados fatores como altura necessária, acesso ao local, dimensões disponíveis, capacidade requerida, condições do piso e características da atividade.\n\nA equipe da Accesslift pode auxiliar na escolha da plataforma de acordo com as informações da operação.",
    characteristics: [
      "Elevação vertical: configuração tesoura para trabalhos em altura com acesso predominantemente vertical.",
      "Alimentação elétrica: equipamento elétrico indicado para diferentes aplicações de manutenção, instalação e montagem.",
      "Plataforma com extensão: extensão da plataforma que amplia a área disponível para posicionamento durante a operação.",
      "Configuração compacta: dimensões que favorecem circulação e posicionamento em diferentes ambientes de trabalho.",
    ],
    applications: [
      "Manutenção industrial: apoio a trabalhos de manutenção e intervenções em altura.",
      "Instalações: execução de instalações elétricas, hidráulicas e outros serviços técnicos em altura.",
      "Construção civil: apoio a atividades de montagem, acabamento e instalações.",
      "Supermercados e atacados: operações de manutenção e instalações em áreas compatíveis com as características da máquina.",
    ],
    faq: [
      { question: "Qual é a altura da plataforma da JLG 2630ES?", answer: "A altura da plataforma da JLG 2630ES é 7,77 m." },
      { question: "Qual é a capacidade da JLG 2630ES?", answer: "A capacidade total é 363 kg sem restrição e 113 kg com restrição. A capacidade na extensão é 113 kg." },
      { question: "A JLG 2630ES é elétrica?", answer: "Sim. A JLG 2630ES cadastrada pela Accesslift é uma plataforma tesoura elétrica." },
      { question: "A Accesslift oferece locação da JLG 2630ES?", answer: "Sim. Consulte a disponibilidade do equipamento para o período e local da sua operação." },
      { question: "Como saber se a JLG 2630ES é adequada para o meu trabalho?", answer: "A escolha deve considerar altura necessária, acesso, dimensões do local, capacidade, piso e características da atividade. A Accesslift pode auxiliar na definição da plataforma adequada." },
    ],
    seo: {
      title: "JLG 2630ES: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura elétrica JLG 2630ES para locação, suas características e aplicações. Consulte a disponibilidade com a Accesslift.",
      h1: "Plataforma Tesoura JLG 2630ES",
      indexDirective: "index",
    },
    oldUrl: "/site/index.php/modelos/plataformas-tesoura-accesslift/jlg-2630es",
    technicalDataSource: "Accesslift legacy website",
    rentalText: "Consulte a disponibilidade da JLG 2630ES para locação diária, semanal ou mensal.\n\nA Accesslift atende São Paulo e região, com outras localidades sob avaliação comercial, entrega e retirada próprias, assistência técnica e suporte durante a locação.",
  },
  "jlg-2632es": {
    summary: "Plataforma tesoura elétrica para trabalhos de elevação vertical, indicada para operações de manutenção, instalações e montagens em ambientes compatíveis.",
    overview: "A JLG ES2632 é uma plataforma tesoura elétrica para operações em que o acesso ao trabalho ocorre predominantemente na vertical. A escolha do equipamento deve considerar altura, capacidade, dimensões, acesso ao local e condições reais da operação.",
    considerationText: "Considere a JLG ES2632 quando a faixa de altura atende à operação, as dimensões do equipamento são compatíveis com o acesso e não há necessidade de contornar obstáculos com lança articulada.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura da plataforma da JLG ES2632?", answer: "A altura da plataforma em ambiente interno é 7,80 m." },
      { question: "Qual a capacidade da JLG ES2632?", answer: "A capacidade é 230 kg em ambiente interno e 125 kg em ambiente externo. Na extensão, é 120 kg." },
      { question: "A JLG ES2632 usa os mesmos dados da JLG 2630ES?", answer: "Não. São modelos diferentes, com alturas, capacidades e dimensões próprias." },
    ],
    seo: {
      title: "JLG ES2632: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura elétrica JLG ES2632 para locação, suas características e aplicações em trabalhos de elevação vertical.",
      h1: "Plataforma Tesoura JLG ES2632",
    },
    technicalDataSource: "Documentação histórica JLG ES2632 - validar serial antes do go-live",
  },
  "jlg-3246es": {
    summary: "Plataforma elevatória tesoura elétrica para trabalhos que exigem elevação vertical e plataforma ampla para manutenção, instalação e montagem.",
    overview: "A JLG ES3246 é uma plataforma tesoura elétrica para operações nas quais o ponto de trabalho pode ser acessado predominantemente na vertical. Sua plataforma oferece espaço para operador, ferramentas e materiais dentro dos limites de capacidade da máquina, enquanto o deck extensível amplia a área útil de posicionamento.",
    considerationText: "Considere a JLG ES3246 quando a operação exige plataforma ampla, altura da plataforma de até 9,80 m, capacidade compatível e acesso adequado a 1,17 m de largura.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura da plataforma da JLG ES3246?", answer: "A altura da plataforma é 9,80 m." },
      { question: "Qual a capacidade da JLG ES3246?", answer: "A capacidade é 320 kg em ambiente interno e 230 kg em ambiente externo. Na extensão, é 120 kg." },
      { question: "Quando escolher uma tesoura em vez de articulada?", answer: "Principalmente quando o acesso ao trabalho é vertical e não há necessidade de contornar obstáculos com uma lança." },
    ],
    seo: {
      title: "JLG ES3246: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura elétrica JLG ES3246 para locação, suas dimensões, capacidade e aplicações. Consulte disponibilidade com a Accesslift.",
      h1: "Plataforma Tesoura JLG ES3246",
    },
    oldUrl: "/site/index.php/modelos/plataformas-tesoura-accesslift/jlg-3246es",
    technicalDataSource: "Documentação JLG família ES - validar configuração da unidade",
  },
  "jlg-e450aj": {
    summary: "Plataforma elevatória articulada elétrica para trabalhos que exigem altura combinada com alcance horizontal e acesso além de obstáculos.",
    overview: "A JLG E450AJ é uma plataforma articulada elétrica indicada para situações em que a elevação vertical, sozinha, não atende às características do trabalho. Sua lança articulada permite combinar altura e alcance horizontal, facilitando o posicionamento quando estruturas, instalações, máquinas ou outros obstáculos impedem que o equipamento fique diretamente abaixo do ponto de execução.",
    considerationText: "A E450AJ pode ser considerada quando a operação exige faixa próxima de 16 m de altura de trabalho, alcance horizontal, obstáculos entre a máquina e o ponto de execução e acesso, piso e espaço compatíveis.",
    characteristics: ["15,72 m de altura de trabalho", "7,24 m de alcance horizontal", "Capacidade de 227 kg", "Alimentação elétrica", "Jib articulado"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da JLG E450AJ?", answer: "A altura de trabalho da JLG E450AJ é 15,72 m." },
      { question: "Qual o alcance horizontal da E450AJ?", answer: "O alcance horizontal da JLG E450AJ é 7,24 m." },
      { question: "A JLG E450AJ é elétrica?", answer: "Sim. A JLG classifica a E450AJ como plataforma articulada elétrica." },
      { question: "Qual a capacidade da plataforma?", answer: "A capacidade da plataforma é 227 kg." },
    ],
    seo: {
      title: "JLG E450AJ: Plataforma Articulada Elétrica | Accesslift",
      description: "Conheça a plataforma articulada elétrica JLG E450AJ para locação, com até 15,72 m de altura de trabalho e alcance horizontal. Consulte disponibilidade.",
      h1: "Plataforma Articulada Elétrica JLG E450AJ",
    },
    technicalDataSource: "Documentação técnica JLG E450AJ - validar capacidade/configuração da unidade",
  },
  "genie-gs1930": {
    summary: "Plataforma tesoura elétrica compacta para trabalhos de elevação vertical em operações onde largura e movimentação são critérios importantes.",
    overview: "A Genie GS-1930 é uma plataforma tesoura elétrica para operações em que o ponto de trabalho pode ser acessado predominantemente na vertical. Seu formato compacto facilita o posicionamento em locais onde largura e espaço de circulação precisam ser considerados.",
    considerationText: "Considere a GS-1930 quando o trabalho exige elevação vertical dentro da faixa da máquina, largura compacta e não há necessidade de contornar obstáculos com uma lança.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie GS-1930?", answer: "A altura de trabalho é 7,85 m em ambiente interno e 6,47 m em ambiente externo." },
      { question: "Qual a capacidade da GS-1930?", answer: "A capacidade nominal é 227 kg." },
      { question: "Qual a largura da máquina?", answer: "A largura total da máquina é 0,77 m." },
    ],
    seo: {
      title: "Genie GS-1930: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura elétrica Genie GS-1930 para locação, compacta para trabalhos de elevação vertical. Consulte disponibilidade com a Accesslift.",
      h1: "Plataforma Tesoura Genie GS-1930",
    },
    technicalDataSource: "Documentação atual Genie GS-1930 - validar serial para gerações anteriores",
  },
  "genie-gs2632": {
    summary: "Plataforma tesoura elétrica para elevação vertical, combinando faixa próxima de 10 m com largura compacta para acesso e circulação.",
    overview: "A Genie GS-2632 é uma plataforma tesoura elétrica para operações em que o ponto de trabalho pode ser acessado predominantemente na vertical. Sua largura de aproximadamente 0,81 m é relevante quando acesso, circulação e posicionamento precisam ser avaliados junto com a altura necessária.",
    considerationText: "Pode ser considerada quando o trabalho exige elevação vertical, faixa próxima de 10 m, largura de 0,81 m compatível com o acesso e não existe necessidade de transpor obstáculos com uma lança articulada.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie GS-2632?", answer: "A altura de trabalho é 9,85 m em ambiente interno e 7,33 m em ambiente externo." },
      { question: "Qual a capacidade da GS-2632?", answer: "A capacidade é 227 kg, com 113 kg na extensão." },
      { question: "Qual a diferença entre GS-1930 e GS-2632?", answer: "Entre outros aspectos, a GS-2632 trabalha em uma faixa maior de altura. A escolha também deve considerar dimensões, acesso, capacidade e piso." },
      { question: "Quando devo considerar uma plataforma articulada?", answer: "Quando a atividade exigir alcance horizontal ou transposição de obstáculos além da altura." },
    ],
    seo: {
      title: "Genie GS-2632: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura elétrica Genie GS-2632 para locação, com formato estreito para trabalhos de elevação vertical. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Genie GS-2632",
    },
    technicalDataSource: "Documentação atual Genie GS-2632 - validar serial da unidade",
  },
  "genie-z34": {
    summary: "Plataforma elevatória articulada elétrica para trabalhos que exigem altura combinada com alcance horizontal e acesso além de obstáculos.",
    overview: "A Genie Z-34/22 é uma plataforma elevatória articulada desenvolvida para operações em que não basta alcançar o ponto de trabalho apenas verticalmente. Sua lança articulada permite combinar altura e alcance horizontal, facilitando o posicionamento do operador quando estruturas, instalações, máquinas ou outros obstáculos impedem que o equipamento seja colocado diretamente abaixo do ponto de execução.",
    considerationText: "A Genie Z-34/22 ganha relevância quando a operação exige alcance horizontal, existem obstáculos entre a máquina e a área de execução e a altura necessária está dentro do envelope operacional.",
    characteristics: ["12,50 m de altura de trabalho", "6,80 m de alcance horizontal", "Capacidade de 227 kg", "Lança articulada", "Alimentação elétrica"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie Z-34/22?", answer: "A altura de trabalho da Genie Z-34/22 é 12,50 m." },
      { question: "Qual o alcance horizontal da Genie Z-34/22?", answer: "O alcance horizontal da Genie Z-34/22 é 6,80 m." },
      { question: "Qual a diferença entre Z-34/22 e Z-45/25?", answer: "Uma diferença evidente é a faixa de altura de trabalho. A Z-45/25 alcança altura superior, mas a escolha também depende de alcance, dimensões, acesso e operação." },
    ],
    seo: {
      title: "Genie Z-34/22: Plataforma Articulada para Locação | Accesslift",
      description: "Conheça a plataforma articulada elétrica Genie Z-34/22 para locação, com altura e alcance horizontal para diferentes trabalhos. Consulte disponibilidade.",
      h1: "Plataforma Articulada Genie Z-34/22",
    },
    oldUrl: "/site/index.php/modelos/plataformas-articulada-accesslift/genie-z34",
    technicalDataSource: "Documentação Genie Z-34/22 elétrica - validar variante por plaqueta/documentação",
  },
  "genie-z45": {
    summary: "Plataforma elevatória articulada elétrica DC para trabalhos em altura que também exigem alcance horizontal e acesso além de obstáculos.",
    overview: "A Genie Z-45/25 DC combina elevação e movimentação articulada para operações em que o ponto de trabalho não pode ser acessado apenas verticalmente. Sua configuração permite posicionar a plataforma em altura e alcançar áreas afastadas da base da máquina.",
    considerationText: "Pode ser considerada quando a operação exige aproximadamente até 16 m de altura de trabalho, alcance horizontal, obstáculos entre a máquina e o ponto de execução e dimensões compatíveis com o local.",
    characteristics: ["Altura de trabalho de aproximadamente 15,9 m", "Capacidade de 227 kg", "Alimentação elétrica DC", "Plataforma articulada", "Faixa superior a Genie Z-34/22"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da Genie Z-45/25 DC?", answer: "A altura de trabalho é 15,87 m, aproximadamente 15,9 m." },
      { question: "Qual sua capacidade?", answer: "A capacidade máxima indicada é 227 kg." },
      { question: "Ela é elétrica?", answer: "Sim. A unidade fotografada da frota Accesslift possui identificação Z-45/25 e DC Power." },
      { question: "Qual a diferença entre Z-45/25 e Z-34/22?", answer: "A Z-45/25 alcança faixa superior de altura, mas a decisão deve considerar alcance, dimensões e condições da operação." },
    ],
    seo: {
      title: "Genie Z-45/25 DC: Plataforma Articulada | Accesslift",
      description: "Conheça a plataforma articulada elétrica Genie Z-45/25 DC para locação, indicada para trabalhos que exigem altura e alcance horizontal. Consulte disponibilidade.",
      h1: "Plataforma Articulada Genie Z-45/25 DC",
    },
    oldUrl: "/site/index.php/modelos/plataformas-articulada-accesslift/genie-z45",
    technicalDataSource: "Manual oficial Genie Z-45/25 DC - validar serial/configuração",
  },
  "skyjack-sj3219": {
    summary: "Plataforma elevatória tesoura compacta para trabalhos de elevação vertical em operações nas quais largura e facilidade de acesso são critérios importantes.",
    overview: "A SJ3219 E combina elevação vertical com largura total de aproximadamente 81 cm, característica relevante para operações em que o espaço de circulação e posicionamento precisa ser considerado com atenção.",
    considerationText: "Considere a SJ3219 E quando a operação exige elevação vertical, equipamento relativamente estreito, circulação em áreas com acesso limitado e capacidade compatível com 227 kg.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Skyjack SJ3219 E?", answer: "A altura de trabalho da Skyjack SJ3219 E é 7,47 m." },
      { question: "Qual a capacidade?", answer: "A capacidade é 227 kg, com 113 kg na extensão." },
      { question: "Quando considerar a SJ3219 E?", answer: "Quando a operação exige elevação vertical compacta e largura do equipamento é um critério importante." },
    ],
    seo: {
      title: "Skyjack SJ3219 E: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura Skyjack SJ3219 E para locação, compacta e indicada para trabalhos com elevação vertical. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Skyjack SJ3219 E",
    },
    technicalDataSource: "Página oficial Skyjack SJ3219 E - confirmar serial/geração",
  },
  "skyjack-sj3226": {
    summary: "Plataforma tesoura para operações que exigem maior altura de trabalho mantendo largura total de aproximadamente 81 cm.",
    overview: "A SJ3226 E combina elevação vertical com largura total em torno de 81 cm. Isso não significa que possa passar por qualquer acesso: portas, corredores, piso, altura recolhida e condições de manobra devem ser avaliados.",
    considerationText: "Considere a SJ3226 E quando o trabalho exige elevação vertical, quando a largura da máquina é um critério importante e não há necessidade de alcance articulado sobre obstáculos.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da Skyjack SJ3226 E?", answer: "A altura de trabalho da Skyjack SJ3226 E é 9,63 m." },
      { question: "Qual a largura da SJ3226 E?", answer: "A largura total é 0,81 m." },
      { question: "Como comparar SJ3219 E, SJ3226 E e SJ4732 E?", answer: "A SJ3219 E é mais compacta, a SJ3226 E amplia a altura mantendo largura semelhante, e a SJ4732 E sobe em faixa superior com maior largura, plataforma e capacidade." },
    ],
    seo: {
      title: "Skyjack SJ3226 E: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura Skyjack SJ3226 E para locação, com formato estreito e elevação vertical para diferentes operações. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Skyjack SJ3226 E",
    },
    technicalDataSource: "Página oficial Skyjack SJ3226 E - confirmar serial/geração",
  },
  "skyjack-sj4732": {
    summary: "Plataforma elevatória tesoura para operações que exigem elevação vertical combinada com maior área de plataforma e capacidade.",
    overview: "Dentro das Skyjack confirmadas na frota, a SJ4732 E ocupa uma faixa superior a SJ3219 E e SJ3226 E. Além da altura, sua maior largura e área de plataforma tornam importante avaliar espaço de acesso e circulação antes da escolha.",
    considerationText: "Pode ser considerada quando a operação exige maior área de plataforma, acesso compatível com sua largura e elevação predominantemente vertical.",
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da SJ4732 E?", answer: "A altura de trabalho da Skyjack SJ4732 E é 11,48 m." },
      { question: "Qual a capacidade da SJ4732 E?", answer: "A capacidade é 318 kg, com 113 kg na extensão." },
    ],
    seo: {
      title: "Skyjack SJ4732 E: Plataforma Tesoura para Locação | Accesslift",
      description: "Conheça a plataforma tesoura Skyjack SJ4732 E para locação, com maior área de plataforma e capacidade para trabalhos de elevação vertical.",
      h1: "Plataforma Tesoura Skyjack SJ4732 E",
    },
    technicalDataSource: "Página atual Skyjack SJ4732 E - confirmar geração/serial",
  },
  "zoomlion-zs1212ac": {
    summary: "Plataforma elevatória tesoura elétrica para operações que exigem maior altura de trabalho, capacidade e área de plataforma mantendo elevação vertical.",
    overview: "A ZS1212AC amplia a faixa de altura disponível entre as plataformas tesoura confirmadas da Accesslift. Além da altura, possui capacidade nominal de 350 kg e plataforma extensível, características que devem ser consideradas junto com acesso, largura, piso e condições da operação.",
    considerationText: "Pode ser considerada quando é necessária maior faixa de elevação vertical, a operação comporta aproximadamente 1,15 m de largura, a capacidade é relevante e não há necessidade de lança articulada.",
    characteristics: ["13,80 m de altura de trabalho interna / 10 m externa", "350 kg de capacidade", "Plataforma extensível", "Sistema AC", "Elevação predominantemente vertical"],
    applications: sharedScissorApplications,
    faq: [
      { question: "Qual a altura de trabalho da ZS1212AC?", answer: "A Zoomlion informa 13,80 m em condição interna e 10 m em condição externa para a especificação correspondente." },
      { question: "Qual a capacidade?", answer: "A capacidade nominal publicada é 350 kg." },
      { question: "A ficha da ZS1212AC-Li pode ser usada?", answer: "Não automaticamente. A ZS1212AC e a ZS1212AC-Li devem permanecer separadas quando houver diferenças de bateria e configuração." },
    ],
    seo: {
      title: "Zoomlion ZS1212AC: Plataforma Tesoura | Accesslift",
      description: "Conheça a plataforma tesoura elétrica Zoomlion ZS1212AC, com capacidade de 350 kg e plataforma extensível para elevação vertical. Consulte disponibilidade.",
      h1: "Plataforma Tesoura Zoomlion ZS1212AC",
    },
    technicalDataSource: "Documentação Zoomlion ZS1212AC - condição indoor/outdoor explícita",
  },
  "zoomlion-za14je-li": {
    summary: "Plataforma elevatória articulada elétrica com bateria de íons de lítio para trabalhos que combinam altura e alcance horizontal.",
    overview: "A Zoomlion ZA14JE-Li combina uma altura de trabalho de 16 metros com movimentação de lança articulada. Essa configuração permite acessar pontos elevados mesmo quando não é possível posicionar a máquina diretamente abaixo da área de execução. A versão Li utiliza bateria de íons de lítio.",
    considerationText: "Pode ser considerada quando a operação exige altura, alcance horizontal, capacidade e movimentação articulada, principalmente quando não existe possibilidade de posicionar a máquina diretamente abaixo do ponto de execução.",
    characteristics: ["16 m de altura de trabalho", "230 kg de capacidade", "Bateria de íons de lítio", "Largura recolhida de 1,75 m", "Movimentação articulada"],
    applications: sharedArticulatedApplications,
    faq: [
      { question: "Qual a altura de trabalho da ZA14JE-Li?", answer: "A altura de trabalho é 16 metros." },
      { question: "Qual a capacidade da plataforma?", answer: "A capacidade nominal é 230 kg." },
      { question: "A ZA14JE-Li é elétrica?", answer: "Sim. A ZA14JE-Li utiliza bateria de íons de lítio." },
      { question: "Qual o alcance horizontal da ZA14JE-Li?", answer: "O alcance horizontal da ZA14JE-Li é 8,10 m." },
    ],
    seo: {
      title: "Zoomlion ZA14JE-Li: Plataforma Articulada | Accesslift",
      description: "Conheça a plataforma articulada elétrica Zoomlion ZA14JE-Li, com 16 m de altura de trabalho e capacidade de 230 kg. Consulte disponibilidade para locação.",
      h1: "Plataforma Articulada Zoomlion ZA14JE-Li",
    },
    technicalDataSource: "Documentação técnica Zoomlion ZA14JE-Li - alcance horizontal pendente por divergencia entre edições",
  },
};

const technicalSheetsBySlug: Partial<Record<string, string>> = {
  "jlg-3246es": "/documents/accesslift/jlg-es3246-ficha-tecnica.pdf",
  "skyjack-sj3219": "/documents/accesslift/skyjack-sj3219-e-ficha-tecnica.pdf",
  "skyjack-sj3226": "/documents/accesslift/skyjack-sj3226-e-ficha-tecnica.pdf",
  "skyjack-sj4732": "/documents/accesslift/skyjack-sj4732-e-ficha-tecnica.pdf",
  "jlg-1930es": "/documents/accesslift/jlg-1930es-ficha-tecnica.pdf",
  "jlg-2630es": "/documents/accesslift/jlg-2630es-ficha-tecnica.pdf",
  "jlg-e450aj": "/documents/accesslift/jlg-e450aj-ficha-tecnica.pdf",
  "zoomlion-zs1212ac": "/documents/accesslift/zoomlion-zs1212ac-ficha-tecnica.pdf",
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
    status: seed.publicationStatus || "draft",
    validationStatus: "ready",
    mainImage: officialImages?.mainImage || {
      src: null,
      alt: `${title} - imagem principal a cadastrar`,
    },
    gallery: officialImages?.gallery || [],
    title,
    summary: content?.summary || `${categoryLabel} ${seed.brand} ${seed.model} para locação em operações que exigem trabalho em altura com equipamento adequado ao ambiente e à aplicação.`,
    specs,
    commercialSpecs: slug === "genie-z45"
      ? { alturaTrabalho: "15,9 m", alcanceHorizontal: "7,4 m" }
      : slug === "zoomlion-za14je-li"
        ? { alimentacao: "Elétrica – bateria de íons de lítio" }
        : undefined,
    images: officialImages ? [officialImages.mainImage, ...officialImages.gallery] : [],
    characteristics: content?.characteristics || createEquipmentCharacteristics(specs, seed),
    differentials: [
      "Dados técnicos centralizados no cadastro do equipamento",
      "Orçamento com modelo selecionado automaticamente",
      "Locação com entrega, retirada e suporte Accesslift",
    ],
    applications: content?.applications || modelApplicationsByCategory[seed.category],
    faq: content?.faq || createEquipmentFaq(seed, specs),
    technicalSheetPdf: technicalSheetsBySlug[slug] || null,
    imageSource: slug === "jlg-2630es" ? "Imagem ilustrativa do modelo. Origem/licença pendente de confirmação interna." : null,
    manualPdf: null,
    manualVersion: null,
    manualLanguage: null,
    documentSource: null,
    documentUpdatedAt: null,
    oldUrl: content?.oldUrl || null,
    technicalDataSource: seed.category === "plataformas-tesoura"
      ? "Critérios aprovados pelo cliente: BLOCO 2 — PLATAFORMAS TESOURA"
      : "Critérios aprovados pelo cliente: ajustes_plataformas_articuladas",
    overview: content?.overview || createEquipmentOverview(seed, categoryLabel),
    considerationText: content?.considerationText || createEquipmentConsideration(seed),
    rentalText: content?.rentalText || `Consulte a disponibilidade da ${seed.brand} ${seed.model} para locação diária, semanal ou mensal. A Accesslift realiza entrega e retirada dentro de sua área de atendimento e oferece suporte técnico durante a locação.`,
    seo: {
      title: content?.seo?.title || `${seed.brand} ${seed.model}: ${categoryLabel} para Locação | Accesslift`,
      description: content?.seo?.description || `Conheça a plataforma ${categoryLabel.toLowerCase()} ${seed.brand} ${seed.model}: altura de trabalho, capacidade, especificações e aplicações. Consulte disponibilidade para locação.`,
      h1: content?.seo?.h1 || title,
      canonical: `/equipamentos/${slug}/`,
      openGraphTitle: content?.seo?.openGraphTitle || `${title} | Accesslift`,
      openGraphDescription: content?.seo?.openGraphDescription || `Consulte disponibilidade da ${seed.brand} ${seed.model} para locação com a Accesslift.`,
      indexDirective: content?.seo?.indexDirective || "noindex",
    },
  };
};

export const homeFeaturedEquipmentSlugs = [
  "jlg-1930es",
  "jlg-3246es",
  "genie-z34",
  "zoomlion-za14je-li",
] as const;

export const mockEquipments: Equipment[] = equipmentSeeds.map(createEquipment);
