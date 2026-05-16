import { Zap, Phone, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80 pt-16 pb-28 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <div className="font-semibold text-white">CI Electric</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">& Security</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Your trusted partner for electrical, solar and security solutions across Gauteng.
            </p>
            <div className="mt-5 flex gap-2">
              {["Facebook", "Instagram", "LinkedIn"].map((label) => (
                <a key={label} href="#" aria-label={label} className="h-9 w-9 rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground grid place-items-center transition-colors text-xs font-semibold">
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" items={[
            ["Home", "#home"], ["Services", "#services"], ["Why Us", "#why"],
            ["Gallery", "#gallery"], ["Contact", "#contact"],
          ]} />

          <FooterCol title="Services" items={[
            ["Solar Installations", "#services"], ["CCTV & Security", "#services"],
            ["Backup Power", "#services"], ["Electrical Maintenance", "#services"],
            ["Commercial", "#services"],
          ]} />

          <div>
            <div className="text-sm font-semibold text-white tracking-tight">Contact</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5"><Phone className="h-4 w-4 mt-0.5 text-primary-glow" /> 082 502 2378</li>
              <li className="flex items-start gap-2.5"><Mail className="h-4 w-4 mt-0.5 text-primary-glow" /> info@cielectric.co.za</li>
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary-glow" /> Germiston, South Africa, 1400</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} CI Electric &amp; Security Solutions. All rights reserved.</p>
          <p>Proudly South African · Germiston</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-sm font-semibold text-white tracking-tight">{title}</div>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map(([label, href]) => (
          <li key={label}><a href={href} className="hover:text-primary-glow transition-colors">{label}</a></li>
        ))}
      </ul>
    </div>
  );
}
