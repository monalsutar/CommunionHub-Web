// routes/protected.js

const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// Protected route: only accessible if token is valid
router.get("/body", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Access granted",
    username: req.user.username,
  });
});

module.exports = router;
