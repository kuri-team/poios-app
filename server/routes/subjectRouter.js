const router = require("express").Router();
const fieldCtrl = require("../controllers/fieldCtrl");

router.get("/core/fields-of-study", fieldCtrl.getFields);

module.exports = router;
