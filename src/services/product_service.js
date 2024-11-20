//in memory db
//Service layer is independent of repository
const products = [];

class ProductService {
  constructor(repository) {
    this.repository = repository;
  }
  createProduct(product) {
    const newProduct = {
      id: products.length,
      ...product,
    };
    products.push(newProduct);
    return newProduct;
  }

  async getProducts() {
    const response = await this.repository.getProducts();
    return response.data;
  }

  async getProduct(id) {
    const response = await this.repository.getProduct(id);
    return response.data;
  }
}

module.exports = ProductService;
