const Celebrity = require("../models/Celebrity");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

const multer = require("multer");
// get celebrities route here
exports.getCelebrities = async (req, res, next) => {
  let sortObject = {};
  let sortByField = "_id";
  sortObject[sortByField] = -1;
  const celebrities = await Celebrity.find().sort(sortObject);
  res.status(200).json({ data: celebrities, message: "Successfully fetched." });
};

// store celebrity route here

exports.storeCelebrity = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body, req.file);

  const celebrity = new Celebrity({
    name: req.body.name,
    biography: req.body.biography,
    image: req.file.filename,
    dob: req.body.dob,
    gender: req.body.gender,
    address: req.body.address,
  });
  // req.body.uploadedBy = req.user.id;

  // upload(req, res, function (err) {
  //   if (err) {
  //     return res.statue(401).json({ message: "Error uploading file" });
  //   }
  // });

  const savedCelebrity = await celebrity.save();
  res.status(201).json({
    message: "Successfully created.",
    status: true,
    savedCelebrity,
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

  let { name, biography, dob, address, gender } = req.body;
  celebrityData = Celebrity.findById(req.params.id).then((celebrity) => {
    celebrity.name = name;
    celebrity.biography = biography;
    celebrity.dob = dob;
    celebrity.address = address;
    celebrity.gender = gender;
    if (req.file) {
      celebrity.image = req.file.filename;
    }

    return celebrity.save();
  });
  res
    .status(200)
    .json({ celebrity, status: true, message: "Successfully updated." });
});

// delete celebrity route here
exports.deleteCelebrity = catchAsyncErrors(async (req, res, next) => {
  let celebrity = await Celebrity.findById(req.params.id);
  if (!celebrity) {
    return next(new ErrorHandler("Celebrity not found.", 404));
  }

  celebrity = celebrity.remove();
  res.status(200).json({ message: "Successfully deleted.", status: true });
});
