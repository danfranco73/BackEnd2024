/* Dado un arreglo de objetos de tipo usuario, realizar un servidor en express que permita obtener dichos usuarios.
La ruta raíz ‘/’ debe devolver todos los usuarios
la ruta /:userId debe devolver sólo al usuario con dicho Id.
 */

import express from 'express';

const app = express();  // Crear un servidor express

const usuarios = [
    { id: 1, nombre: 'William' },
    { id: 2, nombre: 'William' },
    { id: 3, nombre: 'William' },
    { id: 4, nombre: 'William' },
];

app.get('/', (req, res) => {
    res.json(usuarios);
});

app.get('/:userId', (req, res) => {
    const { userId } = req.params;
    const usuario = usuarios.find(usuario => usuario.id == userId);
    res.json(usuario);
});

app.listen(8080, () => {
    console.log('Servidor express escuchando en el puerto 8080');
});

