export type CookiePreferences = { version: 1; necessary: true; analytics: boolean; advertising: boolean };
export const consentKey = "accesslift-cookie-preferences";
let preferences: CookiePreferences | null = null;

export function readPreferences(): CookiePreferences | null {
  if (typeof window === "undefined") return null;
  if (preferences) return preferences;
  try {
    const stored = JSON.parse(localStorage.getItem(consentKey) || "null");
    if (stored?.version === 1 && stored.necessary === true && typeof stored.analytics === "boolean" && typeof stored.advertising === "boolean") preferences = stored;
  } catch { /* Optional tracking stays disabled when storage is unavailable. */ }
  return preferences;
}

export function googleCommand(...args: unknown[]) {
  window.dataLayer ||= [];
  // Google tag consumes the arguments object for consent/config commands.
  function command() { window.dataLayer!.push(arguments as unknown as Record<string, unknown>); }
  Reflect.apply(command, null, args);
}

const configuredTags = () => ({
  analytics: /^G-[A-Z0-9]+$/.test(import.meta.env.VITE_GA4_ID || "") ? import.meta.env.VITE_GA4_ID : "",
  advertising: /^AW-\d+$/.test(import.meta.env.VITE_GOOGLE_ADS_ID || "") ? import.meta.env.VITE_GOOGLE_ADS_ID : "",
});
const initialized = new Set<string>();
let booted = false;

export function applyPreferences(value: CookiePreferences | null) {
  if (typeof window === "undefined") return;
  if (!booted) {
    googleCommand("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    booted = true;
  }
  googleCommand("consent", "update", {
    analytics_storage: value?.analytics ? "granted" : "denied",
    ad_storage: value?.advertising ? "granted" : "denied",
    ad_user_data: value?.advertising ? "granted" : "denied",
    ad_personalization: value?.advertising ? "granted" : "denied",
  });
  const tags = configuredTags();
  if (tags.analytics) (window as unknown as Record<string, unknown>)[`ga-disable-${tags.analytics}`] = !value?.analytics;
  for (const [category, id] of Object.entries(tags)) {
    if (!id || !value?.[category as "analytics" | "advertising"] || initialized.has(id)) continue;
    if (!document.getElementById("accesslift-google-tag")) {
      const script = document.createElement("script");
      script.id = "accesslift-google-tag";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
      document.head.appendChild(script);
      googleCommand("js", new Date());
    }
    googleCommand("config", id, { send_page_view: false });
    initialized.add(id);
  }
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if ((!value?.analytics && /^(?:_ga|_gid|_gat)/.test(name)) || (!value?.advertising && /^(?:_gcl_|_gac_)/.test(name))) {
      const hostname = window.location.hostname;
      const domains = ["", hostname, ...hostname.split(".").map((_, i, parts) => `.${parts.slice(i).join(".")}`)];
      for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/;${domain ? ` domain=${domain};` : ""}`;
    }
  }
}

export function savePreferences(analytics: boolean, advertising: boolean) {
  preferences = { version: 1, necessary: true, analytics, advertising };
  try { localStorage.setItem(consentKey, JSON.stringify(preferences)); } catch { /* Keep session preferences. */ }
  applyPreferences(preferences);
  window.dispatchEvent(new Event("accesslift-consent-change"));
}

export function openCookiePreferences() { window.dispatchEvent(new Event("accesslift-open-cookie-preferences")); }
