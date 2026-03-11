const LostReport = require("../models/LostReport");

const createReport = async (req, res) => {
  try {
    const { itemName, category, locationLost, dateLost, description, image } =
      req.body;

    if (!itemName || !category || !locationLost || !dateLost || !description) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const report = await LostReport.create({
      student: req.user._id,
      itemName,
      category,
      locationLost,
      dateLost,
      description,
      image: image || "",
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: "Server error while creating report" });
  }
};

const getMyReports = async (req, res) => {
  try {
    const reports = await LostReport.find({ student: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching reports" });
  }
};

module.exports = {
  createReport,
  getMyReports,
};