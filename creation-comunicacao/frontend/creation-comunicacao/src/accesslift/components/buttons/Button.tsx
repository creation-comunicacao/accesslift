import type { MouseEvent, ReactNode } from "react";
import { navigateTo } from "../../utils/navigation";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "whatsapp";
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  title?: string;
  onClick?: () => void;
};

const variants = {
  primary: "bg-lime-300 text-slate-950 shadow-[0_10px_25px_rgba(132,204,22,0.28)] hover:bg-lime-200",
  secondary: "border border-slate-300 bg-white text-slate-950 hover:border-slate-500 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
  dark: "bg-slate-950 text-white hover:bg-slate-800",
  whatsapp: "bg-emerald-500 text-white shadow-[0_10px_25px_rgba(16,185,129,0.25)] hover:bg-emerald-600",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  disabled = false,
  icon,
  title,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-extrabold transition active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  if (!href || disabled) {
    return (
      <button className={classes} disabled={disabled} title={title} onClick={onClick}>
        {icon}
        <span>{children}</span>
      </button>
    );
  }

  return (
    <a
      className={classes}
      href={href}
      title={title}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.();
        if (href.startsWith("/")) {
          event.preventDefault();
          navigateTo(href);
        }
      }}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
