// using mongoose for the schema and model of the products creating from the ProductManager.js

import productModel from "./models/productModel.js";

class ProductsManagerModel {
    constructor() {
        this.products = productModel;
    }
    
    async getProducts() {
        try {
        const products = await this.products.find();
        return products;
        } catch (error) {
        console.log(error);
        }
    }
    
    async addProduct(product) {
        try {
        const newProduct = new this.products(product);
        await newProduct.save();
        } catch (error) {
        console.log(error);
        }
    }
    
    async getProductById(id) {
        try {
        if (id === undefined) throw new Error("No se ha ingresado un id");
        if (id < 1) throw new Error("El id debe ser mayor a 0");
        if (id === null) throw new Error("El id no puede ser nulo");
        const product = await this.products.findById(id);
        return product;
        } catch (error) {
        console.log(error);
        }
    }
    
    async updateProduct(id, product) {
        try {
        const updatedProduct = await this.products.findByIdAndUpdate(id, product, {
            new: true,
        });
        return updatedProduct;
        } catch (error) {
        console.log(error);
        }
    }
    
    async deleteProduct(id) {
        try {
        await this.products.findByIdAndDelete(id);
        } catch (error) {
        console.log(error);
        }
    }
    }

export default ProductsManagerModel;

