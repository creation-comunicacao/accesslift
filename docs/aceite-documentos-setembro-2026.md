# Implementacao dos documentos do cliente

Escopo: 14 documentos da pasta Accesslift/Documentos. As restricoes diretas do usuario prevalecem sobre sugestoes visuais dos documentos: imagens, CSS global e variantes dos botoes foram preservados. Foram reutilizados os componentes existentes para os novos textos, blocos e jornadas.

## Conferencia por pagina

| Pagina | Implementacao |
| --- | --- |
| `/servicos/` | 6 blocos: hero, suporte, 3 servicos com links, estrutura de apoio, FAQ, conversao. Sem catalogo. |
| `/servicos/assistencia-tecnica/` | 7 grupos: hero, suporte, necessidades, locacao ativa, marcas, formulario, FAQ + conversao. Terceiros e locacoes diferenciados. |
| `/servicos/manutencao-preventiva/` | 7 grupos. Cuidado da frota como foco, preventiva/corretiva/assistencia em uma unica ocorrencia, terceiros como possibilidade complementar. |
| `/servicos/treinamento-de-operadores/` | 7 grupos. Conteudo aprovado, duas modalidades, treinamento avulso no patio com certificado, distincao da NR-35, fotografias existentes preservadas. |
| `/segmentos/construcao-civil/` | 7 grupos. Aplicacoes da obra, categorias sem modelos, locacao por etapa, 6 criterios de escolha, FAQ e conversao contextualizados. |
| `/segmentos/industria/` | 7 grupos. Aplicacoes industriais, acesso alem de maquinas/estruturas, suporte a locacao e criterios do ambiente industrial. |
| `/segmentos/atacados/` | 7 grupos. Instalacoes de grande porte, 7 aplicacoes e 6 criterios; sem duplicar o conteudo de supermercados. |
| `/segmentos/supermercados-e-hipermercados/` | 7 grupos. Aplicacoes comerciais, planejamento da intervencao e criterios de circulacao, gondolas, acessos e piso. Sem prometer operacao com clientes circulando. |
| `/empresa/` | 5 grupos. Apresentacao, quem somos, estrutura consolidada, operacao + clientes existentes, conversao. Sem catalogo, avaliacoes ou segmentos independentes. |
| `/area-de-atendimento/` | 4 grupos. Consulta comercial, 150 km como referencia aproximada, outras localidades sob avaliacao; formulario de cidade e resposta automatica removidos da rota. |
| `/seguranca-e-nr35/` | 4 grupos. Contexto, 6 criterios, FAQ + fonte oficial + conversao. Sem afirmar conformidade automatica. |
| `/contato/` | Hero sem CTAs, canais + formulario em duas colunas, suporte + endereco, footer. Sem CTA final e sem nota interna. |
| `/trabalhe-conosco/` | Hero com ancora para formulario, cadastro e footer. Area de interesse obrigatoria; PDF/DOC/DOCX ate 2 MB; sem promessa de contratacao. |
| `/politica-de-privacidade/` | Hero documental, controlador identificado, 12 topicos, canal de privacidade e footer. Sem blocos comerciais no conteudo. |

## Origem dos conteudos

`src/accesslift/data/clientPages.ts`, `clientSegments.ts` e `clientInstitutional.ts` concentram os textos aprovados por pagina. `clientPageRegistry.ts` resolve essas rotas antes dos templates legados e fornece o mesmo conteudo para SEO/FAQ. As rotas de catalogo, Home e demais paginas continuam usando sua implementacao anterior. Nenhum slug foi alterado.

`ClientPageTemplate.tsx` reutiliza ConversionHero, ValueSection, SectionList, FaqSection, FinalConversionSection, OfficialMediaGallery e os botoes existentes. Os templates anteriores permanecem disponiveis para rotas fora deste lote.

O texto de cobertura no footer tambem foi alinhado a consulta comercial para nao contradizer a pagina de Area de Atendimento. Nenhum estilo do footer foi alterado.

