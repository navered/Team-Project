import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: String,
  description: String,
  category:String,
  vendor:String,
  price: Number,
  imgUrl: String,
});

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;
