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
    return response;
  }

  async getProduct(id) {
    const response = await this.repository.getProduct(id);
    return response;
  }

  async createProduct(product) {
    const response = await this.repository.createProduct(product);
    return response;
  }
}

module.exports = ProductService;
