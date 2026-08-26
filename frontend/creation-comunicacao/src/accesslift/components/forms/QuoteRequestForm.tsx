import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "../../analytics/analytics";
import { submitQuoteRequest, type QuoteRequestPayload } from "../../services/leadService";

const inputClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500";
const labelClasses = "grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600";

const initialValues: QuoteRequestPayload = {
  nome: "",
  empresa: "",
  telefone: "",
  email: "",
  interesse: "",
  tipoOperacao: "",
  mensagem: "",
  aceite: false,
  antispam: "",
};

const validate = (values: QuoteRequestPayload) => {
  const errors: Partial<Record<keyof QuoteRequestPayload, string>> = {};

  if (!values.nome.trim()) errors.nome = "Informe seu nome.";
  if (!values.telefone.trim()) errors.telefone = "Informe um telefone.";
  if (!values.email.trim()) errors.email = "Informe um e-mail.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Informe um e-mail valido.";
  }
  if (!values.interesse) errors.interesse = "Selecione um interesse.";
  if (!values.tipoOperacao) errors.tipoOperacao = "Selecione o tipo de operacao.";
  if (!values.aceite) errors.aceite = "Aceite o contato para envio da solicitacao.";
  if (values.antispam) errors.antispam = "Falha na validacao antispam.";

  return errors;
};

export function QuoteRequestForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequestPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateValue = <Key extends keyof QuoteRequestPayload>(
    key: Key,
    value: QuoteRequestPayload[Key],
  ) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:grid-cols-2 md:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
          setStatus("error");
          setMessage("Revise os campos destacados antes de enviar.");
          return;
        }

        setStatus("loading");
        setMessage("");

        try {
          await submitQuoteRequest(values);
          setStatus("success");
          setMessage("Solicitacao registrada no mock local. Integracao backend pendente.");
          trackEvent({ name: "form_submit", payload: { form: "quote" } });
          setValues(initialValues);
        } catch (error) {
          setStatus("error");
          setMessage(error instanceof Error ? error.message : "Nao foi possivel enviar.");
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
        Nome
        <input className={inputClasses} value={values.nome} onChange={(event) => updateValue("nome", event.target.value)} placeholder="Seu nome" />
        {errors.nome && <span className="text-xs font-bold text-red-600">{errors.nome}</span>}
      </label>
      <label className={labelClasses}>
        Empresa
        <input className={inputClasses} value={values.empresa} onChange={(event) => updateValue("empresa", event.target.value)} placeholder="Empresa" />
      </label>
      <label className={labelClasses}>
        Telefone
        <input className={inputClasses} value={values.telefone} onChange={(event) => updateValue("telefone", event.target.value)} placeholder="Telefone" />
        {errors.telefone && <span className="text-xs font-bold text-red-600">{errors.telefone}</span>}
      </label>
      <label className={labelClasses}>
        E-mail
        <input className={inputClasses} value={values.email} onChange={(event) => updateValue("email", event.target.value)} placeholder="E-mail" />
        {errors.email && <span className="text-xs font-bold text-red-600">{errors.email}</span>}
      </label>
      <label className={labelClasses}>
        Interesse/equipamento
        <select className={inputClasses} value={values.interesse} onChange={(event) => updateValue("interesse", event.target.value)}>
          <option value="">Selecione</option>
          <option value="plataforma-tesoura">Plataforma tesoura</option>
          <option value="plataforma-articulada">Plataforma articulada</option>
          <option value="equipamento-a-definir">Equipamento a definir</option>
          <option value="servico">Servico</option>
        </select>
        {errors.interesse && <span className="text-xs font-bold text-red-600">{errors.interesse}</span>}
      </label>
      <label className={labelClasses}>
        Tipo de operacao
        <select className={inputClasses} value={values.tipoOperacao} onChange={(event) => updateValue("tipoOperacao", event.target.value)}>
          <option value="">Selecione</option>
          <option value="locacao-diaria">Locacao diaria</option>
          <option value="locacao-semanal">Locacao semanal</option>
          <option value="locacao-mensal">Locacao mensal</option>
          <option value="venda">Venda</option>
          <option value="assistencia">Assistencia tecnica</option>
        </select>
        {errors.tipoOperacao && <span className="text-xs font-bold text-red-600">{errors.tipoOperacao}</span>}
      </label>
      <label className={`${labelClasses} md:col-span-2`}>
        Mensagem
        <textarea className={`${inputClasses} min-h-32 py-3`} value={values.mensagem} onChange={(event) => updateValue("mensagem", event.target.value)} placeholder="Descreva a necessidade" />
      </label>
      <label className="flex gap-3 rounded-md bg-slate-50 p-3 text-sm font-semibold text-slate-700 md:col-span-2">
        <input
          type="checkbox"
          checked={values.aceite}
          onChange={(event) => updateValue("aceite", event.target.checked)}
          className="mt-1 h-4 w-4 accent-lime-500"
        />
        Aceito ser contatado pela Accesslift para retorno sobre esta solicitacao.
      </label>
      {errors.aceite && <span className="text-xs font-bold text-red-600 md:col-span-2">{errors.aceite}</span>}
      {message && (
        <div className={`flex items-start gap-2 rounded-md p-3 text-sm font-semibold md:col-span-2 ${status === "success" ? "bg-lime-50 text-lime-900" : "bg-red-50 text-red-700"}`}>
          {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          {message}
        </div>
      )}
      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2"
        disabled={status === "loading"}
      >
        <Send className="h-4 w-4" aria-hidden />
        {status === "loading" ? "Enviando..." : "Enviar solicitacao"}
      </button>
    </form>
  );
}
