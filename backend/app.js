const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/errors");
const path = require("path");

app.use(cors());

app.use(express.json());
const user = require("./routes/userRoute");
const celebrity = require("./routes/celebrityRoute");
const movie = require("./routes/movieRoute");

app.use("/api/v1/auth", user);
app.use("/api/v1/celebrity", celebrity);
app.use("/api/v1/movie", movie);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}
//error middleware to handles
app.use(errorMiddleware);

module.exports = app;
