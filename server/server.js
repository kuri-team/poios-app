const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
require("dotenv").config();

app.use(express.json());

require("./config/database").connect();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
