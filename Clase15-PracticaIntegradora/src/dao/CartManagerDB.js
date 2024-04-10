import cartModel from "./models/cartModel.js";
import ProductsManagerModel from "./ProductsManagerModel.js";

const productManager = new ProductsManagerModel();

class CartManagerDB {
  constructor() {
    this.carts = cartModel;
  }

  async getCarts() {
    try {
      const carts = await this.carts.find();
      return carts;
    } catch (error) {
      console.log(error);
    }
  }

  async addCart(cart) {
    try {
      const newCart = new this.carts(cart);
      await newCart.save();
      return newCart;
    } catch (error) {
      console.log(error);
    }
  }

  async getCartById(id) {
    try {
      if (id === undefined) throw new Error("No se ha ingresado un id");
      if (id < 1) throw new Error("El id debe ser mayor a 0");
      if (id === null) throw new Error("El id no puede ser nulo");
      const cart = await this.carts.findById(id);
      return cart;
    } catch (error) {
      console.log(error);
    }
  }

  async updateCart(id, cart) {
    try {
      const updatedCart = await this.carts.findByIdAndUpdate(id, cart, {
        new: true,
      });
      return updatedCart;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCart(id) {
    try {
      await this.carts.findByIdAndDelete(id);
    } catch (error) {
      console.log(error);
    }
  }

  // agrego un producto a un carrito usando el cid del carrito y el pid del producto, si el producto ya existe en el carrito, se incrementa la cantidad
  async addProductToCart(cid, pid) {
    try {
      const cart = await this.getCartById(cid);
      const product = await productManager.getProductById(pid);
      if (!product) throw new Error("Producto no encontrado");
      // si el producto ya existe en el carrito, incremento la cantidad
      const existingProduct = cart.products.find(
        (p) => p.product.toString() === pid
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
      // si el producto no existe en el carrito, lo agrego
      else {
        cart.products.push({ product: pid, quantity: 1 });
      }
      await this.updateCart(cid, cart);
      return cart;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default CartManagerDB;
