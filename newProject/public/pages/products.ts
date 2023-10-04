renderProducts(document.querySelector("#products"));

  async function renderProducts(productContainer: HTMLDivElement) {
    try {
      const response = await fetch(`/API/products/get-products`);
      const { products } = await response.json(); 
  
      console.log(products);
  
      // Create HTML to display the items
      const productHTML = products.map((products) => `
        <div class="product">
          <img src="${products.imgUrl}" id="img" alt="${products.productName}" />
          <div class="productName">Product: ${products.productName}</div>
          <div class="productDesc">Description: ${products.productDesc}</div>
          <div class="price">Price: ${products.price}</div>
          <div class="category">Category: ${products.category}</div>
          <div class="vendor">Vendor: ${products.vendor}</div>
          <form onsubmit="handlecreateOrder(event)">
          <button type="submit">Add to Order</button>
          <button type="delete">Remove from Order</button>
      </form>
        </div>
      `).join('');
  
      // Set the HTML content of the itemsContainer
      productContainer.innerHTML = productHTML;
    } catch (error) {
      console.error(error);
    }
  }
  
async function handleGetUser() {
    try {
        //ask server to get the user
        const response = await fetch("API/user/get-user");
        const data = await response.json();
        console.log(data)

    } catch (error) {

    }
}

async function handleAddproduct(ev: any) {
    try {
      ev.preventDefault(); // stop form from submitting
      const product = {
        // get data from form
        productName: ev.target.productName.value,
        productDesc: ev.target.productDesc.value,
        productUrl: ev.target.productUrl.value,
        productPrice: ev.target.productPrice.value,
        category: ev.target.category.value,
        vendor: ev.target.vendor.value,
      };
  
      const response = await fetch("/API/products/createProduct", {
        // send data to server
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const { error, productDB} = await response.json(); // get data from server
      console.log(productDB);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    }

    

  