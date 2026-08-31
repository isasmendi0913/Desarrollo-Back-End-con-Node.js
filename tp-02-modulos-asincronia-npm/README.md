# Trabajo Práctico 02 - Módulos, Asincronía y NPM

##  Descripción

Esta aplicación de consola permite gestionar un catalogo de juegos de mesa. El programa lee los datos desde un archivo JSON, los procesa y genera un informe de texto formateado con información detallada de cada juego.

La solución demuestra conceptos fundamentales de Node.js:
- Organización en módulos con responsabilidades separadas
- Operaciones asíncronas no bloqueantes con `fs/promises`
- Uso de `async/await` para flujos legibles
- Manejo robusto de errores con `try/catch`
- Gestión de dependencias con NPM

---

##  Instalación

Para configurar el proyecto en tu entorno local:

# 1. Acceder a la carpeta del proyecto/
cd tp-02-modulos-asincronia-npm
# 2. Instalar las dependencias necesarias
 npm install
# 3. ejecutar estos comandos:
npm rum check -- asegura que  no haya errores.
npm start --  ejecuta el programa.

 1. ¿Qué responsabilidad tiene cada módulo?

cada modulo hace una unica tarea y su responsabilidades:
 --archivos.js: se encarga exclusivamente de lo que tiene que ver con el sistema de archivos. Lee, escribe, crea carpetas. Solo sabe como interactuar con el disco.

--juegos.js: se encarga de procesar los datos de los juegos. Toma un arreglo de objetos y los transforma en un texto formateado. Solo convierte a un juego en una linea del catalogo.

--index.js: es el coordinador. Llama a los otros modulos en el orden correcto, maneja los errores y muestra los mensajes al usuario, solo organiza el trabajo.

 2. ¿Qué diferencia existe entre exportar una función y ejecutarla?

La diferencia es que exportar la funcion permite que  otro archivo decida cuando ejecutarla, mientras que ejecurtarla hacer el trabajo y solo compartir el resultado terminado.

 3. ¿Qué representa la promesa devuelta por fs.readFile?

Es un comprobante de que pedi leer un archivo. Cuando node empieza a leer el archivo me da una promesa de estado:
    --Pendiente: todavia no termino de leer el archivo.
    --Cumplida: ya termine de leer y tengo el contenido del archivo.
    --Rechazada: hubo un error, como que el archivo no exite o no tengo permiso.

 4. ¿Por qué await se utiliza dentro de una función async?

Await solo puede usarse dentro de una funcion declarada con async porque es una regla del lenguaje. Cuando pongo async antes de function, le digo a Node que esa funcion va a tener operaciones que toman tiempo y que va a usar await para esperar a que terminen.

 5. ¿Qué errores pueden llegar al catch de main?

El catch de main atrapa cualquier error que ocurra durante la ejecucion del programa. Algunos errores comunes son:

Error de archivo no encontrado: si el archivo juegos.json no esta en la ruta correcta, fs.readFile lanza un error y el catch lo atrapa.

Error de JSON invalido: si el archivo tiene errores de sintaxis, como una coma de mas o una comilla que falta, JSON.parse lanza un error.

Error de permisos: si no tengo permiso para leer el archivo o para escribir en la carpeta salida, el sistema operativo devuelve un error.

Error de disco lleno: si no hay espacio para guardar el archivo, la escritura falla.

Cualquier error que ocurra, el catch lo atrapa, muestra un mensaje claro y termina el programa con codigo de error para que el usuario sepa que algo fallo.

 6. ¿Por qué se publican package.json y package-lock.json, pero no node_modules?
 
package.json es el archivo principal de configuracion. Es fundamental porque npm lo usa para saber que instalar.

package-lock.json guarda las versiones exactas de todas las dependencias y subdependencias que se instalaron.

node_modules es la carpeta donde npm guarda todas las dependencias descargadas. Ocupa mucho espacio, es codigo descargable.
 7. ¿Para qué se utiliza picocolors y por qué figura en dependencies?

 --picocolors se usa para darle color a los mensajes que muestra el programa en la terminal.

 --Esta en dependencies porque es una libreria que el programa necesita para funcionar correctamente en cualquier entorno. 