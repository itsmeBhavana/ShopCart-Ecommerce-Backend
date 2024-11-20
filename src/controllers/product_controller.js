const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const {
  createProduct,
  getProducts,
  getProduct,
} = require("../services/product_service");

function create_product(req, res) {
  try {
    const response = createProduct(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: ReasonPhrases.CREATED,
      data: response,
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

function get_products(req, res) {
  try {
    const response = getProducts();
    res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched the products",
      data: response,
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

function get_product(req, res) {
  try {
    const response = getProduct(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched the productb",
      data: response,
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
}

module.exports = { create_product, get_products, get_product };
