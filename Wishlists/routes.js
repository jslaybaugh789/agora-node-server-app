import WishlistsDao from "./dao.js";

export default function WishlistsRoutes(app) {
  const dao = WishlistsDao();
  const createWishlist = async (req, res) => {
    const wishlist = await dao.createWishlist(req.body);
    res.json(wishlist);
  };
  const deleteWishlist = async (req, res) => {
      const status = await dao.deleteWishlist(req.params.wishlistId);
      res.json(status);
  };
  const findAllWishlists = async (req, res) => {
    const wishlists = await dao.findAllWishlists();
    res.json(wishlists);
  };
  const findWishlistById = async (req, res) => {
    const wishlist = await dao.findWishlistById(req.params.wishlistId);
    res.json(wishlist);
  };
  const findWishlistsByBuyerId = async (req, res) => {
    const wishlist = await dao.findWishlistsByBuyerId(req.params.buyerId);
    res.json(wishlist);
  }
  const updateWishlist = async (req, res) => {
    const wishlistId = req.params.wishlistId;
    const wishlistUpdates = req.body;
    await dao.updateWishlist(wishlistId, wishlistUpdates);
    const currentWishlist = await dao.findWishlistById(wishlistId);
    res.json(currentWishlist);
  };

  app.post("/api/wishlists", createWishlist);
  app.get("/api/wishlists", findAllWishlists);
  app.get("/api/wishlists/:wishlistId", findWishlistById);
  app.get("/api/wishlists/buyer/:buyerId", findWishlistsByBuyerId);
  app.put("/api/wishlists/:wishlistId", updateWishlist);
  app.delete("/api/wishlists/:wishlistId", deleteWishlist);
}