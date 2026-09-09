# Orçamento e Segmentos/Aplicações

Referências: documentos Pages "Página: Solicite um Orçamento" e "Página: Segmentos e Aplicações", lidos integralmente no Pages, sem editar os arquivos.

## Orçamento

- Hero compacto sem caixa Conversão.
- Formulário essencial, sem checkbox de autorização de retorno.
- Nome, WhatsApp com DDD, e-mail e cidade obrigatórios, com validação no navegador e backend.
- Empresa e demais campos opcionais; opções de desconhecimento preservadas.
- Equipamento de origem dinâmico, identificado no formulário e encaminhamento.
- Aviso de privacidade imediatamente antes do envio; política clicável.
- Botão usa a variante primária já existente, sem alteração de CSS ou fontes.
- Apoio curto, sem links de navegação ou promessa de prazo.
- Sem CTA final adicional.
- quote_form_start dispara na primeira alteração; quote_form_submit apenas após confirmação positiva.
- Parâmetros de equipamento e source_page incluídos; rastreamento respeita consentimento.

## Aplicações

Sete blocos: Hero, conceito, quatro ambientes, tesoura/articulada, critérios, FAQ de quatro perguntas e CTA final.
Removidos catálogo, equipamentos relacionados e links duplicados de segmentos.
Nove eventos applications_* implementados e testados, incluindo WhatsApp contextualizado.
FAQ e dados estruturados usam o mesmo conteúdo. Rotas, canonical e páginas específicas preservados.

## Encaminhamento global

Os quatro formulários ativos (orçamento, contato, assistência e currículo) usam /api/inquiries.
O destinatário é fixado no servidor: comercial@accesslift.com.br, não controlável pelo visitante.
O servidor envia ao webhook configurado em INQUIRIES_WEBHOOK_URL:

```json
{
  "kind": "quote",
  "values": {"nome": "...", "email": "...", "pageOrigin": "/equipamentos/jlg-3246es/", "brand": "JLG", "model": "3246ES"},
  "email": {
    "to": "comercial@accesslift.com.br",
    "subject": "Nova solicitação de orçamento — JLG 3246ES — Site AccessLift",
    "text": "Origem: Site AccessLift\n...",
    "replyTo": "..."
  }
}
```

Currículos incluem attachment.name/content (base64), conforme contrato existente.
O serviço deve efetivamente enviar o e-mail e responder:

```json
{"ok": true, "emailSent": true, "recipient": "comercial@accesslift.com.br"}
```

Resposta apenas {"ok":true}, falha do serviço ou destinatário diferente não produz sucesso público.
**Mudança de contrato:** adaptar o webhook antes da publicação. Não basta armazenar o lead.
INQUIRIES_WEBHOOK_TOKEN continua sendo um segredo exclusivamente do servidor.

## Evidências e limites

- 29 testes aprovados, incluindo destinatário dos quatro tipos, campos obrigatórios, validação de telefone/e-mail e rejeição de confirmações incompletas.
- TypeScript/lint e build aprovados; aviso conhecido de bundle acima de 500 kB.
- Chrome em 1440 e 390 px: sem overflow; páginas e fluxos revisados.
- Quatro jornadas simuladas de equipamento para orçamento: JLG 3246ES e Genie Z-34/22 nas duas larguras.
- Eventos de início, erro e sucesso verificados sem transmitir dados externos.
- Capturas: /private/tmp/accesslift-pages-september9/.
- Imagens e fontes não modificadas; Button recebeu apenas suporte ao atributo HTML type.

## Pendências obrigatórias antes do aceite completo

1. Configurar/adaptar o serviço de envio com o contrato acima.
2. Fazer envio real de cada formulário em desktop/mobile e confirmar a chegada na caixa comercial, inclusive currículo anexado e modelo no orçamento.
3. Conferir todos os campos nos e-mails reais. Essa verificação não pode ser substituída por teste simulado.
4. Configurar IDs GA4/Ads e marcar/importar quote_form_submit como conversão comercial na conta.

Não houve acesso à caixa comercial, envio real ou configuração da conta Google Ads nesta rodada.
Portanto, a entrega de e-mails e o aceite integral de produção continuam pendentes.
