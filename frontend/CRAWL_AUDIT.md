# Homologacao rastreavel, sem indexacao

## Arquitetura atual

Este projeto usa React + Vite e entrega uma SPA. O HTML inicial do servidor contem o elemento `#root`; H1, textos, links e metadados especificos de rota sao inseridos apos a execucao de JavaScript no cliente.

Portanto, esta configuracao permite que crawlers acessem rotas, assets, `robots.txt` e `sitemap.xml`, mas nao atende ao criterio de HTML principal entregue por SSR/SSG. A auditoria final de SEO deve ocorrer depois de uma migracao para Next.js com SSR/SSG, ou outra solucao de pre-renderizacao validada.

## Variaveis obrigatorias na Vercel de homologacao

Defina no ambiente de Preview/Homologacao:

```text
VITE_SITE_ENV=staging
VITE_SITE_URL=https://SEU-DOMINIO-DE-HOMOLOGACAO.vercel.app
```

`VITE_SITE_ENV=staging` mantem `meta[name="robots"]` como `noindex,nofollow` em todas as paginas. O `robots.txt` permite leitura para que ferramentas de auditoria possam acessar o ambiente; isso nao libera indexacao enquanto o noindex estiver presente.

Para producao, use `VITE_SITE_ENV=production` e a URL canonica definitiva apenas no go-live autorizado.

## Vercel

O projeto da Vercel deve apontar seu Root Directory para `frontend`. O arquivo `vercel.json` fornece o rewrite SPA para que acessos diretos e refresh em rotas internas recebam `index.html` com HTTP 200.

Nao habilite Vercel Deployment Protection, Basic Auth, WAF ou challenge de bot na URL usada para a auditoria. Caso exista, crie uma URL de Preview publica temporaria.

## Validacao apos deploy

Use a URL de homologacao e valide:

```text
/
/locacao-de-plataformas-elevatorias/
/plataformas-tesoura/
/equipamentos/genie-z34/
```

Em cada URL, confirme HTTP 200, `meta robots` com `noindex,nofollow`, `robots.txt` com `Allow: /` e um `sitemap.xml` gerado com o host de homologacao.
