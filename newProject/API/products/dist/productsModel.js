"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
var productSchema = new Schema({
    productName: String,
    description: String,
    category: String,
    vendor: String,
    price: Number,
    imgUrl: String
});
var ProductModel = mongoose_1["default"].model("product", productSchema);
exports["default"] = ProductModel;
