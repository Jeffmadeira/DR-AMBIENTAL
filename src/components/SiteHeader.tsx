import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logoHoriz from "@/assets/logo-horizontal.png.asset.json";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-forest-deep/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Doutor Ambiental" className="h-12 w-12 rounded-md object-cover" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg tracking-wide text-foreground">DOUTOR AMBIENTAL</div>
            <div className="text-[10px] text-gold tracking-[0.2em] uppercase">Controle de Pragas</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-full shadow-gold hover:scale-105 transition-transform"
        >
          <Phone className="size-4" />
          Orçamento Grátis
        </a>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden bg-forest-deep border-t border-border"
        >
          <div className="px-5 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/90 py-2">
                {l.label}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5515988420000"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-gold text-primary-foreground font-semibold text-center py-3 rounded-full"
            >
              Orçamento Grátis
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
