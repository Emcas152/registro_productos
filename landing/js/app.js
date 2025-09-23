$(document).ready(function() {
    function validateEmail(email) { 
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 
        return re.test(String(email).toLowerCase()); 

    }

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
            if (!validateEmail(email)) {
                isValid = false;
                $('#email').addClass('is-invalid');
                $('#email_invalid').text('el correo debe ser tipo email@ejemplo.com.');
            } else {
                $('#email').removeClass('is-invalid');
            }
        }

        // Validar campo de contraseña
        const password = $('#password').val().trim();
        if (password === '') {
            isValid = false;
            $('#password').addClass('is-invalid');
        } else {
            $('#password').removeClass('is-invalid');
        }
        // Validar campo de fecha de nacimiento
        const fecha = $('#fecha_nacimiento').val();
        if (fecha === '') {
            isValid = false;
            $('#fecha_nacimiento').addClass('is-invalid');
        }
        return isValid;
    }

    function ValidateAge() {
        const birthDate = new Date($('#fecha_nacimiento').val());
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        console.log(age);
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        console.log(age);
        if (age < 17) {
            return false;
        } else {
            return true;
        }
    }

    $('#registrarse').on('click', function(event) {
        
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (!validateForm()) {
            return; // Detiene el proceso si el formulario no es válido
        }
        if (!ValidateAge()) {
            $('#fecha_nacimiento').addClass('is-invalid');
            $('#fecha_invalid').text('Debes tener al menos 17 años para registrarte.');
            return; // Detiene el proceso si la edad es menor a 17
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8000/registro.php', // Cambia esto por la URL de tu script de procesamiento
            data: $('#formRegistro').serialize(), // Serializa los datos del formulario 
            success: function(response) {
                // Maneja la respuesta del servidor
                swal.fire({
                    title: 'Registro Exitoso',
                    text: '¡Te has registrado correctamente!',
                    icon: 'success',
                }).then(() => {
                    // window.location.href = 'index.html'; // Redirige a la página de inicio de sesión
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
                        swal.fire({
                            title: 'Error',
                            text: 'Ocurrió un error inesperado. Inténtalo de nuevo.' + error,
                            icon: 'error',
                        });
                }
            }
        });
    });
});