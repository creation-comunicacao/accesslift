<?php
declare(strict_types=1);

ini_set('display_errors', '0');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

try {
    $private = getenv('ACCESSLIFT_PRIVATE_DIR') ?: dirname(__DIR__, 2) . '/accesslift-private';
    if (!is_file($private . '/inquiries.php') || !is_file($private . '/vendor/autoload.php')) throw new RuntimeException('Backend unavailable');
    require $private . '/vendor/autoload.php';
    require $private . '/inquiries.php';
    $config = require $private . '/config.example.php';
    if (is_file($private . '/config.local.php')) $config = array_replace($config, require $private . '/config.local.php');
    foreach (['HOST', 'PORT', 'USER', 'PASS'] as $key) {
        $value = getenv('INQUIRIES_SMTP_' . $key);
        if ($value !== false && $value !== '') $config['smtp_' . strtolower($key)] = $value;
    }
    if (PHP_SAPI === 'cli-server') {
        $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
        if (preg_match('#^http://(localhost|127\.0\.0\.1):\d+$#', $origin)) $config['allowed_origins'][] = $origin;
    }
    $config['storage_dir'] = $private . '/storage';
    \Accesslift\checkRequest($_SERVER, $config['allowed_origins']);
    $raw = file_get_contents('php://input', false, null, 0, \Accesslift\MAX_REQUEST + 1);
    $result = \Accesslift\handleInquiry($raw === false ? '' : $raw, $_SERVER, $config, '\\Accesslift\\sendSmtp');
    http_response_code(200);
} catch (\Throwable $error) {
    $known = $error instanceof \Accesslift\HttpError;
    $status = $known ? $error->status : 503;
    http_response_code($status);
    if ($status === 405) header('Allow: POST');
    if ($status === 429) header('Retry-After: 600');
    if (!$known) error_log('Accesslift inquiries: backend unavailable; check private installation and PHP extensions.');
    $result = ['ok' => false, 'message' => $known ? $error->getMessage() : 'Envio indisponível no momento. Entre em contato pelos canais da Accesslift.'];
}
echo json_encode($result, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
