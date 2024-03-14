let API_URL = "https://fakestoreapi.com/products/";
let cards = document.querySelector(".Products");
fetch(API_URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((product) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <img src=${product.image}>
      <h3>Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h3>
      <p class="narx">$${product.price} <span>$5</span></p>
      <button class="add">ADD</button>
      `;
      card.addEventListener("click", () => singleRoute(product.id));
      cards.appendChild(card);
    });
  });
function singleRoute(id) {
  window.open(`./pages/product.html?id=${id}`, "_self");
}
