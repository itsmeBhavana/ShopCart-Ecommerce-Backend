const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ProductService = require("../services/product_service");
const FakeStoreRepository = require("../repositories/fake_store_repository");

const productService = new ProductService(new FakeStoreRepository());

async function create_product(req, res) {
  try {
    const response = await productService.createProduct(req.body);
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

async function get_products(req, res) {
  try {
    const response = await productService.getProducts();
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

async function get_product(req, res) {
  try {
    const response = await productService.getProduct(req.params.id);
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
