import { useEffect, useState } from "react";
import { applyPreferences, readPreferences, savePreferences } from "../../analytics/consent";
import { Button } from "../buttons/Button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  useEffect(() => {
    const value = readPreferences();
    applyPreferences(value);
    setVisible(!value);
    const open = () => {
      const current = readPreferences();
      setAnalytics(Boolean(current?.analytics));
      setAdvertising(Boolean(current?.advertising));
      setManaging(true);
      setVisible(true);
    };
    window.addEventListener("accesslift-open-cookie-preferences", open);
    return () => window.removeEventListener("accesslift-open-cookie-preferences", open);
  }, []);
  if (!visible) return null;
  const save = (analysis: boolean, ads: boolean) => { savePreferences(analysis, ads); setVisible(false); setManaging(false); };
  return <section role="region" aria-label="Preferências de cookies" className="fixed inset-x-0 bottom-0 z-50 max-h-[80dvh] overflow-y-auto border-t border-slate-200 bg-white px-4 py-5 text-slate-700 shadow-lg md:px-6">
    <div className="mx-auto max-w-7xl">
      <h2 className="text-lg font-semibold text-slate-950">Sua privacidade é importante</h2>
      <p className="mt-2 max-w-4xl text-sm leading-6">Utilizamos cookies necessários para o funcionamento do site e, com sua autorização, cookies adicionais para análise de desempenho e publicidade. Você pode aceitar, rejeitar cookies não essenciais ou gerenciar suas preferências.</p>
      {managing && <fieldset className="my-4 grid gap-4 sm:grid-cols-3"><legend className="sr-only">Categorias de cookies</legend>
        <label className="flex items-start gap-3"><input type="checkbox" checked disabled className="mt-1" /><span><strong>Necessários</strong><small className="block">Sempre ativos. Funcionamento e segurança do site.</small></span></label>
        <label className="flex items-start gap-3"><input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1" /><span><strong>Análise</strong><small className="block">Compreender a utilização do site e medir seu desempenho.</small></span></label>
        <label className="flex items-start gap-3"><input type="checkbox" checked={advertising} onChange={(e) => setAdvertising(e.target.checked)} className="mt-1" /><span><strong>Publicidade</strong><small className="block">Mensuração de campanhas e publicidade digital.</small></span></label>
      </fieldset>}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {managing ? <Button onClick={() => save(analytics, advertising)}>Salvar preferências</Button> : <Button onClick={() => save(true, true)}>Aceitar</Button>}
        <Button variant="secondary" onClick={() => save(false, false)}>Rejeitar não essenciais</Button>
        {!managing && <Button variant="ghost" onClick={() => setManaging(true)}>Gerenciar preferências</Button>}
        <a className="text-sm underline" href="/politica-de-privacidade/">Política de Privacidade</a>
      </div>
    </div>
  </section>;
}
