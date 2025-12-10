import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function ShopsDao() {
  const createShop = (shop) => {
    const newShop = { ...shop, _id: uuidv4() };
    return model.create(newShop);
  }
  const findAllShops = () => model.find();
  const findShopById = (shopId) => model.findById(shopId);
  const findShopsBySellerId = (sellerId) =>  model.find({ sellerId: sellerId });
  const updateShop = (shopId, shop) =>  model.updateOne({ _id: shopId }, { $set: shop });
  const deleteShop = (shopId) => model.findByIdAndDelete( shopId );
  return { createShop, findAllShops, findShopById, findShopsBySellerId, updateShop, deleteShop };
}