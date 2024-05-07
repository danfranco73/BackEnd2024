import express from 'express';
import session from 'express-session';
//import fileStore from 'session-file-store';
import mongoStore from 'connect-mongo';

import sessionRouter from './routes/sessionRouter.js';

//const fileStorage = fileStore(session);

const app = express();

//Session Example
app.use(session(
    {
        /*
        store: new fileStorage(
            {
                path: "./sessions",
                ttl: 100,
                retries: 0
            }
        ),
        */
        store: mongoStore.create(
            {
                mongoUrl: "mongodb://localhost:27017/class-19",
                mongoOptions: { useUnifiedTopology: true },
                ttl: 1
            }
        ),
        secret: 'secretPhrase',
        resave: true,
        saveUninitialized: true
    }
));
app.use('/session', sessionRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Start Server in http://localhost:${PORT}`);
});