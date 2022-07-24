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
const DIR = "./backend/uploads";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
router.route("/create-celebrity").post(upload.single("image"), storeCelebrity);

router.route("/show-celebrity/:id").get(showCelebrity);

router
  .route("/update-celebrity/:id")
  .patch(
    upload.single("image"),
    isAuthenticatedUser,
    authorizeRoles("admin"),
    updateCelebrity
  );

router.route("/delete-celebrity/:id").delete(deleteCelebrity);
module.exports = router;
// isAuthenticatedUser, authorizeRoles("admin"),
