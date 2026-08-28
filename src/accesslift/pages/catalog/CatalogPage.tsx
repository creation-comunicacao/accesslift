import { equipmentCategories } from "../../data/equipment";
import { mockEquipments } from "../../data/equipment";
import { EquipmentCard } from "../../components/cards/EquipmentCard";
import { PageIntro } from "../../components/layout/PageIntro";
import { Button } from "../../components/buttons/Button";
import { OfficialMediaGallery } from "../../components/media/OfficialMediaGallery";
import { brandGallery, pendingModelGallery } from "../../data/officialMedia";

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
      <OfficialMediaGallery
        title="Marcas presentes no acervo"
        description="Registro visual de equipamentos por marca. A ficha de cada produto continua dependente da confirmacao do modelo e dos dados tecnicos oficiais."
        images={brandGallery}
      />
      <OfficialMediaGallery
        title="Imagens de modelos em validacao"
        description="Estas imagens fazem parte do acervo oficial, mas o nome do arquivo indica uma variante diferente da cadastrada no catalogo. Elas permanecem identificadas e nao sao vinculadas a uma pagina de produto ate validacao."
        images={pendingModelGallery}
      />
    </>
  );
}
