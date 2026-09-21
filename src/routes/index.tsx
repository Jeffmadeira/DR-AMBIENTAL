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
  description:
    "Controle de pragas, dedetização e desratização em Sorocaba e região, com o respaldo da Ártica Saúde Ambiental — 9 anos de mercado e certificação ISO 9001.",
  url: SITE_URL,
  parentOrganization: { "@type": "Organization", name: "Ártica Saúde Ambiental" },
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
      { name: "description", content: "Controle de pragas em Sorocaba e região para residências, comércios, condomínios e indústrias. Respaldo da Ártica Saúde Ambiental: 9 anos de mercado, +150 condomínios e ISO 9001." },
      { property: "og:title", content: "Doutor Ambiental — Controle de Pragas em Sorocaba e Região" },
      { property: "og:description", content: "Estrutura local, experiência nacional: inspeção, diagnóstico e controle de pragas com o respaldo da Ártica Saúde Ambiental." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Doutor Ambiental — Controle de Pragas em Sorocaba" },
      { name: "twitter:description", content: "Controle técnico de pragas para residências, comércios e indústrias, com o respaldo da Ártica Saúde Ambiental." },
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
        <Problem />
        <Services />
        <About />
        <Differentials />
        <Segments />
        <FAQ />
        <CTASection />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
