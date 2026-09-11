<?php
declare(strict_types=1);

namespace Accesslift;

const RECIPIENT = 'comercial@accesslift.com.br';
const MAX_REQUEST = 3 * 1024 * 1024;
const MAX_FILE = 2 * 1024 * 1024;

final class HttpError extends \RuntimeException
{
    public function __construct(public int $status, string $message) { parent::__construct($message); }
}

function textValue(mixed $value): string
{
    return is_string($value) ? trim($value) : (is_bool($value) ? ($value ? 'Sim' : 'Não') : '');
}

function buildInquiryEmail(string $kind, array $values): array
{
    $purposes = ['quote' => 'Nova solicitação de orçamento', 'contact' => 'Novo contato',
        'support' => 'Nova solicitação de assistência técnica', 'career' => 'Novo currículo'];
    $labels = [
        'pageOrigin' => 'Página de origem', 'nome' => 'Nome', 'name' => 'Nome', 'empresa' => 'Empresa',
        'whatsapp' => 'WhatsApp', 'telefone' => 'Telefone', 'phone' => 'Telefone', 'email' => 'E-mail',
        'cidade' => 'Cidade da operação', 'periodo' => 'Período desejado', 'altura' => 'Altura aproximada',
        'tipo' => 'Tipo de plataforma', 'mensagem' => 'Mensagem', 'interesse' => 'Assunto',
        'marca' => 'Marca', 'equipamento' => 'Equipamento', 'descricao' => 'Descrição',
        'locacaoAccesslift' => 'Equipamento em locação com a Accesslift', 'area' => 'Área de interesse',
        'equipmentId' => 'Identificador do equipamento', 'category' => 'Categoria', 'power' => 'Alimentação',
        'utmSource' => 'UTM source', 'utmMedium' => 'UTM medium', 'utmCampaign' => 'UTM campaign',
        'utmContent' => 'UTM content', 'utmTerm' => 'UTM term',
    ];
    $choices = ['diaria' => 'Diária', 'semanal' => 'Semanal', 'mensal' => 'Mensal', 'nao-sei' => 'Não sei',
        'tesoura' => 'Plataforma Tesoura', 'articulada' => 'Plataforma Articulada',
        'ate-8m' => 'Até 8 m', '8-a-10m' => '8 a 10 m', '10-a-14m' => '10 a 14 m', '14-a-16m' => '14 a 16 m'];
    $equipment = trim(textValue($values['brand'] ?? null) . ' ' . textValue($values['model'] ?? null));
    $purpose = $purposes[$kind] ?? 'Nova solicitação';
    $lines = ['Origem: Site Accesslift', "Finalidade: $purpose"];
    if ($equipment !== '') $lines[] = "Equipamento de interesse: $equipment";
    foreach ($labels as $key => $label) {
        $value = textValue($values[$key] ?? null);
        if ($value !== '') $lines[] = $label . ': ' . (str_starts_with($key, 'utm') ? $value : ($choices[$value] ?? $value));
    }
    return ['to' => RECIPIENT, 'replyTo' => textValue($values['email'] ?? null),
        'subject' => str_replace(["\r", "\n"], ' ', $purpose . ($equipment ? " — $equipment" : '') . ' — Site Accesslift'),
        'text' => implode("\n", $lines)];
}

