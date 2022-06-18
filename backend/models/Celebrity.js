const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please enter celebrity name."],
  },
  dob: {
    type: Date,
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
});

module.exports = mongoose.model("Celebrity", celebritySchema);
