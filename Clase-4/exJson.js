/* Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
Esto creará un archivo especial (lo veremos más adelante) de nombre package.json
Lea el archivo package.json y declare un objeto con el siguiente formato y datos:
const info = {
    contenidoStr: (contenido del archivo leído en formato string),
    contenidoObj: (contenido del archivo leído en formato objeto),
    size: (tamaño en bytes del archivo)
}
Muestre por consola el objeto info luego de leer el archivo
Guardar el objeto info en un archivo llamado info.json dentro de la misma carpeta de package.json
Incluir el manejo de errores (con throw new Error)
Utilizar el módulo promises de fs dentro de una función async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones json->objeto y viceversa
 */

const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, '../package.json');
const infoPath = path.join(__dirname, 'info.json');

async function readFile()
{
    try {
        const contenidoStr = await fs.readFile(filePath, 'utf8');
        const contenidoObj = JSON.parse(contenidoStr);
        const size = contenidoStr.length;
        const info = {
            contenidoStr,
            contenidoObj,
            size
        };
        console.log(info);
        await fs.writeFile(infoPath, JSON.stringify(info, null, 2));
    } catch (err) {
        throw new Error(err);
    }
}

readFile();

