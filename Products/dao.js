import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function ProductsDao() {
  const createProduct = (product) => {
    const newProduct = { ...product, _id: uuidv4() };
    return model.create(newProduct);
  }
  const findAllProducts = () => model.find();
  const findProductById = (productId) => model.findById(productId);
  const findProductsByShopId = (shopId) =>  model.find({ shopId: shopId });
  const updateProduct = (productId, product) =>  model.updateOne({ _id: productId }, { $set: product });
  const deleteProduct = (productId) => model.findByIdAndDelete( productId );
  return { createProduct, findAllProducts, findProductById, findProductsByShopId, updateProduct, deleteProduct };
}