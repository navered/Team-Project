function goMyStore() {
  window.location.href = `./pages/myStore.html?email=${getUserEmailByQuery()}`;
}
function toggleMenu() {
  const popup = document.querySelector("#popup") as HTMLDivElement;
  renderpopUpMenu(popup);
}

function renderpopUpMenu(rootElement: HTMLElement | null) {
  try {
    const menu_button = document.querySelector(
      ".menu-button"
    ) as HTMLImageElement;

    let html = "";

    if (menu_button.getAttribute("active") == "false") {
      html = `
        <ul dir="rtl" id="popupList">
        <li><a href="./index.html">עמוד הבית</a></li>
        <li>  <a href="./pages/aboutUs.html"> אודות</a></li>
        <li> <a href="./pages/myStore.html"> החנות שלי</a></li>
        <li>  <a href="./pages/wishList.html">רשימת המשאלות </a></li>
        <li>  <a href="./pages/contactUs.html">יצירת קשר</a></li>
        <li> <a href="./pages/register.html">
          <img class="userMenu" src="./imgs/user.svg" alt="">התחברות
        </a></li>
      </ul>
           `;
      menu_button.setAttribute("active", "true"); //chenge the attribute to "true"
    } else {
      html = "";
      menu_button.setAttribute("active", "false");
    }

    if (!rootElement) throw new Error("No root element");

    rootElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}
function getUserEmailByQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("email");
}

async function getFid() {
  const response = await fetch("/API/products/get-all-products");
  const { products } = await response.json();
  const html = products
    .map((product) => {
      return `
    <div class="fid__prodDiv id='${product._id}'">
          <img
            src='${product.imgUrl}'
            alt="" />
          <div class="fid__info">
            <p>title:${product.title}</p>
            <p>price:${product.price}$</p>
            <p>author:${product.email}</p>
          </div>
          <div class="likeAndCart">
            <span onclick="handleAddWishList(event)" class="material-symbols-outlined"> heart_plus </span>
            <span onclick="handleAddCart(event)" class="material-symbols-outlined"> shopping_bag </span>
          </div>
        </div>
    `;
    })
    .join(" ");
  const root = document.querySelector(".fid") as HTMLDivElement;
  root.innerHTML = html;
}

async function handleAddCart(event) {
  try {
    const id = event.target.parentNode.id;
    const userEmail = getUserEmailByQuery();
    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, userEmail }),
    };

    const response = await fetch("/API/products/add-product-to-cart", postInit);
    const { ok } = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function handleAddWishList(event) {
  try {
    const id = event.target;
    console.dir(id);
    if (!id) throw new Error("id not found");
    const userEmail = getUserEmailByQuery();
    if (!userEmail) throw new Error("User email not found");
    const postInit = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, userEmail }),
    };
    const response = await fetch(
      "/API/products/add-product-to-wishlist",
      postInit,
    );
    const { ok } = await response.json();
  } catch (error) {
    console.error(error);
  }
}


