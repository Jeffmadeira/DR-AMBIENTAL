import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Check, Search, Stethoscope, Target, SprayCan, LineChart } from "lucide-react";

const WHATSAPP_PHONE = "5515988420000";
const waEnv = (title: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Olá! Gostaria de falar sobre controle de pragas para ${title}.`,
  )}`;

const steps = [
  { icon: Search, title: "Inspeção", desc: "Identificamos focos e condições favoráveis." },
  { icon: Stethoscope, title: "Diagnóstico", desc: "Avaliamos o nível e a origem do problema." },
  { icon: Target, title: "Estratégia", desc: "Definimos a abordagem por ambiente e porte." },
  { icon: SprayCan, title: "Controle", desc: "Tratamento com produtos e métodos adequados." },
  { icon: LineChart, title: "Acompanhamento", desc: "Controle contínuo quando necessário." },
];

const environments = ["Residências", "Comércios", "Condomínios", "Empresas e Indústrias"];

const differentials = [
  "Atendimento local em Sorocaba e região",
  "Processos padronizados com ISO 9001",
  "Métodos definidos por diagnóstico, do apartamento à indústria",
  "Respaldo da Ártica Saúde Ambiental — 9 anos e +150 condomínios",
];

export function Overview() {
  return (
    <section id="como-funciona" className="py-8 sm:py-10 bg-background relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-[360px] h-[360px] rounded-full bg-gold/10 blur-[120px]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 18 }}
          className="max-w-2xl mb-8"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Como trabalhamos</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
            Da inspeção ao acompanhamento, <span className="text-gradient-gold">PROBLEMA RESOLVIDO!</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-10">
          {/* Desktop: horizontal connecting line */}
          <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-border overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-gradient-gold origin-left"
            />
          </div>

          {/* Mobile: vertical connecting line */}
          <div className="sm:hidden absolute left-[27px] top-2 bottom-2 w-0.5 bg-border overflow-hidden rounded-full">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full bg-gradient-gold origin-top"
            />
          </div>

          <ol className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-0">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12, type: "spring", stiffness: 200, damping: 16 }}
                  className="flex items-start gap-4 sm:flex-1 sm:flex-col sm:items-center sm:text-center sm:px-2"
                >
                  <div className="relative shrink-0">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.12 + 0.1, type: "spring", stiffness: 220, damping: 14 }}
                      className="size-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold relative z-10"
                    >
                      <Icon className="size-6 text-primary-foreground" />
                    </motion.div>
                    <span className="absolute -top-1.5 -right-1.5 size-5 rounded-full bg-forest-deep border border-gold/50 text-[10px] font-bold text-gold flex items-center justify-center z-20">
                      {i + 1}
                    </span>
                  </div>
                  <div className="sm:mt-4 flex-1">
                    <h3 className="font-display text-base text-foreground leading-tight mb-1">{s.title}</h3>
                    <p className="text-sm text-foreground/60 leading-snug">{s.desc}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Bottom row: environments + differentials */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Atendemos</div>
            <div className="flex flex-wrap gap-2">
              {environments.map((env) => (
                <a
                  key={env}
                  href={waEnv(env)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick("segmento", env)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-card/40 backdrop-blur px-4 py-2 text-sm font-medium text-foreground/90 hover:border-gold/70 hover:bg-gold/10 transition-colors"
                >
                  {env}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Por que o Doutor Ambiental</div>
            <ul className="space-y-2">
              {differentials.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: 0.25 + i * 0.07 }}
                  className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed"
                >
                  <Check className="size-4 text-gold shrink-0 mt-0.5" />
                  <span>{d}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
