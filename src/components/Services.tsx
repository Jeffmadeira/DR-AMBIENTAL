import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { ArrowUpRight, Bird, ChevronDown, Droplets, MessageCircle, Rat, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ScorpionIcon,
  CockroachIcon,
  TermiteIcon,
  SpiderIcon,
  BedbugIcon,
  FlyIcon,
  FleaIcon,
  TickIcon,
  AntIcon,
  BatIcon,
  MosquitoIcon,
  MothIcon,
  WoodBorerIcon,
  WaspIcon,
} from "@/components/icons/pests";

type PestIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

type Service = {
  icon: PestIcon;
  title: string;
  desc: string;
  details: Array<{
    heading: string;
    body: string;
  }>;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: ScorpionIcon,
    title: "Controle de Escorpiões",
    desc: "Manejo integrado para escorpião-amarelo e escorpião-marrom.",
    featured: true,
    details: [
      {
        heading: "Onde se escondem",
        body: "Escorpiões são aracnídeos noturnos que se adaptaram muito bem ao ambiente urbano. As espécies mais preocupantes são o escorpião-amarelo e o escorpião-marrom, encontrados sob entulhos, madeira empilhada, caixas de passagem, ralos e terrenos baldios.",
      },
      {
        heading: "Riscos de acidentes graves",
        body: "A picada, especialmente do escorpião-amarelo, é uma emergência médica. O veneno pode ser perigoso para crianças pequenas, idosos e animais de estimação, causando dor imediata e intensa.",
      },
      {
        heading: "Como funciona o controle profissional",
        body: "O controle efetivo exige Manejo Integrado de Pragas: eliminamos a fonte de alimento, principalmente baratas, e aplicamos formulações microencapsuladas em esconderijos. As microcápsulas aderem ao corpo do escorpião e liberam o princípio ativo gradualmente.",
      },
    ],
  },
  {
    icon: CockroachIcon,
    title: "Dedetização de Baratas",
    desc: "Controle técnico de barata de esgoto, voadora e francesinha.",
    details: [
      {
        heading: "Barata de esgoto",
        body: "A Periplaneta americana, conhecida como barata de esgoto ou barata voadora, vive em locais quentes, úmidos e escuros, como caixas de gordura, redes de esgoto, ralos, tubulações e porões. À noite, invade casas e empresas em busca de água e alimento.",
      },
      {
        heading: "Barata francesinha",
        body: "A Blattella germanica é menor, castanha clara e vive dentro de cozinhas, copas e despensas. Esconde-se em frestas de armários, dobradiças, motores de geladeira, micro-ondas e conduítes elétricos.",
      },
      {
        heading: "Tratamento profissional",
        body: "A barata de esgoto exige barreira química em perímetro, ralos e caixas de inspeção. Já a francesinha demanda gel inseticida aplicado em pontos estratégicos, pois a própria colônia distribui o produto por canibalismo e coprofagia.",
      },
    ],
  },
  {
    icon: Rat,
    title: "Desratização",
    desc: "Controle de ratazanas, ratos de telhado e camundongos.",
    details: [
      {
        heading: "Principais espécies",
        body: "Ratazanas vivem em tocas no solo e esgotos. Ratos de telhado são excelentes escaladores e ocupam forros, sótãos e árvores. Camundongos são pequenos e costumam viver dentro de fogões, gavetas e despensas.",
      },
      {
        heading: "Riscos à saúde e prejuízos",
        body: "Roedores transmitem doenças graves, como leptospirose e hantavírus, por urina e fezes. Também roem cabos elétricos, podendo causar curtos-circuitos e incêndios.",
      },
      {
        heading: "Como funciona a desratização",
        body: "O trabalho profissional mapeia trilhas e pontos de alimentação. São instalados porta-iscas lacrados e seguros com iscas raticidas adequadas para áreas internas, externas e úmidas, sem uso de chumbinho.",
      },
    ],
  },
  {
    icon: TermiteIcon,
    title: "Descupinização",
    desc: "Proteção contra cupim subterrâneo e cupim de madeira seca.",
    details: [
      {
        heading: "Cupim de solo",
        body: "O cupim subterrâneo forma colônias gigantescas no subsolo e cria túneis de terra por paredes, alicerces, conduítes e tubulações. Pode atacar madeira, gesso, alvenaria, plásticos e fiações elétricas.",
      },
      {
        heading: "Cupim de madeira seca",
        body: "Vive inteiramente dentro da peça de madeira atacada e não precisa de umidade externa. O sinal mais comum é um pó granulado, semelhante a pequenos grãos de areia, abaixo do móvel, porta ou forro.",
      },
      {
        heading: "Tratamento profissional",
        body: "No cupim de solo, a solução é criar uma barreira química com perfurações e injeção de calda cupinicida. Na madeira seca, o tratamento é localizado, com injeção direta nos orifícios e proteção superficial preventiva.",
      },
    ],
  },
  {
    icon: SpiderIcon,
    title: "Controle de Aranhas",
    desc: "Tratamento preventivo em cantos, rodapés, beirais e garagens.",
    details: [
      {
        heading: "Onde aparecem",
        body: "Aranhas podem se instalar em garagens, porões, atrás de móveis, quadros, sapatos e roupas. Algumas espécies, como aranha-marrom, armadeira e viúva-negra, apresentam risco de saúde pública.",
      },
      {
        heading: "Controle profissional",
        body: "Realizamos remoção de teias e pulverização detalhada em pontos de abrigo. A aplicação cria uma película protetora residual que age quando o aracnídeo entra em contato com a superfície tratada.",
      },
    ],
  },
  {
    icon: BedbugIcon,
    title: "Controle de Percevejos",
    desc: "Tratamento completo em colchões, estrados e estofados.",
    details: [
      {
        heading: "O que são",
        body: "Percevejos de cama são insetos hematófagos, ou seja, alimentam-se de sangue humano. Escondem-se nas dobras e costuras de colchões, estrados, cabeceiras, poltronas e rodapés.",
      },
      {
        heading: "Riscos e transtornos",
        body: "Atacam durante a noite e podem causar coceira intensa, reações alérgicas, manchas vermelhas e estresse psicológico. Em hotéis, uma infestação pode comprometer gravemente a reputação do negócio.",
      },
      {
        heading: "Tratamento profissional",
        body: "O combate exige inspeção rigorosa, aplicação residual em locais de repouso e, em muitos casos, tratamentos físicos como aspiração e vapor quente para atingir adultos e ovos.",
      },
    ],
  },
  {
    icon: FlyIcon,
    title: "Controle de Moscas",
    desc: "Barreira sanitária para cozinhas, empresas e áreas externas.",
    details: [
      {
        heading: "Onde se proliferam",
        body: "Moscas domésticas e varejeiras se desenvolvem em matéria orgânica em decomposição, lixeiras, feiras, ralos com gordura, aterros e áreas de manipulação de alimentos.",
      },
      {
        heading: "Riscos para a saúde",
        body: "Ao circular entre lixo, fezes e alimentos, moscas contaminam superfícies com bactérias, vírus e protozoários ligados a cólera, disenteria, febre tifoide e conjuntivite.",
      },
      {
        heading: "Controle profissional",
        body: "O manejo inclui identificação dos focos, pulverização, atomização ou termonebulização para adultos, além de iscas mosquicidas e armadilhas luminosas em ambientes comerciais.",
      },
    ],
  },
  {
    icon: MosquitoIcon,
    title: "Controle de Mosquitos e Pernilongos",
    desc: "Controle de Aedes aegypti, Culex e focos de reprodução.",
    details: [
      {
        heading: "Aedes e Culex",
        body: "O Aedes aegypti, mosquito da dengue, tem hábitos diurnos e se reproduz em água limpa. O Culex, pernilongo comum, tem hábitos noturnos e se prolifera em água suja e rica em matéria orgânica.",
      },
      {
        heading: "Riscos e transtornos",
        body: "Mosquitos causam reações alérgicas, noites mal dormidas e podem transmitir doenças graves como dengue, zika, chikungunya e febre amarela.",
      },
      {
        heading: "Tratamento técnico",
        body: "O controle atua na fase larval e adulta. Aplicamos larvicidas em pontos com água parada que não podem ser eliminados e atomização ou termonebulização para reduzir rapidamente a população adulta.",
      },
    ],
  },
  {
    icon: FleaIcon,
    title: "Controle de Pulgas e Carrapatos",
    desc: "Eliminação no ambiente, caminhas dos pets, frestas e quintais.",
    details: [
      {
        heading: "Onde ficam",
        body: "Pulgas e carrapatos infestam animais e todo o ambiente. Apenas uma pequena parte está no pet adulto; ovos, larvas e pupas ficam em tapetes, frestas de piso, rodapés, caminhas e quintais.",
      },
      {
        heading: "Riscos para saúde",
        body: "Podem causar alergias severas, anemia em animais e transmitir doenças como erliquiose, babesiose e verminoses.",
      },
      {
        heading: "Dedetização profissional",
        body: "A pulverização ambiental combina efeito adulticida com inibidores de crescimento, impedindo que ovos e larvas se desenvolvam e quebrando o ciclo da infestação.",
      },
    ],
  },
  {
    icon: AntIcon,
    title: "Dedetização de Formigas",
    desc: "Controle de formigas doceiras, cortadeiras e ninhos ocultos.",
    details: [
      {
        heading: "Ninhos escondidos",
        body: "Formigas urbanas constroem ninhos complexos dentro de paredes, atrás de azulejos, eletrodomésticos e batentes de portas. Muitas vezes são subestimadas por parecerem inofensivas.",
      },
      {
        heading: "Riscos para a saúde",
        body: "Elas circulam por lixeiras, esgotos e fezes de animais e depois caminham sobre alimentos, pias e cozinhas, espalhando bactérias que podem causar infecções intestinais.",
      },
      {
        heading: "Controle correto",
        body: "Sprays comuns podem fragmentar a colônia e criar novos ninhos. O método profissional usa gel formicida e granulados levados pelas operárias até a rainha e as larvas.",
      },
    ],
  },
  {
    icon: MothIcon,
    title: "Controle de Traças",
    desc: "Proteção para armários, estantes, livros, tecidos e documentos.",
    details: [
      {
        heading: "Traças de roupas e livros",
        body: "Traças fogem da luz e podem aparecer em rodapés, caixas, bibliotecas, armários e paredes. Alimentam-se de substâncias ricas em amido, celulose e queratina.",
      },
      {
        heading: "Prejuízos causados",
        body: "Podem destruir documentos, livros, papéis de parede, fotografias e tecidos de fibras naturais como lã, seda, algodão e linho.",
      },
      {
        heading: "Tratamento profissional",
        body: "A eliminação exige acesso a esconderijos, frestas, rodapés, prateleiras e gavetas, com aplicação de formulações que quebram o ciclo evolutivo e mantêm o local protegido por mais tempo.",
      },
    ],
  },
  {
    icon: WoodBorerIcon,
    title: "Tratamento de Brocas de Madeira",
    desc: "Controle de besouros xilófagos em móveis, portas e estruturas.",
    details: [
      {
        heading: "O que são",
        body: "Brocas de madeira são besouros xilófagos. A fêmea deposita ovos nos poros da madeira e a larva perfura a peça de dentro para fora durante meses ou anos.",
      },
      {
        heading: "Como identificar",
        body: "O sinal principal são furos redondos na superfície e um pó muito fino, parecido com talco. Diferente do cupim de madeira seca, o resíduo não costuma ser granulado.",
      },
      {
        heading: "Controle profissional",
        body: "O tratamento é minucioso: os técnicos injetam calda inseticida em cada galeria e fazem proteção superficial por pincelamento ou pulverização para impedir novas posturas.",
      },
    ],
  },
  {
    icon: Bird,
    title: "Controle de Pombos",
    desc: "Manejo integrado, repelência e barreiras sem extermínio.",
    details: [
      {
        heading: "Ratos de asas",
        body: "Pombos urbanos se abrigam em telhados, forros, beirais e galpões. Suas fezes ressecadas viram pó e podem transmitir criptococose, histoplasmose, psitacose e salmonelose.",
      },
      {
        heading: "Prejuízos materiais",
        body: "As fezes são ácidas, corroem latarias, entopem calhas e danificam fachadas. Eles também carregam piolho-de-pombo, que pode invadir imóveis por frestas no teto.",
      },
      {
        heading: "Controle, não extermínio",
        body: "Como pombos são protegidos por leis ambientais, o trabalho foca em manejo integrado: espículas, fios tensionados, redes de proteção e gel repelente de contato para mudar o hábito da colônia.",
      },
    ],
  },
  {
    icon: WaspIcon,
    title: "Remoção de Vespas e Marimbondos",
    desc: "Remoção técnica de ninhos em beirais, forros e áreas externas.",
    details: [
      {
        heading: "Onde fazem ninhos",
        body: "Vespas e marimbondos formam ninhos com aspecto de papelão em beirais, cantos de janelas, caixas de ar-condicionado, forros e árvores nos quintais.",
      },
      {
        heading: "Riscos de acidentes",
        body: "São agressivos quando ameaçados e podem picar várias vezes. O veneno causa dor intensa, inchaço e, em pessoas alérgicas, pode desencadear choque anafilático.",
      },
      {
        heading: "Remoção profissional",
        body: "A operação costuma ocorrer à noite ou de madrugada, quando os insetos estão recolhidos. Com equipamentos de proteção, a equipe neutraliza a colônia e remove o ninho com segurança.",
      },
    ],
  },
  {
    icon: BatIcon,
    title: "Controle de Morcegos",
    desc: "Manejo seguro dentro das normas sanitárias e ambientais.",
    details: [
      {
        heading: "Onde se abrigam",
        body: "Morcegos podem ocupar forros, telhados, frestas altas, vãos de construção e áreas pouco movimentadas. O acúmulo de fezes e urina causa mau cheiro e contamina superfícies.",
      },
      {
        heading: "Manejo seguro",
        body: "O controle deve respeitar normas ambientais. A atuação profissional identifica entradas, realiza limpeza orientada e cria barreiras físicas para impedir o retorno sem contato direto com os animais.",
      },
    ],
  },
  {
    icon: Droplets,
    title: "Limpeza de Caixa d'Água",
    desc: "Higienização para manter a água mais segura no imóvel.",
    details: [
      {
        heading: "Por que limpar",
        body: "Caixas d'água acumulam lodo, sedimentos e microrganismos com o tempo. A limpeza periódica ajuda a manter a qualidade da água usada pela família, equipe ou clientes.",
      },
      {
        heading: "Serviço profissional",
        body: "A higienização remove resíduos internos, limpa paredes e fundo do reservatório e segue um processo seguro para reduzir riscos de contaminação.",
      },
    ],
  },
  {
    icon: SprayCan,
    title: "Sanitização de Ambientes",
    desc: "Aplicação técnica para reduzir vírus, bactérias e microrganismos.",
    details: [
      {
        heading: "Quando é indicada",
        body: "A sanitização é indicada para residências, clínicas, escritórios, comércios e áreas de alto fluxo que precisam reduzir a carga de microrganismos nas superfícies e no ambiente.",
      },
      {
        heading: "Como funciona",
        body: "A aplicação profissional alcança pontos de contato, áreas comuns e superfícies críticas, ajudando a manter o ambiente mais seguro após limpeza e organização prévias.",
      },
    ],
  },
];

