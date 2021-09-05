const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// const fileUpload = require("express-fileupload");
// const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(express.json());
app.use(cors());

//Routers
app.use("/auth", require("./routes/userRouter"));

require("./config/user-db").connect();
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
