import { MessageCircle } from "lucide-react";
import { contactConfig } from "../../data/contact";
import { navigateTo } from "../../utils/navigation";
import { WhatsAppButton } from "../buttons/CtaButtons";

const footerGroups = [
  {
    title: "Navegacao",
    links: [
      { label: "Plataformas", href: "/plataformas-elevatorias/" },
      { label: "Locacao", href: "/locacao-de-plataformas/" },
      { label: "Venda", href: "/venda-de-plataformas/" },
      { label: "Servicos", href: "/servicos/" },
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
    title: "Servicos",
    links: [
      { label: "Entrega e retirada", href: "/servicos/entrega-e-retirada/" },
      { label: "Assistencia tecnica", href: "/servicos/assistencia-tecnica/" },
      { label: "Manutencao preventiva", href: "/servicos/manutencao-preventiva/" },
      { label: "Atendimento emergencial", href: "/servicos/atendimento-emergencial/" },
      { label: "Treinamento de operadores", href: "/servicos/treinamento-de-operadores/" },
    ],
  },
  {
    title: "Aplicacoes",
    links: [
      { label: "Construcao civil", href: "/segmentos/construcao-civil/" },
      { label: "Industria", href: "/segmentos/industria/" },
      { label: "Supermercados", href: "/segmentos/supermercados/" },
      { label: "Atacados", href: "/segmentos/atacados/" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "A Accesslift", href: "/sobre-a-accesslift/" },
      { label: "Clientes", href: "/clientes/" },
      { label: "Area de atendimento", href: "/area-de-atendimento/" },
      { label: "Seguranca e NR35", href: "/seguranca-e-nr35/" },
      { label: "Conteudos", href: "/blog/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_2fr]">
        <div className="space-y-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-lime-300 text-sm font-black text-slate-950">
              AL
            </span>
            <span className="text-lg font-black">Accesslift</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-300">
            Locacao, venda e suporte para plataformas elevatorias em Sao Paulo e regioes em raio de ate 150 km da base.
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

        <nav className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5" aria-label="Rodape">
          {footerGroups.map((group) => (
            <section key={group.title}>
              <h2 className="text-sm font-black uppercase tracking-wider text-lime-300">
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
        <span>Accesslift V2 em desenvolvimento. Ambiente preparado para noindex.</span>
        <div className="flex flex-wrap gap-3">
          {contactConfig.socialLinks.map((social) => (
            <span key={social.label} className="inline-flex items-center gap-1">
              <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              {social.label}: {social.href ? "configurado" : "a configurar"}
            </span>
          ))}
          <span>Informacoes legais a configurar</span>
        </div>
      </div>
    </footer>
  );
}
