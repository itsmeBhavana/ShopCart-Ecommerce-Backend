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

  getProduct(id) {
    return products.filter((product) => product.id == id);
  }
}

module.exports = ProductService;
