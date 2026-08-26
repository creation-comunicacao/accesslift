import type { PageSeo } from "../types/routes";

export type BlogPostStatus = "draft" | "published";

export type BlogPost = {
  id: string;
  slug: string;
  status: BlogPostStatus;
  category: string;
  title: string;
  summary: string;
  body: string[];
  relatedSlugs: string[];
  seo: PageSeo & { h1: string };
};

export const blogIndexSeo: PageSeo & { h1: string } = {
  h1: "Central de Conhecimento",
  title: "Blog | Accesslift",
  description: "Base preparada para conteudo administravel e artigos Accesslift.",
  canonicalPath: "/blog/",
  indexDirective: "noindex",
};

export const blogCategories = ["Escolha de equipamento", "Locacao", "Seguranca", "Operacao"];

export const blogPosts: BlogPost[] = [
  {
    id: "draft-escolha-plataforma",
    slug: "como-escolher-plataforma-elevatoria",
    status: "draft",
    category: "Escolha de equipamento",
    title: "Como escolher uma plataforma elevatoria",
    summary: "Rascunho estrutural para futuro conteudo aprovado.",
    body: [
      "Este artigo esta em rascunho estrutural e deve receber conteudo tecnico/comercial validado antes de publicacao.",
      "A estrutura suporta secoes, categorias, relacionados e metadados SEO por artigo.",
    ],
    relatedSlugs: ["locacao-diaria-semanal-mensal"],
    seo: {
      h1: "Como escolher uma plataforma elevatoria",
      title: "Como escolher uma plataforma elevatoria | Accesslift",
      description: "Rascunho preparado para conteudo futuro sobre escolha de plataformas.",
      canonicalPath: "/blog/como-escolher-plataforma-elevatoria/",
      indexDirective: "noindex",
    },
  },
  {
    id: "draft-locacao",
    slug: "locacao-diaria-semanal-mensal",
    status: "draft",
    category: "Locacao",
    title: "Locacao diaria, semanal ou mensal",
    summary: "Rascunho estrutural para explicar modalidades de locacao.",
    body: [
      "Conteudo ainda pendente de aprovacao. A pagina esta pronta para receber texto oficial.",
    ],
    relatedSlugs: ["seguranca-operacao-altura"],
    seo: {
      h1: "Locacao diaria, semanal ou mensal",
      title: "Locacao diaria, semanal ou mensal | Accesslift",
      description: "Rascunho preparado para conteudo futuro sobre locacao.",
      canonicalPath: "/blog/locacao-diaria-semanal-mensal/",
      indexDirective: "noindex",
    },
  },
  {
    id: "draft-seguranca",
    slug: "seguranca-operacao-altura",
    status: "draft",
    category: "Seguranca",
    title: "Seguranca e operacao em altura",
    summary: "Rascunho estrutural para conteudos sobre seguranca e NR-35.",
    body: [
      "Conteudo preparado como estrutura, sem declaracoes de certificacao ou conformidade nao fornecidas.",
    ],
    relatedSlugs: ["como-escolher-plataforma-elevatoria"],
    seo: {
      h1: "Seguranca e operacao em altura",
      title: "Seguranca e operacao em altura | Accesslift",
      description: "Rascunho preparado para conteudo futuro sobre seguranca.",
      canonicalPath: "/blog/seguranca-operacao-altura/",
      indexDirective: "noindex",
    },
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedBlogPosts = (post: BlogPost) =>
  post.relatedSlugs
    .map(getBlogPostBySlug)
    .filter((item): item is BlogPost => Boolean(item));

export const matchBlogPostPath = (path: string) => {
  const match = path.match(/^\/blog\/([^/]+)\/?$/);
  return match?.[1] || null;
};
