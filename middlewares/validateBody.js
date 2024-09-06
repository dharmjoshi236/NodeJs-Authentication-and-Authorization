const response = require("responsify-requests");
const { status } = require("../constants/messages");

const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body
    });
    return next();
  } catch (err) {
    return response(res, {}, 0, err.errors[0], status.BAD_REQUEST);
  }
};

module.exports = {
  validateBody,
};
