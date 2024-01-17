<?php
// get_comunas.php

// Establecer conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sistema_votacion";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener el ID de la región seleccionada desde la solicitud GET
$regionId = $_GET['region'];

// Consulta SQL para obtener las comunas de la región seleccionada
$sql = "SELECT id, nombre FROM comuna WHERE ciudad_id IN (SELECT id FROM ciudad WHERE region_id = $regionId)";
$result = $conn->query($sql);

// Crear opciones de select
$options = "<option value=''>Seleccione una comuna</option>";

while ($row = $result->fetch_assoc()) {
    $options .= "<option value='{$row['id']}'>{$row['nombre']}</option>";
}

// Cerrar conexión
$conn->close();

// Imprimir opciones
echo $options;
?>
