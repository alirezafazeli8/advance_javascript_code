"use strict";

// const elf = {
//   name: "heha",
//   weapon: "Mini Gun",
//   attack() {
//     return `${this.name} is attacked with ${this.weapon} `;
//   },
// };
// const elf2 = {
//   name: "dasdsad",
//   weapon: "dasdad",
//   attack() {
//     return `${this.name} is dasad with ${this.weapon} `;
//   },
// };
// const elf3 = {
//   name: "dadasd",
//   weapon: "Mini dadasdsad",
//   attack() {
//     return `${this.name} is attackedgdsgs with ${this.weapon} `;
//   },
// };

// ------- functions factory ---------
// user -data-> {} -> variable

// const elf = function (name, weapon, message) {
//   return {
//     name,
//     weapon,
//     attack() {
//       return `${this.name} ${message} ${this.weapon} `;
//     },
//   };
// };

// const poweryElf = elf("power elf", "knife and spell", "fucked you with");
// const miniElf = elf("Jean", "sing", "killed you with");

// console.log(poweryElf.name);
// console.log(poweryElf.attack());
// console.log(miniElf.name);
// console.log(miniElf.attack());

// const elfAttack = {
//   attack() {
//     return this.name + " attacked with " + this.weapon;
//   },
// };

// const createElf = function (name, weapon) {
//   let newAttack = Object.create(elfAttack);
//   newAttack.name = name;
//   newAttack.weapon = weapon;
//   return newAttack;
// };

// const createMonster = (name, weapon) => {
//   let newAttack = Object.create(elfAttack);
//   newAttack.name = name;
//   newAttack.weapon = weapon;
//   return newAttack;
// };

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// }

// console.log(createMonster("SHIBAHUBA", "fire hand").attack());
// console.log(createElf("YUGA", "fire").attack());

// const newperson = Object.create(Person);
// newperson.firstName = "alireza";
// newperson.lastName = "fazeli";
// newperson.age = "14";
// newperson.eyeColor = "blue";

// console.log(newperson);

// const Person = function (name, age) {
//   this.age = age;
//   this.name = name;
// };

// console.log(Object.create(new Person()));

// const elf = function (name, weapon) {
//   return {
//     name,
//     weapon,
//   };
// };

// elf.prototype.attack = function () {
//   return this.name + " is attacked with " + this.weapon;
// };

// const piggyElf = new elf("piggy", "pig knife");

// console.log(piggyElf.attack());

// const piggyElf = Object.create(elf("piggy", "piggy knife"));

// console.log(piggyElf.__proto__);

// const createElf = function (name) {
//   return {
//     name,
//   };
// };

// const newElf = createElf("piggy");

// console.log(newElf);
