import db from "../loaders/db.js";
import { randomColor } from "../utils/index.js";
import { nanoid } from "nanoid";

export default class UserModel {
  findById(id) {
    const makeAsync = new Promise((resove) => {
      const userFromDB = db.get("users").find({ id }).value();
      resove(userFromDB);
    });

    return makeAsync;
  }
  create(user) {
    const makeAsync = new Promise((resove) => {
      const id = nanoid(10);
      const userId = db
        .get("users")
        .push({ id, ...user, color: randomColor() })
        .write().id;
      const userFromDB = db.get("users").find({ id: userId }).value();
      resove(userFromDB);
    });

    return makeAsync;
  }
}
