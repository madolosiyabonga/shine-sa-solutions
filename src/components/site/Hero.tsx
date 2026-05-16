import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Sun, ShieldCheck, BatteryCharging } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-primary-glow/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted in Germiston · Servicing all Gauteng
            </div>

            <h1 className="mt-6 text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[68px] font-semibold tracking-tight">
              Reliable Electrical, <br className="hidden sm:block" />
              <span className="text-gradient">Solar &amp; Security</span> Solutions
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Professional installations and energy solutions designed for South African
              homes and businesses. Built to outlast load shedding.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={onQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary-glow transition-all shadow-[var(--shadow-glow)] hover:translate-y-[-1px]"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/27825022378"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-elevated border border-border font-medium hover:border-primary/50 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "500+", l: "Installations" },
                { v: "24/7", l: "Emergency" },
                { v: "10yr", l: "Workmanship" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight text-gradient">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-elegant)] aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={heroImg}
                alt="Modern home with solar panels, CCTV camera and electrical control panel installed by CI Electric"
                className="absolute inset-0 h-full w-full object-cover"
                width={1536}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-5 left-5 glass rounded-2xl p-3 border border-white/15"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-lg bg-primary/90 grid place-items-center">
                    <Sun className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Solar Active</div>
                    <div className="text-[10px] text-white/70">8.4 kWh today</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute top-5 right-5 glass rounded-2xl p-3 border border-white/15"
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-lg bg-primary/90 grid place-items-center">
                    <ShieldCheck className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">All Secure</div>
                    <div className="text-[10px] text-white/70">6 cameras online</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4 border border-white/15"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary grid place-items-center shrink-0">
                    <BatteryCharging className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-xs font-medium text-white">
                      <span>Battery Backup</span>
                      <span>92%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "92%" }}
                        transition={{ delay: 1.3, duration: 1.2 }}
                        className="h-full bg-gradient-to-r from-primary to-primary-glow"
                      />
                    </div>
                    <div className="mt-1.5 text-[10px] text-white/70">Loadshedding ready · ~7h runtime</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
