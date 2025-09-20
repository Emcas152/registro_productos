$(document).ready(function() {
    function validateForm() {
        let isValid = true; // Bandera para verificar si el formulario es válido

        // Validar campo de nombre
        const nombre = $('#nombre').val().trim();
        if (nombre === '') {
            isValid = false;
            $('#nombre').addClass('is-invalid');
        } else {
            $('#nombre').removeClass('is-invalid');
        }

        // Validar campo de correo electrónico
        const email = $('#email').val().trim();
        if (email === '') {
            isValid = false;
            $('#email').addClass('is-invalid');
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Validar campo de contraseña
        const password = $('#password').val().trim();
        if (password === '') {
            isValid = false;
            $('#password').addClass('is-invalid');
        } else {
            $('#password').removeClass('is-invalid');
        }

        return isValid;
    }

    function ValidateAge() {
        const birthDate = new Date($('#fecha_nacimiento').val());
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 17) {
            alert("Debes tener al menos 17 años para registrarte.");
            return false;
        }
    }

    $('#registrarse').on('click', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (!ValidateAge()) {
            return; // Detiene el proceso si la edad no es válida
        }
        if (!validateForm()) {
            return; // Detiene el proceso si el formulario no es válido
        }
        $.ajax({
            type: 'POST',
            url: '../../api/registro.php', // Cambia esto por la URL de tu script de procesamiento
            data: $('#formRegistro').serialize(), // Serializa los datos del formulario 
            success: function(response) {
                // Maneja la respuesta del servidor
                swal.fire({
                    title: 'Registro Exitoso',
                    text: '¡Te has registrado correctamente!',
                    icon: 'success',
                }).then(() => {
                    window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
                });
            },
            error: function(xhr, status, error) {
                // Maneja los errores
                switch (xhr.status) {
                    case 400:
                        console.log(xhr.responseText);
                        alert("Error en la solicitud. Por favor, verifica los datos.");
                        break;
                    case 500:
                        console.log(xhr.responseText);
                        alert("Error en el servidor. Inténtalo más tarde.");
                        break;
                    default:
                        console.log(xhr.responseText);
                        alert("Ocurrió un error inesperado.");
                }
            }
        });
    });
});