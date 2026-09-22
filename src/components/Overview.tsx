import { motion } from "framer-motion";
import { trackWhatsAppClick } from "@/lib/analytics";
import { ArrowRight, Check, Search, Stethoscope, Target, SprayCan, LineChart } from "lucide-react";

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
    <section id="como-funciona" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-[360px] h-[360px] rounded-full bg-gold/10 blur-[120px]" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 18 }}
          className="max-w-2xl mb-10"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Como trabalhamos</div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground">
            Da inspeção ao acompanhamento, <span className="text-gradient-gold">sem achismos</span>
          </h2>
        </motion.div>

        {/* Process — compact horizontal flow */}
        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-stretch gap-1 sm:gap-0 mb-12"
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 sm:flex-1 sm:flex-col sm:gap-2 sm:items-start"
              >
                <div className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center">
                  <span className="font-display text-2xl text-gold/50 leading-none shrink-0 sm:text-3xl">
                    {i + 1}
                  </span>
                  <div className="size-8 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
                    <Icon className="size-4 text-primary-foreground" />
                  </div>
                  <div className="sm:mt-0">
                    <h3 className="font-display text-sm font-semibold text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="hidden sm:block text-xs text-foreground/60 leading-snug mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="size-4 text-gold/40 shrink-0 mx-1 sm:mx-auto sm:my-1 sm:block sm:rotate-90 lg:rotate-0" />
                )}
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Bottom row: environments + differentials */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Environments */}
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

          {/* Differentials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-3">Por que o Doutor Ambiental</div>
            <ul className="space-y-2.5">
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
