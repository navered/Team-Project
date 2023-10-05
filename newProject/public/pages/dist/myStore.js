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
var slideIndex = 1;
var autoSlide = false; // אפשר להשאיר את זה ב- false בתחילה
showSlides(slideIndex);
function plusSlides(n) {
    showSlides((slideIndex += n));
    autoSlide = false; // לאחר לחיצה על חץ, משנה ל- false כך שההחלפה האוטומטית תתבטל
}
function currentSlide(n) {
    showSlides((slideIndex = n));
    autoSlide = false; // לאחר לחיצה על נקודה, משנה ל- false כך שההחלפה האוטומטית תתבטל
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    if (autoSlide) {
        setTimeout(function () {
            plusSlides(1);
        }, 2000);
    }
}
// class Product {
//   constructor(
//     public imgUrl: string,
//     public price: number,
//     public title: string,
//     public description: string,
//   ) {}
// }
// async function handleAddProduct(event) {
//   try {
//     event.preventDefault();
//     const imgUrl = event.target.imgUrl.value;
//     const price = event.target.price.value;
//     const title = event.target.title.value;
//     const description = event.target.description.value;
//     const userEmail = getUserEmailByQuery();
//     if (!imgUrl || !price || !title || !description || !userEmail)
//       throw new Error("Some fields are empty");
//     const form = document.querySelector(".myForm") as HTMLFormElement;
//     form.reset();
//     const newProd: Product = new Product(imgUrl, price, title, description);
//     const postInit = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ newProd, userEmail }),
//     };
//     const response = await fetch("/API/products/create-product", postInit);
//     const { ok, newProduct } = await response.json();
//     renderMyStore();
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// function getUserEmailByQuery() {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get("email");
// }
// async function handleDeleteProduct(event) {
//   // /delete-product
// }
// async function renderMyStore() {
//   try {
//     const userEmail = getUserEmailByQuery();
//     console.log(userEmail);
//     const response = await fetch(
//       `/API/products/get-products-by-owner-email?email=${userEmail}`,
//     );
//     const { usersProducts } = await response.json();
//     const html = usersProducts
//       .map((product) => {
//         return `
//       <div class="storeGallery__productDiv" id = "${product._id}">
//           <img src=${product.imgUrl} alt="" />
//           <form id ="${product._id}" onsubmit="handleUpdate(event, '${product._id}')" class="fid__info">
//           <label>title:</label>
//             <input id="title" name="title" type="text" value = "${product.title}"></input><br>
//             <label>price:</label>
//             <input id="price" name="price" type="number" value = "${product.price}">$</input><br>
//             <label> description: </label>
//             <input id="description" name="description" value="${product.description}"></input><br>
//             <p>author:${product.email}</p><br>
//           <div class="likeAndCart">
//           <button type="submit" >update</button>
//           <button type="button" onclick='handleDeleteProdByOwner(event , "${product._id}")'> <span class="material-symbols-outlined"> delete </span></button>
//           </form>
//           </div>
//         </div>`;
//       })
//       .join(" ");
//     const root = document.querySelector(".storeGallery") as HTMLDivElement;
//     root.innerHTML = html;
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function handleUpdate(event, id) {
//   try {
//     event.preventDefault();
//     const newTitle = event.target.title.value;
//     const newPrice = event.target.price.value;
//     const newDescription = event.target.description.value;
//     console.log(newTitle, newPrice, newDescription);
//     if (!newTitle || !newPrice || !newDescription)
//       throw new Error("some filed are  empty");
//     const patchInit = {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         id: id,
//         title: newTitle,
//         price: newPrice,
//         description: newDescription,
//       }),
//     };
//     const response = await fetch(
//       "/API/products/update-product-info",
//       patchInit,
//     );
//     const { ok } = await response.json();
//     if (!ok) throw new Error("someThing wrong . the process not completed");
//     renderMyStore();
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function handleDeleteProdByOwner(event, id) {
//   try {
//     event.preventDefault();
//     const deleteInit = {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     };
//     const response = await fetch("/API/products/delete-product", deleteInit);
//     const { ok } = await response.json();
//     if (!ok) throw new Error("Error deleting");
//     renderMyStore();
//   } catch (error) {
//     console.error(error);
//   }
// }
// function goHomePage() {
//   window.location.href = "../index.html";
// }
function handleGetUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/get-user")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleGetAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("API/users/get-users")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
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
handleGetAllUsers();
