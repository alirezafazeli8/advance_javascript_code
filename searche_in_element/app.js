"use strict";

const searchInput = document.getElementById("search-el-input");
const container = document.querySelector(".product-container");

const products = [
  {
    name: "This is js Book",
  },
  {
    name: "hello php",
  },
  {
    name: "with python",
  },
  {
    name: "js is fun",
  },
];

let filterWord;

// show for default all application
products.forEach((value) => {
  const pro = document.createElement("h2");
  pro.innerText = value.name;
  container.appendChild(pro);
});

// Find Function
function findTheProduct(products, findFilter) {
  //find the products
  products
    .filter((item) => {
      // reset container after we wanna search a product
      container.innerHTML = "";
      // convert name to lower case and find my specific value
      return item.name.toLowerCase().includes(findFilter.toLowerCase());
    })
    .forEach((value) => {
      // create element
      const pro = document.createElement("h2");
      pro.innerText = value.name;
      // add element to container
      container.appendChild(pro);
    });
}

// search element input event
searchInput.addEventListener("input", function (e) {
  filterWord = e.target.value;
  findTheProduct(products, filterWord);
});
