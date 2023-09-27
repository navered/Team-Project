import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const VendorSchema = new Schema({
  email: String,
  password: String,
  Image: String,
});

const VendorModel = model("vendors", VendorSchema);
export default VendorModel;