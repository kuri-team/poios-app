const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const user_auth = require("../middleware/user_auth");

router.post("/auth/signup", userCtrl.signup);
router.post("/auth/login", userCtrl.login);
router.get("/auth/logout", userCtrl.logout);
router.get("/auth/refresh_token", userCtrl.refreshToken);

router.get("/profile/my-profile", user_auth, userCtrl.getUser);
router.patch("/profile/my-profile/update", user_auth, userCtrl.updateUser);

// router.patch("/profile/my-profile/reset_pass", user_auth, userCtrl.resetPassword);
// router.post("/auth/reset_pass", user_auth, userCtrl.resetPassword);

module.exports = router;
