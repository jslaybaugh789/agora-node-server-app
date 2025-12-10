import mongoose from 'mongoose';
const shopSchema = new mongoose.Schema({
    _id: String,
    name: String,
    sellerId: String
    },
    {collection: "shops"}
);
export default shopSchema;