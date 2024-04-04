
const socket = io.connect();
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  socket.emit("newProduct", input.value);
  input.value = "";
} );

socket.on("sendProducts", (data) => {
  ul.innerHTML = "";
  data.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = product;
    ul.appendChild(li);
  });
} );

