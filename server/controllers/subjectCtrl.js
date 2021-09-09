const Subject = require("../model/subjects");

const subjectCtrl = {
  getSubjects: async (req, res) => {
    try {
      const subjects = await Subject.find({});
      return res.status(200).json(subjects);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
};

module.exports = subjectCtrl;
