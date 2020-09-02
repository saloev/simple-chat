import express from "express";
import auth from "./routes/auth.js";
import user from "./routes/user.js";

// guaranteed to get dependencies
export default () => {
  const app = express.Router();
  auth(app);
  user(app);

  return app;
};
