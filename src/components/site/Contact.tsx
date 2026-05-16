import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { toast } from "sonner";

const info = [
  { icon: Phone, label: "Call us", value: "082 502 2378", href: "tel:+27825022378" },
  { icon: Mail, label: "Email", value: "info@cielectric.co.za", href: "mailto:info@cielectric.co.za" },
  { icon: MapPin, label: "Visit", value: "Germiston, South Africa, 1400", href: "https://maps.google.com/?q=Germiston,+South+Africa" },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 7am – 6pm", href: null },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within the hour.");
    }, 800);
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Get In Touch</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Let's power your <span className="text-gradient">next project.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what you need. We'll reply with a transparent quote.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-6">
          {/* Info + map */}
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-3">
              {info.map((i) => {
                const Tag = i.href ? "a" : "div";
                return (
                  <Tag
                    key={i.label}
                    {...(i.href ? { href: i.href, target: i.href.startsWith("http") ? "_blank" : undefined, rel: "noopener" } : {})}
                    className="block p-5 rounded-2xl border border-border bg-surface-elevated hover:border-primary/40 transition-colors"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                      <i.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-xs text-muted-foreground">{i.label}</div>
                    <div className="text-sm font-semibold mt-0.5 tracking-tight">{i.value}</div>
                  </Tag>
                );
              })}
            </div>

            <a
              href="https://wa.me/27825022378"
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 p-5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary-glow transition-all shadow-[var(--shadow-glow)]"
            >
              <MessageCircle className="h-6 w-6" />
              <div>
                <div className="font-semibold tracking-tight">Chat on WhatsApp</div>
                <div className="text-xs opacity-80">Usually replies in minutes</div>
              </div>
            </a>

            <div className="relative rounded-2xl overflow-hidden border border-border aspect-[16/10]">
              <iframe
                title="CI Electric location in Germiston"
                src="https://www.google.com/maps?q=Germiston,South+Africa&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-surface-elevated p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">Service needed</label>
                <select
                  name="service"
                  className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Solar Installation</option>
                  <option>Backup Power / Inverter</option>
                  <option>CCTV &amp; Security</option>
                  <option>Electrical Maintenance</option>
                  <option>Commercial Project</option>
                  <option>Emergency Callout</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-medium text-muted-foreground">Tell us about your project</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all disabled:opacity-60 shadow-[var(--shadow-glow)]"
            >
              {sending ? "Sending..." : (<>Send Enquiry <Send className="h-4 w-4" /></>)}
            </button>
            <p className="mt-3 text-xs text-muted-foreground text-center">
              By submitting you agree to be contacted about your enquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full h-11 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
