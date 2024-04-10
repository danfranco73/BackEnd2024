// router simple de un chat en tiempo real

import { Router } from "express";
import ChatManagerDb from "../dao/chatManagerDb.js";

const chatManager = new ChatManagerDb();

const router = Router();

router.get("/", async (req, res) => {
  res.send(await chatManager.getMessages());
});

router.post("/", async (req, res) => {
  const { author, message } = req.body;
  const newMessage = {
    author,
    message,
  };
  res.send(await chatManager.addMessage(newMessage));
});

export default router;
