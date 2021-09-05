require("dotenv").config();
require("../config/user-db").connect();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Userdb = require("../model/user");

const userAuth = express();
userAuth.use(express.json());

//Logic here

module.exports = userAuth;
