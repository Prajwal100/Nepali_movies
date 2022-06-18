const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
const user = require("./routes/urserRoute");
const celebrity = require("./routes/celebrityRoute");

app.use("/api/v1/user", user);
app.use("/api/v1/celebrity", celebrity);

module.exports = app;
