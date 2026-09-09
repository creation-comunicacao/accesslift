# Google Tag Manager

Container `GTM-5MH55G4K`, instalado globalmente em `index.html`.
O script fica no inicio do head, depois de charset e consentimento inicial.
O iframe noscript fica imediatamente apos a abertura do body.
O build preserva ambos em todas as rotas, inclusive equipamentos e 404.

O container carrega antes da escolha no banner. Consent Mode inicia com
analytics_storage, ad_storage, ad_user_data e ad_personalization negados.
O banner atualiza essas permissoes. O iframe noscript nao passa pelo banner.
As tags internas precisam respeitar o consentimento; o snippet sozinho nao
impede tags de terceiros de dispararem. Nao houve acesso a conta do GTM.

Nao existe carregador dinamico adicional. GA4/Ads diretos ficam desativados
enquanto GTM estiver ativo, para evitar duplicacao. Eventos existentes seguem
via dataLayer com analytics_consent e advertising_consent. Eventos career
nao autorizam publicidade. Mudancas em preferencias emitem
accesslift_consent_update.

Na conta GTM: revisar consentimento de todas as tags, publicar as tags e
acionadores reais e configurar History Change para navegacao SPA, evitando
duplicacao com page views automaticos do GA4. Validar no Tag Assistant
aceitacao parcial, total, rejeicao, revogacao e navegacao interna.

Referencia: https://developers.google.com/tag-platform/security/guides/consent
