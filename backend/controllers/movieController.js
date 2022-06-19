const Movie = require("../models/Movies");

exports.getMovies = async (req, res, next) => {
  res.status(200).json({
    status: true,
  });
};
