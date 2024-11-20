const express = require("express");

const productRouter = express.Router();
const { create_product } = require("../../controllers/product_controller");
const {
  createProductValidator,
} = require("../../middlewares/product_middlewares");

productRouter.get("/", (req, res) => {
  return res.json({ products: [] });
}); //mapping a route to a controller

productRouter.post("/", createProductValidator, create_product);

module.exports = productRouter;
