"use strict";

// const person = {
//   name: "keyle",
//   friends: ["john", "sally"],
// };

// function addFriend(p, friendName) {
//   const newPerson = { ...p };
//   newPerson.friends.push(friendName);
//   return newPerson;
// }

// console.log(addFriend(person, "alireza"));

// const names = ["alireza", "moghammmad", "esi", "seyyed"];

// function sayAllNames(names) {
//   names.forEach((element) => {
//     console.log(element);
//   });
// }

// sayAllNames(names);

// // pure functions 🗻

// function pureAllNames(names) {
//   return [...names];
// }

// console.log(pureAllNames(names));

// const userInfo = Object.freeze({
//   name: "alrieza",
//   age: 12,
//   frinends: Object.freeze(["sara", "zeinab", "shamsi"]),
// });

// // userInfo.name = "mohammd"; // if we use freeze we cant change the properties

// // userInfo.frinends[0] = "ali";

// console.log(userInfo);

// const names = ["sara", "zeinab", "shamsi"];

// names.forEach((value) => {
//   console.log(value);
// });

// function getName(name, showName) {
//   return showName(name);
// }

// function showName(name) {
//   return `your name is ${name} 👀`;
// }

// console.log(getName("alireza", showName));

// function sayYourName(name) {
//   return function (greet) {
//     return `hey ${name} ${greet} To YOu `;
//   };
// }

// console.log(sayYourName("alireza")("tabrik"));
