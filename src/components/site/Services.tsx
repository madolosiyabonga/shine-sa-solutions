import { motion } from "framer-motion";
import { Sun, Camera, Wrench, BatteryCharging, Home, Building2, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Sun, title: "Solar Installations", desc: "Grid-tied and hybrid solar systems sized for your roof, your load and your budget." },
  { icon: Camera, title: "CCTV & Security", desc: "HD camera systems with remote viewing, motion alerts and 24/7 recording." },
  { icon: Wrench, title: "Electrical Maintenance", desc: "Fault finding, DB upgrades, COC certificates and routine maintenance." },
  { icon: BatteryCharging, title: "Backup Power Systems", desc: "Inverters and lithium batteries that keep lights, Wi-Fi and fridges running." },
  { icon: Home, title: "Residential Electrical", desc: "New builds, renovations, lighting design and smart-home wiring." },
  { icon: Building2, title: "Commercial Installations", desc: "Office, retail and industrial fit-outs delivered on time, to spec." },
];

export function Services({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Our Services</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Everything you need, <span className="text-gradient">one trusted team.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single plug repair to a full hybrid solar + security build, CI Electric delivers
            workmanship you can rely on.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="group relative rounded-2xl border border-border bg-surface-elevated p-6 hover:border-primary/40 transition-all hover:shadow-[var(--shadow-card)] hover:-translate-y-0.5"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <button
                onClick={onQuote}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Request quote <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
