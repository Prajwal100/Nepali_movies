const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

// Register User => /api/v1/auth/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, username, email, password, gender } = req.body;

  const user = await User.create({
    name,
    username,
    email,
    password,
    gender,
  });

  sendToken(user, 200, res);
});

// Login User => /api/v1/auth/login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid credentials", 401)); // unauthenticated user
  }

  // Check if password is correct or not;

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid credentials", 401)); // unauthenticated user
  }

  sendToken(user, 200, res);
});

// LOGOUT ROUTE => api/v1/auth/logout;

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logout successfully.",
  });
});

// GET USER DETAILS;

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    message: "Successfully fetched user data",
    user,
  });
});

// Get all users

exports.getUsers = async (req, res, next) => {
  const user = await User.find();
  res.status(200).json({ user, message: "Successfully fetched users." });
};

// Store user
exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    message: "Successfully created",
    user,
  });
};

// Update Users
exports.updateUser = async (req, res, next) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      status: false,
    });
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    user,
    status: true,
    message: "User updated successfully",
  });
};

//delete User
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
      status: false,
    });
  }

  await user.remove();

  res.status(200).json({
    status: true,
    message: "User successfully removed",
  });
};
