// practica de modulos nativos : fs + crypto
/* Cómo lo hacemos? Se creará una clase “UserManager” que permitirá guardar usuarios en un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar los módulos nativos  fs y crypto, El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la contraseña debe estar hasheada por seguridad
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide. */

import crypto from "crypto";
import fs from "fs";


class UserManager {
  constructor() {
    this.users = [];
  }
    createUser(user) {
        // si no tiene nombre de usuario o contraseña, no se puede crear el usuario
        if (!user.username || !user.password) {
            return "Error";
        }
        let hash = crypto.createHash("sha256").update(user.password).digest("hex");
        user.password = hash;
        this.users.push(user);
        fs.writeFileSync("Clase-5/Usuarios.json", JSON.stringify(this.users,null,"\t"));
    }

    validateUser(username, password) {
        let hash = crypto.createHash("sha256").update(password).digest("hex");
        let user = this.users.find((user) => user.username === username && user.password === hash);
        if (user) {
            return "Usuario Logueado";
        } else {
            return "Error en los datos ingresados";
        }   
    }
}
 // Testing

let manager = new UserManager();
manager.createUser({name: "Luci", surname: "Nerea", username: "LuNerea", password: "1234"});
console.log(manager.validateUser("LuNerea", "1234")); // Logueado
console.log(manager.validateUser("DanFran", "12345")); // Error
console.log(manager.validateUser("LuNerea", "12348")); // Error
