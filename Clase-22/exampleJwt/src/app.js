import express from 'express';
import sessionRouter from './routes/sessionRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import __dirname from './utils/constantsUtil.js';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/session', sessionRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server active in http://localhost:${PORT}`);
});