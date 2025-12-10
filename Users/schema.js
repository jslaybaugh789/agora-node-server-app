import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    dob: Date,
    role: {
      type: String,
      enum: ["BUYER", "SELLER"],
      default: "BUYER",
    },
  },
  { collection: "users" }
);
export default userSchema;