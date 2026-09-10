import { ConversionHero } from "./shared/StructuredPageSections";

const sections = [
  {
    title: "1. Dados pessoais que podem ser coletados",
    paragraphs: ["A Accesslift poderá coletar dados pessoais fornecidos diretamente pelo usuário ao utilizar formulários, canais de contato e demais recursos disponíveis no site.", "Dependendo da interação realizada, esses dados poderão incluir:"],
    items: ["nome", "empresa, quando informada", "e-mail", "telefone e/ou WhatsApp", "cidade ou localização relacionada à solicitação", "informações sobre a necessidade, operação, equipamento ou serviço consultado", "conteúdo das mensagens enviadas pelo usuário", "demais informações voluntariamente fornecidas durante o atendimento"],
    closing: "Trabalhe Conosco: quando o usuário utilizar esta página, também poderão ser tratados nome, e-mail, telefone/WhatsApp, área de interesse, mensagem, currículo enviado, informações profissionais e demais dados contidos no próprio currículo.",
  },
  {
    title: "2. Dados de navegação",
    paragraphs: ["O site poderá coletar determinadas informações técnicas relacionadas à navegação e utilização das páginas, conforme as ferramentas efetivamente habilitadas e as preferências de cookies do usuário.", "Essas informações poderão incluir, por exemplo:"],
    items: ["endereço IP e informações técnicas relacionadas à conexão", "tipo de dispositivo", "navegador utilizado", "páginas acessadas", "origem da visita", "interações realizadas no site", "eventos relacionados a botões e formulários", "cookies e identificadores utilizados pelas ferramentas de análise e publicidade"],
    closing: "Esses dados poderão ser utilizados para funcionamento do site, segurança, análise de desempenho e mensuração de resultados, conforme aplicável.",
  },
  {
    title: "3. Como funcionam os formulários e canais de contato",
    paragraphs: ["Os formulários disponíveis no site funcionam como canais de contato entre o usuário e a Accesslift.", "As informações fornecidas poderão ser encaminhadas à equipe da Accesslift por e-mail e/ou direcionadas para atendimento pelo WhatsApp, conforme o recurso utilizado pelo usuário.", "Esses dados poderão ser utilizados para:"],
    items: ["responder à solicitação realizada", "dar continuidade ao atendimento", "elaborar e acompanhar cotações", "consultar equipamentos e serviços", "prestar suporte relacionado às atividades da Accesslift", "manter comunicação relacionada ao contato iniciado pelo usuário"],
    closing: "Trabalhe Conosco: os dados e currículos enviados serão utilizados para análise de perfis profissionais e eventual consideração em oportunidades presentes ou futuras. O envio de currículo não representa garantia de contratação, participação em processo seletivo ou contato posterior.",
  },
  {
    title: "4. Finalidades do tratamento", paragraphs: ["Os dados pessoais poderão ser tratados, conforme aplicável, para:"],
    items: ["responder solicitações e contatos", "elaborar, enviar e acompanhar cotações", "prestar informações sobre equipamentos, locações e serviços", "prestar suporte relacionado às operações contratadas", "manter comunicação solicitada ou iniciada pelo próprio usuário", "analisar currículos e perfis profissionais", "operar, proteger e melhorar o site", "compreender a utilização das páginas", "medir desempenho e resultados de campanhas", "prevenir abusos, fraudes e incidentes", "cumprir obrigações legais ou regulatórias", "exercer ou resguardar direitos da Accesslift"],
    closing: "O tratamento deverá permanecer limitado às finalidades compatíveis com a interação realizada pelo usuário e com a legislação aplicável.",
  },
  {
    title: "5. Cookies e tecnologias semelhantes",
    paragraphs: ["O site poderá utilizar cookies e tecnologias semelhantes necessários ao seu funcionamento e, conforme as preferências do usuário, recursos adicionais destinados à análise de desempenho e publicidade.", "Cookies podem ser utilizados para diferentes finalidades, incluindo:"],
    items: ["Cookies necessários: relacionados ao funcionamento, segurança e recursos essenciais do site.", "Cookies de análise: podem ajudar a compreender como os visitantes utilizam o site e quais páginas ou recursos apresentam maior interação.", "Cookies de publicidade: podem ser utilizados para mensuração de campanhas e funcionalidades relacionadas à publicidade digital."],
    closing: "Quando implementadas, ferramentas como Google Analytics 4 e Google Ads poderão utilizar cookies ou tecnologias semelhantes de acordo com as configurações adotadas no site. A ANPD recomenda que informações sobre cookies sejam apresentadas de maneira transparente e que existam mecanismos adequados para gerenciamento das preferências do usuário. Cookies e tecnologias não essenciais deverão respeitar as escolhas disponibilizadas ao usuário por meio do mecanismo de gerenciamento de cookies adotado no site.",
  },
  {
    title: "6. Compartilhamento de dados pessoais",
    paragraphs: ["A Accesslift poderá compartilhar dados pessoais quando necessário para as finalidades descritas nesta Política, inclusive com fornecedores e prestadores de serviços envolvidos em atividades como:"],
    items: ["hospedagem e funcionamento do site", "tecnologia e infraestrutura", "comunicação e atendimento", "ferramentas de análise e mensuração", "publicidade e campanhas digitais", "suporte aos processos relacionados à solicitação realizada"],
    closing: "Quando o usuário optar por canais externos, como o WhatsApp, o tratamento de informações também poderá envolver os respectivos provedores desses serviços, sujeitos às suas próprias políticas e condições. Os dados também poderão ser compartilhados quando necessário para cumprimento de obrigação legal ou regulatória, exercício de direitos ou atendimento a determinações de autoridades competentes.",
  },
  {
    title: "7. Armazenamento e retenção",
    paragraphs: ["Os dados pessoais serão mantidos pelo período necessário para atender às finalidades para as quais foram coletados, cumprir obrigações legais ou regulatórias, exercer ou resguardar direitos e atender outras hipóteses permitidas pela legislação aplicável.", "Quando os dados deixarem de ser necessários e não houver fundamento para sua conservação, poderão ser eliminados ou anonimizados, conforme aplicável."],
  },
  {
    title: "8. Segurança dos dados",
    paragraphs: ["A Accesslift adota medidas técnicas e administrativas compatíveis com sua operação para proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou tratamento inadequado.", "Nenhum ambiente ou transmissão de informações pode ser considerado absolutamente imune a riscos. Por esse motivo, a Accesslift busca adotar medidas compatíveis com a natureza dos dados tratados e com sua operação."],
  },
  {
    title: "9. Direitos do titular dos dados",
    paragraphs: ["Nos termos da legislação aplicável, o titular poderá exercer os direitos previstos na legislação de proteção de dados, conforme cabíveis ao tratamento realizado. Entre eles poderão estar:"],
    items: ["confirmação da existência de tratamento", "acesso aos dados", "correção de informações incompletas, inexatas ou desatualizadas", "anonimização, bloqueio ou eliminação, quando aplicável", "informações relacionadas ao compartilhamento dos dados", "revogação do consentimento, quando essa for a base utilizada", "demais direitos previstos na legislação aplicável"],
    closing: "A ANPD orienta que o titular procure inicialmente o controlador para exercer seus direitos relacionados ao tratamento dos dados pessoais.",
  },
  {
    title: "10. Como exercer seus direitos",
    paragraphs: ["Para dúvidas relacionadas ao tratamento de dados pessoais ou para exercer os direitos previstos na legislação aplicável, o titular poderá entrar em contato com a Accesslift pelo e-mail comercial@accesslift.com.br.", "Assunto sugerido: Privacidade / Dados Pessoais. Este é o canal para assuntos relacionados à privacidade e dados pessoais."],
  },
  {
    title: "11. Links e serviços de terceiros",
    paragraphs: ["O site poderá disponibilizar links, integrações ou direcionamentos para serviços de terceiros, como WhatsApp e outros canais externos.", "Ao utilizar esses serviços, o usuário também poderá estar sujeito às respectivas políticas, termos e práticas de privacidade dos terceiros responsáveis.", "A Accesslift recomenda que o usuário consulte essas informações quando utilizar plataformas externas."],
  },
  {
    title: "12. Alterações desta Política",
    paragraphs: ["Esta Política de Privacidade poderá ser atualizada para refletir alterações nos serviços, tecnologias utilizadas, processos internos ou requisitos legais e regulatórios.", "A versão vigente estará disponível nesta página, acompanhada da respectiva data de atualização.", "Última atualização: setembro de 2026."],
  },
];

