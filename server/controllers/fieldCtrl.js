const Subject = require("../model/subjects");
const Major = require("../model/majors");

const fieldCtrl = {
  getFields: async (req, res) => {
    try {
      const subjects = await Subject.find({});
      const majors = await Major.find({});
      return res.status(200).json([majors, subjects]);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};

module.exports = fieldCtrl;
