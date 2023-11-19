// Definición: son una lista ordenada de valores, en el que cada uno de estos es llamado elemento y cada elemento tiene una posición en el arreglo, conocida como índice, empezando por cero

// Sintaxis:
// let array = ["valorIndice0", "valorIndice1", "valorIndice2"];

// Ejemplo:
//let frutas = ["manzanas", "Fresas", "Sandías"]

// -------------------------------------

// Acceso a elementos de un array/arreglo
// 1. Utilizamos la notación de corchetes, donde dentro de los corchetes, colocamos el índice del valor a acceder

// let frutas = ["Manzanas", "Fresas", "Sandías"]

// console.log(frutas[0]);

// --------------------------------------
// Métodos nativos de un array
// 1. push: añade uno o más elementos al final de un array
// Ejemplo
// frutas.push("Guayabas")
// console.log(frutas);

// let frutas = ["manzanas", "Fresas", "Sandías"];
// // 2. pop: elimina el último elemento de un array y lo devuelve
// // console.log(frutas.pop());
// console.log(frutas.pop());
// console.log(frutas);
// 3. shift: elimina el primer elemento de un Array
// 4. unshift: añade uno o más elementos al inicio de un Array

//  let alumnos = ["Mario","Gerardo", "Maria", "Gonzalo"];
// console.log(alumnos.shift());
// console.log(alumnos);
// alumnos.unshift("Laura")
// console.log(alumnos);

// 5. forEach: itera sobre todos los elementos de un array:
// Ejemplo:
let numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.forEach(numero =>{
    console.log("El resultado es: " + numero*2);
}
    )
