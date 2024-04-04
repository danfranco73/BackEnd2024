import express from 'express';
import petsRouter from "./src/routes/petsRouter.js";
import usersRouter from "./src/routes/usersRouter.js";
import __dirname from "./utils.js";

const app = new express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* // path to serve static files
app.use('/static',express.static("public")); */

// path absolute
app.use(express.static(__dirname + "/public"));
app.use("/api/pets", petsRouter);
app.use("/api/users", usersRouter);

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    }
);

export default app;