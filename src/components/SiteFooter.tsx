import { Phone, Mail, MapPin } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
const logoHorizontal = { url: "/assets/logo-horizontal.png" };

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export function SiteFooter() {
  return (
    <footer id="contato" className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 mb-12">
        <div className="mb-10">
          <img
            src={logoHorizontal.url}
            alt="Doutor Ambiental — O Especialista no Controle de Pragas"
            className="h-14 w-auto object-contain"
          />
          <p className="text-sm text-foreground/65 leading-relaxed mt-4 max-w-md">
            Especialistas em controle de pragas em Sorocaba e região. Empresa do Grupo Ártica Saúde Ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="font-display text-sm tracking-widest text-gold mb-5">Contatos</h4>
            <ul className="space-y-3 text-sm text-foreground/75">
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="size-4 text-gold" />
                <a
                  href="https://api.whatsapp.com/send/?phone=5515988420000&text=Ol%C3%A1+Doutor+Ambiental%2C+eu+vim+do+seu+site+e+gostaria+de+um+or%C3%A7amento."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackWhatsAppClick("footer")}
                >
                  (15) 98842-0000
                </a>
              </li>
              <li className="flex items-center gap-3"><Mail className="size-4 text-gold" /><a href="mailto:comercial@doutorambiental.com.br">comercial@doutorambiental.com.br</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm tracking-widest text-gold mb-5">Endereço administrativo</h4>
            <p className="text-sm text-foreground/75 flex gap-3">
              <MapPin className="size-4 text-gold shrink-0 mt-0.5" />
              Av. Antônio Carlos Comitre, 650, Sala 10 — Parque Campolim, Sorocaba/SP — CEP 18047-620
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/50">
        <div>© {new Date().getFullYear()} Doutor Ambiental — Grupo Ártica Saúde Ambiental</div>
        <div>O especialista no controle de pragas</div>
      </div>
    </footer>
  );
}
