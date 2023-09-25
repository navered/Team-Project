import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const UserSchema = new Schema({
  email: String,
  password: String,
});

const UserModel = model("users", UserSchema);
export default UserModel;
