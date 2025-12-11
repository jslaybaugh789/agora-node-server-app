import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./Users/routes.js";
import "dotenv/config";
import session from "express-session";
import WishlistsRoutes from "./Wishlists/routes.js";
import ShopRoutes from "./Shops/routes.js";
import ProductRoutes from "./Products/routes.js";
import YoutubeRoutes from "./Search/routes.js";
const CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING || "mongodb://127.0.0.1:27017/agora";
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "AIzaSyDYB_M005ZqqTpXVHfIXoa8LFnYvlV3gmg";
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
}));
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "agora",
  resave: false,
  saveUninitialized: false,
};
if (process.env.SERVER_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.SERVER_URL,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
WishlistsRoutes(app);
ShopRoutes(app);
ProductRoutes(app);
YoutubeRoutes(app, YOUTUBE_API_KEY);
app.listen(process.env.PORT || 4000);