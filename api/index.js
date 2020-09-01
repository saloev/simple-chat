const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();


app.get("/api", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {});

http.listen(process.env.API_PORT, () => {
  console.log("listening on *:3000");
});
