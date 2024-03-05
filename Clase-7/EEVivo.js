// utilizo lo los metodos para poder testearlos en postman
// type: module

import express from 'express';
const PORT = 8080;
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

import ManagerUsuarios from './ManagerUsuarios.js';
const managerUsuarios = new ManagerUsuarios('./Usuarios.json');

const app = express();

/* app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

app.get('api/usuarios', async (req, res) => {
  const usuarios = await managerUsuarios.getAll();
  res.send(usuarios);
});

app.post('api/usuarios', async (req, res) => {
  const usuario = req.body;
  const usuarios = await managerUsuarios.CreateUser(usuario);
  res.send(usuarios);
});

app.get('api/usuarios/:id', async (req, res) => {
  const id = req.params.id;
  const usuarios = await managerUsuarios.getById(id);
  res.send(usuarios);
});

app.put('api/usuarios/:id', async (req, res) => {
  const id = req.params.id;
  const usuario = req.body;
  const usuarios = await managerUsuarios.updateUser(id, usuario);
  res.send(usuarios);
});

app.delete('api/usuarios/:id', async (req, res) => {
  const id = req.params.id;
  const usuarios = await managerUsuarios.deleteUser(id);
  res.send(usuarios);
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localclshost:${PORT}`);
});