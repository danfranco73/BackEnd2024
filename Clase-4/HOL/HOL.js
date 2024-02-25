

const fs = require('fs').promises;
const path = require('path');
const ManagerUsuarios = require('./ManagerUsuarios');

// creo una instancia de ManagerUsuarios
const manager = new ManagerUsuarios();

// creo un usuario
const usuario = {
    nombre: 'Daniel',
    apellido: 'Franco',
    edad: 51,
    curso: 'Fullstack'
};

// guardo el usuario
manager.guardar(usuario);

// consulto los usuarios
manager.consultarUsuarios();

// leo el archivo usuarios.json
async function readFile()
{
    try {
        const contenidoStr = await fs.readFile(path.join(__dirname, 'Usuarios.json'), 'utf8');
        const contenidoObj = JSON.parse(contenidoStr);
        console.log(contenidoObj);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log('No hay usuarios');
        } else {
            throw new Error(err);
        }
    }
}
