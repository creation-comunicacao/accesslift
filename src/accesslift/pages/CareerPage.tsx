import { AlertCircle, CheckCircle2, Send, Upload } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import { ConversionHero } from "./shared/StructuredPageSections";

type CareerValues = {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  resume: File | null;
  antispam: string;
};

const initialValues: CareerValues = {
  name: "",
  email: "",
  phone: "",
  area: "",
  message: "",
  resume: null,
  antispam: "",
};

const inputClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200";

export function CareerPage() {
  const [values, setValues] = useState<CareerValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid =
      values.name.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.phone.trim() &&
      values.resume &&
      !values.antispam;

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("success");
  };

  return (
    <>
      <ConversionHero
        eyebrow="Trabalhe Conosco"
        title="Trabalhe Conosco"
        description="Quer fazer parte da equipe Accesslift? Envie seus dados e currículo para nosso banco de profissionais."
      />
      <section className="mx-auto grid max-w-4xl gap-6 px-4 py-12 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-slate-950">Cadastre seu currículo</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A Accesslift atua no segmento de plataformas elevatórias e reúne profissionais em áreas relacionadas a operação, atendimento, logística, manutenção e administração. O envio não representa garantia de contratação ou participação imediata em processo seletivo.
          </p>
        </div>
        <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 premium-shadow" onSubmit={submit}>
          <input
            className="hidden"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.antispam}
            onChange={(event) => setValues((current) => ({ ...current, antispam: event.target.value }))}
          />
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            Nome *
            <input className={inputClasses} autoComplete="name" value={values.name} onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))} />
          </label>
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            E-mail *
            <input className={inputClasses} type="email" autoComplete="email" value={values.email} onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))} />
          </label>
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            Telefone/WhatsApp *
            <input className={inputClasses} type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))} />
          </label>
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            Área de interesse
            <select className={inputClasses} value={values.area} onChange={(event) => setValues((current) => ({ ...current, area: event.target.value }))}>
              <option value="">Selecione uma área</option>
              <option value="comercial">Comercial</option>
              <option value="administrativo">Administrativo</option>
              <option value="tecnico-manutencao">Técnico / Manutenção</option>
              <option value="logistica-operacao">Logística / Operação</option>
              <option value="outros">Outros</option>
            </select>
          </label>
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            Mensagem
            <textarea className={`${inputClasses} min-h-28 py-3`} value={values.message} onChange={(event) => setValues((current) => ({ ...current, message: event.target.value }))} />
          </label>
          <label className="grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600">
            Currículo *
            <span className={`${inputClasses} flex items-center gap-2 py-2`}>
              <Upload className="h-4 w-4 text-slate-500" aria-hidden />
              <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => setValues((current) => ({ ...current, resume: event.target.files?.[0] || null }))} />
            </span>
          </label>
          <p className="text-xs leading-5 text-slate-500">
            Os dados enviados serao utilizados para analise de oportunidades profissionais e tratamento do contato relacionado ao processo de recrutamento, conforme a Política de Privacidade da Accesslift.
          </p>
          {status === "error" && (
            <p className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
              <AlertCircle className="h-5 w-5" aria-hidden />
              Informe nome, e-mail valido, telefone e currículo para continuar.
            </p>
          )}
          {status === "success" && (
            <p className="flex items-center gap-2 rounded-md bg-lime-50 p-3 text-sm font-semibold text-lime-900" role="status">
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              Currículo registrado localmente para validação do fluxo. A transmissão definitiva depende da integração backend.
            </p>
          )}
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800" type="submit">
            <Send className="h-4 w-4" aria-hidden />
            Enviar currículo
          </button>
        </form>
      </section>
    </>
  );
}
