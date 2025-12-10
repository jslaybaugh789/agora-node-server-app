import mongoose from 'mongoose';
const wishlistSchema = new mongoose.Schema({
    _id: String,
    buyerId: String,
    productId: String
    },
    {collection: "wishlists"}
);
export default wishlistSchema;