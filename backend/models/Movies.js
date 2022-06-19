const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        ref: "Celebrity",
      },
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
