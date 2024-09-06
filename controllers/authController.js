const { registerUser, loginUser } = require("../services/authService");
const response = require("responsify-requests");
const { messages, status } = require("../constants/messages");

const registerUserController = async (req, res) => {
  try {
    const registerService = await registerUser(req.body);
    console.log("register service ", registerService);
    if (registerService == 0) {
      return response(
        res,
        {},
        0,
        messages.USER_REGISTER_FAILURE,
        status.BAD_REQUEST
      );
    } else if (registerService == 2) {
      return response(
        res,
        {},
        0,
        messages.USER_ALREADY_REGISTERED,
        status.BAD_REQUEST
      );
    } else {
      return response(
        res,
        {},
        1,
        messages.USER_REGISTER_SUCCESS,
        status.SUCCESS
      );
    }
  } catch (error) {
    console.log("error in register controller ", error);
    return response(res, {}, 0, messages.INTERNAL_SERVER_ERROR);
  }
};

const loginUserController = async (req, res) => {
  try {
    const loginService = await loginUser(req.body);

    if (loginService == 0) {
      return response(
        res,
        {},
        0,
        messages.INVALID_CREDENTIALS,
        status.UNAUTHORIZED
      );
    } else if (loginService == 2) {
      return response(
        res,
        {},
        0,
        messages.USER_LOGIN_FAILURE,
        status.BAD_REQUEST
      );
    } else {
      return response(
        res,
        loginService,
        1,
        messages.USER_LOGIN_SUCCESS,
        status.SUCCESS
      );
    }
  } catch (error) {
    console.log("error in login controller ", error);
    return response(res, {}, 0, messages.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
  registerUserController,
  loginUserController,
};
