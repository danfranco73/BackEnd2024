import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import userRouter from './routes/userRouter.js';
import viewsRouter from './routes/viewsRouter.js';
import __dirname from './utils/constantsUtil.js';
import handlebars from 'express-handlebars';
import initializatePassport from './config/passportConfig.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Passport
initializatePassport();
app.use(passport.initialize());

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/../views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/user', userRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server active in http://localhost:${PORT}`);
});