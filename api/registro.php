<?php
// Permitir cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos específicos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permitir cabeceras personalizadas
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
// Especificar el tipo de contenido de la respuesta
header("Content-Type: charset=UTF-8");
// Si la petición es OPTIONS, responder sin ejecutar más código
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}
require_once "conexion.php";

// Verificar si la petición es POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar y validar datos recibidos
    $nombre   = filter_input(INPUT_POST, "nombre", FILTER_SANITIZE_STRING);
    $correo   = filter_input(INPUT_POST, "correo", FILTER_SANITIZE_EMAIL);
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_STRING);
    $fecha_nacimiento = filter_input(INPUT_POST, "fecha_nacimiento", FILTER_SANITIZE_STRING);

    if (!$nombre || !$correo || !$password || !$fecha_nacimiento) {
        http_response_code(400);
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit;
    }

    // Hashear contraseña
    $password_hash = password_hash($password, PASSWORD_BCRYPT);

    try {
        // Insertar usuario en la base de datos
        $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, password_hash, fecha_nacimiento) 
                               VALUES (:nombre, :correo, :password_hash, :fecha_nacimiento)");
        $stmt->execute([
            ":nombre" => $nombre,
            ":correo" => $correo,
            ":password_hash" => $password_hash,
            ":fecha_nacimiento" => $fecha_nacimiento
        ]);

        // Generar un token de sesión (ejemplo sencillo con JWT-like)
        $token = base64_encode(bin2hex(random_bytes(16))) . "." . base64_encode($correo);

        echo json_encode([
            "success" => true,
            "message" => "Usuario registrado correctamente",
            "token"   => $token
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Error al registrar usuario: " . $e->getMessage()]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
}
