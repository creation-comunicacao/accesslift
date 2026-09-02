import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { ScrollRevealProvider } from "./components/animation/ScrollReveal";
import { Seo } from "./seo/Seo";
import { findRouteByPath, normalizePath } from "./routes/routes";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/catalog/CategoryPage";
import { EquipmentIndexPage } from "./pages/equipment/EquipmentIndexPage";
import { EquipmentDetailPage } from "./pages/equipment/EquipmentDetailPage";
import { ServicePageTemplate } from "./pages/services/ServicePageTemplate";
import { SegmentPageTemplate } from "./pages/segments/SegmentPageTemplate";
import { CommercialPageTemplate } from "./pages/commercial/CommercialPageTemplate";
import { BlogIndexPage } from "./pages/blog/BlogIndexPage";
import { BlogPostPage } from "./pages/blog/BlogPostPage";
import { ContactPage } from "./pages/ContactPage";
import { QuotePage } from "./pages/QuotePage";
import { CareerPage } from "./pages/CareerPage";
import { CoveragePage } from "./pages/CoveragePage";
import { StandardPage } from "./pages/StandardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import type { PageSeo } from "./types/routes";
import { getEquipmentBySlug, matchEquipmentDetailPath } from "./catalog/catalog";
import { getBreadcrumbItems } from "./components/navigation/navigation";
import {
  findCommercialPage,
  findSegmentPage,
  findServicePage,
} from "./data/pageContent";
import { blogIndexSeo, getBlogPostBySlug, matchBlogPostPath } from "./data/blog";
import {
  clientsPageSeo,
  findInstitutionalPage,
} from "./data/institutional";
import { ClientsPage } from "./pages/institutional/ClientsPage";
import { InstitutionalPage } from "./pages/institutional/InstitutionalPage";
import {
  buildBreadcrumbSchema,
  buildEquipmentSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "./seo/schema";

const notFoundSeo: PageSeo = {
  title: "Página não encontrada | Accesslift",
  description: "Rota não encontrada na fundacao V2 Accesslift.",
  canonicalPath: "/",
  indexDirective: "noindex",
};

type AccessliftAppProps = {
  initialPath?: string;
};

const getInitialPath = (initialPath?: string) => {
  if (initialPath) {
    return normalizePath(initialPath);
  }

  if (typeof window !== "undefined") {
    return normalizePath(window.location.pathname);
  }

  return "/";
};

export function AccessliftApp({ initialPath }: AccessliftAppProps) {
  const [currentPath, setCurrentPath] = useState(() =>
    getInitialPath(initialPath),
  );

  useEffect(() => {
    const syncPath = () => setCurrentPath(normalizePath(window.location.pathname));

    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);

  const route = useMemo(() => findRouteByPath(currentPath), [currentPath]);
  const equipmentSlug = useMemo(() => matchEquipmentDetailPath(currentPath), [currentPath]);
  const blogPostSlug = useMemo(() => matchBlogPostPath(currentPath), [currentPath]);
  const equipment = useMemo(
    () => (equipmentSlug ? getEquipmentBySlug(equipmentSlug) : undefined),
    [equipmentSlug],
  );
  const blogPost = useMemo(
    () => (blogPostSlug ? getBlogPostBySlug(blogPostSlug) : undefined),
    [blogPostSlug],
  );
  const configuredPage = useMemo(
    () =>
      findCommercialPage(currentPath) ||
      findServicePage(currentPath) ||
      findSegmentPage(currentPath) ||
      findInstitutionalPage(currentPath),
    [currentPath],
  );
  const dynamicSeo = useMemo<PageSeo | null>(() => {
    if (blogPost) {
      return blogPost.seo;
    }

    if (currentPath === "/blog/") {
      return blogIndexSeo;
    }

    if (currentPath === "/clientes/") {
      return clientsPageSeo;
    }

    if (!equipment) {
      if (!configuredPage) {
        return null;
      }

      return configuredPage.seo;
    }

    return {
      title: equipment.seo.title,
      description: equipment.seo.description,
      canonicalPath: equipment.seo.canonical || `/equipamentos/${equipment.slug}/`,
      openGraphTitle: equipment.seo.openGraphTitle,
      openGraphDescription: equipment.seo.openGraphDescription,
      indexDirective: equipment.seo.indexDirective,
    };
  }, [blogPost, configuredPage, currentPath, equipment]);
  const pageSeo = useMemo<PageSeo>(() => {
    const baseSeo = dynamicSeo || route?.seo || notFoundSeo;
    const breadcrumbSchema = buildBreadcrumbSchema(getBreadcrumbItems(currentPath));
    const configuredFaq =
      configuredPage && "faq" in configuredPage && configuredPage.faqSchemaEligible
        ? configuredPage.faq
        : undefined;
    const equipmentFaq =
      equipment?.status === "published" && equipment.seo.indexDirective === "index"
        ? equipment.faq
        : undefined;
    const faqSchema = buildFaqSchema(configuredFaq || equipmentFaq);
    const structuredData = [
      buildOrganizationSchema(),
      breadcrumbSchema,
      faqSchema,
      equipment?.status === "published" && equipment.seo.indexDirective === "index"
        ? buildEquipmentSchema(equipment)
        : null,
    ].filter((schema): schema is NonNullable<typeof schema> => Boolean(schema));

    return {
      ...baseSeo,
      structuredData,
    };
  }, [configuredPage, currentPath, dynamicSeo, equipment, route?.seo]);

  const page = useMemo(() => {
    if (blogPostSlug) {
      return blogPost ? <BlogPostPage post={blogPost} /> : <NotFoundPage />;
    }

    if (equipmentSlug) {
      return equipment ? <EquipmentDetailPage equipment={equipment} /> : <NotFoundPage />;
    }

    if (!route) {
      return <NotFoundPage />;
    }

    switch (route.path) {
      case "/":
        return <HomePage />;
      case "/plataformas-elevatorias/":
      case "/locacao-de-plataformas-elevatorias/":
      case "/locacao-de-plataformas/":
      case "/venda-de-plataformas/": {
        const pageConfig = findCommercialPage(route.path) || findCommercialPage("/locacao-de-plataformas-elevatorias/");
        return pageConfig ? <CommercialPageTemplate page={pageConfig} /> : <NotFoundPage />;
      }
      case "/plataformas-tesoura/":
        return <CategoryPage slug="plataformas-tesoura" />;
      case "/plataformas-articuladas/":
        return <CategoryPage slug="plataformas-articuladas" />;
      case "/equipamentos/":
        return <EquipmentIndexPage />;
      case "/servicos/":
      case "/servicos/entrega-e-retirada/":
      case "/servicos/assistencia-tecnica/":
      case "/servicos/manutencao-preventiva/":
      case "/servicos/atendimento-emergencial/":
      case "/servicos/treinamento-de-operadores/": {
        const pageConfig = findServicePage(route.path);
        return pageConfig ? <ServicePageTemplate page={pageConfig} /> : <NotFoundPage />;
      }
      case "/segmentos-e-aplicacoes/":
      case "/segmentos/construcao-civil/":
      case "/segmentos/industria/":
      case "/segmentos/supermercados-e-hipermercados/":
      case "/segmentos/supermercados/":
      case "/segmentos/atacados/": {
        const pageConfig =
          findSegmentPage(route.path) ||
          findSegmentPage("/segmentos/supermercados-e-hipermercados/");
        return pageConfig ? <SegmentPageTemplate page={pageConfig} /> : <NotFoundPage />;
      }
      case "/blog/":
        return <BlogIndexPage />;
      case "/empresa/":
      case "/sobre-a-accesslift/":
      case "/seguranca-e-nr35/": {
        const pageConfig = findInstitutionalPage(route.path) || findInstitutionalPage("/empresa/");
        return pageConfig ? <InstitutionalPage page={pageConfig} /> : <NotFoundPage />;
      }
      case "/clientes/":
        return <ClientsPage />;
      case "/area-de-atendimento/":
        return <CoveragePage />;
      case "/contato/":
        return <ContactPage />;
      case "/solicite-orcamento/":
      case "/orcamento/":
        return <QuotePage />;
      case "/trabalhe-conosco/":
        return <CareerPage />;
      default:
        return <StandardPage route={route} />;
    }
  }, [blogPost, blogPostSlug, equipment, equipmentSlug, route]);

  return (
    <ScrollRevealProvider watchKey={currentPath}>
      <AppShell currentPath={currentPath}>
        <Seo seo={pageSeo} />
        {page}
      </AppShell>
    </ScrollRevealProvider>
  );
}
