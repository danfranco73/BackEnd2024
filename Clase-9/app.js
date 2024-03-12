import express from "express";
import handlbars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

app.engine("handlebars", handlbars.engine()); 

app.set("views", `${__dirname}` + "/src/views"); 

app.set("view engine", "handlebars"); 

app.use(express.static(__dirname + "/public"));

let users = [
  {
    id: 1,
    name: "Raul",
    surname: "Gonzalez",
    age: 30,
    email: "raul@mail.com",
    phone: 1234567890,
  },
  {
    id: 2,
    name: "Juan",
    surname: "Perez",
    age: 25,
    email: "juan@mail.com",
    phone: 987654321,
  },
  {
    id: 3,
    name: "Ana",
    surname: "Gomez",
    age: 35,
    email: "",
    phone: 6789012345,
  },
  {
    id: 4,
    name: "Joaco",
    surname: "El Profe",
    age: 40,
    email: "maria@mail.com",
    phone: 888888888,
  },
  {
    id: 5,
    name: "Lucia",
    surname: "Nerea",
    age: 20,
    email: "lucia@mail.com",
    phone: 1234509876,
  },
];

app.get("/", (req, res) => {
  let random = Math.floor(Math.random() * users.length);
  res.render("index", users[random]);
});

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
