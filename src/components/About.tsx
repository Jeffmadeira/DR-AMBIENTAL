import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import van from "@/assets/van.jpg";

const proofs = [
  { value: "+150", label: "Condomínios atendidos" },
  { value: "9", label: "Anos de mercado" },
  { value: "ISO", label: "Certificação 9001" },
];

const segments = [
  "Grandes indústrias",
  "Indústria alimentícia",
  "Granjas",
  "Prefeituras e órgãos públicos",
  "Condomínios de grande porte",
  "Operações em diferentes regiões do Brasil",
];

export function About() {
  return (
    <section id="sobre" className="py-28 bg-forest-deep relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 18 }}
          className="relative rounded-3xl overflow-hidden border border-gold/30 aspect-[4/3]"
        >
          <img src={van} alt="Frota Doutor Ambiental" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 18 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Quem está por trás</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            A experiência da <span className="text-gradient-gold">Ártica</span> agora está em Sorocaba
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4">
            A Doutor Ambiental faz parte da <span className="text-gold font-semibold">Ártica Saúde Ambiental</span>,
            grupo que atua nacionalmente no mercado de controle de pragas. Em 9 anos de mercado, a Ártica acumulou
            experiência em operações de diferentes níveis de complexidade.
          </p>

          <div className="grid grid-cols-3 gap-3 my-8">
            {proofs.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 160, damping: 16 }}
                className="rounded-2xl border border-gold/30 bg-card/50 p-4 text-center"
              >
                <div className="font-display text-3xl text-gradient-gold">{p.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1">{p.label}</div>
              </motion.div>
            ))}
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
            {segments.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 200, damping: 20 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/85">{p}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-foreground/75 leading-relaxed">
            Você contrata uma empresa local. Mas conta com o conhecimento de uma operação que já enfrentou grandes
            desafios no controle de pragas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
