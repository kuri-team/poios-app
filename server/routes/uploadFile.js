const router = require("express").Router();
//const cloudinary / any hosting cloud
const user_auth = require("../middleware/user_auth");

//uplaod image on
//cloudinary.config({
//cloud_name:
//api_key:
//api_secret:
//})

//upload image
router.post("/upload", (req, res) => {
  try {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded");
    }

    const file = req.files.file;
    if (file.size > 1024 * 1024) {
      return res.status(400).json({ msg: "Size too large" });
    }
    if (file.mimeType !== "image/jpeg" && file.mimeType !== "image/png") {
      return res.status(400).json({ msg: "File format is incorrect." });
    }

    res.json("test upload");
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
