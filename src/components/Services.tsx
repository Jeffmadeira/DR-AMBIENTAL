import { motion } from "framer-motion";
import { Bug, Ant, Rat, Skull, Bird, Moon, Droplets, SprayCan, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Bug, title: "Dedetização de Baratas", desc: "Eliminamos focos escondidos e mantemos o ambiente protegido contra reinfestações." },
  { icon: Ant, title: "Dedetização de Formigas", desc: "Tratamento que atinge a colônia na raiz e evita novas infestações." },
  { icon: Bug, title: "Dedetização de Cupins", desc: "Eliminamos a infestação e protegemos seu patrimônio contra novos ataques." },
  { icon: Rat, title: "Desratização", desc: "Remoção segura de roedores e prevenção contra retorno." },
  { icon: Skull, title: "Controle de Escorpiões", desc: "Eliminação de esconderijos com foco em segurança para crianças e pets." },
  { icon: Bird, title: "Controle de Pombos", desc: "Manejo humanizado que afasta as aves e protege seu patrimônio." },
  { icon: Moon, title: "Controle de Morcegos", desc: "Manejo seguro e dentro das normas sanitárias vigentes." },
  { icon: Droplets, title: "Limpeza de Caixa d'Água", desc: "Remoção de impurezas e garantia de água mais segura para sua família." },
  { icon: SprayCan, title: "Sanitização de Ambientes", desc: "Redução de vírus, bactérias e microrganismos para espaços mais seguros." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Nossos serviços</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Soluções completas em <span className="text-gradient-gold">controle de pragas</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.title}
                href="https://api.whatsapp.com/send/?phone=5515988420000"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-gold/50 transition-colors overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors blur-2xl" />
                <div className="relative">
                  <div className="size-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 shadow-gold">
                    <Icon className="size-6 text-primary-foreground" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold">
                    Solicitar <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
