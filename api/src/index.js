import config from "./config/index.js";

import express from "express";
import loaders from "./loaders/index.js";
import http from "http";

function startServer() {
  const app = express();
  const server = http.Server(app);

  try {
    loaders({ expressApp: app, server });
    server.listen(config.port, () => {
      console.log(`listening on *:${config.port}`);
    });
  } catch (e) {
    console.error(e);
  }
}

startServer();
