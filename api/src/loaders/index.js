import expressLoader from "./express";
import dbLoader from "./db";

export default async ({ expressApp }) => {
  const dbConnection = dbLoader();
  console.log("✌️ DB loaded");
  
  // set default value for DB;
  dbLoader.defaults({ messages: [], user: {} }).write();

  await expressLoader({ app: expressApp });
  console.log("✌️ Express loaded");
};
