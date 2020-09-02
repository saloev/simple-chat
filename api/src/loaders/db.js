
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync.js"
import config from "../config/index.js";

const adapter = new FileSync(`${config.databaseURL}`);
const db = low(adapter);

export default db;
