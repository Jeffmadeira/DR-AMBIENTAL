import { motion } from "framer-motion";
import { MapPin, BadgeCheck, Layers, Building2 } from "lucide-react";

const items = [
  { icon: MapPin, title: "Atendimento em Sorocaba e região", desc: "Equipe local, com deslocamento rápido e agenda própria para a região." },
  { icon: BadgeCheck, title: "Processos e certificação ISO 9001", desc: "Procedimentos padronizados e boas práticas herdadas de uma operação certificada." },
  { icon: Layers, title: "Métodos adequados a cada porte", desc: "Do apartamento à indústria alimentícia: produtos e estratégias definidos por diagnóstico." },
  { icon: Building2, title: "Respaldo da Ártica Saúde Ambiental", desc: "9 anos de mercado, +150 condomínios, granjas, prefeituras e órgãos públicos." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 18 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Por que contratar</div>
          <h2 className="font-display text-4xl sm:text-5xl">
            Estrutura local. <span className="text-gradient-gold">Experiência nacional.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 50, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 140, damping: 16 }}
                whileHover={{ y: -8 }}
                className="text-center p-6 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto size-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5"
                >
                  <Icon className="size-8 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-xl mb-2">{it.title}</h3>
                <p className="text-sm text-foreground/65">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
