//  /*Actividad 13

//  1. Crear una funcion para saludar: Escribe una función llamada saludar que imprima un saludo por consola
//  (por ejemplo, "Bienvenido a la tienda de helados"). Llama a la función para ver el resultado en la consola

//  2. Función para calcular el precio de un helado: Escribe una función llamada calcularPrecio que tome un número como parametro( la cantidad de helados) 
//  e imprima en consola el precio total (por ejemplo cada helado cuesta 2 dolares.)

//  3. Función para aplicar descuentos: escribe un función aplicar descuentos que tome el precio total y aplique un descuento del 10% si el clinte 
// compra más de 5 helados

// Instrucciones

// cada pieza de código debe ejecutarse y probarse individualmente para entender como funcionan las funciones en 
// diferentes contextos y con distintos tipos de sintaxis*/


//PRIMER CÓDIGO QUE REALICÉ


// // Parte 1 Saludo
// function saludar() {//creación de la función saludo
//     console.log("\n¡Bienvenido a la Tienda de Helados!\n");//desplegamos el saludo en la consola
// }

// // Parte 2 creamos la función calcularPrecio con el parametro cantidadHelados
// function calcularPrecio(cantidadHelados) {
//     const precioHelado = 15; //Precio de los helados individualmente
//     const precioTotal = cantidadHelados * precioHelado; //precioTotal(realmente es el precio bruto pero respetamos las intrucciones)
//     console.log("El precio bruto por " + cantidadHelados + " helados es de $" + precioTotal + "\n"); //Mostramos el precio bruto en la consola
    
//     //Invocamos la función para aplicar descuentos
//     aplicarDescuentos(cantidadHelados, precioTotal);
// }

// // Parte 3 creamos la función aplicarDescuentos con parametros cantidadHelados (para saber si aplica el descuento) y precio"Total"(bruto)(que es donde aplicaremos el descuento)
// function aplicarDescuentos(cantidadHelados, precioTotal) {
//     if (cantidadHelados > 5) { // condición para el descuento(si son más de 5 helados)
//         const precioConDescuento = precioTotal - (precioTotal * 0.10); // aplicamos el 10% de descuento
//         console.log("El precio con descuento es de $" + precioConDescuento + "\n");//desplegamos el mensaje
//     } else {//En caso de que no sean más de cinco
//         console.log("El precio total es de $" + precioTotal + " no se aplica descuento\n");//desplegamos el mensaje que no se aplican descuentos
//     }
// }
// saludar() //Invocamos el saludo
// calcularPrecio(5);//Invocamos la función calcularPrecio() (con la cantidad de helados como parametro) que despliega en la consola las el precio total y si se aplica o no descuento


// CÓDIGO REESCRITO CON FUNCIONES FLECHA

// Parte 1: Función para aplicar descuentos
const aplicarDescuento = (precioTotal, cantidadHelados) => {
    if (cantidadHelados > 5) {
        return precioTotal * 0.90; // Aplica un 10% de descuento
    }
    return precioTotal; // Retorna el precio total sin descuento
};

// Parte 2: Reescribir las funciones como funciones flecha
const calcularPrecio = (precioHelado, cantidadHelados) => {
    const precioTotal = precioHelado * cantidadHelados;
    console.log(`El precio bruto por ${cantidadHelados} helados es de $${precioTotal}\n`);

    // Calcula el precio final con descuento si es necesario
    const precioFinal = aplicarDescuento(precioTotal, cantidadHelados);
    console.log(`El precio final es de $${precioFinal}\n`);
};

// Parte 3: Función para personalizar helados
const personalizarHelado = sabor => console.log(`Creando un helado de ${sabor}\n`);

// Parte 4: Función para saludar al cliente
const saludarCliente = () => console.log("\n¡Bienvenido a la Tienda de Helados!\n");

// Parte 5: Función para calcular el precio final
const precioFinal = () => {
    const precioTotal = aplicarDescuento(2 * 5, 5); // Ejemplo: 5 helados a $2 cada uno
    console.log(`Hola, bienvenido, el total de su compra fue: $${precioTotal}\n`);
};

// Aquí invocamos todas las funciones
saludarCliente();
personalizarHelado("vainilla"); // Personaliza un helado
calcularPrecio(2, 6); // Calcula el precio de 5 helados a $2 cada uno
precioFinal(); // Muestra el precio final y saluda al cliente
