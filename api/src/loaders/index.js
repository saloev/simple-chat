import expressLoader from "./express.js";
import dbLoader from "./db.js";
import socket from "./socket.js";

export default async ({ expressApp, server }) => {
  socket({ server });

  await expressLoader({ app: expressApp });
  console.log("✌️ Express loaded");
};
