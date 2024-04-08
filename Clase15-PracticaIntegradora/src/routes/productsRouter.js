import { Router } from "express";
import upload from "../utils/utilMulter.js";
import fs from "fs";
import __dirname from "../utils/utils.js";
import path from "path";
// import ProductManager from "../dao/ProductsManager.js";
import ProductsManagerModel from "../dao/ProductsManagerModel.js";

const filePath = path.resolve(__dirname, "../json/products.json");

const productManager = new ProductsManagerModel();

const router = Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    const products = await productManager.getProducts().slice(0, limit);
    res.send({
      status: "success",
      payload: products,
    });
  } else {
    const products = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.json(products);
  }
});

router.get("/:pid", async (req, res) => {
  const id = req.params.pid;
  const product = await productManager.getProductById(id);
  if (product) {
    res.send({
      status: "success",
      payload: product,
    });
  } else {
    res.status(404).send({
      status: "error",
      message: "Producto no encontrado",
    });
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, code, price, stock, category } = req.body;
  const newProduct = {
    title,
    description,
    code,
    price,
    stock,
    category,
  };
  const product = await productManager.addProduct(newProduct);
  res.send({
    status: "success",
    payload: product,
  });
});

router.put("/:pid", upload.single("image"), async (req, res) => {
  const id = req.params.pid;
  const { title, description, code, price, stock, category } = req.body;
  const updatedProduct = {
    title,
    description,
    code,
    price,
    stock,
    category,
    image: req.file.filename,
  };
  const product = await productManager.updateProduct(id, updatedProduct);
  if (product) {
    res.send({
      status: "success",
      payload: product,
    });
  } else {
    res.status(404).send({
      status: "error",
      message: "Producto no encontrado",
    
    });
  }
});

router.delete("/:pid", async (req, res) => {
  const id = req.params.pid;
  const deleted = await productManager.deleteProduct(id);
  if (deleted) {
    res.send({
      status: "success",
      message: "Producto eliminado",
     });
  } else {
    res.status(404).send({ 
      status: "error",
      message: "Producto no encontrado",
    });
  }
});

export default router;
