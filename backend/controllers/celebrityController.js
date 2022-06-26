const Celebrity = require("../models/Celebrity");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
// get celebrities route here
exports.getCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find().sort({ createdAt: -1 }).limit(10);
  res.status(200).json({ data: celebrities, message: "Successfully fetched." });
};

// store celebrity route here

exports.storeCelebrity = catchAsyncErrors(async (req, res, next) => {
  req.body.uploadedBy = req.user.id;

  console.log(req.body);
  const celebrity = await Celebrity.create(req.body);
  res.status(201).json({
    message: "Successfully created.",
    celebrity,
  });
});

// show celebrity Router

exports.showCelebrity = catchAsyncErrors(async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return next(new ErrorHandler("Celebrity not found.", 404));
  }

  res.status(200).json({ celebrity, message: "Successfully fetched." });
});

// update celebrity Router

exports.updateCelebrity = catchAsyncErrors(async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return next(new ErrorHandler("Celebrity not found.", 404));
  }

  celebrity = await Celebrity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ data: celebrity, message: "Successfully updated." });
});

// delete celebrity route here
exports.deleteCelebrity = catchAsyncErrors(async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return next(new ErrorHandler("Celebrity not found.", 404));
  }

  celebrity = celebrity.remove();
  res.status(200).json({ message: "Successfully deleted." });
});
