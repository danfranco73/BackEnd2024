import express from "express";
import __dirname from "./utils/utils.js";
import handlebars from "express-handlebars";
import viewRouter from "./routes/viewsRouter.js";
import productRouter from "./routes/productsRouter.js";
import cartRouter from "./routes/cartsRouter.js";
import { Server } from "socket.io";

const port = 8080;
const app = express();

const httpServer = app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname} + "/public"`));
app.set("view engine", "handlebars");
app.set("views", "./views");

app.engine(
  "handlebars",
  handlebars.engine({
    extname: ".handlebars",
    defaultLayout: "home.handlebars",
    layoutsDir: `${__dirname} + "/views/layouts"`,
    partialsDir: `${__dirname} + "/views/partials"`,
  })
);

const serverIO = new Server(httpServer);

serverIO.on("connection", (socket) => {
  socket.on("newProduct", (data) => {
    data.push(data);
    serverIO.emit("sendProducts", data);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});



app.use((req, res, next) => {
  req.io = serverIO;
  next();
});

app.use("/", viewRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default serverIO;
