const mongoose = require("mongoose");

const { USER_DB_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(USER_DB_URI)
    .then(() => console.log("Successfully connected to database"))
    .catch(err => {
      console.log("Cannot connect to database. Error: ");
      console.error(err);
      process.exit(1);
    });
};
