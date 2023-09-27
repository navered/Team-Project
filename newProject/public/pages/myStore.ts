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
async function handleGetUser() {
  try {
      //ask server to get the user
      const response = await fetch("API/users/get-user");
      const data = await response.json();
      console.log(data)

  } catch (error) {

  }
}

async function handleGetAllUsers() {
  try {
      //ask server to get the user
      const response = await fetch("API/users/get-users");
      const data = await response.json();
      console.log(data)

  } catch (error) {

      console.error(error)
  }
}
handleGetAllUsers();