const Celebrity = require("../models/Celebrity");
const celebrities = require("../data/celebrities");
const connectDB = require("../config/database");
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });
connectDB();
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

seederCelebrity();
