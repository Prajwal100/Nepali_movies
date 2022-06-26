const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  role: {
    type: String,
    trim: true,
    required: [true, "Role must be required"],
    default: "user",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// Encrypting password before saving user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

// Compare user password ;
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//  Return JWT token
userSchema.methods.getJwtToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

module.exports = mongoose.model("User", userSchema);
