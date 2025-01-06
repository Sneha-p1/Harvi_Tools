
const express = require("express");
const router = express.Router();
require("dotenv").config(); // To use environment variables

// Admin password validation
router.post("/validate-admin", (req, res) => {
  const { password } = req.body;

  // Compare the password with the one stored in the .env file
  if (password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ success: true, message: "Access granted!" });
  }

  return res.status(401).json({ success: false, message: "Invalid password." });
});

module.exports = router;
