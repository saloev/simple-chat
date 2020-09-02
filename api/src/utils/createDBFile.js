import fs from "fs";
import DBStructure from "../models/DBStructure.js";

function fileHandler() {
  fs.open("db/db.json", "w", (err) => {
    if (err) throw err;
    console.log("File created");
  });

  fs.appendFile("db/db.json", JSON.stringify(DBStructure), (err) => {
    if (err) throw err;
    console.log("Data has been added!");
  });
}

fileHandler();
