import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { Rat, Bird, Droplets, SprayCan, ArrowUpRight } from "lucide-react";
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isLarge = i < 4;
            return (
              <motion.a
                key={s.title}
                href={waLink(s.title)}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04 }}
                whileHover={{ y: -3 }}
                className={[
                  "group relative flex items-center gap-3 rounded-xl bg-card border transition-colors overflow-hidden",
                  isLarge ? "p-3 sm:p-4 border-border hover:border-gold/50" : "p-2.5 border-border/60 hover:border-gold/40",
                  s.featured ? "border-gold/60 shadow-[0_0_30px_-10px_rgba(212,175,55,0.25)]" : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "shrink-0 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold",
                    isLarge ? "size-10" : "size-8",
                  ].join(" ")}
                >
                  <Icon
                    className="text-primary-foreground"
                    width={isLarge ? 22 : 16}
                    height={isLarge ? 22 : 16}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className={[
                    "font-display text-foreground leading-tight truncate",
                    isLarge ? "text-sm sm:text-base" : "text-[11px] sm:text-xs",
                  ].join(" ")}>
                    {s.title}
                  </h3>
                  {isLarge && (
                    <p className="text-[10px] sm:text-xs text-foreground/50 leading-snug line-clamp-2 mt-0.5">
                      {s.desc}
                    </p>
                  )}
                </div>
                {s.featured && (
                  <div className="absolute top-1.5 right-1.5 px-1.5 py-px rounded-full bg-gold/15 border border-gold/40 text-[7px] uppercase tracking-widest text-gold font-semibold">
                    Alerta
                  </div>
                )}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
