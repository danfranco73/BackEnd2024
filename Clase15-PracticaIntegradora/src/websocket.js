import ProductsManagerModel from "./dao/ProductsManagerModel.js";
import ChatManagerDb from "./dao/chatManagerDb.js";
import CartManagerDB from "./dao/cartManagerDB.js";

const chatManager = new ChatManagerDb();
const cartManager = new CartManagerDB();
const productManager = new ProductsManagerModel();

const WebSocket = (serverIO) => {
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
    socket.on("message", (data) => {
      chatManager.addMessage(data);
      serverIO.emit("messageShow", data);
    });
    socket.on("chatMessage", (data) => {
      chatManager.addMessage(data);
      serverIO.emit("allMessage", data);
    });
    // Cart
    socket.on("newCart", (data) => {
      cartManager.addCart(data);
      serverIO.emit("sendCart", data);
    });
  });
};

export default WebSocket;
