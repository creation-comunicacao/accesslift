import { equipmentCategories } from "../../data/equipment";
import { mockEquipments } from "../../data/equipment";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { PageIntro } from "../../components/layout/PageIntro";
import { Button } from "../../components/buttons/Button";

export function CatalogPage() {
  return (
    <>
      <PageIntro
        eyebrow="Catalogo"
        title="Plataformas elevatorias"
        description="Estrutura preparada para receber equipamentos administraveis por categoria, marca, modelo, imagens, ficha tecnica e SEO."
      />
      <section className="mx-auto max-w-7xl px-4 pb-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {equipmentCategories.map((category) => (
            <article key={category.slug} className="rounded-md border border-slate-200 p-5">
              <h2 className="text-xl font-black text-slate-950">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{category.summary}</p>
              <Button href={`/${category.slug}/`} variant="secondary" className="mt-4">
                Acessar categoria
              </Button>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockEquipments.map((equipment) => (
            <EquipmentCard key={equipment.id} equipment={equipment} />
          ))}
        </div>
      </section>
    </>
  );
}
