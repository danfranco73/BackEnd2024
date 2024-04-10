// en funcion a mi home.handlebars armare el index.js que solo muestra los productos

const socket = io();

let data = [];

socket.emit("getProducts");

socket.on("sendProducts", (products) => {
  data = products;
  updateList(data);
}
);

socket.on("getProducts", (products) => {
  data = products;
  updateList(data);
}
);

socket.on("updateProducts", (products) => {
  data = products;
  updateList(data);
}
);

const list = document.getElementById("list");

const updateList = async (data) => {
  list.innerHTML = "";
  await data.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `Title: ${product.title} - Price: ${product.price}`;
    list.appendChild(li);
  });
}

socket.on("connect", () => {
  console.log("Connected!");
});

socket.on("disconnect", () => {
  console.log("Disconnected!");
});



