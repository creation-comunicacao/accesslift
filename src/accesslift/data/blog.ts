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
  description: "Base preparada para conteúdo administrável e artigos Accesslift.",
  canonicalPath: "/blog/",
  indexDirective: "noindex",
};

export const blogCategories = ["Escolha de equipamento", "Locação", "Segurança", "Operação"];

export const blogPosts: BlogPost[] = [
  {
    id: "draft-escolha-plataforma",
    slug: "como-escolher-plataforma-elevatoria",
    status: "draft",
    category: "Escolha de equipamento",
    title: "Como escolher uma plataforma elevatória",
    summary: "Rascunho estrutural para futuro conteúdo aprovado.",
    body: [
      "Este artigo está em rascunho estrutural e deve receber conteúdo técnico/comercial validado antes de publicação.",
      "A estrutura suporta seções, categorias, relacionados e metadados SEO por artigo.",
    ],
    relatedSlugs: ["locacao-diaria-semanal-mensal"],
    seo: {
      h1: "Como escolher uma plataforma elevatória",
      title: "Como escolher uma plataforma elevatória | Accesslift",
      description: "Rascunho preparado para conteúdo futuro sobre escolha de plataformas.",
      canonicalPath: "/blog/como-escolher-plataforma-elevatoria/",
      indexDirective: "noindex",
    },
  },
  {
    id: "draft-locacao",
    slug: "locacao-diaria-semanal-mensal",
    status: "draft",
    category: "Locação",
    title: "Locação diária, semanal ou mensal",
    summary: "Rascunho estrutural para explicar modalidades de locação.",
    body: [
      "Conteúdo ainda pendente de aprovação. A página está pronta para receber texto oficial.",
    ],
    relatedSlugs: ["seguranca-operacao-altura"],
    seo: {
      h1: "Locação diária, semanal ou mensal",
      title: "Locação diária, semanal ou mensal | Accesslift",
      description: "Rascunho preparado para conteúdo futuro sobre locação.",
      canonicalPath: "/blog/locacao-diaria-semanal-mensal/",
      indexDirective: "noindex",
    },
  },
  {
    id: "draft-seguranca",
    slug: "seguranca-operacao-altura",
    status: "draft",
    category: "Segurança",
    title: "Segurança e operação em altura",
    summary: "Rascunho estrutural para conteúdos sobre segurança e NR-35.",
    body: [
      "Conteúdo preparado como estrutura, sem declarações de certificação ou conformidade não fornecidas.",
    ],
    relatedSlugs: ["como-escolher-plataforma-elevatoria"],
    seo: {
      h1: "Segurança e operação em altura",
      title: "Segurança e operação em altura | Accesslift",
      description: "Rascunho preparado para conteúdo futuro sobre segurança.",
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
