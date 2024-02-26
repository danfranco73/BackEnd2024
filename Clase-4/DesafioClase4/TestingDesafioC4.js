import { ProductManager } from "./ProductManager.js";
import path from "path";

const filePath = path.resolve("Clase-4/DesafioClase4/products.json");


// Testing
const productManager = new ProductManager(filePath);

console.log(productManager.getProducts());

productManager.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

productManager.addProduct({
    title: "producto prueba numero 2",
    description: "Este es un producto prueba bis",
    price: 500,
    thumbnail: "Sin imagen otra vez",
    code: "abc123444",
    stock: 98,
  });
console.log(productManager.getProducts());

console.log(productManager.getProductById(1));

productManager.updateProduct(2, {
  title: "producto prueba modificado",
  description: "Este es un producto prueba modificado",
  price: 300,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});

console.log(productManager.getProducts());

productManager.deleteProduct(1);
console.log(productManager.getProducts()); 