const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// const fileUpload = require("express-fileupload");
// OR multer
const cookieParser = require("cookie-parser");

require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routers for signup/login
app.use("/", require("./routes/userRouter"));
app.use("/", require("./routes/subjectRouter"));

require("./config/user_db").connect();

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
