"use strict";

const form = document.querySelector("#add-pro-form");
const addProductForm = document.querySelector("#add-pro-form");
const findInput = document.querySelector("#find-pro");
const productContainer = document.querySelector(".pro-container");

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

function showingProducts(allProducts) {
  allProducts.forEach((item) => {
    const proEl = document.createElement("p");
    proEl.innerText = item.name;
    productContainer.appendChild(proEl);
  });
}

showingProducts(products);

function addProduct(value, container) {
  // create element
  const proEl = document.createElement("p");
  proEl.innerText = value;

  // add element to container
  container.appendChild(proEl);

  // push element to products array
  products.push({ name: value });
}

form.addEventListener("submit", function (e) {
  // reset event
  e.preventDefault();

  // input value
  const inputValue = e.target.elements.addProductInput.value;

  // run function
  addProduct(inputValue, productContainer);

  // clear the add input
  e.target.addProductInput.value = "";
});

// findInput
findInput.addEventListener("input", function (e) {
  // convert target value to lowercase
  const targetValue = e.target.value.toLowerCase();

  // clear the all element in the container
  productContainer.innerHTML = "";

  // loop on the my products
  products.forEach((item) => {
    // convert product name to lowercase
    const proName = item.name.toLowerCase();

    // check exist name
    if (proName.includes(targetValue)) {
      // create element and insert to container
      const proEl = document.createElement("p");
      proEl.innerText = item.name;
      productContainer.appendChild(proEl);
    }
  });
});
