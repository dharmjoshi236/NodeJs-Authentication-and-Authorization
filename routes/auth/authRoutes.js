const express = require("express");
const router = express.Router();
const {
  registerUserController,
  loginUserController,
} = require("../../controllers/authController");
const { validateBody } = require("../../middlewares/validateBody");
const { registerUserSchema, loginUserSchema } = require("../../validationSchemas/authSchema");

router.post("/register", validateBody(registerUserSchema) , registerUserController);
router.post("/login", validateBody(loginUserSchema) , loginUserController);

module.exports = router;
