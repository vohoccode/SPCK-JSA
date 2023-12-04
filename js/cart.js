const listProduct = JSON.parse(localStorage.getItem("cart")) || [];
function render() {
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  document.getElementById("giftOuter").innerHTML = null;
  for (let i in products) {
    document.getElementById("giftOuter").insertAdjacentHTML(
      "beforeend",
      `
        <div
            class="gift-card"
            data-aos="zoom-in"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <img src="${listProduct[i].image}" alt="" class="gift-img" />
            <h6 class="gift-name">${listProduct[i].name.toUpperCase()}</h6>
            <p class="gift-price">${listProduct[i].price}$</p>
            <div class="instock-outer">
              <span class="stock-icon"></span>
              <span>In stock</span>
            </div>
            <button class="btnDelete" onclick="deleteProduct(${i})">Delete</button>
          </div>
        `
    );
  }
}

function deleteProduct(index) {
  alert("Chac chan xoa mon hang " + listProduct[index].name);
  listProduct.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(listProduct));
  render();
}
function deleteAll() {
    alert("Are you sure delete all Gift?");
    localStorage.removeItem("cart")
    render();
}
function buyAll() {
    alert("Buy Successfully!");
    localStorage.removeItem("cart")
    render();
}
window.onload = render();
