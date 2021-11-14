"use strict";

const input = document.querySelector("input");
const container = document.querySelector(".container");

input.addEventListener("change", function () {
  console.log("changed ...");
});
input.addEventListener("input", function () {
  console.log("changed ...");
});

container.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);
});
