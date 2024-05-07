import { Router } from "express";
import express from "express";
const port = 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* Desarrollar un sistema sencillo de express
Crear un router para manejo de mascotas en una ruta base ‘/api/pets’, éste gestionará diferentes mascotas en un arreglo como persistencia. Posteriormente, desarrollar los siguientes endpoints:
POST (‘/’): deberá insertar una nueva mascota. El formato de cada mascota será {name:String, specie: String}
GET(‘/:pet’): Deberá traer la mascota con el nombre indicado. Utilizar una expresión regular para que sólo se puedan recibir letras e incluso espacios (recuerda cómo se lee un espacio a nivel URL). No debe permitir números.
PUT (‘/:pet’): Deberá traer la mascota y añadirle un campo “adopted:true” a dicha mascota en caso de existir. 
Generar además un router.param que permita acceder de manera directa a la mascota, colocándola en req.pet
 */

const router = Router();

let pets = [];

router.post("/", (req, res) => {
  const { name, specie } = req.body;
  pets.push({ name, specie });
  res.json({ name, specie });
});

router.get("/", (req, res) => {
    res.json(pets);
    });

router.get("/:pet", (req, res) => {
  const { pet } = req.params;
  const petFound = pets.find((p) => p.name === pet);
  if (!petFound) {
    return res.status(404).json({ error: "Pet not found" });
  }
  res.json(petFound);
});

router.put("/:pet", (req, res) => {
  const { pet } = req.params;
  const petFound = pets.find((p) => p.name === pet);
  if (!petFound) {
    return res.status(404).json({ error: "Pet not found" });
  }
  petFound.adopted = true;
  res.json(petFound);
});

router.param("pet", (req, res, next, value) => {
    const petFound = pets.find((p) => p.name === value);
    if (!petFound) {
        return res.status(404).json({ error: "Pet not found" });
    }
    req.pet = petFound;
    next();
    });

app.use("/api/pets", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
