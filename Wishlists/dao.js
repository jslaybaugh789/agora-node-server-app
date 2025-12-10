import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export default function WishlistsDao() {
  const createWishlist = (wishlist) => {
    const newWishlist = { ...wishlist, _id: uuidv4() };
    return model.create(newWishlist);
  }
  const findAllWishlists = () => model.find();
  const findWishlistById = (wishlistId) => model.findById(wishlistId);
  const findWishlistsByBuyerId = (buyerId) =>  model.find({ buyerId: buyerId });
  const updateWishlist = (wishlistId, wishlist) =>  model.updateOne({ _id: wishlistId }, { $set: wishlist });
  const deleteWishlist = (wishlistId) => model.findByIdAndDelete( wishlistId );
  return { createWishlist, findAllWishlists, findWishlistById, findWishlistsByBuyerId, updateWishlist, deleteWishlist };
}