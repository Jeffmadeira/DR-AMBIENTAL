import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import technician from "@/assets/technician.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay">
      {/* gradient ambient */}
      <div className="absolute inset-0 bg-gradient-forest" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs tracking-[0.2em] uppercase mb-6"
          >
            <Sparkles className="size-3.5" />
            Dedetização em Sorocaba e Região
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground"
          >
            Livre-se das <span className="text-gradient-gold">pragas</span> de uma vez por todas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed"
          >
            Proteção contra pragas e prevenção contínua para manter sua casa ou seu negócio sempre seguro — com produtos seguros para família e pets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-full shadow-gold hover:scale-[1.03] transition-transform"
            >
              Peça um orçamento grátis
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-gold/50 text-foreground font-semibold px-8 py-4 rounded-full hover:bg-gold/10 transition-colors"
            >
              Nossos serviços
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-12 flex items-center gap-6 text-xs text-foreground/60 uppercase tracking-widest"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-gold" /> Certificada</div>
            <div className="h-4 w-px bg-border" />
            <div>Grupo Ártica Saúde Ambiental</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative aspect-[4/5] max-w-md mx-auto w-full"
        >
          <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-30" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden border border-gold/30 shadow-forest">
            <img src={technician} alt="Técnico Doutor Ambiental" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 bg-forest-deep/80 backdrop-blur-md border border-gold/30 rounded-2xl p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Profissionais certificados</div>
              <div className="font-display text-xl mt-1">Equipe especializada</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
