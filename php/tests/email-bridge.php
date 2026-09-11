<?php
require dirname(__DIR__) . '/inquiries.php';
$input = json_decode(stream_get_contents(STDIN), true, 32, JSON_THROW_ON_ERROR);
echo json_encode(\Accesslift\buildInquiryEmail($input['kind'], $input['values']), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR);
