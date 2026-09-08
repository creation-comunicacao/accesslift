# Template individual de equipamentos

Documento: "emplate das Páginas Individuais de Equipamentos.docx".

## Implementação

- Template único em EquipmentDetailPage, aplicado aos 14 cadastros e a novos modelos.
- Galeria original preservada, com identificação, H1 e descrição do cadastro.
- Hero com até quatro valores disponíveis: alturas de trabalho/plataforma, capacidade e alimentação.
- Dois CTAs no Hero: Solicitar cotação e Consultar disponibilidade.
- Conheça o equipamento seguido de uma única tabela técnica dinâmica.
- Características operacionais, aplicações e contexto reunidos em um bloco com contato especializado.
- FAQ limitado a quatro perguntas elegíveis; JSON-LD usa exatamente a mesma seleção.
- Até três alternativas publicadas da mesma categoria, com prioridade editorial existente ou proximidade de altura conhecida.
- Cards compactos somente nesta página, sem descrição extensa ou especificações adicionais.
- Uma única área final com cotação e WhatsApp contextual ao modelo.
- Links de documentos técnicos permanecem junto da ficha quando cadastrados.

## Preservação

Nenhuma imagem, arquivo de mídia, fonte, CSS global ou variante visual de Button foi alterada.
Os componentes de CTA receberam apenas suporte a callbacks de eventos.
Slugs, rotas, canonical e títulos próprios dos modelos foram preservados.
No conteúdo de origem, foram retiradas menções de altura pendente dos textos SJ3226/SJ4732
e da descrição SEO ZS1212AC, além de uma pergunta de controle editorial da SJ4732.

## Dados pendentes

formatPublicSpecValue oculta campos vazios, estados editoriais e valores com asterisco final de validação.
Os valores originais permanecem no cadastro interno, sem estimativas ou exclusão de dados.
Multiplicações legítimas são preservadas. Perguntas sobre campos pendentes também são ocultadas.

Os valores marcados, incluindo capacidade da E450AJ e alguns dados de Genie/Skyjack/Zoomlion,
dependem de confirmação técnica. A equipe deve remover a marcação no cadastro somente após validar.
Não foram publicados equipamentos em rascunho para preencher sugestões de alternativas.
Páginas sem alternativas elegíveis ou sem perguntas técnicas suficientes não recebem conteúdo artificial.

## Eventos

equipment_quote_click, equipment_availability_click, equipment_whatsapp_click,
equipment_related_click e equipment_specialist_click incluem marca, modelo, categoria e slug.
O evento de relacionado identifica o destino e também source_equipment_slug.
equipment_quote_submit ocorre somente após resposta positiva do serviço de envio.
Consentimento de cookies e configuração de Analytics/Ads existentes foram preservados.
O recebimento real ainda depende de INQUIRIES_WEBHOOK_URL; GA4/Ads dependem dos IDs configurados.

## Verificação

- TypeScript/lint e build aprovados; aviso existente de bundle acima de 500 kB.
- 23 testes: renderização dos 14 cadastros, campos vazios/pendentes, cards e validação de envio.
- Oito revisões de navegador: 1440 e 390 px em JLG 3246ES, JLG 1930ES, JLG E450AJ e Skyjack SJ4732.
- Sem overflow horizontal ou imagens quebradas; canonical próprio, ficha única e limite do resumo conferidos.
- Link de cotação mantém o equipamento selecionado e registra o clique separadamente do envio.
- Capturas e resultados locais: /private/tmp/accesslift-equipment-review/.
