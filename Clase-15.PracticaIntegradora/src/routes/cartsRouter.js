import { Router } from "express";
import CartManagerModel from "../dao/cartManagerDB.js";

const cartManager = new CartManagerModel();

const router = Router();

let carts = [];

// obtengo todos los carritos
router.get("/", async (req, res) => {
  const carts = await cartManager.getCarts();
  res.send({
    status: "success",
    payload: carts,
  });
});

// obtengo un carrito por id
router.get("/:cid", async (req, res) => {
  const id = req.params.cid;
  const cart = await cartManager.getCartById(id);
  if (cart) {
    res.send({
      status: "success",
      payload: cart,
    });
  } else {
    res.status(404).send({
      status: "error",
      message: "Carrito no encontrado",
    });
  }
});

// creo un carrito
router.post("/", async (req, res) => {
  const cart = await cartManager.addCart();
  res.status(201).send({
    status: "success",
    payload: cart,
  });
});

// agrego un producto a un carrito usando el cid del carrito y el pid del producto y la cantidad
router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const cart = await cartManager.addProductToCart(
      req.params.cid,
      req.params.pid
    );
    res.send({
      status: "success",
      payload: cart,
    });
  } catch (error) {
    res.status(404).send({
      status: "error",
      message: error.message,
    });
  }
});

// borro un carrito por id
router.delete("/:cid", async (req, res) => {
  const id = req.params.cid;
  await cartManager.deleteCart(id);
  res.send({
    status: "success",
    message: "Carrito eliminado",
  });
});

export default router;
