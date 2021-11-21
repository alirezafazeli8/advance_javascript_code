"use strict";

const addProductForm = document.getElementById("add-pro-form");
const findInput = document.getElementById("find-pro");
const productContainer = document.querySelector(".pro-container");
const existCheckBox = document.getElementById("exist-checkbox");
const addProductInput = document.getElementById("add-product-input");

let products = [
  {
    name: "benz-g",
    exist: true,
    id: "435434ds35454654",
  },
  {
    name: "javascript",
    exist: true,
    id: "435434354dasdasda54654",
  },
  {
    name: "php is so bad",
    exist: false,
    id: "43543dasgggasd435454654",
  },
];

addProductForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // add product function
  addProduct(products);
});

findInput.addEventListener("input", function (e) {
  searchFunc(products, e.target.value);
});

products.forEach((item) => {
  createElement(item);
  removeButton(products);
});


existCheckBox.addEventListener("change", function (e) {
  existCheckBoxFunc(e, products)
})

