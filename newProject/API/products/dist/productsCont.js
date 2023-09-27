"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.addProductToWishList = exports.addProductToCart = exports.getAllProducts = exports.deleteProduct = exports.updateProductInfo = exports.getProductByOwnerEmail = exports.createProduct = void 0;
var console_1 = require("console");
var productsModel_1 = require("./productsModel");
var usersModel_1 = require("./usersModel");
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, newProd, userEmail, findOwner, product, productDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, newProd = _a.newProd, userEmail = _a.userEmail;
                    console_1.log(newProd, userEmail);
                    return [4 /*yield*/, usersModel_1.UserModel.findOne({ email: userEmail })];
                case 1:
                    findOwner = _b.sent();
                    if (!findOwner)
                        throw new Error("Couldnt find owner");
                    product = new productsModel_1["default"]({
                        imgUrl: newProd.imgUrl,
                        price: newProd.price,
                        title: newProd.title,
                        description: newProd.description,
                        email: userEmail
                    });
                    return [4 /*yield*/, product.save()];
                case 2:
                    productDB = _b.sent();
                    res.send({ ok: true, newProduct: productDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createProduct = createProduct;
function getProductByOwnerEmail(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userEmail, usersProducts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userEmail = req.query.email;
                    if (!userEmail)
                        throw new Error("email not found");
                    return [4 /*yield*/, productsModel_1["default"].find({ email: userEmail })];
                case 1:
                    usersProducts = _a.sent();
                    console.log(usersProducts);
                    if (!usersProducts)
                        throw new Error("user's products not found");
                    res.send({ usersProducts: usersProducts });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getProductByOwnerEmail = getProductByOwnerEmail;
function updateProductInfo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, title, price, description, currentProduct, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, id = _a.id, title = _a.title, price = _a.price, description = _a.description;
                    console_1.log(id, title, price, description);
                    return [4 /*yield*/, productsModel_1["default"].findOneAndUpdate({ _id: id }, { title: title, price: price, description: description })];
                case 1:
                    currentProduct = _b.sent();
                    console_1.log(currentProduct);
                    if (!currentProduct) {
                        throw new Error("product not found");
                    }
                    console.log("updated successfully");
                    res.send({ ok: true });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error(error_3.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateProductInfo = updateProductInfo;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var id, currentProduct, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.body.id;
                    return [4 /*yield*/, productsModel_1["default"].findOneAndDelete({ id: id })];
                case 1:
                    currentProduct = _a.sent();
                    if (!currentProduct) {
                        return [2 /*return*/, res.status(404).json({ message: "מוצר לא נמצא" })];
                    }
                    res.send({ ok: true });
                    console_1.log("delete success");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteProduct = deleteProduct;
function getAllProducts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var products, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, productsModel_1["default"].find({})];
                case 1:
                    products = _a.sent();
                    res.send({ products: products });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5.massage);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllProducts = getAllProducts;
function addProductToCart(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, userEmail, newCustomer;
        return __generator(this, function (_b) {
            try {
                _a = req.body, id = _a.id, userEmail = _a.userEmail;
                newCustomer = productsModel_1["default"].findOneAndUpdate({ _id: id, customersCart: { $ne: userEmail } }, { $addToSet: { customersCart: userEmail } }, { "new": true });
                if (!newCustomer)
                    throw new Error("Customer not found or already add this product to his cart");
                res.send({ ok: true });
            }
            catch (error) {
                console.error(error.massage);
            }
            return [2 /*return*/];
        });
    });
}
exports.addProductToCart = addProductToCart;
function addProductToWishList(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, id, userEmail, newCustomer;
        return __generator(this, function (_b) {
            try {
                _a = req.body, id = _a.id, userEmail = _a.userEmail;
                newCustomer = productsModel_1["default"].findOneAndUpdate({ _id: id, customersWishList: { $ne: userEmail } }, { $addToSet: { customersWishList: userEmail } }, { "new": true });
                if (!newCustomer)
                    throw new Error("Customer not found or already add this product to his wishList");
                res.send({ ok: true });
            }
            catch (error) {
                console.error(error.massage);
            }
            return [2 /*return*/];
        });
    });
}
exports.addProductToWishList = addProductToWishList;
