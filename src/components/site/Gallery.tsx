import { motion } from "framer-motion";
import solar from "@/assets/gallery-solar.jpg";
import electrical from "@/assets/gallery-electrical.jpg";
import cctv from "@/assets/gallery-cctv.jpg";
import inverter from "@/assets/gallery-inverter.jpg";
import control from "@/assets/gallery-control.jpg";
import home from "@/assets/gallery-home.jpg";

const items = [
  { src: solar, label: "Commercial Solar Array", span: "row-span-2" },
  { src: electrical, label: "DB Upgrade", span: "" },
  { src: cctv, label: "CCTV Installation", span: "row-span-2" },
  { src: inverter, label: "Inverter & Battery", span: "" },
  { src: control, label: "Security Control Room", span: "" },
  { src: home, label: "Residential Solar", span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">Recent Projects</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Real installs. <span className="text-gradient">Real results.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            A snapshot of our recent residential and commercial work across Gauteng.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl border border-border group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent opacity-90" />
              <figcaption className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium tracking-tight">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
