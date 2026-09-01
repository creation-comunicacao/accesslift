import { BadgeCheck, ImageIcon, Ruler, Wrench } from "lucide-react";
import type { Equipment } from "../../types/equipment";
import { RequestQuoteButton } from "../buttons/CtaButtons";
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
  const isElectric = equipment.specs.alimentacao?.toLowerCase().includes("eletric") ?? false;

  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-4 soft-shadow transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
      {equipment.mainImage.src ? (
        <img
          src={equipment.mainImage.src}
          alt={equipment.mainImage.alt}
          width={equipment.mainImage.width}
          height={equipment.mainImage.height}
          sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
          className="mb-4 aspect-[4/3] w-full rounded-md border border-slate-200 bg-slate-50 object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="mb-4 flex aspect-[4/3] flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-5 text-center">
          <ImageIcon className="h-9 w-9 text-slate-400" aria-hidden />
          <p className="mt-3 text-xs font-extrabold text-slate-600">
            Foto especifica do modelo ainda nao cadastrada.
          </p>
        </div>
      )}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="lime">{equipment.brand}</Badge>
        <Badge tone="outline">{categoryLabel}</Badge>
        {isElectric && <Badge tone="steel">Elétrica</Badge>}
        {equipment.validationStatus === "validate-before-publish" && (
          <Badge tone="amber">Validar antes de publicar</Badge>
        )}
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
            Altura de trabalho
          </dt>
          <dd className="text-right font-medium text-slate-800">{equipment.specs.alturaTrabalho || "A confirmar"}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt className="flex items-center gap-2 text-slate-500">
            <Ruler className="h-4 w-4" aria-hidden />
            Capacidade
          </dt>
          <dd className="text-right font-medium text-slate-800">{equipment.specs.capacidade || "A confirmar"}</dd>
        </div>
        {equipment.specs.alcanceHorizontal && (
          <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
            <dt className="flex items-center gap-2 text-slate-500">
              <Ruler className="h-4 w-4" aria-hidden />
              Alcance horizontal
            </dt>
            <dd className="text-right font-medium text-slate-800">{equipment.specs.alcanceHorizontal}</dd>
          </div>
        )}
      </dl>
      <div className="mt-5 grid gap-3">
        <Button href={`/equipamentos/${equipment.slug}/`} variant="secondary" className="w-full">
          Ver detalhes
        </Button>
        <RequestQuoteButton className="w-full" equipmentSlug={equipment.slug} />
      </div>
      {Object.values(equipment.specs).every((value) => !value) && (
        <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500">
          <Wrench className="h-3.5 w-3.5" aria-hidden />
          Dados técnicos aguardando cadastro oficial.
        </div>
      )}
    </article>
  );
}
