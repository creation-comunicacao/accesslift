import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import type { Equipment } from "../../types/equipment";
import { getManufacturerAccent } from "../../design/manufacturerAccents";

export function EquipmentGallery({ equipment }: { equipment: Equipment }) {
  const images = [equipment.mainImage, ...equipment.gallery].filter(image => image.src);
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const accent = getManufacturerAccent(equipment.brand);
  const isOpen = active !== null;
  const image = active === null ? null : images[active];
  const move = (delta: number) => setActive(index => index === null ? null : (index + delta + images.length) % images.length);

  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    const overflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <div className="grid gap-4">
      {equipment.mainImage.src ? (
        <button type="button" aria-label={`Ampliar imagem: ${equipment.mainImage.alt}`} onClick={() => setActive(0)}
          className={`media-frame cursor-zoom-in overflow-hidden rounded-lg p-3 premium-shadow ring-4 ${accent.ring}`}>
          <img src={equipment.mainImage.src} alt={equipment.mainImage.alt}
            width={equipment.mainImage.width} height={equipment.mainImage.height}
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="aspect-[4/3] w-full rounded-md object-contain" loading="eager" decoding="async" />
        </button>
      ) : (
        <div className={`media-frame flex aspect-[4/3] w-full flex-col items-center justify-center rounded-lg border-dashed px-6 text-center premium-shadow ring-4 ${accent.ring}`}>
          <ImageIcon className="h-12 w-12 text-slate-400" aria-hidden />
          <p className="mt-4 text-sm font-extrabold text-slate-600">Foto específica deste modelo ainda não cadastrada.</p>
        </div>
      )}
      {/representativa|catálogo/i.test(equipment.mainImage.alt) && (
        <p className="text-sm text-slate-600">Imagem ilustrativa; não representa necessariamente a unidade disponível para locação.</p>
      )}
      {equipment.gallery.some(item => item.src) && (
        <div className="grid grid-cols-3 gap-3">
          {equipment.gallery.filter(item => item.src).map(item => (
            <button key={item.src} type="button" aria-label={`Ampliar imagem: ${item.alt}`}
              onClick={() => setActive(images.indexOf(item))}
              className="min-w-0 cursor-zoom-in overflow-hidden rounded-md border border-slate-200 bg-slate-50">
              <img src={item.src!} alt={item.alt} width={item.width} height={item.height}
                sizes="(min-width: 1024px) 160px, 33vw" className="aspect-square w-full object-contain"
                loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
      <dialog ref={dialog} aria-label={`Fotos de ${equipment.brand} ${equipment.model}`}
        className="fixed inset-0 m-auto h-dvh max-h-none w-screen max-w-none bg-black/95 p-4 text-white backdrop:bg-black/80"
        onCancel={() => setActive(null)}
        onClick={event => { if (event.target === event.currentTarget) setActive(null); }}
        onKeyDown={event => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}>
        {image && (
          <>
            <button type="button" autoFocus title="Fechar" aria-label="Fechar imagens"
              onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-md bg-black/60">
              <X aria-hidden />
            </button>
            <div className="flex h-full flex-col items-center justify-center gap-4"
              onClick={event => { if (event.target === event.currentTarget) setActive(null); }}
              onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
              onTouchEnd={event => {
                const start = touchStart.current;
                touchStart.current = null;
                if (!start) return;
                const dx = event.changedTouches[0].clientX - start.x;
                const dy = event.changedTouches[0].clientY - start.y;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) move(dx < 0 ? 1 : -1);
              }}>
              <img src={image.src!} alt={image.alt} className="h-auto max-h-[75dvh] w-auto max-w-full object-contain" />
              <p aria-live="polite" className="text-center text-sm text-white">{active! + 1} / {images.length}</p>
            </div>
            {images.length > 1 && (
              <>
                <button type="button" title="Imagem anterior" aria-label="Imagem anterior" onClick={() => move(-1)}
                  className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-md bg-black/70"><ChevronLeft aria-hidden /></button>
                <button type="button" title="Próxima imagem" aria-label="Próxima imagem" onClick={() => move(1)}
                  className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-md bg-black/70"><ChevronRight aria-hidden /></button>
              </>
            )}
          </>
        )}
      </dialog>
    </div>
  );
}
