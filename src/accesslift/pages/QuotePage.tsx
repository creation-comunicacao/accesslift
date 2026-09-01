import { useEffect } from "react";
import { getEquipmentBySlug } from "../catalog/catalog";
import { QuoteRequestForm } from "../components/forms/QuoteRequestForm";
import { Button } from "../components/buttons/Button";
import { ConversionHero } from "./shared/StructuredPageSections";

export function QuotePage() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const equipmentSlug = params.get("equipment") || params.get("equipamento");
  const equipment = equipmentSlug ? getEquipmentBySlug(equipmentSlug) || null : null;

  useEffect(() => {
    const currentParams = new URLSearchParams(search);
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
    utmKeys.forEach((key) => {
      const value = currentParams.get(key);
      if (value) {
        window.sessionStorage.setItem(`accesslift-${key}`, value);
      }
    });
  }, [search]);

  return (
    <>
      <ConversionHero
        eyebrow="Orçamento"
        title="Solicite um Orçamento de Plataforma Elevatória"
        description="Conte para a Accesslift as principais características do trabalho. Mesmo que você ainda não saiba qual modelo precisa, nossa equipe pode auxiliar na identificação das opções adequadas."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[1fr_0.65fr]">
        <QuoteRequestForm equipment={equipment} />
        <aside className="h-fit rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-xl font-black text-slate-950">Não sabe qual plataforma precisa?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Altura aproximada, espaço disponível, tipo de acesso e existencia de obstáculos já ajudam a equipe a compreender a necessidade.
          </p>
          <div className="mt-5 rounded-md border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-600">
            Depois do envio, a equipe Accesslift avalia equipamento, período, local e condições comerciais. Não ha promessa de prazo fixo de retorno.
          </div>
          <div className="mt-5 grid gap-2">
            <Button href="/plataformas-elevatorias/" variant="secondary">Entender os tipos de plataforma</Button>
            <Button href="/locacao-de-plataformas-elevatorias/" variant="ghost">Conhecer locação</Button>
            <Button href="/area-de-atendimento/" variant="ghost">Consultar área de atendimento</Button>
          </div>
        </aside>
      </section>
    </>
  );
}
