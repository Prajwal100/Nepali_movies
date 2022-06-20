const Movie = require("../models/Movies");

exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find();
  res.status(200).json({
    data: movies,
    message: "Successfully fetched data.",
  });
};

exports.showMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return next(new ErrorHandler("Movie not found"));
  }

  res.status(200).json({
    data: movie,
    message: "Successfully fetched movie",
  });
};
