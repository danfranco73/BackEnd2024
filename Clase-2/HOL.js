// Registrador de ticket de eventos
// Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

/* Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío. 
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
*/

class TicketManager {
    #eventos = [];
    #precioBaseDeGanancia = 0;

    getEventos() {
        return this.#eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        const id = this.#eventos.length + 1;
        const evento = {
            id,
            nombre,
            lugar,
            precio: precio + (precio * 0.15),
            capacidad,
            fecha,
            participantes: []
        };
        this.#eventos.push(evento);
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.#eventos.find(evento => evento.id === idEvento);
        if (!evento) {
            console.log('El evento no existe');
            return;
        }
        if (evento.participantes.includes(idUsuario)) {
            console.log('El usuario ya está registrado');
            return;
        }
        evento.participantes.push(idUsuario);
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.#eventos.find(evento => evento.id === idEvento);
        if (!evento) {
            console.log('El evento no existe');
            return;
        }
        const nuevoEvento = { ...evento, id: this.#eventos.length + 1, lugar: nuevaLocalidad, fecha: nuevaFecha, participantes: [] };
        this.#eventos.push(nuevoEvento);
    }
}

const ticketManager = new TicketManager();
ticketManager.agregarEvento('Evento 1', 'Lugar 1', 100);
ticketManager.agregarEvento('Evento 2', 'Lugar 2', 200);
ticketManager.agregarEvento('Evento 3', 'Lugar 3', 300);
ticketManager.agregarEvento('Evento 4', 'Lugar 4', 400);
ticketManager.agregarEvento('Evento 5', 'Lugar 5', 500);
ticketManager.agregarUsuario(1, 1);
ticketManager.agregarUsuario(1, 2);
ticketManager.agregarUsuario(1, 3);
ticketManager.agregarUsuario(1, 4);
ticketManager.agregarUsuario(1, 5);
ticketManager.agregarUsuario(1, 6);

ticketManager.ponerEventoEnGira(1, 'Lugar 6', new Date());

console.log(ticketManager.getEventos());

