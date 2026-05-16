import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Thandiwe M.",
    role: "Homeowner, Bedfordview",
    text: "CI Electric installed our 5kW hybrid solar system and we haven't noticed load shedding since. Clean install, fair price.",
  },
  {
    name: "Pieter van der Merwe",
    role: "Operations Manager, Germiston",
    text: "We had a full DB upgrade and CCTV rollout at our warehouse. Done over a weekend, zero downtime. Outstanding team.",
  },
  {
    name: "Naledi K.",
    role: "Property Developer",
    text: "I've used them on three estates now. Always on time, COC issued promptly, and the finish is genuinely premium.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Client Stories</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Trusted by homes &amp; businesses
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-surface-elevated border border-border p-6 flex flex-col"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-sm tracking-tight">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
