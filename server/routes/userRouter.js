const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/signup", userCtrl.signup);
router.get("/refresh_token", userCtrl.refreshToken);

module.exports = router;
