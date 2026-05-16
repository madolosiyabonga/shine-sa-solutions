import { AlertTriangle, Phone } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm text-center">
        <span className="inline-flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-primary-glow" />
          <strong className="font-semibold">Emergency electrical callout?</strong>
          <span className="text-white/70">We respond 24/7 across Gauteng.</span>
        </span>
        <a href="tel:+27825022378" className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground font-semibold">
          <Phone className="h-3.5 w-3.5" /> 082 502 2378
        </a>
      </div>
    </div>
  );
}
