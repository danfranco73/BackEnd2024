/* Crear un servidor con el módulo nativo de nodejs “http”. Setear una respuesta que contenga el mensaje “¡Mi primer hola mundo desde backend!” 
El servidor debe escuchar en el puerto 8080.  (Correr con nodemon)
Probar el servidor desde el navegador.
Hacer algún cambio en código y corroborar que se reinicie automáticamente.
 */

import http from 'http';
const PORT = 8080;

const server = http.createServer((req, res) => {
    res.end('¡Mi primer hola mundo desde backend 2024 ok!');
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});