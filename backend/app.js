const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/errors");
const path = require("path");
const bodyparser = require("body-parser");
const multer = require("multer");

const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "uploads")));
// app.use(express.static("/backend/uploads"));
// app.use("/admin/backend/uploads", express.static("/admin/backend/uploads"));
// app.use("/admin/uploads", express.static("/admin/uploads"));
const user = require("./routes/userRoute");
const celebrity = require("./routes/celebrityRoute");
const movie = require("./routes/movieRoute");

app.use("/api/v1", user);
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
