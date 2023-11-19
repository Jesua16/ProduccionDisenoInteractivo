// // Funciones 
// // Qué es una función

// // una función es un código diseñado para realizar una tarea especifica, Estas son reutilizables. 

// // Funciones declaradas
// // una función declarada tiene la sintaxis

// // Sintaxis
// // function nombreDeLaFuncion(parametros){
// //     //codigo a ejectuar
// // }

// // Declarar una funcion no la ejecuta, simplemente nombra la funcion y especifica que hacer cuándo se invoque

// function holaMundo(){
//     console.log("Hola mundo");
// }

// // para ejectuar la función la invocas por su nombre seguido de parentesis

// holaMundo();

// ////

// function holaNombre(nombre){
//     console.log("Hola " + nombre);
// }

// // Al declarar una función lo que recibe se llama PARAMETRO
// // Al ejecutar una function, el dato que se le manda es llamado ARGUMENTO
// holaNombre("Jesuá Santes");



// // Las funciones pueden devolver valores usando la palabra clave return estos pueden ser utilizados en otras partes del codigo clave

// // function suma (a,b){
// //     return a + b; 
// // }

// // let resultado = suma(1,2);

// // console.log(resultado);

// // Uso del return: util cuándo necesitas el resultado de la función para usarlo después del codigo
//  //Uso del console.log: Este nos sirve para mostrar información pero no pasa el resultado de la función a otras partes del código

// // FUNCIONES EXPRESADAS
// // una función expresada es aquella asignada como valor de una variable

// // Sintaxis:

// // let variable = function(params){
// //     //Codigo a ejecutar
// // }

// let saludo = function(){
//     console.log("Hola Mundo");
// }
// saludo();
// // FUNCIONES FLECHA
// // Proporcionan una sintaxis más corta para escribir funciones
// // sintaxis
// const resta = (a,b) => a - b;

// console.log(resta(2,1));

// Actividad 13

// 1. Crear una funcion para saludar: Escribe una función llamada saludar que imprima un saludo por crossOriginIsolated
// (por ejemplo, "Bienvenido a la tienda de helados"). Llama a la función para ver el resultado en la consola

// 2. Función para calcular el precio de un helado: Escribe una función llamada calcularPrecio que tome un número como parametro( la cantidad de helados) 
// e imprima en consola el precio total (por ejemplo cada helado cuesta 2 dolares.)

// 3. Función para aplicar descuentos: escribe un función aplicar descuentos que tome el precio total y aplique un descuento del 10% si el cleinte compra más de 5 helados

// Instrucciones  cada pieza de código debe ejecutarse y probarse individualmente para entender como funcionan las funciones en diferentes contextos y con distintos tipos de sintaxis