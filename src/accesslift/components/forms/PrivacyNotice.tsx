export function PrivacyNotice({ career = false }: { career?: boolean }) {
  return <p className={`text-xs leading-5 text-slate-500 ${career ? "" : "md:col-span-2"}`}>
    {career ? "Os dados enviados serão utilizados para análise de oportunidades profissionais e tratamento do contato relacionado ao processo de recrutamento, conforme a " : "Ao enviar seus dados, você concorda com o tratamento das informações para atendimento da sua solicitação, conforme nossa "}
    <a className="underline" href="/politica-de-privacidade/">Política de Privacidade</a>{career ? " da Accesslift." : "."}
  </p>;
}
