<?php
// get_candidatos.php

// Establecer conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_votacion";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Consulta SQL para obtener los candidatos
$sql = "SELECT id, nombre FROM candidato";
$result = $conn->query($sql);

// Crear opciones de select
$options = "<option value=''>Seleccione un candidato</option>";

while ($row = $result->fetch_assoc()) {
    $options .= "<option value='{$row['id']}'>{$row['nombre']}</option>";
}

// Cerrar conexión
$conn->close();

// Imprimir opciones
echo $options;
?>
