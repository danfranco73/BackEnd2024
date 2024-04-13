import mongoose from 'mongoose';
import express from 'express';
import userRouter from './routes/userRouter.js';
import courseRouter from './routes/courseRouter.js';
import studentRouter from './routes/studentRouter.js';

const app = express();

const userName = encodeURIComponent("DanFran");
const password = encodeURIComponent("Zh9KOQk2n9xcaXQF");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const uri = `mongodb+srv://${userName}:${password}@ecommerce.0mbxros.mongodb.net/Class-16?retryWrites=true&w=majority&appName=eCommerce`;



mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log(error));


app.use('/api/users', userRouter);
app.use('/api/courses', courseRouter);
app.use('/api/students', studentRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});