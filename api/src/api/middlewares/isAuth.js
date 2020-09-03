import jwt from "express-jwt";
import config from "../../config/index.js";

const getTokenFromHeader = (req) => {
  return req.headers.authorization;
};

const isAuth = jwt({
  secret: config.jwtSecret,
  userProperty: "token",
  algorithms: ['HS256'],
  getToken: getTokenFromHeader,
});

export default isAuth;
