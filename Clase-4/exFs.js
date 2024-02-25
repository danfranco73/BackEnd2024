// ejemplo de file system
const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'archivo.txt'), 'contenido del archivo', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
});

fs.readFile(path.join(__dirname, 'archivo.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.appendFile(path.join(__dirname, 'archivo.txt'), 'contenido adicional', (err) => {
    if (err) throw err;
    console.log('El contenido ha sido agregado');
}
);

fs.unlink(path.join(__dirname, 'archivo.txt'), (err) => {
    if (err) throw err;
    console.log('El archivo ha sido eliminado');
}); // ya probe comentar y deja el archivo.txt creado

fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
    console.log(files);
});

fs.mkdir(path.join(__dirname, 'nueva-carpeta'), (err) => {
    if (err) throw err;
    console.log('La carpeta ha sido creada');
});

fs.rmdir(path.join(__dirname, 'nueva-carpeta'), (err) => {
    if (err) throw err;
    console.log('La carpeta ha sido eliminada');
});  // ya probe comentar y deja la nueva-carpeta creada

