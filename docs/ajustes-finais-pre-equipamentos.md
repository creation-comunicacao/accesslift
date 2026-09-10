# Ajustes finais antes dos equipamentos

Documento de origem: Accesslift_2.0_Ajustes_Finais_Pre_Equipamentos.pages,
consolidado em 10/09/2026. Foram lidos o corpo e as tabelas do documento.

## Correcoes aplicadas

- Marca Accesslift em copy, mensagens, metadados, FAQ, ALT e e-mails.
  Razao social e CNPJ existentes preservados, sem presumir correcao juridica.
- Inicio corrigido para Inicio com acento (Início), no breadcrumb e JSON-LD.
- Cobertura aberta em todas as fontes: Sao Paulo e regiao, outras localidades
  sob avaliacao comercial. 150 km permanece somente como referencia aproximada.
- Schema areaServed e FAQ de area de atendimento ajustados.
- Home: concordancia da faixa do Hero, intro dos equipamentos, CTA final
  direto para WhatsApp com evento e sem alterar classes ou variante do botao.
- Resumo solicitado da JLG 1930ES atualizado na fonte central, compartilhada
  por cards e detalhes. Nenhuma especificacao tecnica foi alterada.
- Espacos antes da pontuacao nas avaliacoes corrigidos. Grafia do nome do
  avaliador preservada por estar registrada como verificada na fonte Google.
- Texto de ajuda da pagina Plataformas e metadata de Servicos atualizados.
- Empresa: H1 e title; NR-35: title; og:title acompanha os mesmos valores.
- Logos de clientes: Assai Atacadista e Atacadao com acentuacao correta.
- Assistencia durante locacao: chamado, triagem remota/video e deslocamento
  tecnico quando necessario, sem prazo garantido ou autorizacao presumida.
- Manutencao de terceiros, treinamento solicitado, avulso no patio e certificado
  ja estavam presentes. Preservados, sem inventar duracao ou validade.
- Contato: tracking inclui form_type=contact e contact_subject.
- Curriculo: tracking inclui form_type=careers e advertising_consent=false.
- Orcamento: UTMs da primeira visita lidas diretamente da URL antes do storage;
  contexto de alimentacao eletrica reconhece a grafia com acento.
- Trava sincrona impede submissao simultanea nos quatro formularios.
- Redirect legado mapeado passa a declarar statusCode=301 explicitamente.

## Preservado

Nenhuma alteracao de CSS, classes de estilo, tipografia, estrutura de secoes,
rotas ou imagens neste pacote. As duas Heroes adicionadas na solicitacao
anterior permanecem no working tree. Nenhuma revisao tecnica dos 14 modelos.
Campos pendentes e PDFs nao validados continuam ocultos pela fonte e pelos
helpers existentes. Contatos centralizados e horario comercial nao publicado.

## Verificacao

- Testes de renderizacao de todas as 53 rotas: marca, breadcrumb, ausencia
  de flags publicas e limite rigido; metadata individual e GTM unico.
- Testes da API com receptor simulado: confirmacao de entrega obrigatoria,
  assunto do contato preservado, curriculos PDF/DOC/DOCX e limite de 2 MB.
  Esses testes nao comprovam recebimento de e-mail real.
- Chrome automatizado: contato com erro/sucesso e bloqueio de envio duplo;
  orcamento com UTMs, contexto do equipamento e origens construction, retail,
  wholesale; curriculo com transporte de anexo e evento nao comercial.
- Cookies: default denied, rejeicao, reabertura pelo rodape e update apos
  escolha. Requisicoes externas bloqueadas no QA para evitar conversoes falsas.
- Capturas em 1440 e 390 px: Home, empresa, atendimento, contato, orcamento,
  carreira e equipamentos; sem overflow horizontal ou erros JS.
- Preview permanece noindex. Liberacao de producao depende de
  VITE_SITE_ENV=production no build da publicacao. Restricoes por pagina mantidas.

## Pendencias externas de aceite

1. Configurar INQUIRIES_WEBHOOK_URL e credenciais do servico de e-mail.
   Ausentes neste ambiente; envio real e recebimento pelo comercial nao validados.
2. Administrador do GTM/Google Ads deve validar acionadores, Consent Mode e
   conversoes existentes, sem contar carreira como lead comercial. Nenhuma nova
   acao de conversao foi criada nem alteracao na conta realizada.
3. Confirmar razao social e CNPJ com a administracao.
4. Fornecer mapa completo de URLs/PDFs legados. O repositorio contem somente
   o redirect de JLG 2630ES; seu HTTP 301 deve ser conferido na hospedagem apos
   deploy, pois o servidor Vite nao executa vercel.json.
5. Validar dominio, respostas HTTP, robots, sitemap e Search Console apos deploy.
   Nao houve publicacao nesta rodada.

Referencia de statusCode 301: https://vercel.com/docs/project-configuration/vercel-json
