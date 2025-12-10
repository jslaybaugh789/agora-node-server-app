import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    price: String,
    description: String,
    shopId: String
    },
    {collection: "products"}
);
export default productSchema;