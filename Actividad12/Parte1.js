// Actividad 12_Parte 1

// Utilizando las palabras reserverdas: let, const y var :

// 1. Declara e inicializa una variabla para cada una y mostrar su valor en consola.
// 2. Demostrar el scope/alcance de cada una de ellas.



// EJEMPLO LET 

if (true) {
    let x = 10; // X declarado con "let" dentro del if 
    console.log("\nEjemplo let");
    console.log(" Dentro del if, x es igual a", x);
  }
  
    // console.log("Fuera del if, x es igual a", x); // Esto generará un error


//EJEMPLO CONST

const PI = 3.14159; // PI declarado con "const"
console.log("\nEjemplo const:");
console.log(" El valor de PI es:", PI);

    // Intentar cambiar el valor de la constante generará un error
    // PI = 3.14; // Esto generará un error


//EJEMPLO VAR

var numero = 5; // numero declarado con "var"

console.log("\nEl número es:", numero);

// Se reasigna el valor de numero sin generar errores
numero = 10;

console.log("El número modificado es:", numero,"\n");