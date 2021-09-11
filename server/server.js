const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const router = require("./router");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

const PORT = 5000;

app.use(router);

io.on("connection", socket => {
  console.log("New connection.");

  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
    console.log("User left.");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", data => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
