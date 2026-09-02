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
  primary: "bg-lime-300 text-[#0b1726] shadow-[0_14px_30px_rgba(132,204,22,0.24)] hover:bg-lime-200 hover:shadow-[0_18px_36px_rgba(132,204,22,0.30)]",
  secondary: "border border-slate-300 bg-white text-[#0b2d4d] shadow-[0_8px_22px_rgba(11,45,77,0.06)] hover:border-[#0b2d4d]/30 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-[#0b2d4d]/6 hover:text-[#0b2d4d]",
  dark: "bg-[#0b2d4d] text-white shadow-[0_12px_28px_rgba(11,45,77,0.18)] hover:bg-[#09243d]",
  whatsapp: "bg-emerald-500 text-white shadow-[0_12px_28px_rgba(16,185,129,0.20)] hover:bg-emerald-600",
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
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold transition active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

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
