import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.15, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-gold/50 animate-ping" />
      <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping [animation-delay:0.6s]" />
      <motion.span
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        className="relative inline-flex"
      >
        <MessageCircle className="size-7 text-primary-foreground" />
      </motion.span>
    </motion.a>
  );
}
