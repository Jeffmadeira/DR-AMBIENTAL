import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { Rat, Bird, Droplets, SprayCan } from "lucide-react";
import {
  ScorpionIcon,
  CockroachIcon,
  TermiteIcon,
  SpiderIcon,
  BedbugIcon,
  FlyIcon,
  FleaIcon,
  TickIcon,
  AntIcon,
  BatIcon,
} from "@/components/icons/pests";

type PestIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

type Service = {
  icon: PestIcon;
  title: string;
  desc: string;
  featured?: boolean;
};

const services: Service[] = [
  { icon: ScorpionIcon, title: "Controle de Escorpiões", desc: "Eliminação segura para crianças e pets.", featured: true },
  { icon: CockroachIcon, title: "Dedetização de Baratas", desc: "Elimina focos escondidos e previne reinfestações." },
  { icon: Rat, title: "Desratização", desc: "Remoção segura de roedores e bloqueio de retorno." },
  { icon: TermiteIcon, title: "Descupinização", desc: "Protege seu patrimônio contra novos ataques." },
  { icon: SpiderIcon, title: "Controle de Aranhas", desc: "Remoção de teias e tratamento dos abrigos." },
  { icon: BedbugIcon, title: "Controle de Percevejos", desc: "Tratamento completo em colchões e estofados." },
  { icon: FlyIcon, title: "Controle de Moscas", desc: "Barreira sanitária para cozinhas e áreas externas." },
  { icon: FleaIcon, title: "Controle de Pulgas", desc: "Eliminação em ambientes, pets e quintais." },
  { icon: TickIcon, title: "Controle de Carrapatos", desc: "Tratamento em áreas verdes e canis." },
  { icon: AntIcon, title: "Dedetização de Formigas", desc: "Atinge a colônia na raiz e evita o retorno." },
  { icon: Bird, title: "Controle de Pombos", desc: "Manejo humanizado que afasta as aves." },
  { icon: BatIcon, title: "Controle de Morcegos", desc: "Manejo seguro dentro das normas sanitárias." },
  { icon: Droplets, title: "Limpeza de Caixa d'Água", desc: "Água mais segura para toda a família." },
  { icon: SprayCan, title: "Sanitização de Ambientes", desc: "Reduz vírus, bactérias e microrganismos." },
];

const WHATSAPP_PHONE = "5515988420000";
const waLink = (title: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento para ${title}.`,
  )}`;

const cardTones = [
  "oklch(0.29 0.045 203)",
  "oklch(0.305 0.05 195)",
  "oklch(0.295 0.047 210)",
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Nossos serviços</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Soluções completas em <span className="text-gradient-gold">controle de pragas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative">
                {s.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 14 }}
                    className="absolute -top-2.5 -right-1 z-10 px-2.5 py-0.5 rounded-full bg-gradient-gold text-[8px] sm:text-[10px] uppercase tracking-widest text-primary-foreground font-semibold shadow-gold whitespace-nowrap"
                  >
                    Alerta de Infestação
                  </motion.div>
                )}
                <motion.a
                  href={waLink(s.title)}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.05, type: "spring", stiffness: 180, damping: 18 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={[
                    "group relative flex flex-col items-start text-left rounded-xl border p-4 sm:p-5 transition-colors h-full",
                    s.featured ? "border-gold/60 shadow-[0_0_30px_-10px_rgba(212,175,55,0.25)]" : "border-border hover:border-gold/50",
                  ].join(" ")}
                  style={{ backgroundColor: cardTones[i % cardTones.length] }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-3 size-12"
                  >
                    <Icon
                      className="text-primary-foreground"
                      width={26}
                      height={26}
                      strokeWidth={2}
                    />
                  </motion.div>
                  <h3 className="font-display text-sm sm:text-base text-foreground leading-tight mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {s.desc}
                  </p>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
