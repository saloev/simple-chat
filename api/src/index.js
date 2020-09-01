import config from "./config";

import express from "express";

async function startServer() {
  const app = express();
  
  await require("./loaders").default({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      console.erroe(err);
      process.exit(1);
    }

    console.log(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️ 
    ################################################
  `);
  });
}

startServer();
