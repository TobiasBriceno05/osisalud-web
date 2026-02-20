<?php
// contacto.php — Sistema de Gestión de Sedes OSISALUD

// 1. Configuración de Seguridad y Permisos
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// Manejo de peticiones preflight (browser checks)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

// 2. Captura de datos enviados por la web (JSON)
$input = json_decode(file_get_contents("php://input"), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(["error" => "No se recibieron datos"]);
    exit;
}

// 3. Limpieza y validación (Protección de datos)
$name      = htmlspecialchars($input['name'] ?? '', ENT_QUOTES, 'UTF-8');
$company   = htmlspecialchars($input['company'] ?? '', ENT_QUOTES, 'UTF-8');
$email     = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$phone     = htmlspecialchars($input['phone'] ?? '', ENT_QUOTES, 'UTF-8');
$sedeLabel = htmlspecialchars($input['sede'] ?? '', ENT_QUOTES, 'UTF-8'); // Ejemplo: "Anzoátegui - Lechería"
$message   = htmlspecialchars($input['message'] ?? '', ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$sedeLabel) {
    http_response_code(400);
    echo json_encode(["error" => "Faltan campos obligatorios"]);
    exit;
}

// 4. LÓGICA DE ENRUTAMIENTO POR SEDE
// Este bloque asegura que el correo llegue a la persona correcta
$sedeEmail = "";

if (stripos($sedeLabel, 'Lecher') !== false) {
    $sedeEmail = "osicarecepcionlecheria1@gmail.com";
} elseif (stripos($sedeLabel, 'Tigre') !== false) {
    $sedeEmail = "osicaeltigreocupacional@gmail.com";
} elseif (stripos($sedeLabel, 'Puerto') !== false) {
    $sedeEmail = "osicapuertolacruz@gmail.com";
} elseif (stripos($sedeLabel, 'Monagas') !== false || stripos($sedeLabel, 'Maturin') !== false) {
    $sedeEmail = "ocupacionalosimca@gmail.com";
} else {
    // Correo de respaldo en caso de error
    $sedeEmail = "saludcorporativa@osisalud.com";
}

// 5. Preparación del Mensaje
$subject = "Nueva Solicitud Web: $sedeLabel";

$body = "Has recibido una nueva consulta desde osisalud.com\n\n";
$body .= "DETALLES DEL CONTACTO:\n";
$body .= "-----------------------------------\n";
$body .= "Nombre: $name\n";
$body .= "Empresa: $company\n";
$body .= "Correo: $email\n";
$body .= "Teléfono: $phone\n";
$body .= "Sede de Interés: $sedeLabel\n";
$body .= "-----------------------------------\n\n";
$body .= "MENSAJE:\n$message\n\n";
$body .= "--- Fin del mensaje ---";

// 6. Cabeceras para evitar SPAM en Gmail
// Es VITAL que el dominio en 'From' sea @osisalud.com
$fromEmail = "sistema@osisalud.com"; 

$headers  = "From: Sistema OSISALUD <$fromEmail>\r\n";
$headers .= "Reply-To: $email\r\n"; // Permite responderle directo al paciente
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 7. Ejecución del envío
$success = mail($sedeEmail, $subject, $body, $headers);

if ($success) {
    echo json_encode(["success" => true, "message" => "Mensaje enviado con éxito a la sede correspondiente"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "El servidor no pudo procesar el envío"]);
}
?>