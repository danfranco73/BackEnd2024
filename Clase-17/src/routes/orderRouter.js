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
} );

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


export default orderRouter;