import { motion } from "framer-motion";
import { Zap, BatteryFull, Sun, Power, Check } from "lucide-react";
import inverter from "@/assets/gallery-inverter.jpg";

const features = [
  { icon: Zap, title: "Inverter Systems", desc: "Silent, instant switchover when the grid drops." },
  { icon: Sun, title: "Solar Backup", desc: "Recharge daily from the sun, free of Eskom." },
  { icon: BatteryFull, title: "Battery Storage", desc: "Lithium batteries with 10-year warranty." },
  { icon: Power, title: "Energy Independence", desc: "Reduce or eliminate your monthly electricity bill." },
];

export function LoadShedding({ onQuote }: { onQuote: () => void }) {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-primary-glow/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
              End the dark days
            </div>
            <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
              Load shedding doesn't have to <span className="text-gradient">stop your life.</span>
            </h2>
            <p className="mt-5 text-white/70 max-w-lg leading-relaxed">
              We design backup and solar systems that match your home or business load — so your
              lights, internet and security stay on, no matter what stage Eskom calls.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Free on-site assessment & load audit",
                "Custom sizing for your roof and usage",
                "Professional installation in 1–3 days",
                "Remote monitoring app included",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="h-5 w-5 rounded-full bg-primary/20 text-primary-glow grid place-items-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-white/90">{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onQuote}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all shadow-[var(--shadow-glow)]"
            >
              Get Backup Power Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
              <img src={inverter} alt="Inverter and battery backup system installation" loading="lazy" width={1024} height={1024} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <f.icon className="h-5 w-5 text-primary-glow" />
                  <div className="mt-2 text-sm font-semibold">{f.title}</div>
                  <div className="mt-1 text-xs text-white/60">{f.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
