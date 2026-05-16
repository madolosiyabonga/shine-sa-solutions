import { useState, useEffect } from "react";
import { Home, Wrench, ShieldCheck, Images, MessageSquare, Zap } from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#services", label: "Services", icon: Wrench },
  { href: "#why", label: "Why Us", icon: ShieldCheck },
  { href: "#gallery", label: "Work", icon: Images },
  { href: "#contact", label: "Contact", icon: MessageSquare },
];

export function Navbar({ onQuote }: { onQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-bold shadow-[var(--shadow-glow)]">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-tight">CI Electric</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">& Security</div>
          </div>
        </a>

        {/* Desktop: words */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onQuote}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-glow transition-all shadow-[var(--shadow-glow)]"
        >
          Get a Quote
        </button>

        {/* Mobile quote button */}
        <button
          onClick={onQuote}
          className="md:hidden inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold"
        >
          Quote
        </button>
      </div>

      {/* Mobile bottom nav: icons + words */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border/60">
        <ul className="grid grid-cols-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium text-muted-foreground active:text-primary"
              >
                <l.icon className="h-5 w-5" strokeWidth={2} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
