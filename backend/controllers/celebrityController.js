const Celebrity = require("../models/Celebrity");
const ErrorHandler = require("../utils/ErrorHandler");
// get celebrities route here
exports.getCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find().sort({ createdAt: -1 }).limit(10);
  res.status(200).json({ data: celebrities, message: "Successfully fetched." });
};

// store celebrity route here

exports.storeCelebrity = async (req, res, next) => {
  const celebrity = await Celebrity.create(req.body);
  res.status(201).json({
    message: "Successfully created.",
    celebrity,
  });
};

// show celebrity Router

exports.showCelebrity = async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return next(new ErrorHandler("Celebrity not found.", 404));
  }

  res.status(200).json({ celebrity, message: "Successfully fetched." });
};

// update celebrity Router

exports.updateCelebrity = async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return res.status(404).json({
      status: false,
      message: "Celebrity not found.",
    });
  }

  celebrity = await Celebrity.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ data: celebrity, message: "Successfully updated." });
};

// delete celebrity route here
exports.deleteCelebrity = async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return res.status(404).json({
      status: false,
      message: "Celebrity not found.",
    });
  }

  celebrity = celebrity.remove();
  res.status(200).json({ message: "Successfully deleted." });
};
