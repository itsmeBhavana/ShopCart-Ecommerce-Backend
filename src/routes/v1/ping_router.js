const express = require("express");

const { pingController } = require("../../controllers/ping_controller");

const pingRouter = express.Router();

function checkrequest(req, res, next) {
  console.log("Checking the request");
  next();
  console.log("Ending check request");
}

function logger(req, res, next) {
  console.log("Printing logs");
  next();
  console.log("Ending log request");
}

function authchecker(req, res, next) {
  console.log("Auth checked");
  next();
  console.log("Ending Auth Request");
}
pingRouter.get("/", [checkrequest, logger, authchecker], pingController); //mapping a route to a controller

module.exports = pingRouter;
