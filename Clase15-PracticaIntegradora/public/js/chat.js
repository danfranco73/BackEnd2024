const socket = io();

// usar el formulario del chat en chat.handlebars para enviar mensajes y mostrarlos en el chat
//  segun se muestra en el view:
/* {<div class="box">
  <label id="user-input">Usuario</label>
  <input id="user-input" type="text" placeholder="Tu nombre"/>
  <hr />
  <label for="chat-message">Mensaje:</label>
  <input id="chat-message" placeholder="Escribe aqui" type="text" />
  <button onclick="send();">Enviar</button>
  <hr />
  <div id="all-messages"></div>
</div>
}*/

// pruebo conexion con el servidory lo muestro en la consola
socket.on("connect", () => {
  console.log("Connected");
});


// enviar mensajes
function send() {
  const user = document.getElementById("user-input").value;
  const message = document.getElementById("chat-message").value;
  socket.emit("newMessage", { user, message });
}

// recibir mensajes
socket.on("sendMessage", (data) => {
  const messages = document.getElementById("all-messages");
  messages.innerHTML += `<p>${data.user}: ${data.message}</p>`;
});

// muestro todos los mensajes en la pagina
socket.on("allMessages", (data) => {
  const messages = document.getElementById("all-messages");
  messages.innerHTML = "";
  data.forEach((message) => {
    messages.innerHTML += `<p>${message.user}: ${message.message}</p>`;
  });
});
