// 1. Object keys: devuelve un arreglo con las claves de un objeto
// let claves = Object.keys(persona);
// console.log(claves);

let persona = {
    nombre: "Alex",
    apellido: "García",
    edad: 28
};

let claves = Object.keys(persona);
console.log(claves); // Salida: ['nombre', 'apellido', 'edad']


// 2. Object values: devuelve un arreglo con los valores de las propiedades de un objeto:
// let valores = Object.values(persona); // ["Alex", "Garcia", "function"]
// console.log(valores);

let valores = Object.values(persona);
console.log(valores); // Salida: ["Alex", "García", 28]


// 3. Object entries: devuelve un arreglo con pares clave:valor
// let entradas = console.log(Object.entries(persona));

let entradas = Object.entries(persona);
console.log(entradas); // Salida: [['nombre', 'Alex'], ['apellido', 'García'], ['edad', 28]]


// 4. Object assign: copia las propiedades de uno o más objetos fuente a un objeto destino
// let personaExtendida = Object.assign(persona, {edad: 29, estadoCivil:"Soltero"});
// console.log(personaExtendida);

let personaExtendida = Object.assign(persona, {edad: 29, estadoCivil: "Soltero"});
console.log(personaExtendida);
// Salida: {nombre: "Alex", apellido: "García", edad: 29, estadoCivil: "Soltero"}


