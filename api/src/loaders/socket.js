import socket from "socket.io";
import { ChatModel } from "../models/index.js";

export default ({ server }) => {
  const io = socket(server);
  const chatModel = new ChatModel();

  io.on("connection", () => {
    console.log("SOCKET connected");

    socket.on("chat message", (data) => {
      chatModel.saveMessage(data).then(() => {
        io.emit("chat message", data);
      });
    });

    socket.on("clear messages", (data) => {
      chatModel.clearMessages().then(() => {
        io.emit("clear messages", data);
      });
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
