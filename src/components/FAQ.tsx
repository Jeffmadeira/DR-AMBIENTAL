import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Os serviços da Doutor Ambiental são acessíveis para o meu orçamento?",
    a: "Sim. Oferecemos preços tabelados e acessíveis, além de opções de pagamento facilitadas para atender às necessidades de nossos clientes.",
  },
  {
    q: "Terei que sair do local durante a dedetização?",
    a: "Dependendo do tipo de infestação e do método utilizado, pode ser necessário deixar o local por um curto período. Nossa equipe irá orientá-lo sobre quaisquer precauções necessárias.",
  },
  {
    q: "Existe risco de reinfestação após o serviço?",
    a: "Nossos métodos garantem proteção duradoura. Em casos raros de reinfestação, oferecemos serviços adicionais conforme necessário.",
  },
  {
    q: "Como agendar o serviço se tenho uma agenda lotada?",
    a: "Entendemos que seu tempo é valioso. Oferecemos flexibilidade de horários e agendamento conveniente para atender às suas necessidades.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28 bg-background">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
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
