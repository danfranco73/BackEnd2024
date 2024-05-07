import express from 'express';
import session from 'express-session';
import mongoStore from 'connect-mongo';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';

import __dirname from './utils/constantsUtils.js';
import usersRouter from './routes/usersRouter.js';
import viewsRouter from './routes/viewsRouter.js';

const app = express();

const uri = "mongodb://localhost:27017/class-19";
mongoose.connect(uri);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

//Session Middleware
app.use(session(
    {
        store: mongoStore.create(
            {
                mongoUrl: uri,
                ttl: 20
            }
        ),
        secret: 'secretPhrase',
        resave: true,
        saveUninitialized: true
    }
));

app.use('/api/sessions', usersRouter);
app.use('/', viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in http://localhost:${PORT}`);
});