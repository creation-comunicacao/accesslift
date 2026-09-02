import { MessageCircle } from "lucide-react";
import { contactConfig } from "../../data/contact";
import { navigateTo } from "../../utils/navigation";
import { WhatsAppButton } from "../buttons/CtaButtons";

const footerGroups = [
  {
    title: "Navegação",
    links: [
      { label: "Plataformas", href: "/plataformas-elevatorias/" },
      { label: "Locação", href: "/locacao-de-plataformas-elevatorias/" },
      { label: "Serviços", href: "/servicos/" },
    ],
  },
  {
    title: "Equipamentos",
    links: [
      { label: "Plataformas Tesoura", href: "/plataformas-tesoura/" },
      { label: "Plataformas Articuladas", href: "/plataformas-articuladas/" },
      { label: "Todos os Equipamentos", href: "/equipamentos/" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Assistência técnica", href: "/servicos/assistencia-tecnica/" },
      { label: "Manutenção preventiva", href: "/servicos/manutencao-preventiva/" },
      { label: "Treinamento de operadores", href: "/servicos/treinamento-de-operadores/" },
    ],
  },
  {
    title: "Aplicações",
    links: [
      { label: "Construção civil", href: "/segmentos/construcao-civil/" },
      { label: "Indústria", href: "/segmentos/industria/" },
      { label: "Supermercados e Hipermercados", href: "/segmentos/supermercados-e-hipermercados/" },
      { label: "Atacados", href: "/segmentos/atacados/" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Empresa", href: "/empresa/" },
      { label: "Área de atendimento", href: "/area-de-atendimento/" },
      { label: "Segurança e NR35", href: "/seguranca-e-nr35/" },
      { label: "Trabalhe Conosco", href: "/trabalhe-conosco/" },
      { label: "Política de privacidade", href: "/politica-de-privacidade/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#0b2d4d] bg-[#0b2d4d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_2fr]">
        <div data-reveal="fade-right" className="space-y-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-sm font-black text-[#0b2d4d] shadow-[inset_0_-3px_0_rgba(216,36,47,0.90)]">
              AL
            </span>
            <span className="text-lg font-black">Accesslift</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Locação e suporte para plataformas elevatórias em São Paulo e regiões em raio de até 150 km da base.
          </p>
          <div className="grid gap-2 text-sm text-slate-300">
            <span>{contactConfig.address}</span>
            <span>Telefone: {contactConfig.phone || "a configurar"}</span>
            <span>E-mail: {contactConfig.email || "a configurar"}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <WhatsAppButton />
            <a
              href="/contato/"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-700 px-4 text-sm font-extrabold text-white transition hover:border-slate-500 hover:bg-slate-900"
              onClick={(event) => {
                event.preventDefault();
                navigateTo("/contato/");
              }}
            >
              Contato
            </a>
          </div>
        </div>

        <nav data-reveal="fade-left" className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5" aria-label="Rodapé">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2 className="text-sm font-black uppercase tracking-wider text-white">
                {group.title}
              </h2>
              <div className="mt-3 grid gap-2">
                {group.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md py-1 text-sm text-slate-300 transition hover:text-white"
                    onClick={(event) => {
                      event.preventDefault();
                      navigateTo(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          ))}
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 border-t border-slate-800 px-4 py-5 text-xs text-slate-400 md:grid-cols-[1fr_auto] md:px-6">
        <span>Accesslift Plataformas Elevatórias</span>
        <div className="flex flex-wrap gap-3">
          {contactConfig.socialLinks.map((social) => (
            social.href ? (
              <a key={social.label} href={social.href} className="inline-flex items-center gap-1 transition hover:text-white">
                <MessageCircle className="h-3.5 w-3.5" aria-hidden />
                {social.label}
              </a>
            ) : null
          ))}
          <a href="/politica-de-privacidade/" className="transition hover:text-white">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
