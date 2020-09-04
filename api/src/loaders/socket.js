import socket from "socket.io";
import { ChatModel } from "../models/index.js";

export default ({ server }) => {
  const io = socket(server);
  const chatModel = new ChatModel();

  io.on("connection", (soketIO) => {
    console.log("SOCKET connected");

    soketIO.on("NEW_MESSAGE", (data) => {
      chatModel.saveMessage(data).then((res) => {
        io.emit("NEW_MESSAGE", res);
      });
    });

    soketIO.on("CLEAR_MESSAGES", (data) => {
      chatModel.clearMessages().then(() => {
        io.emit("CLEAR_MESSAGES", data);
      });
    });

    soketIO.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
