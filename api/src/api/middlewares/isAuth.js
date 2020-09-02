import jwt from "express-jwt";
import config from "../../config/index.js";

const getTokenFromHeader = (req) => {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};

const isAuth = jwt({
  secret: config.jwtSecret,
  userProperty: "token",
  algorithms: ['HS256'],
  getToken: getTokenFromHeader,
});

export default isAuth;
