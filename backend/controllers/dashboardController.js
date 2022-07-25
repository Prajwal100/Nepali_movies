const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movies");
const User = require("../models/user");

exports.getDashboardInfo = async (req, res, next) => {
  let total_celebrities = await Celebrity.count();
  let total_movies = await Movie.count();
  let total_users = await User.where("role", "user").count();

  res.status(201).json({
    message: "Successfully created.",
    status: true,
    data: {
      totalCelebrities: total_celebrities,
      totalMovies: total_movies,
      totalUsers: total_users,
    },
  });
};
