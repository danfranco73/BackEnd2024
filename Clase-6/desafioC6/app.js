import { ProductManager } from "./ProductManager";
import express from "express";

const app = express();

app.use(express.json());

const productManager = new ProductManager();

app.get("/products", async (req, res) => {
  const products = await productManager.getProducts();
  const limit = req.query.limit;
  if (limit) {
    res.send(products.slice(0, limit));
  } else {
    res.send(products);
  }
});

app.get("/products/:pid", async (req, res) => {
  const product = await productManager.getProductById(req.params.pid);
  res.send(product);
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});