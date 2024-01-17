// Función para validar el formato del RUT chileno
function validarRut(rut) {
    // Expresión regular para validar el RUT (formato: 12345678-9)
    var rutRegex = /^\d{1,8}-\d{1,2}$/;

    if (!rutRegex.test(rut)) {
        // El RUT no tiene el formato correcto
        alert("El RUT ingresado no tiene el formato correcto (Ejemplo: 12345678-9)");
        return false;
    }

    // Dividir el RUT en parte numérica y dígito verificador
    var rutPartes = rut.split("-");
    var rutNumerico = rutPartes[0];
    var rutVerificador = rutPartes[1];

    // Calcular el dígito verificador esperado
    var suma = 0;
    var multiplo = 2;

    for (var i = rutNumerico.length - 1; i >= 0; i--) {
        suma += parseInt(rutNumerico.charAt(i)) * multiplo;
        multiplo = multiplo === 7 ? 2 : multiplo + 1;
    }

    var resultado = suma % 11;
    var digitoEsperado = (11 - resultado) % 11;

    // Verificar si el dígito verificador es correcto
    if (parseInt(rutVerificador) !== digitoEsperado) {
        alert("El RUT ingresado no es válido.");
        return false;
    }

    return true;
}


// Función para validar el formato del correo electrónico
function validarEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        // El email no tiene el formato correcto
        alert("La dirección de correo electrónico no es válida.");
        return false;
    }

    return true;
}




$(document).ready(function() {
    // Cargar opciones de Región al cargar la página
    loadRegionOptions();

    // Validaciones con JavaScript
    $("#votingForm").submit(function(event) {
        // Validar campos antes de enviar el formulario

        //Validación de rut
        if (!validarRut($("#rut").val())) {
            // El RUT no es válido, detener el envío del formulario
            return false;
        }


        //Validacion de email
        if (!validarEmail($("#email").val())) {
            // El email no es válido, detener el envío del formulario
            return false;
        }

        // Evitar el envío del formulario si hay errores
        event.preventDefault();

        // Enviar datos al servidor mediante Ajax
        $.ajax({
            type: "POST",
            url: "votacion.php",
            data: $(this).serialize(),
            success: function(response) {
                // Manejar la respuesta del servidor (puede ser redireccionar a una página de agradecimiento)
                alert(response);
            }
        });
    });

    // Manejar cambio de Región para actualizar Comuna
    //permite que al seleccionar una región, se actualice la lista de despliegue de las comunas relacionadas con la region seleccionada
    $("#region").change(function() {
        var selectedRegion = $(this).val();
        loadComunaOptions(selectedRegion);
    });

    // Cargar opciones de Candidato al cargar la página
    loadCandidatoOptions();
});

// Función para cargar opciones de Región
function loadRegionOptions() {
    $.ajax({
        type: "GET",
        url: "get_regiones.php",
        success: function(data) {
            $("#region").html(data);
            // Luego de cargar las regiones, cargar las comunas de la primera región
            var selectedRegion = $("#region").val();
            loadComunaOptions(selectedRegion);
        }
    });
}

// Función para cargar opciones de Comuna basado en la región seleccionada
function loadComunaOptions(regionId) {
    $.ajax({
        type: "GET",
        url: "get_comunas.php?region=" + regionId,
        success: function(data) {
            $("#comuna").html(data);
        }
    });
}

// Función para cargar opciones de Candidato
function loadCandidatoOptions() {
    $.ajax({
        type: "GET",
        url: "get_candidatos.php",
        success: function(data) {
            $("#candidato").html(data);
        }
    });
}
