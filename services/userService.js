const userModel = require("../models/userModel");

const getUserDetails = async (userId, userEmail) => {
  try {
    const findUser = await userModel.findOne({ _id: userId, email: userEmail });
    if (!findUser) {
      return 0; // Unable to find the user.
    } else {
      return findUser;
    }
  } catch (error) {
    console.log("error in user serivce ", error);
    throw new Error();
  }
};

module.exports = {
  getUserDetails,
};
