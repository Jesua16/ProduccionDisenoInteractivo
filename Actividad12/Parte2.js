// Creación de Perfil
let studentName = "Juan";
let studentAge = 20;
let isEnrolled = true;

// Calificaciones y Asistencia
let gradeMath = 85;
let gradeScience = 90;
let gradeLanguage = 78;
let totalClasses = 100;
let attendedClasses = 85;

// Calculando Estadísticas
let averageGrade = (gradeMath + gradeScience + gradeLanguage) / 3;
let attendancePercentage = (attendedClasses / totalClasses) * 100;

// Mostrar Información
console.log("\nInformación del Estudiante:");
console.log("Nombre: " + studentName);
console.log("Edad: " + studentAge);

if (isEnrolled) {
    console.log("Inscrito en clases: Sí");
} else {
    console.log("Inscrito en clases: No");
}

console.log("\nCalificaciones del Estudiante:");
console.log("Matemáticas: " + gradeMath);
console.log("Ciencias: " + gradeScience);
console.log("Lenguaje: " + gradeLanguage);
console.log("Promedio de Calificaciones: " + averageGrade);

console.log("\nAsistencia del Estudiante:");
console.log("Total de Clases: " + totalClasses);
console.log("Clases Asistidas: " + attendedClasses);
console.log("Porcentaje de Asistencia: " + attendancePercentage + "%\n");

