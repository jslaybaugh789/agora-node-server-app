import ProductsDao from "./dao.js";

export default function ProductRoutes(app) {
  const dao = ProductsDao();
  const createProduct = async (req, res) => {
    const product = await dao.createProduct(req.body);
    res.json(product);
  };
  const deleteProduct = async (req, res) => {
      const status = await dao.deleteProduct(req.params.productId);
      res.json(status);
  };
  const findAllProducts = async (req, res) => {
    const products = await dao.findAllProducts();
    res.json(products);
  };
  const findProductById = async (req, res) => {
    const product = await dao.findProductById(req.params.productId);
    res.json(product);
  };
  const findProductsByShopId = async (req, res) => {
    const products = await dao.findProductsByShopId(req.params.shopId);
    res.json(products);
  }
  const updateProduct = async (req, res) => {
    const productId = req.params.productId;
    const productUpdates = req.body;
    await dao.updateProduct(productId, productUpdates);
    const currentProduct = await dao.findProductById(productId);
    res.json(currentProduct);
  };

  app.post("/api/products", createProduct);
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:productId", findProductById);
  app.get("/api/products/shop/:shopId", findProductsByShopId);
  app.put("/api/products/:productId", updateProduct);
  app.delete("/api/products/:productId", deleteProduct);
}