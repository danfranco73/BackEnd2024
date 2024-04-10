import { Router } from "express";
// import __dirname from "../utils/utils.js";
// import path from "path";
// import ProductManager from "../dao/ProductsManager.js";
import ProductsManagerModel from "../dao/ProductsManagerModel.js";
import ChatManagerDb from "../dao/chatManagerDb.js";
import CartManagerDB from "../dao/cartManagerDB.js";


// creo el manager para el chat simple en tiempo real
const chatManager = new ChatManagerDb();
const messages = chatManager.getMessages();

const productManager = new ProductsManagerModel();
const products = productManager.getProducts();

const router = Router();

router.get("/", async (req, res) => {
  res.render("home", {
    layout: "main",
    products: await products,
    style: "style.css",
  });
});

router.get("/realTimeProducts", async (req, res) => {
  res.render("realTimeProducts", {
    layout: "main",
    products: await products,
    style: "style.css",
  });
});
// implemento la ruta para el chat en tiempo real
router.get("/chat", async (req, res) => {
  res.render("chat", {
    layout: "main",
    messages: await messages,
    style: "style.css",
  });
});

export default router;
