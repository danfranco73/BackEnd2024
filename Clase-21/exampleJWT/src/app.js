import express from 'express';
import { generateToken, authToken } from './utils.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [];

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    const exist = users.find(user => user.email === email);

    if (exist) {
        return res.status(400).send({
            status: 'error',
            message: 'User already exists'
        });
    }

    const newUser = {name, email, password};
    users.push(newUser);
    const access_token = generateToken(newUser);
    res.send({
        status: 'success',
        access_token
    });
});

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        return res.status(400).send({
            status: 'error',
            message: 'Invalid Credentials'
        });
    }
    const access_token = generateToken(user);
    res.send({
        status: 'success',
        access_token
    });
});

app.get('/current', authToken, (req, res) => {
    res.send({
        status: 'success',
        user: req.user
    });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in Port ${PORT}`);
});