const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    default: null,
  },
  avatar: {
    type: String,
    default: null,
  },
  token: {
    type: String,
  },
});
const Userdb = mongoose.model("users", userSchema);

module.exports = Userdb;
