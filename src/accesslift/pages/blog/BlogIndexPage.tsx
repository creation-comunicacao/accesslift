import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../../components/buttons/Button";
import { Badge } from "../../components/ui/Badge";
import { blogCategories, blogIndexSeo, blogPosts } from "../../data/blog";
import { ConversionHero, FinalConversionSection } from "../shared/StructuredPageSections";

export function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredPosts = useMemo(
    () =>
      blogPosts.filter((post) => {
        const categoryMatch = category === "all" || post.category === category;
        const queryMatch =
          !query ||
          `${post.title} ${post.summary} ${post.category}`
            .toLowerCase()
            .includes(query.toLowerCase());

        return categoryMatch && queryMatch;
      }),
    [category, query],
  );

  return (
    <>
      <ConversionHero
        eyebrow="Conteúdo"
        title={blogIndexSeo.h1}
        description="Estrutura de Central de Conhecimento com listagem, categorias, busca local, cards, artigos relacionados e SEO por artigo."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="mb-6 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:grid-cols-[1fr_240px]">
          <label className="grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
            Buscar
            <span className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
              <input
                className="min-h-12 w-full rounded-md border border-slate-300 bg-white pl-10 pr-3 text-sm font-medium outline-none transition focus:border-[#0b2d4d] focus:ring-2 focus:ring-[#0b2d4d]/15"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar conteúdo"
              />
            </span>
          </label>
          <label className="grid gap-2 text-xs font-black uppercase tracking-wider text-slate-600">
            Categoria
            <select
              className="min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-bold outline-none transition focus:border-[#0b2d4d] focus:ring-2 focus:ring-[#0b2d4d]/15"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">Todas</option>
              {blogCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {filteredPosts.map((post) => (
            <article key={post.id} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
              <div className="flex flex-wrap gap-2">
                <Badge tone="steel">{post.category}</Badge>
                <Badge tone="amber">Rascunho</Badge>
              </div>
              <h2 className="mt-4 text-xl font-black text-slate-950">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{post.summary}</p>
              <Button href={`/blog/${post.slug}/`} variant="secondary" className="mt-5">
                Ver estrutura do artigo
              </Button>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm font-semibold text-slate-600">
            Nenhum rascunho encontrado para os filtros selecionados.
          </div>
        )}
      </section>
      <FinalConversionSection />
    </>
  );
}
