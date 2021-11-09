"use strict";

// let array = [];

// for (let i = 5; i > 1; i++) {
//   //   console.log(array.push(i - 1));
// }

//fill array with 60000 elements
const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  while (list.length > 0) {
    if (list) {
      list.pop();
    } else {
      removeItemsFromList();
    }
  }
}

removeItemsFromList();
