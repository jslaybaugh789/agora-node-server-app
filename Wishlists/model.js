import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("WishlistModel", schema);
export default model;