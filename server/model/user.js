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
  major: {
    type: String,
    default: null,
  },
  subjects: {
    type: [String],
    default: null,
  },
  image: {
    type: Object,
  },
  token: {
    type: String,
  },
});
const Userdb = mongoose.model("users", userSchema);

module.exports = Userdb;
