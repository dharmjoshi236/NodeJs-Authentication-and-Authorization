const express = require("express");
const router = express.Router();
const {
  getUserDetailsController
} = require("../../controllers/userController");
const { authenticateUser } = require("../../middlewares/authorizeRequest");

router.get('/get', authenticateUser, getUserDetailsController);

module.exports = router;
