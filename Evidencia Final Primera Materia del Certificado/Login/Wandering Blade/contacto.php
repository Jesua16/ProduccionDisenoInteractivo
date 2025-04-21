<!DOCTYPE html>
<html>
  <head >
    <title>Wandering Blade</title>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <link rel="shortcut icon" href="imagenes/favicon.png" type="image/png">
	<link rel=stylesheet href=css/style1.css>
  <link rel=stylesheet href=css/styles1.css>
  <link rel=stylesheet href=css/style-nav1.css>
  <link rel=stylesheet href=css/style-buscador1.css>
  <link rel=stylesheet href=css/style-sections1.css>
  <style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100&family=Trade+Winds&display=swap');
</style>
  </head>
  
  
    <header>
      <div class="title">
    <h1 class="animate__animated animate__slideInLeft"><a href="index.php">Wandering Blade</a></h1>

    </div>
    <div class="buscador">
      
      
      <form action="#" method="get">
        <input type="text" name="search" placeholder="Buscar...">
        <button type="submit">Buscar</button>
      </form>
      </div>
    </header>

    <body>
    <nav>
      <ul>
        <li><a href="index.php">Inicio</a></li>
        <li><a href="productos.php">Productos</a></li>
        <li><a href="contacto.php">Contacto</a></li>
      </ul>
      

    </nav>



<footer>
  <section>
    <h2>Información, dudas y sugerencias</h2>
    <p>En nuestra tienda en línea estamos comprometidos con brindar el mejor servicio posible a nuestros clientes. Si tienes alguna duda, sugerencia o comentario acerca de nuestros productos o servicios, no dudes en contactarnos a través de los siguientes medios:</p>
    <ul>
      <li>Teléfono: 555-555-5555</li>
      <li>Correo electrónico: info@tiendaenlinea.com</li>
    </ul>
  </section>

  <section>
    <h2>¡Dejanos un comentario!</h2>
    <form method="post" action="comentarios.php" onsubmit="return validarFormulario()">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre">
      <label for="email">Correo electrónico:</label>
      <input type="email" id="email" name="email">
      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" name="mensaje"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </section>
  
  <section>
    <h2 id="comentarios">Comentarios</h2>
    <?php
      // Conexión a la base de datos
      $conn = mysqli_connect("localhost", "root", "", "wanding_blade");

      // Consulta para obtener los comentarios
      $query = "SELECT * FROM comentarios ORDER BY fecha DESC";
      $result = mysqli_query($conn, $query);

      // Loop para mostrar los comentarios
      while ($row = mysqli_fetch_assoc($result)) {
        echo "<div>";
        echo "<h3>" . $row["nombre"] . "</h3>";
        echo "<p>" . $row["mensaje"] . "</p>";
        echo "<p class='fecha'>" . $row["fecha"] . "</p>";
        echo "</div>";
      }

      // Cierre de la conexión a la base de datos
      mysqli_close($conn);
    ?>
  </section>

  <script>
    function validarFormulario() {
      var nombre = document.getElementById("nombre").value;
      var email = document.getElementById("email").value;
      var mensaje = document.getElementById("mensaje").value;

      if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos");
        return false;
      }

      return true;
    }
  </script>
</footer>
</html>