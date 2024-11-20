const { default: axios } = require("axios");

class FakeStoreRepository {
  async getProducts() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = FakeStoreRepository;
