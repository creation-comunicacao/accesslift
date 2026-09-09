import { googleCommand, readPreferences } from "./consent";
import { getTagManagerId } from "./tagManager";

export type AnalyticsEventName = string;

export type AnalyticsEvent = {
  name: AnalyticsEventName;
  payload?: Record<string, string | number | boolean | null>;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === "undefined") return;
  const consent = readPreferences();
  const career = event.name.startsWith("career_");
  if (getTagManagerId()) {
    if (!consent?.analytics && (!consent?.advertising || career)) return;
    window.dataLayer ||= [];
    window.dataLayer.push({ ...event.payload, event: event.name, analytics_consent: Boolean(consent?.analytics), advertising_consent: Boolean(consent?.advertising && !career) });
    return;
  }
  const destinations: string[] = [];
  const env = import.meta.env;
  if (consent?.analytics && /^G-[A-Z0-9]+$/.test(env.VITE_GA4_ID || "")) destinations.push(env.VITE_GA4_ID);
  if (!career && consent?.advertising && /^AW-\d+$/.test(env.VITE_GOOGLE_ADS_ID || "")) destinations.push(env.VITE_GOOGLE_ADS_ID);
  if (!consent?.analytics && (!consent?.advertising || career)) return;
  try {
    if (destinations.length) googleCommand("event", event.name, { ...event.payload, send_to: destinations });
    else if (consent?.analytics) {
      window.dataLayer ||= [];
      window.dataLayer.push({ event: event.name, ...event.payload, analytics_consent: true, advertising_consent: Boolean(consent.advertising && !career) });
    }
  } catch { /* Tracking must not interrupt navigation or submission. */ }
};
