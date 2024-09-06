const mongoose = require("mongoose");
const { envConstants } = require("./constants/envConstants");

const connectDb = () => {
  mongoose
    .connect(envConstants.mongodbUrl)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.log("Unable to connect the database, Try again ", error);
    });
};

module.exports = {
  connectDb,
};
