const { default: axios } = require("axios");

class FakeStoreRepository {
  async getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getProduct(id) {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/" + id
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = FakeStoreRepository;
