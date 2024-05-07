import messageModel from "../dao/models/messageModel.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const messages = await messageModel.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const message = new messageModel(req.body);
    await message.save();
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;