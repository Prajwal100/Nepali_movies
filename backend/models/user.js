const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter name."],
  },
  username: {
    type: String,
    trim: true,
    required: [true, "Please enter username."],
  },
  email: {
    type: String,
    required: [true, "Please enter email address"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minLength: [6, "Please enter at least 6 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  gender: {
    type: String,
    required: [true, "Please enter gender"],
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

module.exports = mongoose.model("User", userSchema);
