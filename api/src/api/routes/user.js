import express from "express";
import middlewares from "../middlewares/index.js";
const route = express.Router();

export default (app) => {
  app.use("/users", route);

  route.get(
    "/me",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    (req, res) => {
      return res.json({ user: req.currentUser }).status(200);
    }
  );

  route.post(
    "/me",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    (req, res) => {
      return res.json({ user: req.currentUser }).status(200);
    }
  );
};
