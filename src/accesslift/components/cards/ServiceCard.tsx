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
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#0b2d4d] text-white shadow-[0_10px_24px_rgba(11,45,77,0.16)] transition group-hover:bg-[#d8242f]">
        <ArrowUpRight className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="text-base font-black text-[#0b2d4d]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="premium-card premium-card-hover group block rounded-lg p-5"
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
    <article className="premium-card premium-card-hover group rounded-lg p-5">
      {content}
    </article>
  );
}
