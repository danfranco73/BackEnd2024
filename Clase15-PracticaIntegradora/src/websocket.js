import ProductsManagerModel from "./dao/ProductsManagerModel.js";

const productManager = new ProductsManagerModel();

const WebSocket = (serverIO) => {
  serverIO.on("connection", (socket) => {
    socket.on("newProduct", (data) => {
      data.push(data);
      serverIO.emit("sendProducts", data);
    });
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

export default WebSocket;
