"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
app.use(cookie_parser_1.default());
//body
app.use(express_1.default.json());
const { MONGO_URI } = process.env;
mongoose_1.default.connect(MONGO_URI).then(() => {
    console.info("MongoDB connected");
})
    .catch(err => {
    console.error(err);
});
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/API/users", usersRoutes_1.default);
const productsRoutes_1 = __importDefault(require("./API/products/productsRoutes"));
app.use("/API/products", productsRoutes_1.default);
app.listen(port, () => {
    console.log(`App listening on PORT:  ${port}`);
});
