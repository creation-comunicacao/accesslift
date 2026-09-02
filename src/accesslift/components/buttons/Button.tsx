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
  primary: "bg-lime-300 text-[#0b1726] shadow-[0_14px_30px_rgba(132,204,22,0.24)] hover:-translate-y-0.5 hover:bg-lime-200 hover:shadow-[0_18px_36px_rgba(132,204,22,0.30)]",
  secondary: "border border-slate-300 bg-white text-[#0b2d4d] shadow-[0_8px_22px_rgba(11,45,77,0.06)] hover:-translate-y-0.5 hover:border-[#0b2d4d]/30 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-[#0b2d4d]/6 hover:text-[#0b2d4d]",
  dark: "bg-[#0b2d4d] text-white shadow-[0_12px_28px_rgba(11,45,77,0.18)] hover:-translate-y-0.5 hover:bg-[#09243d]",
  whatsapp: "bg-emerald-500 text-white shadow-[0_12px_28px_rgba(16,185,129,0.20)] hover:-translate-y-0.5 hover:bg-emerald-600",
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
  const classes = `touch-button group/button inline-flex items-center justify-center gap-2 px-5 text-sm font-extrabold transition duration-200 active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;
  const iconNode = icon ? (
    <span className="inline-flex shrink-0 transition-transform duration-200 group-hover/button:translate-x-1">
      {icon}
    </span>
  ) : null;

  if (!href || disabled) {
    return (
      <button className={classes} disabled={disabled} title={title} onClick={onClick}>
        {iconNode}
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
      {iconNode}
      <span>{children}</span>
    </a>
  );
}
