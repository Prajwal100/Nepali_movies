const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movies");
const User = require("../models/user");
const Settings = require("../models/Settings");
const ErrorHandler = require("../utils/errorHandler");

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

exports.settings = catchAsyncErrors(async (req, res, next) => {
  const settings = await Settings.findOne();

  if (!settings) {
    return next(new Error("Settings not found!", 404));
  }

  res.status(201).json({
    message: "Successfully get the settings data.",
    settings,
  });

  console.log(settings);
});

exports.settingsUpdate = catchAsyncErrors(async (req, res, next) => {
  let settings = Settings.findById(req.params.id);

  if (!settings) {
    return next(new Error("No settings found!", 404));
  }

  settings = await Settings.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res
    .status(200)
    .json({ settings, status: true, message: "Successfully updated." });
});
