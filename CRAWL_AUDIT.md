# Auditoria tecnica da Home para crawlers

## Resultado

A Home agora e pre-renderizada durante o build e o HTML inicial publicado em `dist/index.html` contem o conteudo textual principal da pagina, incluindo H1, H2, paragrafos, cards, CTAs, links de navegacao e conteudo do rodape. O app continua hidratando no cliente para preservar navegacao SPA, interacoes, layout, componentes e comportamento atual.

## Diagnostico

- Framework e versao: React `^19.0.1`, React DOM `^19.0.1`, Vite `^6.2.3`, `@vitejs/plugin-react` `^5.0.4`.
- Arquitetura identificada: SPA React servida por Vite, com rotas controladas no cliente e rewrite de Vercel para `index.html`.
- Estrategia anterior: CSR. O servidor retornava apenas o shell com `<div id="root"></div>`, e o conteudo da Home dependia da execucao de JavaScript.
- Estrategia final: SSG/pre-render incremental da Home no pos-build, usando os mesmos componentes React como fonte de verdade e hidratacao via `hydrateRoot`.
- Causa do bloqueio para crawler: conteudo principal ausente do HTML inicial.

## Arquivos modificados

- `package.json`: adiciona o passo `tsx scripts/prerender-home.tsx` ao build.
- `scripts/prerender-home.tsx`: gera a Home estatica em `dist/index.html` com corpo pre-renderizado e metadados essenciais.
- `src/App.tsx`: aceita `initialPath` para renderizacao estatica.
- `src/accesslift/AccessliftApp.tsx`: remove dependencia obrigatoria de `window` na inicializacao da rota.
- `src/main.tsx`: usa `hydrateRoot` quando o HTML ja contem markup pre-renderizado.
- `CRAWL_AUDIT.md`: atualiza este diagnostico.

## Metadados e rastreabilidade

- Documento com `lang="pt-BR"` em `index.html`.
- Home com `<title>Locação de Plataformas Elevatórias em SP | Accesslift</title>`.
- Home com meta description, canonical `https://www.accesslift.com.br/`, Open Graph, Twitter Card e JSON-LD.
- Links relevantes continuam como `<a href="...">`.
- `robots.txt` e `sitemap.xml` sao gerados por `scripts/generate-crawl-files.mjs`.

Observacao: por padrao local/staging, `meta[name="robots"]` fica `noindex,nofollow`. Em producao, configure `VITE_SITE_ENV=production` para permitir `index,follow` nas paginas indexaveis.

## Validacao executada

- `npm run lint`: passou.
- `npm run build`: passou; o build do Vite concluiu e a Home foi pre-renderizada.
- `npm run preview -- --host 127.0.0.1 --port 4173`: servidor local usado para validacao HTTP.
- `curl http://127.0.0.1:4173/ -o artifacts/home-rendered.html`: salvou o HTML bruto retornado pela Home.
- Verificacao textual em `artifacts/home-rendered.html`: H1 presente, H2s presentes, CTAs presentes, rodape presente, 60 anchors rastreaveis.
- Navegador local: DOM hidratado salvo em `artifacts/home-dom.html`, screenshot full-page salvo em `artifacts/home-full-page.png`, sem erros de console.

## URLs verificadas

- `http://127.0.0.1:4173/`: HTTP 200.
- `http://127.0.0.1:4173/robots.txt`: HTTP 200.
- `http://127.0.0.1:4173/sitemap.xml`: HTTP 200.

## Entregaveis

- `artifacts/home-rendered.html`
- `artifacts/home-dom.html`
- `artifacts/home-full-page.png`
- `CRAWL_AUDIT.md`

## Limitacoes de infraestrutura

Nao ha middleware, autenticacao ou protecao de preview no codigo deste projeto. Em hospedagem, confirme que nao ha Deployment Protection, Basic Auth, WAF, challenge de bot ou header `X-Robots-Tag` bloqueando a URL usada pela auditoria. O `sitemap.xml` local usa `http://localhost:3000` quando `VITE_SITE_URL` nao e definido; defina `VITE_SITE_URL` no ambiente de deploy para gravar o dominio correto.
