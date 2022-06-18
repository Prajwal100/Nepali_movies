const Celebrity = require("../models/Celebrity");

// get celebrities route here
exports.getCelebrities = async (req, res, next) => {
  const celebrities = await Celebrity.find();
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