CORS error	en xampp
ChatGPT dijo:

Ese error de CORS en XAMPP aparece cuando intentas consumir tu API PHP desde un frontend (React, Angular, Vue, etc.) que corre en otro origen (por ejemplo http://localhost:3000) distinto al de tu servidor PHP (http://localhost/ o http://127.0.0.1).

Para solucionarlo, necesitas habilitar los encabezados CORS en tu script PHP o en la configuración de Apache de XAMPP.

🔹 Opción 1: Habilitar CORS en tu script PHP

Agrega esto al inicio de tu archivo PHP (ej. api.php o registro.php):

<?php
// Permitir cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos específicos
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
// Permitir cabeceras personalizadas
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Si la petición es OPTIONS, responder sin ejecutar más código
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}


Con eso ya deberías poder hacer peticiones desde http://localhost:3000 o cualquier otro origen.