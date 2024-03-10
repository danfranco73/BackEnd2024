import { Router } from "express";

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  if (pets.length === 0) {
    res.status(204);
    return res.status(204).send("No pets found");
  }
  res.json(pets);
});

router.post("/", (req, res) => {
  const newPet = req.body;
  pets.push(newPet);
  res.send("message: Pet added successfully!");
  res.status(201);
});

export default router;
