import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { trackEvent } from "../../analytics/analytics";
import { submitQuoteRequest, type QuoteRequestPayload } from "../../services/leadService";
import type { Equipment } from "../../types/equipment";

const inputClasses =
  "min-h-12 rounded-md border border-slate-300 bg-white px-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500";
const labelClasses = "grid gap-1.5 text-xs font-black uppercase tracking-wider text-slate-600";

const getStoredUtm = (key: string) => window.sessionStorage.getItem(`accesslift-${key}`);

const createInitialValues = (equipment: Equipment | null): QuoteRequestPayload => ({
  nome: "",
  empresa: "",
  whatsapp: "",
  email: "",
  cidade: "",
  periodo: "",
  altura: "nao-sei",
  tipo: "nao-sei",
  equipmentId: equipment?.id || null,
  brand: equipment?.brand || null,
  model: equipment?.model || null,
  category: equipment?.category === "plataformas-tesoura" ? "tesoura" : equipment?.category === "plataformas-articuladas" ? "articulada" : null,
  power: equipment?.specs.alimentacao?.toLowerCase().includes("eletric") ? "eletrica" : null,
  pageOrigin: window.location.pathname,
  utmSource: getStoredUtm("utm_source"),
  utmMedium: getStoredUtm("utm_medium"),
  utmCampaign: getStoredUtm("utm_campaign"),
  utmContent: getStoredUtm("utm_content"),
  utmTerm: getStoredUtm("utm_term"),
  mensagem: "",
  aceite: false,
  antispam: "",
});

const validate = (values: QuoteRequestPayload) => {
  const errors: Partial<Record<keyof QuoteRequestPayload, string>> = {};
  if (!values.nome.trim()) errors.nome = "Informe seu nome.";
  if (!values.whatsapp.trim()) errors.whatsapp = "Informe seu WhatsApp.";
  if (!values.cidade.trim()) errors.cidade = "Informe sua cidade.";
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Informe um e-mail valido.";
  }
  if (!values.aceite) errors.aceite = "Aceite o contato para enviar a solicitacao.";
  if (values.antispam) errors.antispam = "Falha na validacao antispam.";
  return errors;
};

