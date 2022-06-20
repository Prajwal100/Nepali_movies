const Movie = require("../models/Movies");
const SearchFeatures = require("../utils/searchFeature");
exports.getMovies = async (req, res, next) => {
  const resultPerPage = 4;
  const totalMovies = await Movie.countDocuments();
  const searchFeatures = new SearchFeatures(Movie.find(), req.query).pagination(
    resultPerPage
  );

  const movies = await searchFeatures.query;
  res.status(200).json({
    data: movies,
    message: "Successfully fetched data.",
    totalMovies,
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
