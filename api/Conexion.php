<?php

// Conexión a la base de datos
$host = "localhost";
$user = "root";
$password = "";
$dbname = "dnc";

$conn = new mysqli($host, $user, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}