const User = require("../models/user");

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
