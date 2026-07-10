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

const SITE_URL = "https://www.doutorambiental.com.br";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Os serviços da Doutor Ambiental são acessíveis para o meu orçamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Oferecemos preços tabelados e acessíveis, além de opções de pagamento facilitadas para atender às necessidades de nossos clientes.",
      },
    },
    {
      "@type": "Question",
      name: "Terei que sair do local durante a dedetização?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dependendo do tipo de infestação e do método utilizado, pode ser necessário deixar o local por um curto período. Nossa equipe irá orientá-lo sobre quaisquer precauções necessárias.",
      },
    },
    {
      "@type": "Question",
      name: "Existe risco de reinfestação após o serviço?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nossos métodos garantem proteção duradoura. Em casos raros de reinfestação, oferecemos serviços adicionais conforme necessário.",
      },
    },
    {
      "@type": "Question",
      name: "Como agendar o serviço se tenho uma agenda lotada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entendemos que seu tempo é valioso. Oferecemos flexibilidade de horários e agendamento conveniente para atender às suas necessidades.",
      },
    },
  ],
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
