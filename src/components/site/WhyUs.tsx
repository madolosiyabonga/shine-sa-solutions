import { motion } from "framer-motion";
import { Timer, Award, ShieldCheck, Wallet, Leaf, MapPin } from "lucide-react";

const items = [
  { icon: Timer, title: "Fast Response", desc: "Same-day site visits for emergencies in Gauteng." },
  { icon: Award, title: "Professional Technicians", desc: "Qualified, registered and continuously trained." },
  { icon: ShieldCheck, title: "Reliable Service", desc: "Workmanship guarantee on every install." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Transparent quotes with no hidden costs." },
  { icon: Leaf, title: "Energy Efficient", desc: "Solutions that lower your bill month after month." },
  { icon: MapPin, title: "Trusted Local Business", desc: "Germiston-based, proudly South African." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Why Choose Us</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Built on trust. <span className="text-gradient">Delivered with care.</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-4 p-5 rounded-2xl bg-surface-elevated border border-border"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
