import { Router } from "express";
// import __dirname from "../utils/utils.js";
// import path from "path";
// import ProductManager from "../dao/ProductsManager.js";
import ProductsManagerModel from "../dao/ProductsManagerModel.js";
import CartManagerDB from "../dao/cartManagerDB.js";

const cartManager = new CartManagerDB();


const productManager = new ProductsManagerModel();
const products = productManager.getProducts();

const router = Router();

// implemento la ruta para el home de productos
router.get("/", async (req, res) => {
  res.render("home", {
    layout: "main",
    products: await products,
    style: "style.css",
  });
});

// implemento la ruta para el home de productos en tiempo real
router.get("/realTimeProducts", async (req, res) => {
  res.render("realTimeProducts", {
    layout: "main",
    products: await products,
    style: "style.css",
  });
});

// proceso para mostrat el chat en el view
 import chatRouter from "./chatRouter.js";

 router.get("/chat", async (req, res) => {
  res.render("chat", {
    layout: "main",
    message: chatRouter,
    style: "style.css",
  });
});





export default router;
