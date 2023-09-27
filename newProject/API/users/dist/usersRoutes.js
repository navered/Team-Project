"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("./usersCont");
var midllewear_1 = require("./midllewear");
var router = express_1["default"].Router();
router
    .post("/login", usersCont_1.login)
    .post("/register-user", usersCont_1.registerUser)
    .get("/get-users", midllewear_1.isAdmin, usersCont_1.getUsers);
exports["default"] = router;