const WHATSAPP_PHONE = "5515988420000";
const waLink = (title: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento para ${title}.`,
  )}`;

export function Services() {
  return (
    <section id="servicos" className="relative py-28 bg-forest-deep">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Nossos serviços</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground">
            Soluções completas em <span className="text-gradient-gold">controle de pragas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 items-start">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="relative">
                {s.featured && (
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 14 }}
                    className="absolute -top-2.5 -right-1 z-10 px-2.5 py-0.5 rounded-full bg-gradient-gold text-[8px] sm:text-[10px] uppercase tracking-widest text-primary-foreground font-semibold shadow-gold whitespace-nowrap"
                  >
                    Alerta de Infestação
                  </motion.div>
                )}
                <motion.details
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.05, type: "spring", stiffness: 180, damping: 18 }}
                  className={[
                    "group relative rounded-xl bg-card border transition-colors h-full overflow-hidden open:border-gold/70",
                    s.featured ? "border-gold/60 shadow-gold" : "border-border hover:border-gold/50",
                  ].join(" ")}
                >
                  <summary className="cursor-pointer list-none p-4 sm:p-5 [&::-webkit-details-marker]:hidden">
                    <div className="flex items-start gap-3">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-xl bg-gradient-gold flex shrink-0 items-center justify-center shadow-gold size-12"
                      >
                        <Icon
                          className="text-primary-foreground"
                          width={26}
                          height={26}
                          strokeWidth={2}
                        />
                      </motion.div>
                      <div className="min-w-0 flex-1 text-left">
                        <h3 className="font-display text-base text-foreground leading-tight mb-1.5">
                          {s.title}
                        </h3>
                        <p className="text-xs text-foreground/65 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                      <ChevronDown className="mt-1 size-4 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" />
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-[11px] font-semibold uppercase text-gold">
                      <MessageCircle className="size-3.5" />
                      Toque para ver detalhes
                    </div>
                  </summary>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-open:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-left">
                        <div className="border-t border-border pt-4 space-y-3">
                          {s.details.map((detail) => (
                            <div key={detail.heading}>
                              <h4 className="font-sans text-xs font-bold uppercase text-gold mb-1">
                                {detail.heading}
                              </h4>
                              <p className="text-xs leading-relaxed text-foreground/72">
                                {detail.body}
                              </p>
                            </div>
                          ))}
                          <Button asChild size="sm" className="mt-2 bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-95">
                            <a
                              href={waLink(s.title)}
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => trackWhatsAppClick("service", s.title)}
                              aria-label={`Falar com especialista sobre ${s.title} pelo WhatsApp`}
                            >
                              Falar com especialista
                              <ArrowUpRight className="size-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.details>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
