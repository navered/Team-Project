"use strict";
exports.__esModule = true;
exports.VendorSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
exports.VendorSchema = new Schema({
    email: String,
    password: String,
    Image: String
});
var VendorModel = model("vendors", exports.VendorSchema);
exports["default"] = VendorModel;
