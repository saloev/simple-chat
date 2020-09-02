import dotenv from "dotenv";
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * API port
   */
  port: parseInt(process.env.API_PORT, 10),

  /**
   * path to dataBase
   */
  databaseURL: process.env.DATABSE_PATH,

  /**
   * secret token
   */
  jwtSecret: process.env.SECRET_TOKEN,

  /**
   * API configs
   */
  api: {
    prefix: "/api",
  },
};
