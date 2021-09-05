const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
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
  timestamps: true,
});
const Userdb = mongoose.model("user-info", userSchema);

module.exports = Userdb;
