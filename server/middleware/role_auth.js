const Userdb = require("../model/userModel");

const role_auth = async (req, res, next) => {
  try {
    //Get user info by id
    const user = await Userdb.findOne({
      _id: req.user.id,
    });
    if (user.role === "tutor") {
      //to limit some functions in the web
      return res.status(400).json({ msg: "" });
    }
    next();
  } catch (err) {}
};

module.exports = role_auth;
