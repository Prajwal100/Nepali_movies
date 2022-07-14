const express = require("express");
const router = express.Router();
const {
  getCelebrities,
  storeCelebrity,
  updateCelebrity,
  deleteCelebrity,
  showCelebrity,
} = require("../controllers/celebrityController.js");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
router.route("/get-celebrities").get(getCelebrities);

router.route("/create-celebrity").post(storeCelebrity);

router.route("/show-celebrity/:id").get(showCelebrity);

router
  .route("/update-celebrity/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCelebrity);

router.route("/delete-celebrity/:id").delete(deleteCelebrity);
module.exports = router;
// isAuthenticatedUser, authorizeRoles("admin"),
