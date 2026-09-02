import { BookOpen } from "lucide-react";
import { Button } from "../../components/buttons/Button";
import { Badge } from "../../components/ui/Badge";
import { getRelatedBlogPosts, type BlogPost } from "../../data/blog";
import { ConversionHero, FinalConversionSection } from "../shared/StructuredPageSections";

type BlogPostPageProps = {
  post: BlogPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  const related = getRelatedBlogPosts(post);

  return (
    <>
      <ConversionHero eyebrow={post.category} title={post.seo.h1} description={post.summary} />
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <Badge tone={post.status === "draft" ? "amber" : "lime"}>
          {post.status === "draft" ? "Rascunho estrutural" : "Publicado"}
        </Badge>
        <div className="mt-6 grid gap-5 text-base leading-8 text-slate-700">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      {related.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-slate-950">Artigos relacionados</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <article key={item.id} className="rounded-lg border border-slate-200 bg-white p-5 soft-shadow">
                  <BookOpen className="h-7 w-7 text-[#0b2d4d]" aria-hidden />
                  <h3 className="mt-4 text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
                  <Button href={`/blog/${item.slug}/`} variant="secondary" className="mt-4">
                    Ver estrutura
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <FinalConversionSection />
    </>
  );
}
