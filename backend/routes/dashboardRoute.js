const express = require("express");
const router = express.Router();

const { getDashboardInfo } = require("../controllers/dashboardController.js");

router.route("/get-dashboard-info").get(getDashboardInfo);

module.exports = router;
