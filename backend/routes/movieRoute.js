const express = require("express");
const router = express.Router();

const { getMovies, showMovie } = require("../controllers/movieController");
router.route("/get-movies").get(getMovies);
router.route("/show-movie/:id").get(showMovie);
module.exports = router;
