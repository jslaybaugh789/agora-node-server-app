import ShopsDao from "./dao.js";

export default function ShopRoutes(app) {
  const dao = ShopsDao();
  const createShop = async (req, res) => {
    const shop = await dao.createShop(req.body);
    res.json(shop);
  };
  const deleteShop = async (req, res) => {
      const status = await dao.deleteShop(req.params.shopId);
      res.json(status);
  };
  const findAllShops = async (req, res) => {
    const shops = await dao.findAllShops();
    res.json(shops);
  };
  const findShopById = async (req, res) => {
    const shop = await dao.findShopById(req.params.shopId);
    res.json(shop);
  };
  const findShopsBySellerId = async (req, res) => {
    const shop = await dao.findShopsBySellerId(req.params.sellerId);
    res.json(shop);
  }
  const updateShop = async (req, res) => {
    const shopId = req.params.shopId;
    const shopUpdates = req.body;
    await dao.updateShop(shopId, shopUpdates);
    const currentShop = await dao.findShopById(shopId);
    res.json(currentShop);
  };

  app.post("/api/shops", createShop);
  app.get("/api/shops", findAllShops);
  app.get("/api/shops/:shopId", findShopById);
  app.get("/api/shops/seller/:sellerId", findShopsBySellerId);
  app.put("/api/shops/:shopId", updateShop);
  app.delete("/api/shops/:shopId", deleteShop);
}