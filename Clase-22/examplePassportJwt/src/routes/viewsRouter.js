import {Router} from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/', (req, res) => {

    res.render(
        'login',
        {
            title: 'JWT Login',
            style: 'index.css',
            script: 'index.js'
        }
    );
});

router.get('/private', auth, (req, res) => {

    res.render(
        'index',
        {
            title: 'Hello',
            style: 'index.css',
            script: 'index.js',
            user: {
                first_name: 'Joaco',
                last_name: 'Cejas',
                email: req.user.email
            }
        }
    );
});

function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: 'Not authenticated'
        });
    }
    const token = authHeader.split(' ')[1]; //Remove "Bearer"
    console.log(token);
    jwt.verify(token, 'CoderSecretPass', (error, credentiales) => {
        if (error) {
            return res.status(403).send({
                message: 'Not authenticated'
            });
        }
        req.user = credentiales;
        console.log(req.user);
        next();
    });
}

export default router;