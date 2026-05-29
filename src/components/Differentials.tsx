import { motion } from "framer-motion";
import { Clock, ShieldCheck, Users, FileCheck2 } from "lucide-react";

const items = [
  { icon: FileCheck2, title: "Orçamento Gratuito", desc: "Fazemos seu orçamento em poucos minutos, sem compromisso." },
  { icon: ShieldCheck, title: "Produtos Seguros", desc: "Eficazes e seguros para sua família e seus pets." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Agendamos sua dedetização com rapidez e pontualidade." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais treinados e com experiência comprovada." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Por que escolher</div>
          <h2 className="font-display text-4xl sm:text-5xl">O padrão Doutor Ambiental</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-center p-6"
              >
                <div className="mx-auto size-16 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                  <Icon className="size-8 text-primary-foreground" />
                </div>
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
