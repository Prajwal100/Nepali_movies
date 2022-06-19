const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/errors");

app.use(cors());

app.use(express.json());
const user = require("./routes/urserRoute");
const celebrity = require("./routes/celebrityRoute");
const movie = require("./routes/movieRoute");

app.use("/api/v1/user", user);
app.use("/api/v1/celebrity", celebrity);
app.use("/api/v1/movie", movie);

//error middleware to handles
app.use(errorMiddleware);

module.exports = app;
