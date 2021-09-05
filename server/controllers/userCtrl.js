require("../config/user-db").connect();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Userdb = require("../model/user");

const userCtrl = {
  signup: async (req, res) => {
    try {
      const { name, email, password, avatar } = req.body;

      // Validate if user exist in our database
      const oldEmail = await Userdb.findOne({ email });
      const oldName = await Userdb.findOne({ name });
      if (oldEmail || oldName) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters." });
      }

      //Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);

      // Create user in our database
      const newUser = await Userdb.create({
        name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: passwordHash,
        avatar,
      });

      //Save mongoDB
      await newUser.save();

      //create jsonwebtoken to authenticate
      const accessToken = createAccessToken({ id: newUser._id });
      const refreshToken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/auth/refresh_token",
      });

      res.json({ accessToken });
      // res.json({ msg: "Register Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    const rf_token = req.cookies.refreshToken;
    res.json({ rf_token });
  },
};

const createAccessToken = user => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: "2h" });
};

const createRefreshToken = user => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_KEY, { expiresIn: "7h" });
};

module.exports = userCtrl;
