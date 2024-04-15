import mongoose from 'mongoose';

const orderCollection = 'orders';

// armo un schema para la pizzeria en funcion del tamaño y la variedad de pizzas
const orderSchema = new mongoose.Schema({
    user: {type: String, required: true},
    variedad: {type: String, required: true},
    size: {
        type: String,
        enum: ['personal', 'mediana', 'grande'],
        required: true
    },
    cantidad: {type: Number, required: true},
    precio: {type: Number, required: true}
});


const orderModel = mongoose.model(orderCollection, orderSchema);

export default orderModel;