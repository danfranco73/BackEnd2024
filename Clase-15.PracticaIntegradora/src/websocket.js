import ProductsManagerModel from "./dao/ProductsManagerModel.js";
import CartManagerDB from "./dao/cartManagerDB.js";
import chatRouter from "./routes/chatRouter.js";


const cartManager = new CartManagerDB();
const productManager = new ProductsManagerModel();
const chat = chatRouter;

const WebSocket = (serverIO) => {
  // escucho las conexiones entrantes
  serverIO.on("connection", (socket) => {
    // Connect
    console.log("Client connected");
    // Disconnect
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
    // Products
    socket.on("newProduct", (data) => {
      productManager.addProduct(data);
      data.push(data);
      serverIO.emit("sendProducts", data);
    });
    // Chat
    // escucho los mensajes entrantes y devuelo el mensaje a todos los clientes junto con el nombre del autor
    socket.on("newMessage", (data) => {
      chat.addMessage(data);
      serverIO.emit("sendMessage", data);
    });

    // Cart
    socket.on("newCart", (data) => {
      cartManager.addCart(data);
      serverIO.emit("sendCart", data);
    });
  });
};

export default WebSocket;
