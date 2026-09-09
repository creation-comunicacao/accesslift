import { createContext, useContext, useEffect } from "react";
import type { PageSeo } from "../types/routes";
import { getSeoHead } from "./head";

// Static rendering collects the same resolved SEO used by client navigation.
export const SeoCollector = createContext<((seo: PageSeo) => void) | null>(null);

function upsert(selector: string, tag: string, attributes: Record<string, string>) {
  const [existing, ...duplicates] = document.head.querySelectorAll(selector);
  duplicates.forEach(element => element.remove());
  const element = existing || document.createElement(tag);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  if (!existing) document.head.appendChild(element);
  return element;
}

export function Seo({ seo }: { seo: PageSeo }) {
  const collect = useContext(SeoCollector);
  collect?.(seo);
  useEffect(() => {
    const head = getSeoHead(seo, import.meta.env.VITE_SITE_ENV === "production");
    document.documentElement.lang = "pt-BR";
    upsert("title", "title", {}).textContent = head.title;
    for (const meta of head.meta) {
      const attribute = meta.name ? "name" : "property";
      const key = meta.name || meta.property!;
      upsert(`meta[${attribute}="${key}"]`, "meta", { [attribute]: key, content: meta.content });
    }
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: head.canonical });
    const active = head.schemas.map((schema, index) => {
      const id = `accesslift-schema-${index}`;
      upsert(`script#${id}`, "script", { id, type: "application/ld+json", "data-accesslift-schema": "true" }).textContent = JSON.stringify(schema);
      return id;
    });
    document.head.querySelectorAll('script[data-accesslift-schema="true"]').forEach(element => {
      if (!active.includes(element.id)) element.remove();
    });
  }, [seo]);
  return null;
}
