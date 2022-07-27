const mongoose = require("mongoose");
const validator = require("validator");

const settingsSchema = new mongoose.Schema({
  site_title: {
    type: String,
    required: [true, "Please enter site title"],
  },
  email: {
    type: String,
    required: [true, "Please enter email address"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  phone: {
    type: String,
    required: [true, "Please enter valid phone number"],
  },

  address: {
    type: String,
    required: [true, "Please enter address."],
  },

  copyright: {
    type: String,
    default: "Copyright © Prajwalrai 2022",
  },
});

module.exports = mongoose.model("Settings", settingsSchema);
