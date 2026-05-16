import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { LoadShedding } from "@/components/site/LoadShedding";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { QuoteModal } from "@/components/site/QuoteModal";
import { UrgencyBanner } from "@/components/site/UrgencyBanner";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CI Electric & Security Solutions — Solar, Electrical & CCTV in Germiston" },
      { name: "description", content: "Premium solar installations, backup power, CCTV and electrical services for South African homes and businesses. Based in Germiston, serving Gauteng." },
      { property: "og:title", content: "CI Electric & Security Solutions" },
      { property: "og:description", content: "Solar, backup power, CCTV & electrical services in Germiston, South Africa." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const open = () => setQuoteOpen(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onQuote={open} />
      <main>
        <Hero onQuote={open} />
        <UrgencyBanner />
        <Services onQuote={open} />
        <WhyUs />
        <LoadShedding onQuote={open} />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <Toaster />
    </div>
  );
}
