const express = require("express");

const productRouter = express.Router();
const {
  create_product,
  get_products,
  get_product,
} = require("../../controllers/product_controller");
const {
  createProductValidator,
} = require("../../middlewares/product_middlewares");

productRouter.post("/", createProductValidator, create_product);
productRouter.get("/", get_products);
productRouter.get("/:id", get_product);

module.exports = productRouter;
