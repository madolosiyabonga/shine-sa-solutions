import { useEffect } from "react";
import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/70 backdrop-blur-sm grid place-items-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-background rounded-3xl border border-border p-6 md:p-8 relative shadow-[var(--shadow-elegant)]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 h-9 w-9 rounded-full hover:bg-muted grid place-items-center">
              <X className="h-4 w-4" />
            </button>

            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Free Quote</div>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">Request a free quote</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">No obligation. Reply within 1 business hour.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Quote requested — we'll contact you shortly.");
                onClose();
              }}
              className="mt-6 space-y-3"
            >
              <input required placeholder="Full name" className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input required type="tel" placeholder="Phone number" className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <select className="w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Solar Installation</option>
                <option>Backup Power / Inverter</option>
                <option>CCTV & Security</option>
                <option>Electrical Work</option>
                <option>Other</option>
              </select>
              <textarea rows={3} placeholder="Brief description (optional)" className="w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all shadow-[var(--shadow-glow)]">
                Request Free Quote <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
