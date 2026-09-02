import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../../analytics/analytics";
import { submitSupportRequest, type SupportRequestPayload } from "../../services/leadService";

const inputClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#0b2d4d] focus:ring-2 focus:ring-[#0b2d4d]/15 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500";
const labelClasses = "grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600";

const initialValues: SupportRequestPayload = {
  nome: "",
  empresa: "",
  whatsapp: "",
  cidade: "",
  equipamento: "",
  descricao: "",
  locacaoAccesslift: false,
  antispam: "",
};

export function SupportRequestForm() {
  const [values, setValues] = useState<SupportRequestPayload>(initialValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = <Key extends keyof SupportRequestPayload>(key: Key, value: SupportRequestPayload[Key]) =>
    setValues((current) => ({ ...current, [key]: value }));

  const valid = values.nome.trim() && values.whatsapp.trim() && values.cidade.trim() && values.descricao.trim() && !values.antispam;

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:grid-cols-2 md:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        if (!valid) {
          setStatus("error");
          setMessage("Informe nome, WhatsApp, cidade e a descrição da necessidade.");
          return;
        }

        setStatus("loading");
        setMessage("");
        try {
          await submitSupportRequest(values);
          trackEvent({ name: "form_submit", payload: { form: "support" } });
          setStatus("success");
          setMessage("Solicitação enviada para avaliação da equipe Accesslift.");
          setValues(initialValues);
        } catch (error) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Não foi possível registrar a solicitação.");
        }
      }}
    >
      <input className="hidden" name="website" tabIndex={-1} autoComplete="off" value={values.antispam} onChange={(event) => update("antispam", event.target.value)} />
      <label className={labelClasses}>Nome *<input className={inputClasses} autoComplete="name" value={values.nome} onChange={(event) => update("nome", event.target.value)} placeholder="Seu nome" /></label>
      <label className={labelClasses}>Empresa<input className={inputClasses} autoComplete="organization" value={values.empresa} onChange={(event) => update("empresa", event.target.value)} placeholder="Nome da empresa" /></label>
      <label className={labelClasses}>WhatsApp *<input className={inputClasses} autoComplete="tel" inputMode="tel" value={values.whatsapp} onChange={(event) => update("whatsapp", event.target.value)} placeholder="(11) 00000-0000" /></label>
      <label className={labelClasses}>Cidade *<input className={inputClasses} autoComplete="address-level2" value={values.cidade} onChange={(event) => update("cidade", event.target.value)} placeholder="Cidade da operação" /></label>
      <label className={`${labelClasses} md:col-span-2`}>Equipamento ou modelo<input className={inputClasses} value={values.equipamento} onChange={(event) => update("equipamento", event.target.value)} placeholder="Informe o modelo, se souber" /></label>
      <label className={`${labelClasses} md:col-span-2`}>Descrição da ocorrência *<textarea className={`${inputClasses} min-h-32 py-3`} value={values.descricao} onChange={(event) => update("descricao", event.target.value)} placeholder="Descreva a situação, local e qualquer informação que ajude a avaliação técnica." /></label>
      <label className="flex items-start gap-3 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700 md:col-span-2"><input type="checkbox" checked={values.locacaoAccesslift} onChange={(event) => update("locacaoAccesslift", event.target.checked)} className="mt-1 h-4 w-4 accent-[#0b2d4d]" />Esta solicitação envolve uma plataforma Accesslift em locação.</label>
      {message && <div className={`flex items-start gap-2 rounded-md p-3 text-sm font-semibold md:col-span-2 ${status === "success" ? "bg-[#0b2d4d]/8 text-[#0b2d4d]" : "bg-red-50 text-red-700"}`} role={status === "error" ? "alert" : "status"}>{status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}{message}</div>}
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2" disabled={status === "loading"}><Send className="h-4 w-4" aria-hidden />{status === "loading" ? "Enviando..." : "Enviar solicitação"}</button>
    </form>
  );
}
