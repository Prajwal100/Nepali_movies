const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movies");
const User = require("../models/user");
const Settings = require("../models/Settings");

const celebrities = require("../data/celebrities");
const movies = require("../data/movies");
const users = require("../data/users.json");
const settings = require("../data/settings.json");

const connectDB = require("../config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
connectDB();

const seederUsers = async () => {
  try {
    await User.deleteMany();
    console.log("Deleted all");
    await User.insertMany(users);
    console.log("Inserted Users");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const seederCelebrity = async () => {
  try {
    await Celebrity.deleteMany();
    console.log("Deleted all");
    await Celebrity.insertMany(celebrities);
    console.log("Inserted Celebrity");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const seederMovies = async () => {
  try {
    await Movie.deleteMany();
    console.log("Deleted all");
    await Movie.insertMany(movies);
    console.log("Inserted Movies");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const seederSettings = async () => {
  try {
    await Settings.deleteMany();
    console.log("Deleted all");
    await Settings.insertMany(settings);
    console.log("Inserted Settings");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

// seederUsers();

// seederCelebrity();

seederMovies();

// seederSettings();
