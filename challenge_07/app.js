"use strict";

// books object
const books = [
  {
    name: "book1",
    exist: true,
  },
  {
    name: "book2",
    exist: false,
  },
  {
    name: "book3",
    exist: true,
  },
  {
    name: "book4",
    exist: false,
  },
];

// book container
const bookContainer = document.querySelector(".book-container");

// exist book array
const existBook = books.filter((item) => item.exist);

// loop on the exist book for showing exist book
existBook.forEach((item) => {
  const newEl = document.createElement("p");
  newEl.innerText = item.name;
  bookContainer.appendChild(newEl);
});

// show length of available book
document.querySelector(
  ".counter"
).innerText = `length of available book "${existBook.length}"`;
