const Message = require("../models/Message");

const getMessagesByReport = async (req, res) => {
  try {
    const messages = await Message.find({ report: req.params.reportId })
      .populate("sender", "name email role")
      .sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching messages" });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Message text is required" });
    }

    const message = await Message.create({
      report: req.params.reportId,
      sender: req.user._id,
      text,
    });

    const populatedMessage = await message.populate("sender", "name email role");

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({ message: "Server error while sending message" });
  }
};

module.exports = {
  getMessagesByReport,
  sendMessage,
};