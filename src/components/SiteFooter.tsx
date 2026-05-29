import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Doutor Ambiental" className="h-12 w-12 rounded-md object-cover" />
            <div>
              <div className="font-display text-lg">DOUTOR AMBIENTAL</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Controle de Pragas</div>
            </div>
          </div>
          <p className="text-sm text-foreground/65 leading-relaxed">
            Especialistas em controle de pragas em Sorocaba e região. Empresa do Grupo Ártica Saúde Ambiental.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-gold mb-5">Contatos</h4>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex items-center gap-3"><Phone className="size-4 text-gold" /><a href="tel:15988420000">(15) 98842-0000</a></li>
            <li className="flex items-center gap-3"><Mail className="size-4 text-gold" /><a href="mailto:comercial@doutorambiental.com.br">comercial@doutorambiental.com.br</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest text-gold mb-5">Endereço</h4>
          <p className="text-sm text-foreground/75 flex gap-3">
            <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
            Av. Antônio Carlos Comitre, 650, Sala 10 — Parque Campolim, Sorocaba/SP — CEP 18047-620
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-6 max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/50">
        <div>© {new Date().getFullYear()} Doutor Ambiental — Grupo Ártica Saúde Ambiental</div>
        <div>O especialista no controle de pragas</div>
      </div>
    </footer>
  );
}
