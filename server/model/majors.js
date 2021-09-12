const mongoose = require("mongoose");

const majorSchema = new mongoose.Schema({
  code: String,
  name: String,
});

const Major = mongoose.model("major", majorSchema, "majors");

module.exports = Major;
