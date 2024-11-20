const express = require("express");

const { pingControllerV2 } = require("../../controllers/ping_controller");

const router = express.Router();

router.get("/ping", pingControllerV2); //mapping a route to a controller

module.exports = router;
