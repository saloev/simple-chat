import db from "../loaders/db.js";
import { randomColor } from "../utils/index.js";
import { nanoid } from "nanoid";

export default class UserModel {
  /**
   *
   * @param {*} id
   */
  findByIdDBObj(id) {
    const makeAsync = new Promise((resove) => {
      const userFromDB = db.get("users").find({ id });
      resove(userFromDB);
    });

    return makeAsync;
  }
  /**
   *
   * @param {*} id
   */
  async findById(id) {
    try {
      const user = await this.findByIdDBObj(id);
      return user.value();
    } catch (e) {
      throw Error(e);
    }
  }
  /**
   *
   * @param {*} user
   */
  create(user) {
    const makeAsync = new Promise((resove) => {
      const id = nanoid(10);
      const userId = db
        .get("users")
        .push({ id, ...user, color: randomColor(), hideMessages: false, createdDate: new Date() })
        .write();
      const userFromDB = db.get("users").find({ id }).value();
      resove(userFromDB);
    });

    return makeAsync;
  }
  /**
   *
   * @param {*} user
   */
  async clearMessage(user) {
    try {
      const userById = await this.findByIdDBObj(user.id)
        .assgin({ hideMessages: true })
        .write();
      return userById.value();
    } catch (e) {
      throw Error(e);
    }
  }

  users() {
    const makeAsync = new Promise((resove) => {
      const userFromDB = db.get("users").value();
      resove(userFromDB);
    });

    return makeAsync;
  }
}
