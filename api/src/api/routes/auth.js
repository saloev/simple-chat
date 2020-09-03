import express from "express";
import celebrate from "celebrate";

import middlewares from "../middlewares/index.js";
import AuthService from "../../services/Auth.js";
import UserService from "../../services/User.js";

const route = express.Router();

export default (app) => {
  app.use("/auth", route);

  route.get("/signup", async (req, res, next) => {
    try {
      const userService = new UserService();
      const users = await userService.users();
      console.log(users);
      return res.status(201).json(users);
    } catch (e) {
      console.error("🔥 error: %o", e);
      return next(e);
    }
  });

  route.post(
    "/signup",
    celebrate.celebrate({
      body: celebrate.Joi.object({
        name: celebrate.Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      try {
        const authServise = new AuthService();
        const { user, token } = await authServise.SignUp(req.body);
        return res.status(201).json({ user, token });
      } catch (e) {
        console.error("🔥 error: %o", e);
        return next(e);
      }
    }
  );

  route.post("/logout", middlewares.isAuth, (req, res, next) => {
    console.log("Calling Sign-Out endpoint with body: %o", req.body);
    try {
      return res.status(200).end();
    } catch (e) {
      console.error("🔥 error %o", e);
      return next(e);
    }
  });
};
