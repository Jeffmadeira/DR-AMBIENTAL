import { motion } from "framer-motion";
import { Search, Stethoscope, Target, SprayCan, LineChart } from "lucide-react";

const steps = [
  { icon: Search, title: "Inspeção", desc: "Identificamos sinais, possíveis focos e condições que favorecem a presença da praga." },
  { icon: Stethoscope, title: "Diagnóstico", desc: "Entendemos o nível do problema e os fatores que precisam ser corrigidos." },
  { icon: Target, title: "Estratégia", desc: "Definimos a abordagem mais adequada para aquele ambiente e aquele porte." },
  { icon: SprayCan, title: "Controle", desc: "Executamos o tratamento com métodos e produtos adequados a cada situação." },
  { icon: LineChart, title: "Acompanhamento", desc: "Quando necessário, estruturamos um programa de controle contínuo." },
];

export function Problem() {
  return (
    <section id="problema" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 w-[420px] h-[420px] rounded-full bg-gold/10 blur-[140px]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 18 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">O problema</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Você não precisa apenas matar a praga. Precisa <span className="text-gradient-gold">controlar o problema</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Uma barata, um rato, um escorpião ou qualquer outra praga pode ser apenas o sinal de uma condição que você
            ainda não identificou. Por isso, nosso trabalho começa antes da aplicação. O objetivo não é simplesmente
            eliminar a praga que você viu — é entender por que ela apareceu e o que precisa ser feito para evitar que o
            problema volte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.09, type: "spring", stiffness: 140, damping: 16 }}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl border border-border bg-card p-5 h-full"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
                    <Icon className="size-5 text-primary-foreground" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Etapa {i + 1}</span>
                </div>
                <h3 className="font-display text-lg mb-1.5">{s.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
