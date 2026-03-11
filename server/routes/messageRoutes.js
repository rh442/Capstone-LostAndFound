const express = require("express");
const {
  getMessagesByReport,
  sendMessage,
} = require("../controllers/messageController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:reportId", protect, getMessagesByReport);
router.post("/:reportId", protect, sendMessage);

module.exports = router;