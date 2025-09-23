<?php

// Configuración de conexión a la base de datos
$host = "localhost";       // Cambiar si tu DB no está en localhost
$dbname = "dnc";       // Nombre de la base de datos
$username = "root";        // Usuario MySQL
$password = "";            // Contraseña MySQL

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    // Configurar errores de PDO
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error en la conexión: " . $e->getMessage()]);
    exit;
}