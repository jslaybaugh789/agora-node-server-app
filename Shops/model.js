import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ShopModel", schema);
export default model;