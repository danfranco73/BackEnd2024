// fs con promesas
const fs = require('fs').promises;

const file = 'archivo.txt';

fs.writeFile(file, 'Hola Mundo')
    .then(() => {
        console.log('Archivo creado');
        return fs.readFile(file, 'utf8');
    })
    .then(contenido => {
        console.log(contenido);
    })
    .catch(err => {
        console.log('Error:', err);
    });

// fs con promesas y async/await
const file1 = 'archivo1.txt';

async function init() {
    try {
        await fs.writeFile(file1, 'Hola Mundo');
        console.log('Archivo creado');
        const contenido = await fs.readFile(file1, 'utf8');
        console.log(contenido);
    } catch (err) {
        console.log('Error:', err);
    }
}

init();



