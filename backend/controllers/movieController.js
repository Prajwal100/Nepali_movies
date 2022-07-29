const Movie = require("../models/Movies");
const SearchFeatures = require("../utils/searchFeature");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

exports.getMovies = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 24;
  let sortObject = {};
  let sortByField = "_id";
  sortObject[sortByField] = -1;
  const totalMovies = await Movie.countDocuments();
  const searchFeatures = new SearchFeatures(Movie.find(), req.query).pagination(
    resultPerPage
  );

  const movies = await searchFeatures.query.sort(sortObject);
  res.status(200).json({
    movies,
    message: "Successfully fetched data.",
    totalMovies,
  });
});

exports.showMovie = catchAsyncErrors(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  res.status(200).json({
    movie,
    message: "Successfully fetched movie",
  });
});

// CREATE MOVIE
exports.storeMovies = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  let movie = new Movie({
    name: req.body.name,
    releaseData: req.body.releaseData,
    image: req.file.filename,
    category: req.body.category,
    uploadedBy: req.body.uploadedBy,
    overview: req.body.overview,
  });
  movie = await movie.save();
  res
    .status(201)
    .json({ movie, status: true, message: "Successfully created." });
});

// UPDATE MOVIE;
exports.updateMovies = catchAsyncErrors(async (req, res, next) => {
  let movie = await Movie.findById(req.params.id);
  if (!movie) {
    return next(new ErrorHandler("Movie not found.", 404));
  }

  let { name, releaseDate, category, uploadedBy, overview } = req.body;
  movieData = Movie.findById(req.params.id).then((movie) => {
    movie.name = name;
    movie.releaseDate = releaseDate;
    movie.category = category;
    movie.uploadedBy = uploadedBy;
    movie.overview = overview;
    if (req.file) {
      movie.image = req.file.filename;
    }

    return movie.save();
  });
  res
    .status(200)
    .json({ movie, status: true, message: "Successfully updated." });
});

// DELETE MOVIE;
exports.deleteMovies = catchAsyncErrors(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  celebrity = movie.remove();
  res.status(200).json({ message: "Successfully deleted movie", status: true });
});
