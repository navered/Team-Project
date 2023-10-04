import express from "express";
import {
  getProducts,
  addProductToCart,
  addProductToWishList,
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductByOwnerEmail,
  updateProductInfo,
} from "./productsCont";
const router = express.Router();

router
  .get("/get-products", getProducts)
  .get("/get-products-by-owner-email", getProductByOwnerEmail)
  .post("/create-product", createProduct)
  .post("/add-product-to-cart", addProductToCart)
  .post("/add-product-to-wishlist", addProductToWishList)
  .delete("/delete-product", deleteProduct)
  .patch("/update-product-info", updateProductInfo)
  .get("/get-all-products", getAllProducts);
export default router;
