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
function goMyStore() {
    window.location.href = "./pages/myStore.html?email=" + getUserEmailByQuery();
}
function toggleMenu() {
    var popup = document.querySelector("#popup");
    renderpopUpMenu(popup);
}
function renderpopUpMenu(rootElement) {
    try {
        var menu_button = document.querySelector(".menu-button");
        var html = "";
        if (menu_button.getAttribute("active") == "false") {
            html = "\n        <ul dir=\"rtl\" id=\"popupList\">\n        <li><a href=\"./index.html\">\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA</a></li>\n        <li>  <a href=\"./pages/aboutUs.html\"> \u05D0\u05D5\u05D3\u05D5\u05EA</a></li>\n        <li> <a href=\"./pages/myStore.html\"> \u05D4\u05D7\u05E0\u05D5\u05EA \u05E9\u05DC\u05D9</a></li>\n        <li>  <a href=\"./pages/wishList.html\">\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DE\u05E9\u05D0\u05DC\u05D5\u05EA </a></li>\n        <li>  <a href=\"./pages/contactUs.html\">\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</a></li>\n        <li> <a href=\"./pages/register.html\">\n          <img class=\"userMenu\" src=\"./imgs/user.svg\" alt=\"\">\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA\n        </a></li>\n      </ul>\n           ";
            menu_button.setAttribute("active", "true"); //chenge the attribute to "true"
        }
        else {
            html = "";
            menu_button.setAttribute("active", "false");
        }
        if (!rootElement)
            throw new Error("No root element");
        rootElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function getUserEmailByQuery() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("email");
}
function getFid() {
    return __awaiter(this, void 0, void 0, function () {
        var response, products, html, root;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/API/products/get-all-products")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    products = (_a.sent()).products;
                    html = products
                        .map(function (product) {
                        return "\n    <div class=\"fid__prodDiv id='" + product._id + "'\">\n          <img\n            src='" + product.imgUrl + "'\n            alt=\"\" />\n          <div class=\"fid__info\">\n            <p>title:" + product.title + "</p>\n            <p>price:" + product.price + "$</p>\n            <p>author:" + product.email + "</p>\n          </div>\n          <div class=\"likeAndCart\">\n            <span onclick=\"handleAddWishList(event)\" class=\"material-symbols-outlined\"> heart_plus </span>\n            <span onclick=\"handleAddCart(event)\" class=\"material-symbols-outlined\"> shopping_bag </span>\n          </div>\n        </div>\n    ";
                    })
                        .join(" ");
                    root = document.querySelector(".fid");
                    root.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddCart(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, userEmail, postInit, response, ok, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = event.target.parentNode.id;
                    userEmail = getUserEmailByQuery();
                    postInit = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id: id, userEmail: userEmail })
                    };
                    return [4 /*yield*/, fetch("/API/products/add-product-to-cart", postInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleAddWishList(event) {
    return __awaiter(this, void 0, void 0, function () {
        var id, userEmail, postInit, response, ok, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = event.target;
                    console.dir(id);
                    if (!id)
                        throw new Error("id not found");
                    userEmail = getUserEmailByQuery();
                    if (!userEmail)
                        throw new Error("User email not found");
                    postInit = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id: id, userEmail: userEmail })
                    };
                    return [4 /*yield*/, fetch("/API/products/add-product-to-wishlist", postInit)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    ok = (_a.sent()).ok;
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
