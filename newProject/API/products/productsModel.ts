import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  imgUrl: String,
  price: Number,
  title: String,
  description: String,
  email: String,
  customersCart: [String],
  customersWishList: [String],
});

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;
