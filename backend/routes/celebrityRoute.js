const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getCelebrities,
  storeCelebrity,
  updateCelebrity,
  deleteCelebrity,
  showCelebrity,
} = require("../controllers/celebrityController.js");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");
router.route("/get-celebrities").get(getCelebrities);

// upload image here
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./uploads");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.route("/create-celebrity", upload.single("avatar")).post(storeCelebrity);

router.route("/show-celebrity/:id").get(showCelebrity);

router
  .route("/update-celebrity/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCelebrity);

router.route("/delete-celebrity/:id").delete(deleteCelebrity);
module.exports = router;
// isAuthenticatedUser, authorizeRoles("admin"),
