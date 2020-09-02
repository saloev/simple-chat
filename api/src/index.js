import config from "./config/index.js";

import express from "express";
import loaders from './loaders/index.js';

function startServer() {
  const app = express();
  try {
    loaders({expressApp: app});

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
  } catch (e) {
    console.error(e);
  }
}

startServer();
