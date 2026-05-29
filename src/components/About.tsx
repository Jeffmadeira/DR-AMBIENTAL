import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import van from "@/assets/van.jpg";

const points = [
  "Preço justo e sem surpresas, com total transparência.",
  "Pagamento facilitado para caber no seu bolso.",
  "Mais conforto para você e sua família durante e após o serviço.",
  "Processo seguro e responsável — protegido para crianças e pets.",
];

export function About() {
  return (
    <section id="sobre" className="py-28 bg-forest-deep relative overflow-hidden">
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-gold/30 aspect-[4/3]"
        >
          <img src={van} alt="Frota Doutor Ambiental" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/70 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Quem somos</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
            Conheça a <span className="text-gradient-gold">Doutor Ambiental</span>
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-4">
            Unimos excelência e eficácia para proteger sua residência ou empresa das pragas indesejadas. Fazemos parte do
            <span className="text-gold font-semibold"> Grupo Ártica Saúde Ambiental</span> e contamos com uma equipe experiente, sempre pronta para oferecer soluções rápidas, eficientes e seguras em toda a região.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-8">
            A qualidade e a satisfação do cliente são nosso compromisso inabalável, preservando o bem-estar da sua família e dos seus animais de estimação.
          </p>

          <ul className="space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
