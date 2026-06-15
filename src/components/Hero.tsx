import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import technician from "@/assets/technician.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden noise-overlay">
      {/* gradient ambient */}
      <div className="absolute inset-0 bg-gradient-forest" />
      <motion.div
        aria-hidden
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/20 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -30, 25, 0], y: [0, 20, -25, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 18 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 text-gold text-xs tracking-[0.2em] uppercase mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
              className="inline-flex"
            >
              <Sparkles className="size-3.5" />
            </motion.span>
            Dedetização em Sorocaba e Região
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 90, damping: 18 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-foreground"
          >
            Livre-se das <span className="text-gradient-gold">pragas</span> de uma vez por todas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg text-foreground/75 max-w-xl leading-relaxed"
          >
            Proteção contra pragas e prevenção contínua para manter sua casa ou seu negócio sempre seguro — com produtos seguros para família e pets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-8 py-4 rounded-full shadow-gold relative overflow-hidden"
            >
              <motion.span
                aria-hidden
                animate={{ x: ["-150%", "200%"] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />
              <WhatsAppIcon className="size-5 relative" />
              <span className="relative">Peça um orçamento grátis</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#servicos"
              className="inline-flex items-center gap-2 border border-gold/50 text-foreground font-semibold px-8 py-4 rounded-full hover:bg-gold/10 transition-colors"
            >
              Nossos serviços
            </motion.a>
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
          initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80, damping: 16 }}
          className="relative aspect-[4/5] max-w-md mx-auto w-full"
        >
          <motion.div
            aria-hidden
            animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full rounded-3xl overflow-hidden border border-gold/30 shadow-forest"
          >
            <img src={technician} alt="Técnico Doutor Ambiental" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-transparent" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 18 }}
              className="absolute bottom-6 left-6 right-6 bg-forest-deep/80 backdrop-blur-md border border-gold/30 rounded-2xl p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Profissionais certificados</div>
              <div className="font-display text-xl mt-1">Equipe especializada</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
