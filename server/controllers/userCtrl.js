require("../config/user_db").connect();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Userdb = require("../model/user");

const userCtrl = {
  signup: async (req, res) => {
    try {
      const { name, email, role, password, avatar } = req.body;

      // Validate if user exist in our database
      const oldEmail = await Userdb.findOne({ email });
      const oldName = await Userdb.findOne({ name });
      if (oldEmail) {
        return res.status(400).send("User Already Exist. Please Login");
      } else if (oldName) {
        return res.status(400).send("User Already Exist. Please Login");
      } else if (password.length < 6) {
        return res.status(400).json({ msg: "Password must be at least 6 characters." });
      }

      //Password Encryption
      const passwordHash = await bcrypt.hash(password, 10);

      // Create user in our database
      const newUser = await Userdb.create({
        name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        role,
        password: passwordHash,
        avatar,
      });
      //Save mongoDB
      await newUser.save();

      //create jsonwebtoken to authenticate
      const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/auth/refresh_token,
      });

      // res.json({ accesstoken });
      res.json({ accesstoken });
      // res.json({ msg: "Register Success!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = await Userdb.findOne({ $or: [{ email }, { name }] });
      if (!user) return res.status(400).json({ msg: "The account doesn't exist." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Incorrect password." });

      //If Login success, create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/auth/refresh_token"
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/auth/refresh_token" });
      return res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await Userdb.findById(req.user.id).select("-password");
      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json(user);
      //get user by id
      // res.json(req.user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token) return res.status(400).json({ msg: "Please Login or Register" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_KEY, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please Login or Register" });
        const accesstoken = createAccessToken({ id: user.id });
        res.json({ user, accesstoken });
      });
      // res.json({ rf_token });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

const createAccessToken = user => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: "2h" });
};

const createRefreshToken = user => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_KEY, { expiresIn: "7h" });
};

module.exports = userCtrl;
