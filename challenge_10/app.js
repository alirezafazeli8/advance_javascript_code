"use strict";

const addProductForm = document.getElementById("add-pro-form");
const findInput = document.getElementById("find-pro");
const productContainer = document.querySelector(".pro-container");
const existCheckBox = document.getElementById("exist-checkbox");
const addProductInput = document.getElementById("add-product-input");

let products = [];

const localCreate = JSON.parse(localStorage.getItem("products"));

// let localCreate;

addProductForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // add product function
  addProduct(products);
});

findInput.addEventListener("input", function (e) {
  searchFunc(localCreate, e.target.value);
});

localCreate.forEach((item) => {
  createElement(item);
});

existCheckBox.addEventListener("change", function (e) {
  existCheckBoxFunc(e, products);
});

removeButton(products);
refreshJson(products);
