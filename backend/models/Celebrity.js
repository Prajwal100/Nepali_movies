const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter celebrity name."],
  },
  biography: {
    type: String,
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
});

module.exports = mongoose.model("Celebrity", celebritySchema);
