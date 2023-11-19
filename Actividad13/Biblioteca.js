// a) Creación de objetos y arrays

    // Crear un Objeto Libro
    let libro1 = {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anioPublicacion: 1967,
        genero: "Realismo mágico"
    };

    let libro2 = {
        titulo: "Hippie",
        autor: "Paulo Coelho",
        anioPublicacion: 2018,
        genero: "Ficción autobiográfica"
    };
    
    let libro3 = {
        titulo: "El Creativo",
        autor: "Roberto Martínez",
        anioPublicacion: 2021,
        genero: "Desarrollo personal"
    };

    // Crea un array llamado biblioteca que contenga varios objetos Libro
    let biblioteca = [libro1, libro2, libro3];


// b) Uso de Métodos de Array

    
    // Listar Todos los Libros usando
    biblioteca.forEach((libro, index) => {
        console.log("\nLibro "+(index + 1)+" Título: " + libro.titulo + ", Autor: " + libro.autor + ", Año: " + libro.anioPublicacion + ", Género: " + libro.genero);
    });


    // Buscar Libros por Autor
    function buscarLibrosPorAutor(autor) {
        
        return biblioteca.filter(libro => libro.autor === autor);
    }

    // Encontrar el Libro Más Antiguo
    function encontrarLibroMasAntiguo() {
        return biblioteca.reduce((anterior, actual) => {
            return (anterior.anioPublicacion < actual.anioPublicacion) ? anterior : actual;
        });
    }


// c) Uso de Métodos de Objetos

    // Añadir un Método a un Objeto
    libro1.resumen = function() {
        console.log("\n" + this.titulo + " es una novela de " + this.autor + " publicada en " + this.anioPublicacion + ". Pertenece al género de " + this.genero + ".\n");

    };

    // Mostrar Información con Object.keys y Object.values
    function mostrarInformacionLibro(libro) {
        let claves = Object.keys(libro);
        let valores = Object.values(libro);
        for (let i = 0; i < claves.length; i++) {
            if (typeof valores[i] !== 'function') {
                console.log(claves[i] + ": " + valores[i] + "\n");
            }
        }
    }

    // Uso de los métodos

    // Para mostrar el resumen de un libro
    libro1.resumen();

    // Para mostrar información de un libro en particular
    mostrarInformacionLibro(libro1);

    //Función para buscar libros por autor
    let librosDeCoelho = buscarLibrosPorAutor("Paulo Coelho");
    console.log(librosDeCoelho);

    //Función para encontrar el libro más antiguo
    let libroMasAntiguo = encontrarLibroMasAntiguo();
    console.log(libroMasAntiguo);


    
