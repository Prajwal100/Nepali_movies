const app = require("./app");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

// Handle the uncaught exception
process.on("uncaughtException", (error) => {
  console.log(`ERROR : ${error.message}`);
  console.log("Shutting down server due to uncaught exception");

  process.exit(1);
});

//setting up the config files
dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = require("./config/database");

connectDatabase();
const server = app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});

// Handle unhandled promise exceptions
process.on("unhandledRejection", (error) => {
  console.log(`ERROR : ${error.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
