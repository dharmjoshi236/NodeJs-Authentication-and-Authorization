const { getUserDetails } = require("../services/userService");
const response = require("responsify-requests");
const { messages, status } = require("../constants/messages");

const getUserDetailsController = async (req, res) => {
  try {
    let { userId, userEmail } = req;

    const getUserDetailService = await getUserDetails(userId, userEmail);

    if (getUserDetailService == 0) {
      return response(res, {}, 0, messages.USER_NOT_FOUND, status.BAD_REQUEST);
    } else {
      return response(
        res,
        getUserDetailService,
        1,
        messages.USER_DETAILS_FOUND,
        status.SUCCESS
      );
    }
  } catch (error) {
    console.log("error in get user details controller ", error);
    return response(res, {}, 0, messages.INTERNAL_SERVER_ERROR);
  }
};

module.exports = {
    getUserDetailsController,
}
