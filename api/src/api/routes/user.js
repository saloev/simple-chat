import express from "express";
import middlewares from "../middlewares/index.js";
const route = express.Router();
const path = "users";

export default (app) => {
  app.use(`/${path}`, route);

  route.get(
    "/me",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    (req, res) => {
      return res
        .json({
          [path]: {
            user: req.currentUser,
          },
        })
        .status(200);
    }
  );
  route.post(
    "/me",
    middlewares.isAuth,
    middlewares.attachCurrentUser,
    (req, res) => {
      return res
        .json({
          [path]: {
            user: req.currentUser,
          },
        })
        .status(200);
    }
  );
};
