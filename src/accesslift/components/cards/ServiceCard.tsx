import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import { navigateTo } from "../../utils/navigation";

type ServiceCardProps = {
  title: string;
  summary: string;
  href?: string;
  key?: string;
};

export function ServiceCard({ title, summary, href }: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b2d4d] text-white shadow-[0_10px_24px_rgba(11,45,77,0.16)] transition group-hover:bg-[#d8242f]">
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-lg font-black leading-tight text-[#0b2d4d]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="premium-card premium-card-hover group block rounded-lg p-5 md:p-6"
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
          if (href.startsWith("/")) {
            event.preventDefault();
            navigateTo(href);
          }
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <article className="premium-card premium-card-hover group rounded-lg p-5 md:p-6">
      {content}
    </article>
  );
}