export function PrivacyPage() {
  return <>
    <ConversionHero compact eyebrow="Privacidade" title="Política de Privacidade" description="Saiba como a Accesslift trata os dados pessoais fornecidos por meio deste site e conheça seus direitos relacionados à proteção de dados." />
    <article className="mx-auto max-w-4xl space-y-10 px-4 py-12 text-slate-600 md:px-6">
      <div className="space-y-5">
        <h2 className="text-slate-950">Política de Privacidade — Accesslift</h2>
        <p>Última atualização: setembro de 2026</p>
        <p>A Accesslift valoriza a privacidade e a proteção dos dados pessoais dos usuários de seu site e de seus canais de atendimento. Esta Política de Privacidade apresenta informações sobre a coleta e o tratamento de dados pessoais realizados por meio deste site, de acordo com as finalidades relacionadas às atividades da empresa e com a legislação aplicável.</p>
        <p>Para fins desta Política, as referências à “Accesslift” correspondem ao controlador identificado abaixo:</p>
        <address className="not-italic">Acess Lift Loc.serv e com de plataformas<br />CNPJ: 20.504.105/0001-95<br />Rua Artur Lobo, 127 – Jardim Jabaquara – CEP 04384-060 – São Paulo/SP<br /><a className="underline" href="mailto:comercial@accesslift.com.br">comercial@accesslift.com.br</a></address>
      </div>
      {sections.map((section) => <section key={section.title} className="space-y-5">
        <h2 className="text-slate-950">{section.title}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.items && <ul className="list-disc space-y-2 pl-6">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
        {section.closing && <p>{section.closing}</p>}
      </section>)}
    </article>
    <section className="mx-auto max-w-4xl px-4 pb-12 md:px-6">
      <h2 className="text-slate-950">Dúvidas sobre seus dados pessoais?</h2>
      <p className="mt-4 text-slate-600">Para dúvidas relacionadas ao tratamento de dados pessoais ou para exercer seus direitos, entre em contato com a Accesslift.</p>
      <a className="mt-4 inline-block break-all text-[#0b2d4d] underline" href="mailto:comercial@accesslift.com.br?subject=Privacidade%20%2F%20Dados%20Pessoais">comercial@accesslift.com.br</a>
      <p className="mt-2 text-slate-600">Assunto sugerido: Privacidade / Dados Pessoais</p>
    </section>
  </>;
}
