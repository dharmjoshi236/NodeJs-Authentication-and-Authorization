const messages = {
  // Register specific messages
  USER_REGISTER_FAILURE: "Unable to register the user, Try again",
  USER_ALREADY_REGISTERED: "User already registered",
  USER_REGISTER_SUCCESS: "User registered successfully",

  // Login specific messages
  USER_LOGIN_FAILURE: "Unable to login the user, try again",
  USER_LOGIN_SUCCESS: "User logged-in successfully",
  INVALID_CREDENTIALS: "Invalid credentials",

  // Authentication specific messages
  TOKEN_EXPIRED: "Token expired, Kindly login again",
  USER_NOT_FOUND: "No user found, Kindly register.",
  USER_DETAILS_FOUND: "User details fetched successfully",
  USER_NOT_AUTHORIZED: "User is not authorized, Kindly login.",

  INTERNAL_SERVER_ERROR: "Internal server error, try again after some time",
};

const status = {
  UNAUTHORIZED: "UNAUTHORIZED",
  BAD_REQUEST: "BAD_REQUEST",
  SUCCESS: "SUCCESS",
};

module.exports = {
  messages,
  status,
};