function validateInquiry(string $raw): array
{
    if (strlen($raw) > MAX_REQUEST) throw new HttpError(413, 'Arquivo muito grande. O limite é 2 MB.');
    try { $body = json_decode($raw, false, 32, JSON_THROW_ON_ERROR); }
    catch (\JsonException) { throw new HttpError(400, 'Dados inválidos.'); }
    $required = [
        'contact' => ['nome', 'telefone', 'email', 'interesse', 'mensagem'],
        'support' => ['nome', 'whatsapp', 'email', 'cidade', 'marca', 'equipamento', 'descricao'],
        'career' => ['name', 'email', 'phone', 'area'],
        'quote' => ['nome', 'whatsapp', 'email', 'cidade'],
    ];
    if (!$body instanceof \stdClass || !is_string($body->kind ?? null) || !isset($required[$body->kind])
        || !($body->values ?? null) instanceof \stdClass) throw new HttpError(400, 'Solicitação inválida.');
    $kind = $body->kind;
    $values = (array) $body->values;
    if (!empty($values['antispam'])) throw new HttpError(400, 'Solicitação inválida.');
    foreach ($values as $value) {
        if (!(is_string($value) || is_bool($value) || $value === null) || (is_string($value) && strlen($value) > 10000)) {
            throw new HttpError(400, 'Dados inválidos.');
        }
    }
    foreach ($required[$kind] as $field) {
        if (!is_string($values[$field] ?? null) || trim($values[$field]) === '') throw new HttpError(400, 'Preencha os campos obrigatórios.');
    }
    if (!filter_var(trim($values['email']), FILTER_VALIDATE_EMAIL)) throw new HttpError(400, 'Informe um e-mail válido.');
    $phone = $values['whatsapp'] ?? $values['telefone'] ?? $values['phone'] ?? '';
    $digits = is_string($phone) ? preg_replace('/\D/', '', $phone) : '';
    if (str_starts_with($digits, '55') && strlen($digits) > 11) $digits = substr($digits, 2);
    if (!is_string($phone) || !preg_match('/^[+\d\s().-]+$/', $phone) || !preg_match('/^\d{10,11}$/', $digits)
        || preg_match('/^(\d)\1+$/', $digits)) throw new HttpError(400, 'Informe um telefone válido com DDD.');
    if ($kind === 'support' && !is_bool($values['locacaoAccesslift'] ?? null)) throw new HttpError(400, 'Informe se o equipamento está em locação.');
    $attachment = null;
    if ($kind === 'career') {
        $file = $body->attachment ?? null;
        if (!$file instanceof \stdClass || !is_string($file->name ?? null) || !is_string($file->content ?? null)
            || !preg_match('/\.(pdf|doc|docx)$/i', $file->name, $matches) || strlen($file->name) > 255) {
            throw new HttpError(400, 'Anexe um currículo em PDF, DOC ou DOCX.');
        }
        $bytes = base64_decode($file->content, true);
        $extension = strtolower($matches[1]);
        $valid = $bytes !== false && strlen($bytes) > 0 && strlen($bytes) <= MAX_FILE;
        if ($valid) $valid = match ($extension) {
            'pdf' => str_starts_with($bytes, '%PDF-'),
            'doc' => str_starts_with($bytes, hex2bin('d0cf11e0a1b11ae1')),
            'docx' => validDocx($bytes),
        };
        if (!$valid) throw new HttpError(400, 'O currículo deve ser um PDF, DOC ou DOCX válido de até 2 MB.');
        $name = basename(str_replace('\\', '/', $file->name));
        $attachment = ['name' => preg_replace('/[\x00-\x1f\x7f]/', '', $name), 'bytes' => $bytes,
            'mime' => ['pdf' => 'application/pdf', 'doc' => 'application/msword', 'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'][$extension]];
    }
    return ['kind' => $kind, 'values' => $values, 'email' => buildInquiryEmail($kind, $values), 'attachment' => $attachment];
}

function validDocx(string $bytes): bool
{
    $path = tempnam(sys_get_temp_dir(), 'al-docx-');
    if ($path === false) throw new HttpError(503, 'Envio indisponível no momento.');
    try {
        file_put_contents($path, $bytes);
        $zip = new \ZipArchive();
        if ($zip->open($path) !== true) return false;
        try {
            if ($zip->locateName('[Content_Types].xml') === false || $zip->locateName('word/document.xml') === false || $zip->numFiles > 1000) return false;
            $total = 0;
            for ($i = 0; $i < $zip->numFiles; $i++) $total += $zip->statIndex($i)['size'];
            return $total <= 20 * 1024 * 1024;
        } finally { $zip->close(); }
    } finally { unlink($path); }
}

