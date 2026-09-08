import { Send } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../../analytics/analytics";
import { submitInquiry } from "../../services/leadService";
import { PrivacyNotice } from "./PrivacyNotice";

const inputClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-[#0b2d4d] focus:ring-2 focus:ring-[#0b2d4d]/15 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500";

const labelClasses = "grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600";

export function LeadForm() {
  const [values, setValues] = useState({
    nome: "",
    telefone: "",
    email: "",
    empresa: "",
    interesse: "",
    mensagem: "",
    antispam: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof values, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateValue = (key: keyof typeof values, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <form
      data-reveal="fade-up"
      className="premium-card grid gap-4 rounded-lg p-4 md:grid-cols-2 md:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        if (status === "loading") return;
        const nextErrors: Partial<Record<keyof typeof values, string>> = {};

        if (!values.nome.trim()) nextErrors.nome = "Informe seu nome.";
        if (!values.telefone.trim()) nextErrors.telefone = "Informe um WhatsApp.";
        if (!values.email.trim()) nextErrors.email = "Informe um e-mail.";
        if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
          nextErrors.email = "Informe um e-mail válido.";
        }
        if (!values.interesse) nextErrors.interesse = "Selecione um interesse.";
        if (!values.mensagem.trim()) nextErrors.mensagem = "Informe sua mensagem.";
        if (values.antispam) nextErrors.antispam = "Falha na validação antispam.";

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
          setStatus("error");
          setMessage("Revise os campos destacados antes de enviar.");
          return;
        }

        setStatus("loading");
        setMessage("");
        try {
        await submitInquiry("contact", values);
        setStatus("success");
        setMessage("Mensagem enviada com sucesso. Recebemos suas informações. Nossa equipe poderá dar continuidade ao atendimento pelos dados de contato informados.");
        trackEvent({ name: "contact_form_submit", payload: { form: "contact" } });
        setValues({
          nome: "",
          telefone: "",
          email: "",
          empresa: "",
          interesse: "",
          mensagem: "",
          antispam: "",
        });
        } catch {
          setStatus("error");
          setMessage("Não foi possível enviar sua mensagem. Tente novamente ou entre em contato com a AccessLift pelos canais disponíveis nesta página.");
        }
      }}
    >
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        name="website"
        value={values.antispam}
        onChange={(event) => updateValue("antispam", event.target.value)}
      />
      <label className={labelClasses}>
        Nome *
        <input className={inputClasses} name="nome" placeholder="Seu nome" autoComplete="name" value={values.nome} onChange={(event) => updateValue("nome", event.target.value)} />
        {errors.nome && <span className="text-xs font-bold text-red-600">{errors.nome}</span>}
      </label>
      <label className={labelClasses}>
        Empresa
        <input className={inputClasses} name="empresa" placeholder="Nome da empresa" autoComplete="organization" value={values.empresa} onChange={(event) => updateValue("empresa", event.target.value)} />
      </label>
      <label className={labelClasses}>
        WhatsApp *
        <input className={inputClasses} name="telefone" placeholder="(11) 00000-0000" autoComplete="tel" inputMode="tel" value={values.telefone} onChange={(event) => updateValue("telefone", event.target.value)} />
        {errors.telefone && <span className="text-xs font-bold text-red-600">{errors.telefone}</span>}
      </label>
      <label className={labelClasses}>
        E-mail *
        <input className={inputClasses} name="email" placeholder="seuemail@empresa.com.br" autoComplete="email" inputMode="email" value={values.email} onChange={(event) => updateValue("email", event.target.value)} />
        {errors.email && <span className="text-xs font-bold text-red-600">{errors.email}</span>}
      </label>
      <label className={labelClasses}>
        Assunto *
        <select className={inputClasses} name="interesse" value={values.interesse} onChange={(event) => updateValue("interesse", event.target.value)}>
          <option value="" disabled>
            Selecione uma opção
          </option>
          <option value="locacao-comercial">Locação / Orçamento</option>
          <option value="assistencia-tecnica">Assistência Técnica</option>
          <option value="manutencao">Manutenção</option>
          <option value="treinamento">Treinamento de Operadores</option>
          <option value="area-atendimento">Área de Atendimento</option>
          <option value="administrativo">Financeiro / Administrativo</option>
          <option value="outros">Outras informações</option>
        </select>
        {errors.interesse && <span className="text-xs font-bold text-red-600">{errors.interesse}</span>}
      </label>
      <label className={`${labelClasses} md:col-span-2`}>
        Mensagem *
        <textarea
          className={`${inputClasses} min-h-32 py-3`}
          name="mensagem"
          placeholder="Conte rapidamente o que você precisa"
          value={values.mensagem}
          onChange={(event) => updateValue("mensagem", event.target.value)}
        />
      </label>
      {message && (
        <div role={status === "success" ? "status" : "alert"} className={`rounded-md p-3 text-sm font-semibold md:col-span-2 ${status === "success" ? "bg-[#0b2d4d]/8 text-[#0b2d4d]" : "bg-red-50 text-red-700"}`}>
          {message}
        </div>
      )}
      <PrivacyNotice />
      <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-lime-300 px-5 text-sm font-extrabold text-[#0b1726] shadow-[0_14px_30px_rgba(132,204,22,0.24)] transition hover:bg-lime-200 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2" disabled={status === "loading"}>
        <Send className="h-4 w-4" aria-hidden />
        {status === "loading" ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
