import { BadgeCheck, ImageIcon, Ruler, Wrench } from "lucide-react";
import type { Equipment } from "../../types/equipment";
import { formatPublicSpecValue } from "../../utils/publicText";
import { RequestQuoteButton } from "../buttons/CtaButtons";
import { Button } from "../buttons/Button";
import { Badge } from "../ui/Badge";
import { getManufacturerAccent } from "../../design/manufacturerAccents";

type EquipmentCardProps = {
  equipment: Equipment;
  key?: string;
};

export function EquipmentCard({ equipment }: EquipmentCardProps) {
  const accent = getManufacturerAccent(equipment.brand);
  const categoryLabel =
    equipment.category === "plataformas-tesoura"
      ? "Plataforma Tesoura"
      : "Plataforma Articulada";
  const isElectric = equipment.specs.alimentacao?.toLowerCase().includes("eletric") ?? false;
  const alturaTrabalho = formatPublicSpecValue(equipment.specs.alturaTrabalho);
  const capacidade = formatPublicSpecValue(equipment.specs.capacidade);
  const alcanceHorizontal = formatPublicSpecValue(equipment.specs.alcanceHorizontal);

  return (
    <article className={`premium-card premium-card-hover group relative overflow-hidden rounded-lg p-4 md:p-5 ${accent.hover}`}>
      <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar}`} aria-hidden />
      {equipment.mainImage.src ? (
        <div className="media-frame mb-5 overflow-hidden rounded-md p-2.5">
          <img
            src={equipment.mainImage.src}
            alt={equipment.mainImage.alt}
            width={equipment.mainImage.width}
            height={equipment.mainImage.height}
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-md object-contain transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="media-frame mb-5 flex aspect-[4/3] flex-col items-center justify-center rounded-md border-dashed px-5 text-center">
          <ImageIcon className="h-9 w-9 text-slate-400" aria-hidden />
          <p className="mt-3 text-xs font-extrabold text-slate-600">
            Foto específica do modelo ainda não cadastrada.
          </p>
        </div>
      )}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge tone="outline" className={accent.badge}>{equipment.brand}</Badge>
        <Badge tone="outline">{categoryLabel}</Badge>
        {isElectric && <Badge tone="steel">Elétrica</Badge>}
      </div>
      <h3 className="text-xl font-black leading-tight text-[#0b2d4d]">{equipment.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{equipment.summary}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
          <dt className="flex items-center gap-2 text-slate-500">
            <BadgeCheck className="h-4 w-4" aria-hidden />
            Modelo
          </dt>
          <dd className="font-medium text-slate-800">{equipment.model}</dd>
        </div>
        {alturaTrabalho && (
          <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
            <dt className="flex items-center gap-2 text-slate-500">
              <Ruler className="h-4 w-4" aria-hidden />
              Altura de trabalho
            </dt>
            <dd className="text-right font-medium text-slate-800">{alturaTrabalho}</dd>
          </div>
        )}
        {capacidade && (
          <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
            <dt className="flex items-center gap-2 text-slate-500">
              <Ruler className="h-4 w-4" aria-hidden />
              Capacidade
            </dt>
            <dd className="text-right font-medium text-slate-800">{capacidade}</dd>
          </div>
        )}
        {alcanceHorizontal && (
          <div className="flex justify-between gap-4 border-t border-slate-100 pt-2">
            <dt className="flex items-center gap-2 text-slate-500">
              <Ruler className="h-4 w-4" aria-hidden />
              Alcance horizontal
            </dt>
            <dd className="text-right font-medium text-slate-800">{alcanceHorizontal}</dd>
          </div>
        )}
      </dl>
      <div className="mt-6 grid gap-3">
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
