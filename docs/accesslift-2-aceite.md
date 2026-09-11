# Accesslift 2: verificacao do pacote

Referencia: ACCESSLIFT 2.pages, incluindo a tabela de ajustes globais.

## Implementado e verificado localmente

- Logos JLG, Genie, Skyjack e Zoomlion na assistencia tecnica, com ALT e proporcao preservada. O arquivo fornecido como skyjet.png representa Skyjack.
- Marca Accesslift, breadcrumb Inicio acentuado, metadados especificos e areaServed aberta: testes do HTML de todas as rotas.
- Home: diferenciais, descricao JLG 1930ES, introducao do catalogo e CTA WhatsApp nas fontes existentes.
- Textos especificos de servicos, treinamento, empresa, seguranca e area de atendimento preservados conforme documento.
- Sem flags publicas de validacao ou limite rigido de 150 km nas rotas renderizadas.
- Formulario: erro preserva dados, sucesso posterior a resposta da API, protecao contra envio simultaneo, assunto de contato e contexto de equipamento.
- Origens construction, retail e wholesale e UTMs preservadas; UTMs tambem incluidas no email SMTP sem traducao dos valores.
- Upload validado no backend para PDF/DOC/DOCX ate 2 MB. Transporte de PDF testado pelo navegador; formatos e limites testados automaticamente.
- Consentimento inicialmente negado, reabertura das preferencias e atualizacao apos escolha testados no navegador.
- Curriculo com evento separado e sem consentimento publicitario no evento; nenhuma nova acao Google Ads criada.
- GTM unico, canonical e robots de preview/producao cobertos pelos testes existentes.
- Redirects conhecidos preservam destinos especificos, com status 301 na configuracao.
- QA desktop 1440 e mobile 390: formularios, paginas representativas e quatro logos carregados sem overflow.

Validacao: lint, 126 testes e build aprovados. Build com aviso de bundle maior que 500 kB. Nenhuma alteracao de especificacao tecnica nesta rodada.

## Pendencias externas para aceite de publicacao

- Configurar credenciais SMTP Locaweb e confirmar recebimento real de cada formulario e anexos na caixa comercial. Os testes locais usam respostas simuladas.
- Validar triggers e conversoes existentes dentro do GTM/Google Ads com acesso as contas, incluindo WhatsApp e telefone. Testes locais nao comprovam recebimento pelo Google.
- Confirmar administrativamente razao social e CNPJ. Nao publicar horario comercial ainda nao confirmado.
- Testar respostas HTTP 301 na hospedagem publicada, inclusive documentos legados presentes no mapa. O Vite local nao executa as regras da Vercel.
- No lancamento, definir VITE_SITE_ENV=production somente na producao, conferir dominio final, robots, sitemap e canonicals publicados. Preview permanece bloqueado.
- Acompanhar Search Console apos publicacao; nenhum monitoramento automatico foi ativado.

Nao declarar aceite externo integral enquanto essas verificacoes estiverem pendentes.
