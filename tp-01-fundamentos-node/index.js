var path = require('path');
var fs = require('fs');

var nombreEstudiante = process.argv[2];
if (!nombreEstudiante) {
    nombreEstudiante = 'Saul Isasmendi';
}

console.log('Node.js version: ' + process.version);
console.log('Platform: ' + process.platform);

var juego = {
    titulo: 'Galactic Odyssey',
    estudio: 'Starforge Studios',
    anio: 2024,
    plataformas: ['PC', 'PlayStation 5', 'Xbox Series X'],
    multijugador: true
};

var plataformasStr = juego.plataformas.join(', ');
var multijugadorStr = '';
if (juego.multijugador) {
    multijugadorStr = 'Sí';
} else {
    multijugadorStr = 'No';
}
console.log('Contenido a escribir:', ficha);
var ficha = '';
ficha = ficha + 'FICHA DE VIDEOJUEGO\n';
ficha = ficha + 'Estudiante: ' + nombreEstudiante + '\n';
ficha = ficha + 'Node.js: ' + process.version + '\n';
ficha = ficha + 'Plataforma del sistema: ' + process.platform + '\n';
ficha = ficha + 'Título: ' + juego.titulo + '\n';
ficha = ficha + 'Estudio: ' + juego.estudio + '\n';
ficha = ficha + 'Año: ' + juego.anio + '\n';
ficha = ficha + 'Plataformas: ' + plataformasStr + '\n';
ficha = ficha + '¿Es multijugador?: ' + multijugadorStr + '\n';

console.log('Contenido a escribir:', ficha);

var salidaDir = path.join(__dirname, '/salida');
fs.mkdirSync(salidaDir, { recursive: true });
var archivoPath = path.join(salidaDir, 'ficha-videojuego.txt');
fs.writeFileSync(archivoPath, ficha, 'utf8');

console.log('Archivo generado en: ' + archivoPath);