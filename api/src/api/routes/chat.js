import express from "express";
const route = express.Router();
import { ChatModel } from "../../models/index.js";
const path = "chat";
export default (app) => {
  app.use(`/${path}`, route);

  route.get("/messages", async (req, res) => {
    const chatModel = new ChatModel();
    const messages = await chatModel.messages();
    return res.json({
      [path]: {
        messages,
      }
    }).status(200);
  });
};
