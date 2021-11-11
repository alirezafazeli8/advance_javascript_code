// "use strict";

// let array = [];

// for (let i = 5; i > 1; i++) {
//   //   console.log(array.push(i - 1));
// }

//fill array with 60000 elements
// const list = new Array(60000).join("1.1").split(".");

// function removeItemsFromList() {
//   while (list.length > 0) {
//     if (list) {
//       list.pop();
//     } else {
//       removeItemsFromList();
//     }
//   }
// }

// removeItemsFromList();

// var likeFood = "pizza";

// var yourFood = function () {
//   console.log(likeFood);

//   var likeFood = "Hamburger";

//   console.log(likeFood);
// };

// debugger;
// yourFood();

// function sayHello() {
//   sayHello();
// }

// sayHello();

// function one() {
//   var varOne;
// }

// function two() {
//   var varOne = false;
//   one();
// }

// var varOne = true;
// two();

// function a() {
//   let name = "hello";
//   return this;
// }

// console.log(a());

// const human = {
//   name: "alrieza",
//   run() {
//     console.log(this);
//   },
// };

// human.run();

// function a() {
//   console.log(this);
// }

// // console.log();
// a();

function sayMyName() {
  console.log(this.name + "!");
}

const name = "alireza";

sayMyName();
