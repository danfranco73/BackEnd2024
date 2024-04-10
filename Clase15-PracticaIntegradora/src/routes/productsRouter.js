import { Router } from "express";
import upload from "../utils/utilMulter.js";
import __dirname from "../utils/utils.js";
import ProductsManagerModel from "../dao/ProductsManagerModel.js";

const productManager = new ProductsManagerModel();

const router = Router();

router.get("/", async (req, res) => {
  const limit = req.query.limit;
  if (limit) {
    // limito la cantidad de productos a mostrar
    const products = await productManager.getProducts();
    const limitedProducts = products.slice(0, limit);
    res.send({
      status: "success",
      payload: limitedProducts,
    });
  } else {
    const products = await productManager.getProducts();
    res.send({
      status: "success",
      payload: products,
    });
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

// Actualizar un producto (recuerdo estoy usando mongo)

router.put("/:pid", async (req, res) => {
  const id = req.params.pid;
  const { title, description, code, price, stock, category } = req.body;
  const updatedProduct = await productManager.updateProduct(id, {
    title,
    description,
    code,
    price,
    stock,
    category,
  });
  if (updatedProduct) {
    res.send({
      status: "success",
      payload: updatedProduct,
    });
  } else {
    res.status(404).send({
      status: "error",
      message: "Producto no encontrado",
    });
  }
} );


router.delete("/:pid", async (req, res) => {
  const id = req.params.pid;
  await productManager.deleteProduct(id);
  res.send({
    status: "success",
    message: "Producto eliminado",
  });
} );

export default router;
