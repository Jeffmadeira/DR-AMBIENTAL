type TrackingLocation = "hero" | "fab" | "service" | "footer" | "cta";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackWhatsAppClick(location: TrackingLocation, service?: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    location,
    service: service ?? null,
  });
}
