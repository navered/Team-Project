"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCont_1 = require("./productsCont");
var router = express_1["default"].Router();
router
    .get("/get-products-by-owner-email", productsCont_1.getProductByOwnerEmail)
    .post("/create-product", productsCont_1.createProduct)
    .post("/add-product-to-cart", productsCont_1.addProductToCart)
    .post("/add-product-to-wishlist", productsCont_1.addProductToWishList)["delete"]("/delete-product", productsCont_1.deleteProduct)
    .patch("/update-product-info", productsCont_1.updateProductInfo)
    .get("/get-all-products", productsCont_1.getAllProducts);
exports["default"] = router;
