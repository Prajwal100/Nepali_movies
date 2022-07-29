const express = require("express");
const router = express.Router();
const multer = require("multer");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

const {
  getMovies,
  showMovie,
  storeMovies,
  updateMovies,
  deleteMovies,
} = require("../controllers/movieController");
router.route("/get-movies").get(getMovies);
router.route("/show-movie/:id").get(showMovie);

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

router.route("/create-movie").post(upload.single("image"), storeMovies);

router
  .route("/update-movie/:id")
  .patch(
    upload.single("image"),
    isAuthenticatedUser,
    authorizeRoles("admin"),
    updateMovies
  );

router.route("/delete-movie/:id").delete(deleteMovies);
module.exports = router;
