const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

const MONGO_URL = process.env.MONGO_URL;

const connectDatabase = () => {
  mongoose
    .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected");
    });
};

module.exports = connectDatabase;
