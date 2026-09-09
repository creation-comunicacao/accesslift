# SEO por rota

O build gera um HTML independente para cada rota cadastrada, equipamento,
alias de equipamento e artigo, alem de `404.html`. A hospedagem nao deve
reescrever todas as URLs para o HTML da Home.

## Fontes

- `src/accesslift/AccessliftApp.tsx`: seleciona os dados de SEO da pagina atual.
- `src/accesslift/seo/head.ts`: definicao compartilhada das tags de metadados.
- `src/accesslift/seo/Seo.tsx`: coleta os dados na renderizacao estatica e
  atualiza as tags, sem duplicacao, durante a navegacao no cliente.
- `scripts/static-pages.tsx`: enumera as rotas e renderiza o HTML com os
  mesmos dados usados pela aplicacao.
- `scripts/prerender-pages.tsx`: grava os arquivos, sitemap e robots.
- `vercel.json`: preserva o redirecionamento legado, sem fallback global
  para a Home.

Edite o conteudo de SEO nas fontes usadas pela aplicacao, nunca em `dist`.
O template `index.html` deve manter apenas as tags comuns, sem title,
description, robots ou canonical genericos.

## Publicacao e validacao

Execute `npm run build` e `npm run preview` para inspecionar o HTML gerado.
O servidor de desenvolvimento nao executa a pre-renderizacao.

Configure `VITE_SITE_ENV=production` somente no ambiente publico de producao
antes do build. Previews permanecem bloqueados para indexacao. As restricoes
`noindex` especificas das paginas continuam sendo respeitadas em producao.

`npm test` verifica todas as rotas geradas, unicidade das tags, canonical,
JSON-LD, aliases e as diretivas de indexacao. `npm run lint` valida os tipos.
Novas rotas devem ser incluidas nas fontes enumeradas por `staticPaths`.

Esta implementacao substitui o fluxo antigo de `prerender-home.tsx` e
`generate-crawl-files.mjs`, mencionado em auditorias historicas.
