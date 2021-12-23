"use strict";

// Symbol

// const symbolOne = Symbol("hello");
// const symbolTwo = Symbol("hello");

// // console.log(symbolOne);
// // console.log(symbolTwo);
// // console.log(symbolTwo === symbolOne);

// const out = Symbol("name");

// const obj = {
//   [Symbol("name")]: "alireza",
// };

// console.log(Object.getOwnPropertySymbols(obj));

// const mySymbol = Symbol.for({ name: "alireza" });

// console.log(mySymbol);

// const allError = {
//   debug: Symbol("debugError"),
//   debugTwo: Symbol("debugError"),
//   userName: Symbol("userNameError"),
//   password: Symbol("passwordError"),
// };

// const userError = allError.debugTwo;

// console.log(userError == allError.debugTwo);

// if (userError == allError.debug) {
//   console.log("Right");
// } else {
//   console.log("no");
// }

// ------ Generators and iterators ---------

// function* saySomeThings() {
//   yield "hello";
//   yield "guys";
//   yield "my name is";
//   yield "alireza";
// }

// const generators = saySomeThings();

// console.log(generators.next().value);
// console.log(generators.next().value);
// console.log(generators.next().value);
// console.log(generators.next().value);

// function* idGenerators() {
//   let firstNumber = 1;

//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
//   yield firstNumber++;
// }

// const callIdGenerators = idGenerators();

// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());
// console.log(callIdGenerators.next());

// function* sayMyName() {
//   yield "alireza";
// }

// const generator = sayMyName();

// // console.log(generator.return("Hello"));
// console.log(generator.next());

// getters and setters

// const userInfo = {
//   age: 17,
//   get yearBorn() {
//     const nowYear = new Date().getFullYear();
//     return nowYear - this.age;
//   },
// };

// console.log(userInfo.yearBorn);

// const userInfo = {
//   _userID: "43242",
//   firstName: "alireza",
//   lastName: "fazeli",
//   userName: "anonymouse",
//   //   fullName() {
//   //     return `${this.firstName} ${this.lastName}`;
//   //   },
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   set setUserName(username) {
//     return (this.userName = username);
//   },
// };

// console.log(userInfo);

// console.log(userInfo.fullName());
// console.log(userInfo.fullName);

// console.log(userInfo.userName);
// userInfo.setUserName = "texas";
// console.log(userInfo.userName);

// const userOne = {
//   name: "alireza",
// };
// const userTwo = {
//   name: "saman",
// };
// const userThree = {
//   name: "shahin",
// };

// const showName = function () {
//   return this.name + " 👨👴";
// };

// const test = showName.bind(userOne, DataTransfer);

// console.log(test);

// const showTheName = showName.bind(userThree);
// showTheName();

// const showNameReal = (obj) => {
//   const show = showName.bind(obj);
//   console.log(show());
// };

// showNameReal(userOne);

// Math.zarb = function (num) {
//   return num * 2;
// };

// const myNum = 8;

// console.log(Math.zarb(myNum));

// Math.secret = "hey im secrect of math :)";

// console.log(Math.secret);
