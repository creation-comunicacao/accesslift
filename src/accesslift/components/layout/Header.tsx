import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactConfig } from "../../data/contact";
import { navigateTo } from "../../utils/navigation";
import { RequestQuoteButton, WhatsAppButton } from "../buttons/CtaButtons";
import { Dropdown } from "../ui/Dropdown";

type HeaderProps = {
  currentPath: string;
};

const platformItems = [
  { label: "Plataformas Elevatórias", href: "/plataformas-elevatorias/" },
  { label: "Plataformas Tesoura", href: "/plataformas-tesoura/" },
  { label: "Plataformas Articuladas", href: "/plataformas-articuladas/" },
  { label: "Todos os Equipamentos", href: "/equipamentos/" },
];

const desktopLinks = [
  { label: "Locação", href: "/locacao-de-plataformas-elevatorias/" },
  { label: "Serviços", href: "/servicos/" },
  { label: "Aplicações", href: "/segmentos-e-aplicacoes/" },
  { label: "A Accesslift", href: "/empresa/" },
  { label: "Contato", href: "/contato/" },
];

const mobileLinks = [
  ...platformItems,
  ...desktopLinks,
];

export function Header({ currentPath }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = currentPath === "/";
  const phoneHref = "tel:+551123895259";

  useEffect(() => {
    const syncScrollState = () => setIsScrolled(window.scrollY > 8);

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });
    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  const linkClasses = (path: string) =>
    `rounded-md px-3.5 py-2 text-sm font-extrabold transition ${
      currentPath === path
        ? "bg-[#0b2d4d]/8 text-[#0b2d4d]"
        : "text-slate-700 hover:bg-[#0b2d4d]/6 hover:text-[#0b2d4d]"
    }`;

  const handleNavigate = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/96 backdrop-blur-xl transition-[box-shadow,border-color] duration-200 ${
        isScrolled ? "border-slate-200 shadow-[0_10px_30px_rgba(11,45,77,0.10)]" : "border-slate-200/80"
      }`}
    >
      <div className={`${isHome ? "block" : "hidden lg:block"} border-b border-white/10 bg-[#0b2d4d] text-white`}>
        <div className="site-container flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center text-xs font-semibold text-slate-300 lg:justify-end">
          <span>Locação diária, semanal, mensal e suporte técnico</span>
          <span className="inline-flex items-center gap-2">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-1.5 text-white transition hover:text-slate-200"
              aria-label={`Ligar para ${contactConfig.whatsappNumber}`}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              Fone/WhatsApp: {contactConfig.whatsappNumber}
            </a>
            {contactConfig.whatsappUrl && (
              <a
                href={contactConfig.whatsappUrl}
                className="inline-flex items-center text-white transition hover:text-slate-200"
                aria-label={`Abrir WhatsApp da Accesslift ${contactConfig.whatsappNumber}`}
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden />
              </a>
            )}
          </span>
        </div>
      </div>

      <div className="site-container flex min-h-[4.75rem] items-center justify-between gap-3 py-3">
        <a
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={(event) => {
            event.preventDefault();
            handleNavigate("/");
          }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b2d4d] text-sm font-black text-white shadow-[inset_0_-3px_0_rgba(216,36,47,0.85)]">
            AL
          </span>
          <span className="grid leading-none">
            <span className="text-lg font-black tracking-normal text-slate-950">Accesslift</span>
            <span className="hidden text-[10px] font-extrabold uppercase tracking-wider text-slate-500 sm:block">
              Plataformas elevatórias
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Principal">
          <Dropdown
            label="Plataformas"
            items={platformItems}
            currentPath={currentPath}
            onNavigate={handleNavigate}
          />
          {desktopLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <WhatsAppButton compact />
          <RequestQuoteButton />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="hidden sm:block">
            <WhatsAppButton compact />
          </div>
          <div className="hidden sm:block">
            <RequestQuoteButton />
          </div>
          <a
            href={contactConfig.whatsappUrl || "/contato/"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.25)] sm:hidden"
            title="Falar pelo WhatsApp"
            aria-label="Falar pelo WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
          </a>
          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-300 text-[#0b2d4d] transition hover:bg-[#0b2d4d]/6"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <nav className="site-container grid gap-1" aria-label="Principal mobile">
            {mobileLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${linkClasses(item.href)} min-h-11`}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.href);
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-1 gap-2 border-t border-slate-200 pt-3 min-[420px]:grid-cols-2">
              <RequestQuoteButton className="w-full" />
              <WhatsAppButton className="w-full" />
            </div>
            <a
              href="/contato/"
              className="mt-2 inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-slate-700"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("/contato/");
              }}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
