// Define la función para alternar la visibilidad del menú en dispositivos móviles.
function toggleMobileMenu() {
    // Selecciona el elemento del menú 'ul' dentro de 'nav'.
    const menu = document.querySelector('nav ul');

    // Verifica si el menú ya tiene la clase 'active', que indica que está visible.
    if(menu.classList.contains('active')){
        // Si está activo, elimina la clase para ocultar el menú.
        menu.classList.remove('active');
        // Mueve el menú fuera de la pantalla a la izquierda para ocultarlo.
        menu.style.left = '-100%'; // Alternativamente, se puede usar transform para animaciones más suaves.
    } else {
        // Si no está activo, añade la clase para mostrar el menú.
        menu.classList.add('active');
        // Mueve el menú hacia la posición original para que sea visible.
        menu.style.left = '0'; // Igualmente aquí se puede usar transform si es necesario.
    }
}
