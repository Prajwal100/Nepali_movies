const app = require("./app");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

dotenv.config({ path: "backend/config/config.env" });

const connectDatabase = require("./config/database");

connectDatabase();
// const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT} in ${process.env.NODE_ENV}`
  );
});
