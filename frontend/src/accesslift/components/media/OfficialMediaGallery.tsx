import type { OfficialMediaItem } from "../../data/officialMedia";

type OfficialMediaGalleryProps = {
  title: string;
  description?: string;
  images: OfficialMediaItem[];
};

export function OfficialMediaGallery({ title, description, images }: OfficialMediaGalleryProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-slate-950">{title}</h2>
        {description && <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200 bg-white soft-shadow">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {image.caption && <figcaption className="px-4 py-3 text-xs font-semibold text-slate-600">{image.caption}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
