const Yup = require("yup");

const registerUserSchema = Yup.object({
  body: Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    username: Yup.string()
      .min(3)
      .max(25)
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "No special characters allowed, expect an underscore"
      )
      .required("Username is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Maximum 20 characters allowed")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain One Uppercase, One Lowercase, One Number and One Special Character"
      )
      .required("Password is required"),
  }),
});

const loginUserSchema = Yup.object({
  body: Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
});

module.exports = {
  registerUserSchema,
  loginUserSchema,
};
