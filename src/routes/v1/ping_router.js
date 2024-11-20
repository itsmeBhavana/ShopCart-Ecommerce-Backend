const express = require("express");

const { pingController } = require("../../controllers/ping_controller");

const pingRouter = express.Router();
pingRouter.get("/", pingController); //mapping a route to a controller

module.exports = pingRouter;
