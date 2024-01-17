<?php
// Establecer conexión a la base de datos 
$servername = "localhost:3306"; // Cambia 3306 al número de puerto que estás utilizando
$username = "root";
$password = "";
$dbname = "sistema_votacion";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión con la base de datos
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtención de los datos del formulario del index.html
$nombreApellido = $_POST['nombreApellido'];
$alias = $_POST['alias'];
$rut = $_POST['rut'];
$email = $_POST['email'];
$region = $_POST['region'];
$comuna = $_POST['comuna'];
$candidato = $_POST['candidato'];
$comoSeEntero = implode(', ', $_POST['comoSeEntero']);

// Validar duplicación de votos por RUT
$sqlCheckDuplicate = "SELECT COUNT(*) as count FROM votos WHERE rut = '$rut'";
$resultCheckDuplicate = $conn->query($sqlCheckDuplicate);
$row = $resultCheckDuplicate->fetch_assoc();

if ($row['count'] > 0) {
    die("Ya has votado. No se permiten votos duplicados.");
}

// Insertar voto en la base de datos
$sqlInsertVote = "INSERT INTO votos (nombre_apellido, alias, rut, email, region, comuna, candidato, como_se_entero)
                  VALUES ('$nombreApellido', '$alias', '$rut', '$email', '$region', '$comuna', '$candidato', '$comoSeEntero')";

if ($conn->query($sqlInsertVote) === TRUE) {
    echo "Voto registrado correctamente.";
} else {
    echo "Error al registrar el voto: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
