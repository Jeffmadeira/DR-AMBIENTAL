import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-gold shadow-gold flex items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <MessageCircle className="size-7 text-primary-foreground relative" />
    </motion.a>
  );
}
