const express = require("express");

const router = express.Router();

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
router.route("/user/create").post(createUser);
router.route("/users").get(getUsers);
router.route("/user/update/:id").put(updateUser);
router.route("/user/delete/:id").delete(deleteUser);

module.exports = router;
