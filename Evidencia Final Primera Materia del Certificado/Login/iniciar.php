
</html>



<!DOCTYPE html>
<html>
  <head>
  
  <link rel="shortcut icon" href="Wandering Blade/Imagenes/favicon.png" type="image/png">
    <meta charset="UTF-8">
    <title>Formulario de Login</title>
    <style>
      
form {
  font-family: 'Roboto', sans-serif;
  width: 80%;
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  background-color: #f2f2f2;
}

form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

form input[type="text"],
form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button[type="submit"] {
  background-color: #0D1B2A;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button[type="submit"]:hover {
  background-color: #415A77;
}
    </style>

<script>
  <?php if(isset($_GET['error'])) { ?>
    alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
  <?php } ?>
</script>

  </head>
  <body>
  <form method="post" action="login.php">
      <label for="username">Nombre de usuario: (Prueba con "usuario" y "contraseña" ;) </label>
      <input type="text" id="username" name="username">

      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password">

      <button type="submit">Iniciar sesión</button>
    </form>
  </body>
</html>