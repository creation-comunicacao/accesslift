import { CheckAvailabilityButton, RequestQuoteButton, TalkToSpecialistButton, WhatsAppButton } from "../buttons/CtaButtons";

export function CTASection() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-6">
        <div>
          <h2 className="text-2xl font-black text-white">Precisa de plataforma elevatória?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Pontos de conversão preparados para orçamento, disponibilidade, especialista e WhatsApp sem depender de dados fictícios.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <RequestQuoteButton />
          <CheckAvailabilityButton />
          <TalkToSpecialistButton />
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
