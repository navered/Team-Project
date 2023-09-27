"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("./usersCont");
var users_1 = require("./middleWear/users");
var router = express_1["default"].Router();
router
    .post("/login", usersCont_1.login)
    .post("/register", usersCont_1.registerUser)
    .get("/get-users", users_1.isAdmin, usersCont_1.getUsers);
exports["default"] = router;
