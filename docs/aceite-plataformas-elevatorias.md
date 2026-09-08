# Aceite: Plataformas Elevatórias

Referência: PDF "Página: Plataformas Elevatórias", sete páginas.
Rota: /plataformas-elevatorias/.

## Implementado

1. Hero com H1 e texto aprovados, foto real já existente e dois CTAs: orçamento e WhatsApp.
2. Definição curta com os dois parágrafos do PDF.
3. Comparação tesoura/articulada com fotografias existentes e links para as categorias.
4. Seis critérios de escolha, fechamento e contato com especialista.
5. Aplicações: título aprovado; alimentação elétrica tratada como característica.
6. Quatro equipamentos já apresentados na Home: dois tesoura e dois articulados, sem alterar status ou especificações.
7. Cinco diferenciais específicos, sem textos provisórios.
8. Locação flexível com diária/semanal/mensal e dois CTAs na faixa final azul-marinho, imediatamente antes do rodapé.

Revisão solicitada após o PDF: unificar locação e CTA final para evitar duplicação.
O bloco "Precisa de uma plataforma elevatória para sua operação?" foi removido;
a página agora possui oito blocos, mantendo apenas a locação como conversão final.

Removidos desta rota: galeria independente, proposta de valor, benefícios, processo e todas
as descrições internas dos antigos componentes. Não foram acrescentados clientes, avaliações,
área de atendimento, FAQ ou outros blocos não previstos.

## Escopo

PlatformsPage é selecionado exclusivamente pela rota de plataformas elevatórias.
Conteúdo centralizado em platformsPage.ts; SEO e canonical preservados.
Fontes, CSS global, estilos de Button, imagens originais e cadastros técnicos não foram modificados.
Fotos existentes foram reaproveitadas no Hero e comparação, conforme autorizado pelo PDF.
Os quatro modelos são selecionados da mesma lista editorial já usada pela Home, sem nova publicação de rascunhos.
Campos ausentes ou marcados como pendentes continuam ocultos pelo componente existente.

## Verificação

- TypeScript/lint aprovado.
- 26 testes aprovados, incluindo ordem exata, ausência de blocos proibidos, CTAs e categorias.
- Build aprovado; permanece aviso de bundle acima de 500 kB.
- Navegador: 1440 x 900 e 390 x 900, sem overflow horizontal ou imagens quebradas.
- Rota local conferida: http://localhost:3001/plataformas-elevatorias/.
- Links conferidos no DOM: orçamento, WhatsApp, especialista, categorias, catálogo e detalhes por modelo.
- Não foi enviado formulário real nem testado atendimento externo.

O recebimento real de formulários depende da integração existente. Este ajuste não valida
fisicamente os dados dos equipamentos nem altera a configuração de recebimento.
