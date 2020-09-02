import db from "../loaders/db.js";
import { randomColor } from "../utils/index.js";
import { nanoid } from "nanoid";

export default class UserModel {
  /**
   * 
   * @param {*} id 
   */
  findById(id) {
    const makeAsync = new Promise((resove) => {
      const userFromDB = db.get("messages").find({ id }).value();
      resove(userFromDB);
    });

    return makeAsync;
  }
  /**
   * 
   * @param {*} param0 
   */
  saveMessage({ timestamp, message, user }) {
    const makeAsync = new Promise((resove) => {
      const id = nanoid(10);
      const userId = db
        .get("messages")
        .push({ id, timestamp, message, ...user })
        .write();
      const savedMessage = db.get("messages").find({ id }).value();
      resove(savedMessage);
    });

    return makeAsync;
  }

  /**
   * Clear all messages from DB
   */
  clearMessages() {
    const makeAsync = new Promise((resove) => {
      db.set("messages", []).write();
      const messages = db.get("posts").value();
      resove(messages);
    });

    return makeAsync;
  }
}
