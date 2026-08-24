# Trabajo practico 01

**Estudiante:** Saul Abraham Isasmendi

## Descripcion
Este proyecto contiene dos programas:

1. **`index.js`**: Genera una ficha de un videojuego con datos propios e inventados (titulo, estudio, anio, plataformas y si es multijugador). La ficha se muestra en la terminal y se guarda automaticamente en `salida/ficha-videojuego.txt`.
2. **`orden-event-loop.js`**: Demuestra el orden de ejecucion del event loop en Node.js, mostrando que el callback de `setTimeout` (con 0 ms) se ejecuta despues de todo el codigo sincrono.

 **Nota sobre los datos del videojuego:**
>>> Los datos utilizados (titulo: *Galactic Odyssey*, estudio: *Starforge Studios*, año 2024, plataformas: PC, PlayStation 5 y Xbox Series X, y multijugador: Si) son completamente originales, creados por el estudiante para este trabajo. 

---

## Requisitos previos
- Node.js instalado (verificar con `node --version`).

---

## Como ejecutar (paso a paso)

### Paso 1: Abrir la terminal
Abre Visual Studio Code, ve al menu **Terminal** y selecciona **New Terminal**. Asegurate de estar dentro de la carpeta del proyecto (`tp-01-fundamentos-node`).

### Paso 2: Ejecutar `index.js`

node index.js
node index.js Camila
noded index.js Sebastian

1.  ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?
JavaScript: JavaScript es el lenguaje de programacion que se usa para crear paginas web interactivas y aplicaciones.

V8: es el motor de JavaScript creado por Google, escrito en C++. Es el encargado de leer, interpretar y ejecutar el codigo JavaScript de forma muy rapida y eficiente. Se usa en Chrome y en Node.js.

Node.js: es un entorno de ejecucion (runtime) que incluye el motor V8 y agrega muchas herramientas adicionales para trabajar con el sistema operativo: leer y escribir archivos, crear servidores web, manejar redes, ejecutar procesos, etc. Gracias a Node.js, podemos usar JavaScript en el servidor o en la computadora, no solo en el navegador.

2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?
setTimeout coloca el callback en la cola de tareas (macrotareas). El event loop primero ejecuta todo el codigo sincrono (el "codigo principal") y, cuando la pila queda vacia, toma el callback de la cola y lo ejecuta. Por eso se ejecuta despues.

3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?
. Bloqueante: la operacion detiene la ejecucion del programa hasta que termina
. No bloqueante: la operacion se inicia y el programa sigue ejecutando; cuando termina, notifica mediante callback, promesa o evento.

4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?
node:path: maneja rutas de archivos y directorios (unir rutas, resolver rutas absolutas).

node:fs: interactua con el sistema de archivos (crear carpetas, leer y escribir archivos).