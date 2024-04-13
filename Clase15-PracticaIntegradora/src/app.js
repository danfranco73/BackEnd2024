import express from "express";
import __dirname from "./utils/utils.js";
import handlebars from "express-handlebars";
import viewRouter from "./routes/viewsRouter.js";
import productRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/cartsRouter.js";
import chatRouter from "./routes/chatRouter.js";
import { Server } from "socket.io";
import mongoose from "mongoose";
/* import websocket from "./websocket.js"; */

const userName = encodeURIComponent("DanFran");
const password = encodeURIComponent("Zh9KOQk2n9xcaXQF");

const uri = `mongodb+srv://${userName}:${password}@ecommerce.0mbxros.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=eCommerce`;

async function runMain() {
  await mongoose.connect(uri);
}

try {
  runMain();
  console.log("Conectado a la DB en la Web");
} catch (error) {
  console.error("Error al conectar a la DB en la Web");
}

// defino el puerto
const port = 8080;
const app = express();

// creo el servidor http
const httpServer = app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname} + "/public"`));

// handlebars
app.engine("handlebars", handlebars.engine());
app.set("views","src/views");
app.set("view engine", "handlebars");

// rutas
app.use("/", viewRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/chat", chatRouter);

// middleware de error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// conecto el servidor http con socket.io
const io = new Server(httpServer);
// uso mi modulo websocket para los productos
io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
  socket.on("newProduct", (data) => {
    productManager.addProduct(data);
    data.push(data);
    io.emit("sendProducts", data);
  });
  socket.on("newMessage", (data) => {
    chat.addMessage(data);
    io.emit("sendMessage", data);
  });
  socket.on("newCart", (data) => {
    cartManager.addCart(data);
    io.emit("sendCart", data);
  });
  // uso mi modulo websocket para el chat
  socket.on("newMessage", (data) => {
    chat.addMessage(data);
    io.emit("sendMessage", data);
  });
  // uso mi modulo websocket para mandar todos los mensajes a la pagina
  socket.on("allMessages", (data) => {
    io.emit("allMessages", data);
  });
});

export default app;