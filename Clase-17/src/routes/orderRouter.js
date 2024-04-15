import { Router } from "express";
import orderModel from '../dao/models/ordersModel.js';


const orderRouter = Router();

orderRouter.get('/', async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// busco solo los pedidos que tengan el nombre pasado por query
orderRouter.get('/search', async (req, res) => {
    try {
        const orders = await orderModel.find({ user: req.query.user }).explain();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// creo un pedido
orderRouter.post('/', async (req, res) => {
    try {
        const order = new orderModel(req.body);
        await order.save();
        res.json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// aplico agregattion para sumar el total de los pedidos de pizzas mediana
orderRouter.get('/total', async (req, res) => {
    try {
        const total = await orderModel.aggregate([
            // filtro solo las pizzas medianas
            { $match: { size: 'medium' } },
            // agrupo por variedad y sumo el precio y la cantidad
            { $group: { _id: "$variedad", total: { $sum: "$precio" }, cantidad: { $sum: "$cantidad" } } },
            // uso el sort para ordenar de mayor a menor
            { $sort: { cantidad: -1 } },
            // agrupo los documentos en un solo documento con el nombre orders
            { $group: { _id: "orders", orders: { $push: "$$ROOT" } } },
            // agrupo todos los elementos en un unico documento generando un nuevo ObjectId
            { $project: { _id: 0 } },
            // agrego los elementos a la coleccion "reports"
            { $merge: { into: "reports" },}
        ]);
        res.json(total);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default orderRouter;