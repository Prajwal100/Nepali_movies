const Movie = require("../models/Movies");

exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json({
    data: movies,
    message: "Successfully fetched data.",
  });
};
