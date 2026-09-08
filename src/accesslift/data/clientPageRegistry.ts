import { clientServicePages } from "./clientPages";
import { clientSegmentPages } from "./clientSegments";
import { clientInstitutionalPages } from "./clientInstitutional";

export const clientPages = [...clientServicePages, ...clientSegmentPages, ...clientInstitutionalPages];

export function findClientPage(path: string) {
  const canonical = path === "/sobre-a-accesslift/" ? "/empresa/" : path === "/segmentos/supermercados/" ? "/segmentos/supermercados-e-hipermercados/" : path;
  const page = clientPages.find((entry) => entry.path === canonical);
  return page ? { ...page, faqSchemaEligible: true, seo: {
    h1: page.title, title: `${page.title} | AccessLift`, description: page.description, canonicalPath: page.path,
  } } : undefined;
}
