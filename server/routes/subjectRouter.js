const router = require("express").Router();
const subjectCtrl = require("../controllers/subjectCtrl");

router.get("/core/fields-of-study", subjectCtrl.getSubjects);

module.exports = router;
