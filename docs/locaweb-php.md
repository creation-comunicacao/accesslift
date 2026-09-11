# Publicacao Locaweb: frontend estatico + formularios PHP

Configuracao vigente: substitui Node.js/webhook. Node so e usado para desenvolver
e gerar o frontend React; nao precisa executar na hospedagem.

## Requisitos

- PHP 8.2+, preferencialmente 8.3/8.4 atualizado; extensoes OpenSSL e Zip.
- Apache 2.4, mod_rewrite e .htaccess; confirmar no plano Hospedagem III.
- Saida SMTP TLS para email-ssl.com.br:465 ou STARTTLS em 587.
- post_max_size >= 4M, memory_limit >= 64M. JSON com base64 limitado a 3 MB;
  arquivo decodificado limitado a 2 MB. Certificados CA atualizados.

## Desenvolvimento e pacote

```sh
composer install --working-dir=php --no-dev --prefer-dist --no-interaction
npm ci
npm run dev
```

O comando inicia PHP em porta disponivel e Vite com proxy. Ctrl+C encerra ambos.
`npm run preview` tambem usa PHP. PHP_BIN permite indicar outro executavel.
Credenciais locais opcionais: php/config.local.php, ignorado pelo Git.
Nao e necessario configurar SMTP para rodar os testes simulados.

```sh
npm run lint
npm test
npm run package:locaweb
```

O pacote release/locaweb contem dependencias Composer, sem credenciais/testes.
Nao precisa executar Composer ou Node na Locaweb. Manter composer.lock versionado.
Por padrao e homologacao noindex. Somente para publicacao definitiva:

```sh
VITE_SITE_ENV=production npm run package:locaweb
```

## Upload

Fazer backup do site antigo e .htaccess. Confirmar a pasta publica no FTP.
Estrutura esperada, caso public_html seja a raiz publica:

```text
/home/accesslift/
  accesslift-private/         <- pasta privada do pacote
    inquiries.php
    config.example.php
    config.local.php         <- criar no servidor, nunca publico
    vendor/
    storage/                 <- PHP cria, precisa de permissao de escrita
  public_html/               <- conteudo de public_html do pacote
    index.html
    .htaccess
    api/inquiries.php
    assets/, images/, documents/, demais paginas
```

O endpoint procura accesslift-private ao lado da raiz publica. Se a estrutura for
diferente, definir ACCESSLIFT_PRIVATE_DIR no servidor com caminho absoluto.
Nao colocar pasta privada em public_html. Credenciais com permissao 600 quando
PHP executar como dono. Nunca usar 777; confirmar proprietario/permissoes no suporte.

Copiar config.example.php para config.local.php na pasta PRIVADA e preencher
smtp_user/smtp_pass. Remetente e a conta autenticada, destinatario fixo
comercial@accesslift.com.br e Reply-To e o visitante. Variaveis de servidor
INQUIRIES_SMTP_HOST/PORT/USER/PASS tambem sao aceitas. PHP nao le .env do Vite.

Allowed origins inclui HTTPS do dominio oficial/www e os dominios temporarios
informados. Acrescentar somente dominios controlados usados para testes. A origem
tambem deve corresponder ao Host do pedido. Nao usar wildcard.

.htaccess encaminha /api/inquiries para PHP sem redirect, preservando POST.
Desativa listagem de diretorios/MultiViews e configura /404.html como erro 404.
O empacotador converte as regras 301 conhecidas de vercel.json, sem inventar outras.
Mesclar cuidadosamente regras SSL/dominio existentes. Nao publicar esse pacote em
Vercel/static-only: esses ambientes nao executam PHP e podem expor codigo-fonte.

## Seguranca e contrato

- Contato, orcamento, assistencia e carreira: POST JSON /api/inquiries.
- Mesmo retorno {"ok":true,"message":"..."}, somente apos aceite SMTP.
- Sem fallback mail()/webhook ou retry automatico que duplique mensagens.
- PDF/DOC verificam assinatura; DOCX exige estrutura Word e limites de tamanho
  descompactado/entradas. Isso nao substitui antivirus.
- Anexos nao ficam publicos; temporarios sao removidos.
- Limites: 10 tentativas validas/IP/10 minutos; global 100/hora. Conferir volume
  comercial e se REMOTE_ADDR corresponde ao cliente no provedor (nao confiamos em
  X-Forwarded-For enviado pelo visitante). Estado limitado em arquivo com flock.
- Falta de configuracao: 503; falha SMTP: 502; dados invalidos: 400; limite: 429.
  Nenhum erro revela senha. O frontend preserva os dados e evita clique simultaneo.
- Nao ha garantia de exatamente um envio se a conexao cair depois do aceite SMTP.
- Nenhuma nova conversao Ads criada. Curriculo continua com evento separado.

## Checklist na Locaweb

1. GET /api/inquiries retorna JSON 405, nunca codigo PHP.
2. Enviar os quatro formularios e confirmar email, acentos, assunto, origem,
   UTMs, modelo selecionado, Reply-To e anexos PDF/DOC/DOCX.
3. Testar formato invalido/maior que 2 MB, erro controlado e clique duplo.
4. Confirmar eventos so apos sucesso e curriculos fora das conversoes comerciais.
5. Validar HTTPS proprio, 301, PDFs, paginas profundas, 404, cookies e GTM existente.
6. Conferir robots/canonical/sitemap: staging noindex, producao liberada intencionalmente.

Testes locais simulam SMTP e nao comprovam recebimento na caixa em producao.
Credenciais e QA no provedor ainda sao necessarios. Nenhum upload/deploy e automatico.