## Formulario e recebimento

O fluxo anterior simulava sucesso sem transmitir os dados. Agora contato, assistencia, curriculo e orcamento usam `POST /api/inquiries`. A resposta de sucesso somente aparece depois da confirmacao do receptor. Falhas mantem os campos preenchidos para nova tentativa.

Configurar no servidor:

- `INQUIRIES_WEBHOOK_URL`: endpoint HTTPS aprovado para recebimento.
- `INQUIRIES_WEBHOOK_TOKEN`: credencial opcional, nunca exposta em variaveis VITE.

O receptor recebe JSON com `kind` (`contact`, `support`, `career`, `quote`), `values` e, exclusivamente para curriculos, `attachment: { name, content }` com conteudo base64. Deve responder HTTP 2xx e JSON `{ "ok": true }` somente apos aceitar a entrega. Validacoes incluem campos obrigatorios, e-mail, honeypot, escolha explicita de locacao, formato/assinatura e tamanho do curriculo. A aplicacao nao armazena curriculos nem dados pessoais no navegador.

Sem o receptor configurado, a API responde 503 e o formulario informa a indisponibilidade. O recebimento real pela equipe ainda depende dessa configuracao e de teste com o destino autorizado. Nao foi realizado envio externo durante a verificacao.

## Cookies e mensuracao

Banner global com aceitar, rejeitar nao essenciais e gerenciar preferencias; reabertura pelo footer. Analise e publicidade sao separadas, opcionais e desativadas inicialmente. As tags so sao carregadas apos autorizacao da respectiva categoria. A revogacao atualiza Consent Mode, bloqueia novos eventos e remove cookies de mensuracao identificados no dominio.

Configurar `VITE_GA4_ID` e `VITE_GOOGLE_ADS_ID` com identificadores reais. Eventos por pagina/jornada e origem dos formularios foram preparados. Eventos `career_*` nao sao enviados ao destino Google Ads. A definicao de conversoes/importacao no painel GA4/Ads permanece a cargo da configuracao dessas contas; um clique nao foi declarado automaticamente como conversao de Ads.

Avisos de privacidade com link foram incluidos nos formularios. A pagina de recrutamento usa aviso proprio. Parametros de atribuicao de campanha respeitam o consentimento de analise/publicidade.

## Verificacao

- `npm run lint`: aprovado (TypeScript).
- `npm test`: aprovado; validacao, falha sem integracao, confirmacao pelo receptor, separacao de terceiros/locacao e transmissao do anexo testadas com receptor simulado.
- `npm run build`: aprovado. Vite avisa sobre bundle acima de 500 kB; nao e erro de compilacao.
- 14 paginas verificadas em 1440 px e 390 px: H1 unico, ausencia de catalogos/notas internas, imagens carregadas, ancoras existentes e ausencia de overflow horizontal.
- Cookies: rejeitar, alterar preferencias e persistir apos recarga verificados.
- Contato: erro de envio e sucesso confirmado verificados com resposta HTTP simulada, sem transmissao de dados externos.
- Imagens, `src/index.css` e as variantes em `Button.tsx` nao foram modificados.

## Pendencias externas

- Definir/configurar o receptor de formularios e confirmar o recebimento de curriculos pela equipe.
- Informar IDs de mensuracao e configurar conversoes nas contas autorizadas.
- Confirmar comercialmente o escopo tecnico final dos reparos e marcas atendidas, conforme ressalva do documento de Assistencia Tecnica. A pagina nao usa a expressao assistencia autorizada.
- O pedido do usuario para preservar os estilos foi mantido, inclusive quando os documentos sugeriam mudar a cor de botoes de formulario.

Fonte normativa: pagina oficial da NR-35 no Ministerio do Trabalho e Emprego, vinculada no site, em vez de PDF de um ano especifico. Nao foi reproduzido historico de portarias nem ampliado o conteudo normativo do cliente.
