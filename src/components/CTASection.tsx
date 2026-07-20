import { motion } from "framer-motion";
import shield from "@/assets/shield.png";
import { trackWhatsAppClick } from "@/lib/analytics";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function CTASection() {
  return (
    <section className="py-24 bg-forest-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-gold opacity-[0.08]" />
      <div className="max-w-5xl mx-auto px-5 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90, damping: 18 }}
          className="relative rounded-3xl border border-gold/40 bg-card/60 backdrop-blur p-10 lg:p-16 text-center overflow-hidden"
        >
          <motion.img
            src={shield}
            alt=""
            animate={{ rotate: [0, 8, -4, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-20 -top-10 w-80 opacity-20 pointer-events-none"
          />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Sua casa livre de pragas</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-5">
              Sua saúde em <span className="text-gradient-gold">primeiro lugar</span>
            </h2>
            <p className="text-foreground/75 max-w-xl mx-auto mb-8">
              Fale agora com um especialista e receba seu orçamento gratuito em poucos minutos.
            </p>
            <motion.a
              href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0 10px 30px -10px rgba(212,175,55,0.4)", "0 14px 40px -8px rgba(212,175,55,0.7)", "0 10px 30px -10px rgba(212,175,55,0.4)"] }}
              transition={{ boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }, scale: { type: "spring", stiffness: 400, damping: 16 } }}
              className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-bold px-10 py-4 rounded-full relative overflow-hidden"
            >
              <motion.span
                aria-hidden
                animate={{ x: ["-150%", "200%"] }}
                transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />
              <WhatsAppIcon className="size-5 relative" />
              <span className="relative">Solicitar orçamento gratuito</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
