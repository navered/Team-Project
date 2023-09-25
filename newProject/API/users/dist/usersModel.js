"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
exports.UserSchema = new Schema({
    email: String,
    password: String
});
var UserModel = model("users", exports.UserSchema);
exports["default"] = UserModel;
