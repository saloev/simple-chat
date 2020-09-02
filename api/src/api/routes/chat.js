import express from "express";
const route = express.Router();
import { ChatModel } from "../../models/index.js";

export default (app) => {
  app.use("/chat", route);

  route.get("/messages", async (req, res) => {
    const chatModel = new ChatModel();
    const messages = await chatModel.messages();
    return res.json(messages).status(200);
  });
};
