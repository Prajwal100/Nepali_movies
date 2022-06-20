const app = require("./app");
// const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

//setting up the config files
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = require("./config/database");

connectDatabase();
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
