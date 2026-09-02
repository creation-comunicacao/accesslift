import { Button } from "../components/buttons/Button";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <p className="text-xs font-black uppercase tracking-wider text-[#d8242f]">404</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Página não encontrada</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
        Esta rota não faz parte do blueprint inicial da V2.
      </p>
      <Button href="/" className="mt-6">
        Voltar ao início
      </Button>
    </section>
  );
}