export function QuoteRequestForm({ equipment = null }: { equipment?: Equipment | null }) {
  const initialValues = useMemo(() => createInitialValues(equipment), [equipment]);
  const [values, setValues] = useState<QuoteRequestPayload>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteRequestPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateValue = <Key extends keyof QuoteRequestPayload>(
    key: Key,
    value: QuoteRequestPayload[Key],
  ) => setValues((current) => ({ ...current, [key]: value }));

  return (
    <form
      className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 premium-shadow md:grid-cols-2 md:p-6"
      onSubmit={async (event) => {
        event.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length) {
          setStatus("error");
          setMessage("Revise os campos destacados antes de enviar.");
          return;
        }

        setStatus("loading");
        setMessage("");

        try {
          await submitQuoteRequest(values);
          setStatus("success");
          setMessage(
            "Solicitacao enviada. A equipe Accesslift avaliara a necessidade e entrara em contato para alinhar equipamento, periodo, local e condicoes comerciais.",
          );
          trackEvent({
            name: "form_submit",
            payload: {
              form: "quote",
              equipment_id: values.equipmentId,
              brand: values.brand,
              model: values.model,
            },
          });
          setValues(createInitialValues(equipment));
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
      <input type="hidden" name="equipment_id" value={values.equipmentId || ""} />
      <input type="hidden" name="brand" value={values.brand || ""} />
      <input type="hidden" name="model" value={values.model || ""} />
      <input type="hidden" name="category" value={values.category || ""} />
      <input type="hidden" name="power" value={values.power || ""} />
      <input type="hidden" name="page_origin" value={values.pageOrigin} />
      <input type="hidden" name="utm_source" value={values.utmSource || ""} />
      <input type="hidden" name="utm_medium" value={values.utmMedium || ""} />
      <input type="hidden" name="utm_campaign" value={values.utmCampaign || ""} />
      <input type="hidden" name="utm_content" value={values.utmContent || ""} />
      <input type="hidden" name="utm_term" value={values.utmTerm || ""} />

      <label className={labelClasses}>
        Nome *
        <input
          className={inputClasses}
          autoComplete="name"
          value={values.nome}
          onChange={(event) => updateValue("nome", event.target.value)}
          placeholder="Seu nome"
        />
        {errors.nome && <span className="text-xs font-bold text-red-600">{errors.nome}</span>}
      </label>

      <label className={labelClasses}>
        Empresa
        <input
          className={inputClasses}
          autoComplete="organization"
          value={values.empresa}
          onChange={(event) => updateValue("empresa", event.target.value)}
          placeholder="Nome da empresa"
        />
      </label>

      <label className={labelClasses}>
        WhatsApp *
        <input
          className={inputClasses}
          autoComplete="tel"
          inputMode="tel"
          value={values.whatsapp}
          onChange={(event) => updateValue("whatsapp", event.target.value)}
          placeholder="(11) 00000-0000"
        />
        {errors.whatsapp && <span className="text-xs font-bold text-red-600">{errors.whatsapp}</span>}
      </label>

      <label className={labelClasses}>
        E-mail
        <input
          className={inputClasses}
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={(event) => updateValue("email", event.target.value)}
          placeholder="seuemail@empresa.com.br"
        />
        {errors.email && <span className="text-xs font-bold text-red-600">{errors.email}</span>}
      </label>

      <label className={labelClasses}>
        Cidade da operacao *
        <input
          className={inputClasses}
          autoComplete="address-level2"
          value={values.cidade}
          onChange={(event) => updateValue("cidade", event.target.value)}
          placeholder="Cidade onde a plataforma sera utilizada"
        />
        {errors.cidade && <span className="text-xs font-bold text-red-600">{errors.cidade}</span>}
      </label>

      <label className={labelClasses}>
        Periodo desejado
        <select
          className={inputClasses}
          value={values.periodo}
          onChange={(event) => updateValue("periodo", event.target.value)}
        >
          <option value="">Ainda nao sei</option>
          <option value="diaria">Diaria</option>
          <option value="semanal">Semanal</option>
          <option value="mensal">Mensal</option>
        </select>
      </label>

      <label className={labelClasses}>
        Altura aproximada do trabalho
        <select
          className={inputClasses}
          value={values.altura}
          onChange={(event) => updateValue("altura", event.target.value)}
        >
          <option value="nao-sei">Nao sei</option>
          <option value="ate-8m">Ate 8 m</option>
          <option value="10-a-14m">10 a 14 m</option>
        </select>
      </label>

      <label className={labelClasses}>
        Tipo de plataforma
        <select
          className={inputClasses}
          value={values.tipo}
          onChange={(event) => updateValue("tipo", event.target.value)}
        >
          <option value="nao-sei">Nao sei qual preciso</option>
          <option value="tesoura">Tesoura</option>
          <option value="articulada">Articulada</option>
        </select>
      </label>

      {values.equipmentId && (
        <p className="rounded-md bg-lime-50 px-3 py-3 text-sm font-semibold text-lime-900 md:col-span-2">
          Equipamento de interesse: {values.brand} {values.model}
        </p>
      )}

      <label className={`${labelClasses} md:col-span-2`}>
        Mensagem
        <textarea
          className={`${inputClasses} min-h-32 py-3`}
          value={values.mensagem}
          onChange={(event) => updateValue("mensagem", event.target.value)}
          placeholder="Conte sobre o trabalho, local, acesso, obstaculos ou qualquer informacao que possa ajudar na escolha do equipamento."
        />
      </label>

      <p className="text-xs leading-5 text-slate-500 md:col-span-2">
        Ao enviar seus dados, voce concorda com o uso das informacoes para atendimento da sua solicitacao, conforme nossa Politica de Privacidade.
      </p>

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
        <div
          className={`flex items-start gap-2 rounded-md p-3 text-sm font-semibold md:col-span-2 ${
            status === "success" ? "bg-lime-50 text-lime-900" : "bg-red-50 text-red-700"
          }`}
        >
          {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
          {message}
        </div>
      )}

      <button
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-extrabold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2"
        disabled={status === "loading"}
      >
        <Send className="h-4 w-4" aria-hidden />
        {status === "loading" ? "Enviando..." : "Solicitar orcamento"}
      </button>
    </form>
  );
}
