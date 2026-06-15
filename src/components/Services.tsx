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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
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
                whileHover={{ y: -4 }}
                className={[
                  "group relative p-5 rounded-2xl bg-card border transition-colors overflow-hidden",
                  s.featured
                    ? "border-gold/60 shadow-[0_0_40px_-12px_rgba(212,175,55,0.3)]"
                    : "border-border hover:border-gold/50",
                ].join(" ")}
              >
                <div
                  className={[
                    "absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl transition-colors",
                    s.featured ? "bg-gold/25 group-hover:bg-gold/35" : "bg-gold/10 group-hover:bg-gold/20",
                  ].join(" ")}
                />
                {s.featured && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gold/15 border border-gold/40 text-[9px] uppercase tracking-widest text-gold font-semibold">
                    Alerta de Infestação
                  </div>
                )}
                <div className="relative">
                  <div className="size-10 rounded-xl bg-gradient-gold flex items-center justify-center mb-3 shadow-gold">
                    <Icon className="text-primary-foreground" width={22} height={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-base text-foreground leading-tight mb-1.5">{s.title}</h3>
                  <p className="text-xs text-foreground/60 leading-snug line-clamp-2">{s.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-gold">
                    Solicitar <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
