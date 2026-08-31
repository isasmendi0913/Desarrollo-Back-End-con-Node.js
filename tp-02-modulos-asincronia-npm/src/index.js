const path = require("node:path");
const pc = require("picocolors");
const { leerJson, escribirTexto } = require("./archivos.js");
const { crearCatalogo } = require("./juegos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

async function main() {
  try {
    console.log(pc.cyan("Leyendo catálogo de juegos ..."));

    const juegos = await leerJson(rutaDatos);
    const catalogo = crearCatalogo(juegos);

    await escribirTexto(rutaSalida, catalogo);

    console.log(catalogo);
    console.log(pc.green(` Informe generado exitosamente en: ${rutaSalida}`));
  } catch (error) {
    console.error(pc.red(` Error al generar el informe: ${error.message}`));
    process.exitCode = 1;
  }
}

main();