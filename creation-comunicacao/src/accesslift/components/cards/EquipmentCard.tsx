import { BadgeCheck, Ruler, Wrench } from "lucide-react";
import type { Equipment } from "../../types/equipment";
import { CheckAvailabilityButton } from "../buttons/CtaButtons";
import { Button } from "../buttons/Button";
import { Badge } from "../ui/Badge";

type EquipmentCardProps = {
  equipment: Equipment;
  key?: string;
};

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const categoryLabel =
    equipment.category === "plataformas-tesoura"
      ? "Plataforma Tesoura"
      : "Plataforma Articulada";
  const primaryInfo =
    equipment.specs.alturaTrabalho ||
    equipment.specs.alcanceHorizontal ||
    "Informacao principal a cadastrar";

  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-4 soft-shadow transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
      {equipment.mainImage.src ? (
        <img
          src={equipment.mainImage.src}
          alt={equipment.mainImage.alt}
          className="mb-4 aspect-[4/3] w-full rounded-md border border-slate-200 bg-slate-100 object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="industrial-grid mb-4 flex aspect-[4/3] items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-4 text-center text-sm font-extrabold text-slate-500"
          role="img"
          aria-label={equipment.mainImage.alt}
        >
          Imagem principal a cadastrar
        </div>
      )}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="lime">{equipment.brand}</Badge>
        <Badge tone="outline">{categoryLabel}</Badge>
      </div>
      <h3 className="text-lg font-bold text-slate-950">{equipment.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{equipment.summary}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt className="flex items-center gap-2 text-slate-500">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Modelo
          </dt>
          <dd className="font-medium text-slate-800">{equipment.model}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt className="flex items-center gap-2 text-slate-500">
            <Ruler className="h-4 w-4" aria-hidden />
            Info principal
          </dt>
          <dd className="text-right font-medium text-slate-800">{primaryInfo}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt className="flex items-center gap-2 text-slate-500">
            <Ruler className="h-4 w-4" aria-hidden />
            Ficha tecnica
          </dt>
          <dd className="font-medium text-slate-800">
            {equipment.technicalSheetPdf ? "Disponivel" : "A cadastrar"}
          </dd>
        </div>
      </dl>
      <div className="mt-5 grid gap-3">
        <Button href={`/equipamentos/${equipment.slug}/`} variant="secondary" className="w-full">
          Ver equipamento
        </Button>
        <CheckAvailabilityButton className="w-full" equipmentSlug={equipment.slug} />
      </div>
      {Object.values(equipment.specs).every((value) => !value) && (
        <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500">
          <Wrench className="h-3.5 w-3.5" aria-hidden />
          Dados tecnicos aguardando cadastro oficial.
        </div>
      )}
    </article>
  );
}
