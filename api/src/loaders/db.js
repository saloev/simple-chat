const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
import config from "../config";

const adapter = new FileSync(config.databaseURL);
const db = low(adapter);

export default db;
