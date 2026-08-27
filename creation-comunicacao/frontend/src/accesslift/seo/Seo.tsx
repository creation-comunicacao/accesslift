import { useEffect } from "react";
import type { JsonLd, PageSeo } from "../types/routes";

const SITE_ORIGIN = "https://www.accesslift.com.br";

const upsertMeta = (selector: string, attrs: Record<string, string>) => {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
};

const upsertLink = (selector: string, attrs: Record<string, string>) => {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attrs).forEach(([key, value]) => element?.setAttribute(key, value));
};

type SeoProps = {
  seo: PageSeo;
};

const stringifyJsonLd = (schema: JsonLd) => JSON.stringify(schema);

const upsertJsonLd = (id: string, schema: JsonLd) => {
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = stringifyJsonLd(schema);
};

const removeStaleJsonLd = (activeIds: string[]) => {
  document.head
    .querySelectorAll<HTMLScriptElement>('script[data-accesslift-schema="true"]')
    .forEach((script) => {
      if (!activeIds.includes(script.id)) {
        script.remove();
      }
    });
};

export function Seo({ seo }: SeoProps) {
  useEffect(() => {
    const canonical = `${SITE_ORIGIN}${seo.canonicalPath}`;
    const isProduction = import.meta.env.VITE_SITE_ENV === "production";
    const robots =
      !isProduction || seo.indexDirective === "noindex"
        ? "noindex,nofollow"
        : "index,follow";

    document.documentElement.lang = "pt-BR";
    document.title = seo.title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: seo.description,
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: robots,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: seo.openGraphTitle || seo.title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: seo.openGraphDescription || seo.description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonical,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Accesslift",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonical,
    });

    const schemaIds = (seo.structuredData || []).map((schema, index) => {
      const id = `accesslift-schema-${index}`;
      upsertJsonLd(id, schema);
      document.getElementById(id)?.setAttribute("data-accesslift-schema", "true");
      return id;
    });

    removeStaleJsonLd(schemaIds);
  }, [seo]);

  return null;
}
