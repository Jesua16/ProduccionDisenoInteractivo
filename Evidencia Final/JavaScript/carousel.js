// Selecciona todos los elementos con la clase '.carousel-slide'.
const slides = document.querySelectorAll('.carousel-slide');

// Inicializa el índice para la diapositiva actual.
let currentIndex = 0;

// Define la función que muestra la diapositiva correspondiente al índice proporcionado.
function showSlide(index) {
    // Recorre todas las diapositivas y remueve la clase 'active' para ocultarlas.
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    // Añade la clase 'active' a la diapositiva que corresponde al índice actual para mostrarla.
    slides[index].classList.add('active');
}

// Define la función para mostrar la diapositiva anterior.
function prevSlide() {
    // Calcula el índice de la nueva diapositiva a mostrar y asegura que el carrusel sea cíclico.
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    // Llama a la función showSlide con el nuevo índice.
    showSlide(currentIndex);
}

// Define la función para mostrar la siguiente diapositiva.
function nextSlide() {
    // Calcula el índice de la próxima diapositiva a mostrar de manera cíclica.
    currentIndex = (currentIndex + 1) % slides.length;
    // Llama a la función showSlide con el nuevo índice.
    showSlide(currentIndex);
}

// Muestra la primera diapositiva al cargar la página.
showSlide(currentIndex);

// Establece un intervalo para cambiar a la siguiente diapositiva cada 5 segundos.
setInterval(nextSlide, 5000);
