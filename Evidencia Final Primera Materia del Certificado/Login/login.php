<?php
// conexión a la base de datos
$servidor = "localhost";
$usuario = "root";
$password = "";
$basedatos = "wanding_blade";
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos);

// se verifica la conexión
if (!$conexion) {
  die("Conexión fallida: " . mysqli_connect_error());
}

// obtención de lo datos para el inicio de sesión
$username = $_POST['username'];
$password = $_POST['password'];

// se verifica que sean validos
$sql = "SELECT * FROM usuarios WHERE usuario = '$username' AND contrasena = '$password'";
$resultado = mysqli_query($conexion, $sql);

// verificación
if (mysqli_num_rows($resultado) == 1) {

  // iniciamos sesión y se redirige
  session_start();
  $_SESSION['username'] = $username;
  header('Location: Wandering Blade/index.php');
} 
else {
  // redireccionamos al inicio de sesión después de 2 segundos
  header("refresh:0;url=iniciar.php?error=1");
  exit;
}


// Cerrar conexión a la base de datos
mysqli_close($conexion);
?>
