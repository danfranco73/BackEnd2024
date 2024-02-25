
export class ProductManager {
  constructor(fileName) {
    this.path = fileName;
    this.products = [];
  }

  getProducts() {
    const products = this.products;
    return products;
  }


  getProductById(id) {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product) {
    const id = this.products.length + 1;
    this.products.push({ ...product, id });
  }

  updateProduct(id, product) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error("Product not found");
    }
    this.products[index] = { ...product, id };
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}

