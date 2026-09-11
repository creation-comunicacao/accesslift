# Envio dos formularios pela Locaweb

> HISTORICO: o backend Node.js/Vercel descrito abaixo foi substituido por PHP.
> Para publicacao use [locaweb-php.md](locaweb-php.md). Credenciais agora ficam em
> accesslift-private/config.local.php, fora de public_html. Nao ha fallback webhook.

O endpoint `/api/inquiries` atende contato, orcamento, assistencia e curriculos.
O envio SMTP ocorre exclusivamente no servidor, sem alterar os formularios.

## Configuracao

No ambiente de publicacao (Vercel), configurar:

```dotenv
INQUIRIES_SMTP_HOST=email-ssl.com.br
INQUIRIES_SMTP_PORT=465
INQUIRIES_SMTP_USER=comercial@accesslift.com.br
INQUIRIES_SMTP_PASS=<senha da conta, somente no ambiente seguro>
```

Depois, publicar novamente. Localmente, usar `.env.local`, ignorado pelo Git,
e reiniciar o servidor. Nunca usar prefixo `VITE_` para credenciais.

Esses parametros correspondem ao produto Email Locaweb:
https://www.locaweb.com.br/ajuda/wiki/configuracao-de-outlook-email-locaweb/
Caso a conta utilize outro produto da Locaweb, confirmar o servidor no painel.
Tambem ha suporte a porta 587 com STARTTLS obrigatorio.

O remetente e a conta autenticada. O destinatario e fixo:
`comercial@accesslift.com.br`. O email do visitante vai em Reply-To.
Curriculos validados sao enviados como anexos, limitados a 2 MB.

Com usuario ou senha SMTP definidos, SMTP tem prioridade. Configuracao parcial,
falha ou timeout nao acionam o webhook como segunda tentativa, evitando duplicacao.
Sem credenciais SMTP, a integracao anterior de webhook continua disponivel.
Nenhum segredo e retornado ao navegador.

## Validacao de publicacao

- Enviar um teste identificado em cada formulario e conferir a caixa de entrada.
- Conferir assunto, campos, Reply-To e anexo do formulario de curriculo.
- Conferir spam e configuracao SPF/DKIM no provedor se houver falha de entrega.
- Testar erro controlado e confirmar que nao aparece sucesso nem conversao.

O sucesso da API significa que o SMTP aceitou o destinatario; nao comprova
recebimento na caixa de entrada. Testes automatizados usam SMTP simulado.
A validacao real depende das credenciais e da conferência da caixa de entrada.
