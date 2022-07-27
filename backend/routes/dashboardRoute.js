const express = require("express");
const router = express.Router();

const {
  getDashboardInfo,
  settings,
  settingsUpdate,
} = require("../controllers/dashboardController.js");

router.route("/get-dashboard-info").get(getDashboardInfo);

router.route("/settings").get(settings);
router.route("/settings/:id").patch(settingsUpdate);

module.exports = router;
