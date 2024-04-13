import { Router } from "express";
import userModel from '../dao/models/usersModel.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// busco solo los usuarios que tengan el nombre pasado por query
userRouter.get('/search', async (req, res) => {
    try {
        const users = await userModel.find({ first_name: req.query.first_name }).explain();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// creo un usuario
userRouter.post('/', async (req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// traigo el ultimo usuario creado
userRouter.get('/last', async (req, res) => {
    try {
        const user = await userModel.findOne().sort({ $natural: -1 });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
})


export default userRouter;