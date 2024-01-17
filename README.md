# desis

Prueba técnica de sistema de votación para Desis. Marcelo Rendón.

Manual para Levantar el Proyecto - Sistema de Votación

Requisitos Previos:

Tener instalado XAMPP 8.2.12. (tanto PHP como MariaDB deberían instalarse automáticamente al tener instalado XAMPP 8.2.12)
Tener instalado PHP 8.2.12.
Tener instalado MariaDB 10.4.32 (Al parecer también se instala MySQL automáticamente al instalar XAMPP, pero por defecto se ejecuta MariaDB)

Asegurarte de que XAMPP esté ejecutándose (tanto los servicios de Apache como MySQL deben estar ejecutándose)


Paso 1: Configuración de la Base de Datos

Abrir navegador y accede a http://localhost/phpmyadmin/ o acceder desde XAMPP control panel en el botón Admin de MySQL.
En phpMyAdmin, haz clic en la pestaña "Bases de datos".
Crea una nueva base de datos llamada sistema_votacion y selecciona "utf8_general_ci" como el conjunto de caracteres.
Haz clic en "Crear".
Dentro de tu base de datos recién creada, haz clic en la pestaña "SQL".
Copia y ejecuta el script SQL (info.sql) proporcionado dentro de la carpeta archivo_sql para crear las tablas (region, ciudad, comuna, candidato, y votos) y poblar las tablas region, ciudad, comuna y candidatos con datos dummies.


Paso 2: Configuración del Proyecto

Descarga todos los archivos del proyecto (HTML, CSS, JavaScript, PHP) en una carpeta de tu elección.
Coloca la carpeta del proyecto en el directorio htdocs de XAMPP (ej C:\xampp\htdocs).


Paso 3: Configuración del Archivo de Conexión a la Base de Datos

Abre el archivo votacion.php en un editor de texto.
Modifica las variables $servername, $username, $password, y $dbname con los detalles de tu configuración de base de datos.

Paso 4: Carga de Datos Iniciales (Opcional)

Si lo deseas, puedes ejecutar el script SQL proporcionado para insertar datos de ejemplo en las tablas (region, ciudad, comuna, candidato).
Referenciado en paso 1 si es que no se ha realizado.

Paso 5: Ejecución del Proyecto

Abre tu navegador y accede a http://localhost/nombre-de-tu-carpeta-proyecto o apretando el boton Admin desde XAMPP control panel.
Sustituye nombre-de-tu-carpeta-proyecto con el nombre real de la carpeta donde colocaste el proyecto, por ejemplo http://localhost/desis/.
Deberías ver el formulario de votación.

Paso 6: Prueba del Sistema

Completa el formulario y envía un voto.
Verificar que el voto se registre correctamente y que no puedas votar duplicado.
Además verificar las validaciones de las reglas de negocio solicitadas.

Paso 7: Comprueba que los datos enviados estén almacenados en la base de datos.
