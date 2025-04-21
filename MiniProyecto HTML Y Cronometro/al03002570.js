/*******************************************************
 * a3_al03002570.js
 *  Extraer palabras, crear archivo limpio,
 * ordenar, medir tiempos y generar bitácora.
 *******************************************************/

// 1. Módulos de Node
const fs = require('fs');
const path = require('path');

//  Ruta donde están tus archivos HTML
// 
const folderPath = path.join(
  'C:',
  'Users',
  'PC',
  'Documents',
  'GitHub',
  'ProduccionDisenoInteractivo',
  'MiniProyecto HTML Y Cronometro',
  'Files'
);

/**
 * Limpia el texto HTML y regresa un arreglo de "palabras".
 * - Quita etiquetas: <...>
 * - Conserva guiones en las palabras (ej. "Automata-based")
 *   pero elimina otros signos de puntuación.
 * - Convierte secuencias no alfanuméricas (excepto '-') en separadores.
 */
function extractWordsFromHtml(htmlContent) {
  //  Eliminar etiquetas HTML con una expresión regular
  const noTags = htmlContent.replace(/<[^>]*>/g, ' ');

  //  Separar por cualquier caracter que **no** sea letra, dígito o guión

  const rawWords = noTags.split(/[^a-zA-Z0-9\-]+/);

  //  Filtrar palabras vacías (por si hay splits en blanco)
  const words = rawWords
    .map((w) => w.trim())
    .filter((w) => w.length > 0);

  return words;
}

//  Función principal que realiza el proceso y mide tiempos
function main() {
  //  Tiempo inicial total
  const startTotal = process.hrtime();

  //  Leemos todos los archivos del directorio
  let files;
  try {
    files = fs.readdirSync(folderPath);
  } catch (err) {
    console.error('Error leyendo la carpeta:', err);
    return;
  }

  // Filtramos solo los .html (ignora mayúsculas/minúsculas)
  const htmlFiles = files.filter((file) => file.toLowerCase().endsWith('.html'));

  //  Iniciamos cronómetro para el proceso de "crear y ordenar listas"
  const startProcess = process.hrtime();

  //  Procesar cada archivo HTML
  htmlFiles.forEach((file) => {
    const filePath = path.join(folderPath, file);

    //  Leer contenido del HTML
    const htmlContent = fs.readFileSync(filePath, 'utf8');

    //  Extraer palabras limpias
    const words = extractWordsFromHtml(htmlContent);

    //  Crear nombre para archivo "limpio"
    //    Ej. si el archivo es "001.html", creamos "001_cleaned.txt"
    const baseName = path.basename(file, '.html'); // "001"
    const cleanedFileName = `${baseName}_cleaned.txt`;
    const cleanedFilePath = path.join(folderPath, cleanedFileName);

    //  Guardar cada palabra en una nueva línea en el archivo "limpio"
    fs.writeFileSync(cleanedFilePath, words.join('\n'), 'utf8');

    //  Ordenar las palabras alfabéticamente
    //    Si deseas ignorar mayúsc/minúsc, usa: words.sort((a,b)=>a.localeCompare(b, 'en', { sensitivity: 'base' }));
    words.sort((a, b) => a.localeCompare(b));

    //  Crear nombre para archivo "ordenado"
    const sortedFileName = `${baseName}_sorted.txt`;
    const sortedFilePath = path.join(folderPath, sortedFileName);

    //  Guardar palabras ordenadas
    fs.writeFileSync(sortedFilePath, words.join('\n'), 'utf8');
  });

  //  Finalizar cronómetro para "crear listas y ordenarlas"
  const diffProcess = process.hrtime(startProcess);
  const timeCreateAndSort = (diffProcess[0] + diffProcess[1] / 1e9).toFixed(3);

  //  Tiempo total de ejecución
  const diffTotal = process.hrtime(startTotal);
  const totalExecutionTime = (diffTotal[0] + diffTotal[1] / 1e9).toFixed(3);

  //  Crear bitácora "a3_al03002570.txt"
  //    (Usa tu matrícula o el nombre que requieras)
  const logPath = path.join(folderPath, 'a3_al03002570.txt');

  //  Preparar contenido del log
  //    (Puedes personalizar el texto y formato como gustes)
  const logLines = [];
  logLines.push('=== PROCESO DE LIMPIEZA Y ORDENAMIENTO DE HTML ===');
  logLines.push(`Archivos HTML procesados: ${htmlFiles.join(', ')}`);
  logLines.push(`Tiempo en crear la lista de palabras y ordenarlas: ${timeCreateAndSort} seg`);
  logLines.push(`Tiempo total de ejecución del programa: ${totalExecutionTime} seg`);

  //  Guardar el archivo de log
  fs.writeFileSync(logPath, logLines.join('\n'), 'utf8');

  //  Mensaje final en consola
  console.log('Proceso completado.');
  console.log(`Se generó la bitácora: ${logPath}`);
}

// 4. Ejecutar el programa
main();
