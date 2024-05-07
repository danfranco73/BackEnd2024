import {Router} from 'express';
import jwt from 'jsonwebtoken';
const router = Router();

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        return req.status(401).send({
            status: 'Unauthorized'
        });
    }

    const token = jwt.sign({email, password}, 'CoderSecretPass', {expiresIn: '1h'});

    res.send({
        status: 'success',
        token
    });
});

export default router;