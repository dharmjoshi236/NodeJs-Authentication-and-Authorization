const userModel = require("../models/userModel");
const tokenModel = require("../models/tokenModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { envConstants } = require("../constants/envConstants");

const registerUser = async (reqBody) => {
  try {
    let findDuplicateUser = await userModel.findOne({
      email: reqBody.email,
    });

    if (findDuplicateUser) {
      return 2; // User already exists.
    } else {
      const createUser = await userModel.create(reqBody);

      if (!createUser) {
        return 0; // Unable to create the user try again.
      } else {
        return 1; // User created successfully
      }
    }
  } catch (error) {
    console.log("error in register user service", error);
    throw new Error();
  }
};

const loginUser = async (reqBody) => {
  try {
    let findUser = await userModel.findOne({
      email: reqBody.email,
    });

    if (!findUser) {
      return 0; // Invalid credentials
    } else {
      let checkPass = await bcrypt.compare(reqBody.password, findUser.password);

      if (!checkPass) {
        return 0; // Invalid credentials
      } else {
        const generateToken = jwt.sign(
          {
            userId: findUser._id,
            userEmail: findUser.email,
          },
          envConstants.jwtSecret,
          {
            expiresIn: envConstants.jwtExpiresIn,
          }
        );

        if (generateToken) {
          await tokenModel.create({
            token: generateToken,
            userId: findUser._id,
          });

          return { ...findUser._doc, token: generateToken };
        } else {
          return 2; // Unable to login, Please try again
        }
      }
    }
  } catch (error) {
    console.log("error in login user service ", error);
    throw new Error();
  }
};

module.exports = {
  registerUser,
  loginUser,
};
