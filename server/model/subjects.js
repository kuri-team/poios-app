const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  code: String,
  name: String,
  major: Array,
});

const Subject = mongoose.model("subject", subjectSchema, "subjects");

module.exports = Subject;
