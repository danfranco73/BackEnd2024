import mongoose from 'mongoose';
import express from 'express';
import orderRouter from './routes/orderRouter.js';

const app = express();

const userName = encodeURIComponent("DanFran");
const password = encodeURIComponent("Zh9KOQk2n9xcaXQF");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = `mongodb+srv://${userName}:${password}@ecommerce.0mbxros.mongodb.net/Clase-17?retryWrites=true&w=majority&appName=eCommerce`;



mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));


app.use('/api/orders', orderRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});

