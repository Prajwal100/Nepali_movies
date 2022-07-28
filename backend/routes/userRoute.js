const express = require("express");

const router = express.Router();

const { authorizeRoles, isAuthenticatedUser } = require("../middlewares/auth");

const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updateUser,
} = require("../controllers/userController");
router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/profile/update/:id").patch(updateUser);

module.exports = router;
