import { Router } from "express";
import upload from "../../utilMulter.js";

const router = Router();

let users = [];

router.get("/", (req, res) => {
  res.json(users);
});

// agregamos el middleware de multer
router.post("/", upload.single("imagen"), (req, res) => {
  const newUser = req.body;
  newUser.avatar = req.file.filename;
  users.push(newUser);
  res.json(newUser);
  res.status(201);
});

// si no usamos multer, el código sería:
router.post("/", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.json(newUser);
  res.status(201);
});

export default router;
