const express = require("express");

const V1Router = require("./v1/index");
const PingRouterV2 = require("./v2/ping_router_v2");

const apiRouter = express.Router();
apiRouter.use("/v1", V1Router);
apiRouter.use("/v2", PingRouterV2);

module.exports = apiRouter;
