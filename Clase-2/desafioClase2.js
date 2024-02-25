// Desafio clase 2 Daniel Franco

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
            // generate id
            if (this.products.length === 0) {
                product.id = 1;
            } else {
                product.id = this.products[this.products.length - 1].id + 1;
            }
            // check if code exists
        if (this.products.some(product => product.code === code)) {
            console.log('El código ya existe');
            return;
        }
        // add product to products array
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log('Not found');
            return;
        }
        return product;
    }
}

// Testing
console.log('Testing');

// creo una instancia de ProductManager

const productManager = new ProductManager();

// se llama al metodo getProducts para ver si hay productos
console.log(productManager.getProducts());

// se llama al metodo addProduct para agregar este producto
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);    
 // se muestra el producto agregado con id autogenerado
console.log(productManager.getProducts());

// agrego el mismo producto para ver si el codigo ya existe
productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

// llamo al metodo getProductById para ver si el producto fue agregado
console.log(productManager.getProductById(1));
// llamo al metodo getProductById para ver si el producto existe
console.log(productManager.getProductById(2));


