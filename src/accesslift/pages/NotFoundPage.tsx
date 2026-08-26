import { Button } from "../components/buttons/Button";

export function NotFoundPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <p className="text-xs font-black uppercase tracking-wider text-lime-700">404</p>
      <h1 className="mt-3 text-4xl font-black text-slate-950">Pagina nao encontrada</h1>
      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
        Esta rota nao faz parte do blueprint inicial da V2.
      </p>
      <Button href="/" className="mt-6">
        Voltar ao inicio
      </Button>
    </section>
  );
}
