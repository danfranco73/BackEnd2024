// Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
// Utilizar el módulo fs y sus operaciones de tipo callback.

const fs = require('fs');
const path = require('path');

const fecha = new Date();
const fechaString = fecha.toLocaleString();

fs.writeFile(path.join(__dirname, 'actividadFecha.txt'), fechaString, (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
});

fs.readFile(path.join(__dirname, 'actividadFecha.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// se me creo el txt con la fecha y hora actual y me la muestra por consola