import { motion } from "framer-motion";
import { Building2, Home } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PHONE = "5515988420000";
const wa = (text: string) => `https://api.whatsapp.com/send/?phone=${PHONE}&text=${encodeURIComponent(text)}`;

export function Segments() {
  return (
    <section id="publicos" className="py-16 bg-forest-deep relative overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-[460px] h-[460px] rounded-full bg-gold/10 blur-[150px]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 90, damping: 18 }}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-gold/40 bg-card/60 backdrop-blur p-8 lg:p-10 flex flex-col"
        >
          <div className="size-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
            <Building2 className="size-6 text-primary-foreground" />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Para empresas</div>
          <h3 className="font-display text-3xl sm:text-4xl mb-4">
            Sua empresa não pode esperar a praga virar um <span className="text-gradient-gold">problema</span>.
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-4">
            Para operações comerciais e industriais, o controle de pragas precisa fazer parte da estratégia de
            prevenção. Atuamos com soluções para empresas que precisam de controle, acompanhamento e segurança
            operacional.
          </p>
          <p className="text-sm text-foreground/60 mb-8">
            Restaurantes, indústrias, condomínios, transportadoras, comércios, empresas alimentícias e outros segmentos.
          </p>
          <motion.a
            href={wa("Olá! Gostaria de solicitar uma avaliação técnica de controle de pragas para minha empresa.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("empresas")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-7 py-3.5 rounded-full shadow-gold self-start"
          >
            <WhatsAppIcon className="size-5" />
            Solicitar uma avaliação técnica
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 90, damping: 18 }}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-border bg-card/40 backdrop-blur p-8 lg:p-10 flex flex-col"
        >
          <div className="size-12 rounded-2xl border border-gold/40 bg-gold/10 flex items-center justify-center mb-5">
            <Home className="size-6 text-gold" />
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Para residências</div>
          <h3 className="font-display text-3xl sm:text-4xl mb-4">
            Sua casa merece mais do que uma <span className="text-gradient-gold">aplicação</span>.
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-8">
            Baratas, ratos, formigas, cupins e outras pragas podem se esconder onde você não consegue enxergar. Por
            isso, avaliamos o ambiente e indicamos o tratamento adequado para cada situação.
          </p>
          <motion.a
            href={wa("Olá! Gostaria de falar com um especialista sobre controle de pragas na minha residência.")}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("residencias")}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="mt-auto inline-flex items-center justify-center gap-2 border border-gold/50 text-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-gold/10 transition-colors self-start"
          >
            <WhatsAppIcon className="size-5 text-gold" />
            Falar com um especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