function checkRequest(array $server, array $allowedOrigins): void
{
    if (($server['REQUEST_METHOD'] ?? '') !== 'POST') throw new HttpError(405, 'Método não permitido.');
    if (!str_starts_with(strtolower($server['CONTENT_TYPE'] ?? ''), 'application/json')) throw new HttpError(415, 'Formato de envio inválido.');
    if (($server['CONTENT_LENGTH'] ?? 0) > MAX_REQUEST) throw new HttpError(413, 'Arquivo muito grande. O limite é 2 MB.');
    if (($server['HTTP_SEC_FETCH_SITE'] ?? '') === 'cross-site') throw new HttpError(403, 'Origem inválida.');
    $origin = $server['HTTP_ORIGIN'] ?? null;
    if ($origin !== null) {
        $parts = parse_url($origin);
        $host = is_array($parts) ? ($parts['host'] ?? '') . (isset($parts['port']) ? ':' . $parts['port'] : '') : '';
        if (!in_array($origin, $allowedOrigins, true) || strtolower($host) !== strtolower($server['HTTP_HOST'] ?? '')) throw new HttpError(403, 'Origem inválida.');
    }
}

// One locked, bounded file outside the web root. Never trust forwarded IP headers.
function rateLimit(string $directory, string $ip, ?int $now = null): void
{
    $now ??= time();
    if (!is_dir($directory) && !mkdir($directory, 0700, true) && !is_dir($directory)) throw new HttpError(503, 'Envio indisponível no momento.');
    $handle = fopen($directory . '/rate-limit.json', 'c+');
    if (!$handle) throw new HttpError(503, 'Envio indisponível no momento.');
    try {
        if (!flock($handle, LOCK_EX)) throw new HttpError(503, 'Envio indisponível no momento.');
        $state = json_decode(stream_get_contents($handle), true) ?: [];
        $events = array_values(array_filter($state, fn($event) => is_array($event) && ($event['time'] ?? 0) > $now - 3600));
        $key = hash('sha256', $ip);
        $recent = array_filter($events, fn($event) => $event['key'] === $key && $event['time'] > $now - 600);
        if (count($recent) >= 10 || count($events) >= 100) throw new HttpError(429, 'Muitas tentativas. Aguarde alguns minutos e tente novamente.');
        $events[] = ['time' => $now, 'key' => $key];
        rewind($handle);
        ftruncate($handle, 0);
        if (fwrite($handle, json_encode($events, JSON_THROW_ON_ERROR)) === false) throw new HttpError(503, 'Envio indisponível no momento.');
        fflush($handle);
    } finally { flock($handle, LOCK_UN); fclose($handle); }
}

function sendSmtp(array $inquiry, array $config, ?\PHPMailer\PHPMailer\PHPMailer $mail = null): void
{
    $user = $config['smtp_user'] ?? '';
    $pass = $config['smtp_pass'] ?? '';
    $port = (int) ($config['smtp_port'] ?? 465);
    if (!filter_var($user, FILTER_VALIDATE_EMAIL) || !$pass || !in_array($port, [465, 587], true)) {
        throw new HttpError(503, 'Envio indisponível no momento. Entre em contato pelos canais da Accesslift.');
    }
    $mail ??= new \PHPMailer\PHPMailer\PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = $config['smtp_host'] ?? 'email-ssl.com.br';
        $mail->Port = $port;
        $mail->SMTPAuth = true;
        $mail->Username = $user;
        $mail->Password = $pass;
        $mail->SMTPSecure = $port === 465 ? 'ssl' : 'tls';
        $mail->Timeout = 10;
        $mail->getSMTPInstance()->Timelimit = 15;
        $mail->CharSet = 'UTF-8';
        $mail->setFrom($user, 'Accesslift');
        $mail->addAddress(RECIPIENT);
        $mail->addReplyTo($inquiry['email']['replyTo']);
        $mail->Subject = $inquiry['email']['subject'];
        $mail->Body = $inquiry['email']['text'];
        if ($inquiry['attachment']) {
            $file = $inquiry['attachment'];
            $mail->addStringAttachment($file['bytes'], $file['name'], 'base64', $file['mime']);
        }
        if (!$mail->send()) throw new \RuntimeException('SMTP rejected');
    } catch (\Throwable) {
        throw new HttpError(502, 'Não foi possível enviar. Tente novamente ou utilize os canais de contato.');
    } finally { $mail->smtpClose(); }
}

function handleInquiry(string $raw, array $server, array $config, callable $send): array
{
    checkRequest($server, $config['allowed_origins']);
    $inquiry = validateInquiry($raw);
    rateLimit($config['storage_dir'], $server['REMOTE_ADDR'] ?? 'unknown');
    $send($inquiry, $config);
    return ['ok' => true, 'message' => 'Solicitação enviada com sucesso.'];
}
