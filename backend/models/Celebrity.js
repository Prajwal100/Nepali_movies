const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter celebrity name."],
  },
  biography: {
    type: String,
    trim: true,
    required: [true, "Please enter biography."],
  },
  dob: {
    type: Date,
  },
  followers: {
    type: Number,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  createdAt: {
    type: Date,
  },

  uploadedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Celebrity", celebritySchema);
