<?php
declare(strict_types=1);
require dirname(__DIR__) . '/vendor/autoload.php';
require dirname(__DIR__) . '/inquiries.php';

use Accesslift\HttpError;
use function Accesslift\{validateInquiry, checkRequest, buildInquiryEmail, rateLimit, handleInquiry, sendSmtp};

$checks = 0;
function check(bool $condition, string $label): void {
    global $checks;
    $checks++;
    if (!$condition) throw new RuntimeException($label);
}
function rejects(callable $fn, int $status): void {
    try { $fn(); } catch (HttpError $error) { check($error->status === $status, 'Wrong error status: ' . $error->status); return; }
    throw new RuntimeException('Expected rejection ' . $status);
}
function payload(string $kind, array $values, ?array $attachment = null): string {
    return json_encode(compact('kind', 'values', 'attachment'), JSON_THROW_ON_ERROR);
}
$directory = sys_get_temp_dir() . '/accesslift-test-' . bin2hex(random_bytes(8));
mkdir($directory, 0700);
try {
    $contact = ['nome' => 'Teste', 'telefone' => '11999999999', 'email' => 'qa@example.invalid', 'interesse' => 'treinamento', 'mensagem' => 'Teste', 'antispam' => ''];
    $quote = ['nome' => 'Teste', 'whatsapp' => '+55 (11) 99999-9999', 'email' => 'qa@example.invalid', 'cidade' => 'São Paulo', 'brand' => 'JLG', 'model' => '1930ES', 'pageOrigin' => '/equipamentos/jlg-1930es/', 'utmSource' => 'google', 'utmMedium' => 'cpc', 'utmCampaign' => 'locacao', 'utmContent' => 'ad', 'utmTerm' => 'tesoura'];
    $support = ['nome' => 'Teste', 'whatsapp' => '11999999999', 'email' => 'qa@example.invalid', 'cidade' => 'São Paulo', 'marca' => 'Genie', 'equipamento' => 'Z-34/22', 'descricao' => 'Teste', 'locacaoAccesslift' => false];
    $career = ['name' => 'Teste', 'phone' => '11999999999', 'email' => 'qa@example.invalid', 'area' => 'operacao'];
    $pdf = ['name' => 'curriculo.pdf', 'content' => base64_encode("%PDF-1.7\nlocal test")];
    $server = ['REQUEST_METHOD' => 'POST', 'CONTENT_TYPE' => 'application/json; charset=utf-8', 'HTTP_HOST' => 'www.accesslift.com.br', 'HTTP_ORIGIN' => 'https://www.accesslift.com.br', 'REMOTE_ADDR' => '127.0.0.1'];
    $config = ['allowed_origins' => ['https://www.accesslift.com.br'], 'storage_dir' => $directory,
        'smtp_host' => 'email-ssl.com.br', 'smtp_port' => 465, 'smtp_user' => 'comercial@accesslift.com.br', 'smtp_pass' => 'test-secret-only'];
    foreach (['contact' => $contact, 'quote' => $quote, 'support' => $support, 'career' => $career] as $kind => $values) {
        $called = false;
        $response = handleInquiry(payload($kind, $values, $kind === 'career' ? $pdf : null), $server, $config, function ($inquiry) use (&$called, $kind) {
            $called = true;
            check($inquiry['kind'] === $kind, 'Kind preserved');
            check($inquiry['email']['to'] === 'comercial@accesslift.com.br', 'Fixed recipient');
            check($inquiry['email']['replyTo'] === 'qa@example.invalid', 'Visitor reply-to');
            if ($kind === 'career') check($inquiry['attachment']['bytes'] === "%PDF-1.7\nlocal test", 'Resume forwarded');
        });
        check($called && $response['ok'] === true, 'Success after delivery');
    }
    $email = buildInquiryEmail('quote', $quote + ['to' => 'wrong@example.invalid']);
    foreach (['JLG 1930ES', '/equipamentos/jlg-1930es/', 'google', 'cpc', 'locacao', 'ad', 'tesoura'] as $value) check(str_contains($email['text'], $value), 'Attribution preserved: ' . $value);
    check(!str_contains($email['text'], 'wrong@example.invalid'), 'Ignore supplied destination');
    check(str_contains(buildInquiryEmail('contact', $contact)['text'], 'Assunto: treinamento'), 'Subject preserved');
    rejects(fn() => handleInquiry(payload('contact', $contact), $server, $config, fn() => throw new HttpError(502, 'Send failed')), 502);
    foreach ([['REQUEST_METHOD', 'GET', 405], ['CONTENT_TYPE', 'text/plain', 415], ['HTTP_ORIGIN', 'https://evil.invalid', 403], ['HTTP_HOST', 'evil.invalid', 403], ['HTTP_SEC_FETCH_SITE', 'cross-site', 403], ['CONTENT_LENGTH', Accesslift\MAX_REQUEST + 1, 413]] as [$key, $value, $status]) {
        rejects(fn() => checkRequest(array_replace($server, [$key => $value]), $config['allowed_origins']), $status);
    }
    foreach (['{', 'null', '[]', '{"kind":[],"values":{}}', '{"kind":"contact","values":[]}', '{"kind":"invalid","values":{}}'] as $raw) rejects(fn() => validateInquiry($raw), 400);
    rejects(fn() => validateInquiry(str_repeat('x', Accesslift\MAX_REQUEST + 1)), 413);
    foreach ([['nome' => ' '], ['email' => "test@example.com\r\nBcc: bad@example.com"], ['telefone' => '11111111111'], ['telefone' => 'abc'], ['telefone' => '123'], ['antispam' => 'filled'], ['mensagem' => ['nested']], ['mensagem' => str_repeat('x', 10001)]] as $change) rejects(fn() => validateInquiry(payload('contact', array_replace($contact, $change))), 400);
    rejects(fn() => validateInquiry(payload('quote', array_replace($quote, ['email' => '']))), 400);
    rejects(fn() => validateInquiry(payload('support', array_replace($support, ['locacaoAccesslift' => null]))), 400);
    rejects(fn() => validateInquiry(payload('career', $career)), 400);
    foreach ([['name' => 'virus.exe', 'content' => $pdf['content']], ['name' => 'cv.pdf', 'content' => base64_encode('not pdf')], ['name' => 'cv.pdf', 'content' => '!!!'], ['name' => 'cv.pdf', 'content' => base64_encode('%PDF-' . str_repeat('a', Accesslift\MAX_FILE))], ['name' => 'cv.docx', 'content' => base64_encode("PK\x03\x04not-a-docx")]] as $file) rejects(fn() => validateInquiry(payload('career', $career, $file)), 400);
    $maxPdf = ['name' => 'cv.pdf', 'content' => base64_encode('%PDF-' . str_repeat('a', Accesslift\MAX_FILE - 5))];
    check(strlen(validateInquiry(payload('career', $career, $maxPdf))['attachment']['bytes']) === Accesslift\MAX_FILE, 'Exact size accepted');
    $doc = ['name' => 'cv.doc', 'content' => base64_encode(hex2bin('d0cf11e0a1b11ae1') . 'test')];
    check(validateInquiry(payload('career', $career, $doc))['attachment']['mime'] === 'application/msword', 'DOC accepted');
    $zip = new ZipArchive();
    $zip->open($directory . '/cv.docx', ZipArchive::CREATE);
    $zip->addFromString('[Content_Types].xml', '<Types/>');
    $zip->addFromString('word/document.xml', '<document/>');
    $zip->close();
    $docx = ['name' => 'cv.docx', 'content' => base64_encode(file_get_contents($directory . '/cv.docx'))];
    check(validateInquiry(payload('career', $career, $docx))['attachment']['name'] === 'cv.docx', 'DOCX accepted');
    check(validateInquiry(payload('career', $career, array_replace($pdf, ['name' => '../cv.pdf'])))['attachment']['name'] === 'cv.pdf', 'Filename sanitized');
    $mail = new class(true) extends PHPMailer\PHPMailer\PHPMailer {
        public bool $fail = false;
        public function send(): bool { if ($this->fail) throw new RuntimeException('test-secret-only'); return $this->preSend(); }
    };
    sendSmtp(validateInquiry(payload('career', $career, $pdf)), $config, $mail);
    check($mail->Mailer === 'smtp' && $mail->SMTPAuth && $mail->SMTPSecure === 'ssl' && $mail->Port === 465, 'Authenticated TLS SMTP');
    check($mail->SMTPDebug === 0 && $mail->From === 'comercial@accesslift.com.br', 'No debugging, authenticated sender');
    check(count($mail->getToAddresses()) === 1 && $mail->getToAddresses()[0][0] === Accesslift\RECIPIENT, 'Fixed SMTP destination');
    check(str_contains($mail->getSentMIMEMessage(), 'application/pdf'), 'MIME resume attached');
    check(!str_contains($mail->getSentMIMEMessage(), 'test-secret-only'), 'Credentials excluded');
    $mail->fail = true;
    rejects(fn() => sendSmtp(validateInquiry(payload('contact', $contact)), $config, $mail), 502);
    rejects(fn() => sendSmtp(validateInquiry(payload('contact', $contact)), array_replace($config, ['smtp_pass' => '']), $mail), 503);
    rejects(fn() => sendSmtp(validateInquiry(payload('contact', $contact)), array_replace($config, ['smtp_port' => 25]), $mail), 503);
    $mail->fail = false;
    sendSmtp(validateInquiry(payload('contact', $contact)), array_replace($config, ['smtp_port' => 587]), $mail);
    check($mail->SMTPSecure === 'tls', 'STARTTLS on 587');
    unlink($directory . '/rate-limit.json');
    for ($i = 0; $i < 10; $i++) rateLimit($directory, '127.0.0.1', 1000);
    rejects(fn() => rateLimit($directory, '127.0.0.1', 1001), 429);
    rateLimit($directory, '127.0.0.1', 1601);
    check(!str_contains(file_get_contents($directory . '/rate-limit.json'), '127.0.0.1'), 'Raw IP not stored');
    echo "PHP: $checks checks passed (validation, SMTP MIME, failures, attribution, attachments, origin, rate limits).\n";
} finally {
    foreach (glob($directory . '/*') as $file) unlink($file);
    rmdir($directory);
}
