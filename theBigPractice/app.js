"use strict";

// const myName = "alireza";
//
// // let const var
//
// var name = "sadasd"
// name = "Dsada"
//
// var name = "dashdadhadagh"
//
// let name  = "dasidashdsad";
// let name
// const familY = 4324324;
//
//  familY = dasdada

// const one = 1;
// const tow = "2";
//
// console.log(3 && 0);
// console.log(3 && 0);

// function declaration

const names = ["zeinab", "sajjad", "alrieza", "ghasem"];

// names.push("dasdadawdaz")
// names.unshift("dahsdadad")
// names.pop()
// names.shift();
// console.log(names.indexOf("sajjad"));
// console.log(names.includes("sajjad"));
// console.log(names.length);
// console.log(names.length);

// console.log(names[names.length - 3]);

// const userInfo = {
//   name: "alireza",
//   userName: "alriezafazeli8",
//   age: 17,
//   sayMyName() {
//     return this
//   }
// }
//
// console.log(userInfo.sayMyName());
//
//
//
// console.log(userInfo["nam" + "e"]);

const numbers = [1, 2, 4, 5, 7, 4, 4, 67];
// const newNumbers = []
// numbers.forEach(function(value, array) {
//   newNumbers.push(value + " numbers")
// });
// console.log(newNumbers);

// for(let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// function createUser(username, age) {
//   return {
//     username,
//     age,
//   };
// }

// console.log(createUser("alireza", 17));

// const userInfo = Object.create({ name: "none" });

// console.log(userInfo.__proto__);

class userInfo {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const superHuman = new userInfo("alireza", 17);

console.log(superHuman.instance);
console.log(superHuman instanceof userInfo);
