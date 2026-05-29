import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Doutor Ambiental — Controle de Pragas em Sorocaba" },
      { name: "description", content: "Dedetização, desratização e controle de pragas em Sorocaba e região. Equipe especializada, produtos seguros para família e pets. Orçamento gratuito." },
      { property: "og:title", content: "Doutor Ambiental — O Especialista no Controle de Pragas" },
      { property: "og:description", content: "Proteção contra pragas e prevenção contínua para casas e empresas em Sorocaba e região." },
      { property: "og:type", content: "website" },
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
