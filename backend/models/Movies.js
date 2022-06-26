const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the movie name."],
  },
  image: {
    type: String,
  },
  category: {
    type: Array,
    required: [true, "Please select category."],
  },
  uploadedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  overview: {
    type: String,
  },
  releaseDate: {
    type: Date,
  },
  cast: [
    {
      castId: {
        type: mongoose.Schema.ObjectId,
        ref: "Celebrity",
      },
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
