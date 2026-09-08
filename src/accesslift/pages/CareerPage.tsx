import { AlertCircle, CheckCircle2, Send, Upload } from "lucide-react";
import type { FormEvent } from "react";
import { useRef, useState } from "react";
import { submitInquiry } from "../services/leadService";
import { trackEvent } from "../analytics/analytics";
import { PrivacyNotice } from "../components/forms/PrivacyNotice";
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
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#0b2d4d] focus:ring-2 focus:ring-[#0b2d4d]/15";

export function CareerPage() {
  const [values, setValues] = useState<CareerValues>(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const started = useRef(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const isValid =
      values.name.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.phone.trim() &&
      values.area &&
      values.resume &&
      /\.(pdf|doc|docx)$/i.test(values.resume.name) && values.resume.size > 0 && values.resume.size <= 2 * 1024 * 1024 &&
      !values.antispam;

    if (!isValid) {
      setStatus("error");
      setErrorMessage("Informe nome, e-mail válido, telefone, área de interesse e currículo em PDF, DOC ou DOCX de até 2 MB.");
      return;
    }

    setStatus("loading");
    try {
      const { resume, ...fields } = values;
      await submitInquiry("career", fields, resume!);
      setStatus("success");
      trackEvent({ name: "career_form_submit" });
      setValues(initialValues);
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Não foi possível enviar seu currículo. Tente novamente.");
    }
  };

  return (
    <>
      <ConversionHero
        compact
        eyebrow="Trabalhe Conosco"
        title="Trabalhe Conosco"
        description="Quer fazer parte da equipe AccessLift? Envie seus dados e currículo para nosso banco de profissionais e futuras oportunidades."
        primaryCta={{ label: "Enviar currículo", href: "#curriculo" }}
      />
      <section id="curriculo" className="mx-auto grid max-w-4xl scroll-mt-32 gap-6 px-4 py-12 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-slate-950">Cadastre seu currículo</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            A Accesslift atua no segmento de plataformas elevatórias e reúne profissionais em áreas relacionadas à operação, atendimento, logística, manutenção e administração. O envio não representa garantia de contratação ou participação imediata em processo seletivo.
          </p>
        </div>
        <form className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 premium-shadow" onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; trackEvent({ name: "career_form_start" }); } }}>
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
            Área de interesse *
            <select className={inputClasses} value={values.area} onChange={(event) => setValues((current) => ({ ...current, area: event.target.value }))}>
              <option value="">Selecione uma área</option>
              <option value="operacao">Operação</option>
              <option value="comercial">Comercial / Atendimento</option>
              <option value="administrativo">Administrativo</option>
              <option value="tecnico-manutencao">Manutenção / Área Técnica</option>
              <option value="logistica">Logística</option>
              <option value="outros">Outras áreas</option>
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
              <input className="min-w-0 w-full" type="file" accept=".pdf,.doc,.docx" onChange={(event) => {
                const file = event.target.files?.[0] || null;
                setValues((current) => ({ ...current, resume: file }));
                if (file && /\.(pdf|doc|docx)$/i.test(file.name) && file.size > 0 && file.size <= 2 * 1024 * 1024) trackEvent({ name: "career_cv_upload" });
              }} />
            </span>
          </label>
          <p className="text-xs leading-5 text-slate-500">Formatos aceitos: PDF, DOC e DOCX. Tamanho máximo: 2 MB.</p>
          <PrivacyNotice career />
          {status === "error" && (
            <p className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm font-semibold text-red-700" role="alert">
              <AlertCircle className="h-5 w-5" aria-hidden />
              {errorMessage}
            </p>
          )}
          {status === "success" && (
            <p className="flex items-center gap-2 rounded-md bg-[#0b2d4d]/8 p-3 text-sm font-semibold text-[#0b2d4d]" role="status">
              <CheckCircle2 className="h-5 w-5" aria-hidden />
              Currículo enviado com sucesso. Seus dados foram recebidos e poderão ser considerados em futuras oportunidades compatíveis com seu perfil.
            </p>
          )}
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800" type="submit" disabled={status === "loading"}>
            <Send className="h-4 w-4" aria-hidden />
            {status === "loading" ? "Enviando..." : "Enviar currículo"}
          </button>
        </form>
      </section>
    </>
  );
}
