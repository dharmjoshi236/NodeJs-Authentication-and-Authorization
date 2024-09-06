const express = require("express");
const router = express.Router();
const authRoutes = require('./auth/authRoutes');
const userRoutes = require('./user/userRoutes');

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;