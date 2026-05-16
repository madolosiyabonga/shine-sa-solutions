import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27825022378"
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-30 h-14 w-14 rounded-full bg-primary text-primary-foreground grid place-items-center shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
    </a>
  );
}
