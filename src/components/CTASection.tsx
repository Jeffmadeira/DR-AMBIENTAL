import { motion } from "framer-motion";
import shield from "@/assets/shield.png";

export function CTASection() {
  return (
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-[0.08]" />
      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-gold/40 bg-card/60 backdrop-blur p-10 lg:p-16 text-center overflow-hidden"
        >
          <img src={shield} alt="" className="absolute -right-20 -top-10 w-80 opacity-20 pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Sua casa livre de pragas</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-5">
              Sua saúde em <span className="text-gradient-gold">primeiro lugar</span>
            </h2>
            <p className="text-foreground/75 max-w-xl mx-auto mb-8">
              Fale agora com um especialista e receba seu orçamento gratuito em poucos minutos.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-10 py-4 rounded-full shadow-gold hover:scale-[1.03] transition-transform"
            >
              Solicitar orçamento gratuito
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
