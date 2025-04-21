<!DOCTYPE html>
<html>
  <head>
  <link rel="shortcut icon" href="imagenes/favicon.png" type="image/png">
    <title>Tienda en línea</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
    <link rel="stylesheet" href="css/styles1.css">
    <link rel="stylesheet" href="css/style-nav1.css">
    <link rel="stylesheet" href="css/style-buscador1.css">
    <link rel="stylesheet" href="css/style-sections1.css">
    <link rel="stylesheet" href="css/style-sections1.css">
    <link rel="stylesheet" href="css/style-producto1.css">

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&family=Roboto:wght@100&family=Trade+Winds&display=swap');
    </style>
    
  </head>
  <body>
    <header>
    <div class="title">
    <h1 class="animate__animated animate__slideInLeft"><a href="index.php">Wandering Blade</a></h1>
    </div>
    <div class="buscador">
      <div class="buscador">
      
      
      <form >
        <input type="text" name="search" placeholder="Buscar...">
        <button type="submit">Buscar</button>
      </form>
      </div>
    </header>
    <nav>
      <ul>
      <li><a href="index.php">Inicio</a></li>
        <li><a href="productos.php">Productos</a></li>
        <li><a href="contacto.php">Contacto</a></li>
      </ul>
    </nav>
    
    <section>
    <div class="product-container">
      <img src="Imagenes/producto1.jpg" alt="Producto 1" class="product-img">
      <h2 class="product-title">Producto</h2>
      <p class="product-price">$10.99</p>
      <p class="product-description">Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit. Vivamus placerat dictum vulputate. Mauris a libero tellus. Phasellus diam nisl, porttitor non congue id, 
        placerat sed nisi. Duis pellentesque urna eu sodales sodales. Nunc vitae eleifend neque. Fusce mattis neque et accumsan fermentum. 
        Praesent nec ipsum magna. Integer vel elit tincidunt, elementum justo a, varius tortor. Orci varius natoque penatibus et magnis dis parturient montes, 
        nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas a mauris a odio egestas malesuada ac nec orci. 
        Ut convallis vestibulum ex eu gravida. Donec ornare dictum sapien in finibus. 
        Nunc molestie quam quis efficitur consectetur.</p>
      <button class="product-buy-btn">Comprar ahora</button>
    </div>
    


    <main>
      <section>
        <h2>Productos populares</h2>
        <ul>
          <li>
          <a href="producto.php"><img src="Imagenes/producto1.jpg" alt="Producto 1"></a>
            <h3>Producto 1</h3>
            <p>Descripción del producto 1.</p>
            <p>Precio: $99.99</p>
            <button>Agregar al carrito</button>
          </li>
          <li>
          <a href="producto.php"><img src="Imagenes/producto2.jpg" alt="Producto 2"></a>
            <h3>Producto 2</h3>
            <p>Descripción del producto 2.</p>
            <p>Precio: $49.99</p>
            <button>Agregar al carrito</button>
          </li>
          <li>
          <a href="producto.php"><img src="Imagenes/producto3.jpg" alt="Producto 3"></a>
            <h3>Producto 3</h3>
            <p>Descripción del producto 3.</p>
            <p>Precio: $149.99</p>
            <button>Agregar al carrito</button>
          </li>
        </ul>
      </section>
    </main>
  </body>


  <footer>
      <section>
        <h2>Información, dudas y sugerencias</h2>
        <p>En nuestra tienda en línea estamos comprometidos con brindar el mejor servicio posible a nuestros clientes. Si tienes alguna duda, sugerencia o comentario acerca de nuestros productos o servicios, no dudes en contactarnos a través de los siguientes medios:</p>
        <ul>
          <li>Teléfono: 555-555-5555</li>
          <li>Correo electrónico: info@tiendaenlinea.com</li>
        </ul>
      </section>

    </footer>
</html>