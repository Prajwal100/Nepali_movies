const express = require("express");
const router = express.Router();
const {
  getCelebrities,
  storeCelebrity,
  updateCelebrity,
  deleteCelebrity,
  showCelebrity,
} = require("../controllers/celebrityController.js");

router.route("/get-celebrities").get(getCelebrities);

router.route("/create-celebrity").post(storeCelebrity);

router.route("/show-celebrity/:id").get(showCelebrity);

router.route("/update-celebrity/:id").put(updateCelebrity);

router.route("/delete-celebrity/:id").delete(deleteCelebrity);
module.exports = router;
