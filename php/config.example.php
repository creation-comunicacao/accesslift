<?php
// Copy to config.local.php inside accesslift-private, NEVER public_html.
return [
    'smtp_host' => 'email-ssl.com.br',
    'smtp_port' => 465,
    'smtp_user' => '',
    'smtp_pass' => '',
    'allowed_origins' => [
        'https://www.accesslift.com.br',
        'https://accesslift.com.br',
        'https://accesslift.hospedagemdesites.ws',
        'https://accesslift.websiteseguro.com',
    ],
];
