<?php
// Conectarse a la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$basedatos = "wanding_blade";
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);

// Verificar la conexión
if (!$conexion) {
    die("Error al conectar a la base de datos: " . mysqli_connect_error());
}

// Obtener los datos del formulario
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$mensaje = $_POST["mensaje"];

// Preparar la consulta para insertar el comentario en la base de datos
$consulta = "INSERT INTO comentarios (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

// Ejecutar la consulta
if (mysqli_query($conexion, $consulta)) {
    
    header("Location: contacto.php#comentarios");
} else {
    echo "Error al guardar el comentario: " . mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
?>
