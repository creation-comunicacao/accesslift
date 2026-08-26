export type AnalyticsEventName =
  | "whatsapp_click"
  | "phone_click"
  | "form_submit"
  | "quote_request"
  | "equipment_availability_click"
  | "technical_sheet_download";

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
  const payload = event.payload || {};

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: event.name,
      ...payload,
    });
  } catch {
    // Analytics must never block navigation or form submission.
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event.name, payload);
    }
  } catch {
    // GA4/GTM adapters are optional until production configuration is defined.
  }
};
