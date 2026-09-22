import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export const faqs = [
  {
    q: "O serviço é seguro para crianças e animais de estimação?",
    a: "Sim. Trabalhamos com produtos registrados e aplicados por profissionais treinados, em dosagens e métodos definidos para cada ambiente. Antes do serviço, a equipe orienta sobre as precauções específicas do tratamento escolhido.",
  },
  {
    q: "Preciso sair do ambiente durante o tratamento?",
    a: "Depende do tipo de tratamento e do nível de infestação. Em muitos casos a permanência é possível; em outros, indicamos um período de ausência. Essa orientação é dada na inspeção, antes da execução.",
  },
  {
    q: "Uma aplicação é suficiente para eliminar a infestação?",
    a: "Nem sempre. Infestações consolidadas envolvem ciclos de reprodução e focos ocultos. Por isso avaliamos o ambiente e, quando necessário, definimos reforços ou um programa de controle com acompanhamento.",
  },
  {
    q: "Como vocês identificam a origem do problema?",
    a: "Através da inspeção técnica: procuramos sinais, abrigos, pontos de acesso, fontes de água e alimento e condições estruturais que favorecem a praga. O diagnóstico define a estratégia, não o contrário.",
  },
  {
    q: "Vocês atendem empresas e condomínios?",
    a: "Sim. Atendemos residências, comércios, condomínios, indústrias e empresas do setor alimentício, com estratégias adequadas ao porte e às exigências de cada operação.",
  },
  {
    q: "Trabalham com contratos recorrentes?",
    a: "Sim. Para operações que precisam de continuidade, estruturamos programas de controle periódico com cronograma, registros e acompanhamento dos resultados.",
  },
  {
    q: "Vocês emitem documentação do serviço?",
    a: "Sim. Emitimos a documentação do serviço executado, incluindo os registros necessários para fiscalização e auditorias, conforme o tipo de operação atendida.",
  },
  {
    q: "O que define o valor do controle de pragas?",
    a: "O valor é definido pelo diagnóstico: tipo de praga, nível de infestação, área, características do ambiente e necessidade de acompanhamento. Por isso a avaliação técnica vem antes da proposta.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-10 bg-background">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">F.A.Q.</div>
          <h2 className="font-display text-4xl sm:text-5xl">Perguntas frequentes</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, type: "spring", stiffness: 140, damping: 18 }}
                whileHover={{ scale: 1.01, borderColor: "rgba(212,175,55,0.5)" }}
                className="rounded-2xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg tracking-wide">{f.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0">
                    <Plus className="size-5 text-gold" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-foreground/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
