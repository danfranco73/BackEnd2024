// Con este archivo se va a manejar la lógica del chat en tiempo real. Se va a encargar de enviar y recibir mensajes. usando el chat.handlebars como vista.

const  socket = io();

socket.on("sendMessage", (data) => {
  console.log(data);
  render(data);
});

function render(data){
  let html = data.map((elem, index) => {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`)
  }).join(" ");
  document.getElementById("messages").innerHTML = html;
}

function addMessage(e){
  let message = { message: document.getElementById("message").value, author: document.getElementById("user").value };
}

socket.emit("newMessage", message);
return false;


