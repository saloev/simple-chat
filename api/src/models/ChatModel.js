import db from "../loaders/db.js";
import { randomColor } from "../utils/index.js";
import { nanoid } from "nanoid";

export default class ChatModel {
  /**
   *
   * @param {*} id
   */
  findById(id) {
    const makeAsync = new Promise((resove) => {
      const message = db.get("messages").find({ id }).value();
      resove(message);
    });

    return makeAsync;
  }
  /**
   *
   * @param {*} param0
   */
  saveMessage(data) {
    const makeAsync = new Promise((resove) => {
      const id = nanoid(10);

      db.get("messages")
        .push({ ...data, id, time: new Date() })
        .write();

      const savedMessage = db.get("messages").find({ id }).value();
      resove(savedMessage);
    });

    return makeAsync;
  }

  /**
   * Get all mesages from DB
   */
  messages() {
    const makeAsync = new Promise((resove) => {
      const messages = db.get("messages").value();
      resove(messages);
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
