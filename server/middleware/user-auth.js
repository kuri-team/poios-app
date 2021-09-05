require("dotenv").config();
require("../config/user-db").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Userdb = require("../model/user");

const userAuth = express();
userAuth.use(express.json());

userAuth.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password, subjects, avatar } = req.body;

    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // Validate if user exist in our database
    const oldEmail = await Userdb.findOne({ email });
    const oldName = await Userdb.findOne({ name });
    if (oldEmail || oldName) {
      return res.status(409).send("User Already Exist. Please Login");
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await Userdb.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;
    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = userAuth;
