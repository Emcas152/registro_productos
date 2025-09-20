--Usuarios registrados últimos 30 días
SELECT id, nombre, correo, fecha_registro
FROM usuarios
WHERE fecha_registro >= NOW() - INTERVAL 30 DAY;


--Contar usuarios con correo @gmail.com
SELECT COUNT(*) AS total_gmail
FROM usuarios
WHERE correo LIKE '%@gmail.com';

--Actualizar nombre de usuario con id = 10
UPDATE usuarios
SET nombre = 'Nuevo Nombre'
WHERE id = 10;

--Eliminar usuario con id = 15
DELETE FROM usuarios
WHERE id = 15;
