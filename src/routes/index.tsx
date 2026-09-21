import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { About } from "@/components/About";
import { Segments } from "@/components/Segments";
import { FAQ, faqs } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

const SITE_URL = "https://www.doutorambiental.com.br";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  name: "Doutor Ambiental",
  description: "Controle de pragas, dedetização e desratização em Sorocaba e região.",
  url: SITE_URL,
  telephone: "+55-15-98842-0000",
  areaServed: "Sorocaba e região",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    addressCountry: "BR",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doutor Ambiental — Controle de Pragas em Sorocaba" },
      { name: "description", content: "Dedetização, desratização e controle de pragas em Sorocaba e região. Equipe especializada, produtos seguros para família e pets. Orçamento gratuito." },
      { property: "og:title", content: "Doutor Ambiental — O Especialista no Controle de Pragas" },
      { property: "og:description", content: "Proteção contra pragas e prevenção contínua para casas e empresas em Sorocaba e região." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Doutor Ambiental — Controle de Pragas em Sorocaba" },
      { name: "twitter:description", content: "Dedetização, desratização e controle de pragas em Sorocaba e região com orçamento gratuito." },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <About />
        <FAQ />
        <CTASection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
