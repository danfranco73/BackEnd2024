/*Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

El Manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Edad
Curso
El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios
 */
import fs from 'fs/promises';
import path from 'path';


class ManagerUsuarios {
    constructor() {
        this.filePath = path.resolve('./Usuarios.json');

    }

    async save(usuario) {
        try {
            const contenidoStr = await fs.readFile(this.filePath, 'utf8');
            const contenidoObj = JSON.parse(contenidoStr);
            contenidoObj.push(usuario);
            await fs.writeFile(this.filePath, JSON.stringify(contenidoObj, null, 2));
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fs.writeFile(this.filePath, JSON.stringify([usuario], null, 2));
            } else {
                throw new Error(err);
            }
        }
    }

    async getAll() {
        try {
            const contenidoStr = await fs.readFile(this.filePath, 'utf8');
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
}

exports.ManagerUsuarios = ManagerUsuarios;