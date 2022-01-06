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

// const city = {
//   name: "new york",
//   width: 5000,
//   popularity: 434324,

//   howMany() {
//     return `${this.name} has ${this.popularity} popularitys in the city`;
//   },
// };

// console.log(city.name);
// console.log(city.howMany());

// const creatCity = function (name, popularity) {
//   return {
//     name,
//     popularity,
//     howMany() {
//       return `${this.name} has ${this.popularity} popularitys in the city`;
//     },
//   };
// };

// const newYork = creatCity("new york", 4324);
// const neka = creatCity("neka", 3424);

// console.log(newYork.howMany());
// console.log(neka.howMany());

// const sayMyName = function () {
//   return {
//     yourName() {
//       return `your name is ${this.name}`;
//     },
//   };
// };

// // const userInfo = function() {

// // }

// const newSayMyName = Object.create(sayMyName());
// newSayMyName.name = "alireza";

// // console.log(newSayMyName.yourName());

// console.log(newSayMyNam);

// const human = function (name) {
//   this.name = name;
// };

// // console.log(new human("alrieza"));

// human.prototype.sayName = function () {
//   console.log("hello im proto");
// };

// console.log(new human().__proto__);

// function sayMyName() {
//   console.log("alireza");
// }

// console.log(sayMyName.prototype);

// const creatElf = function (name, weapon) {
//   return {
//     name,
//     weapon,
//   };
// };

// creatElf.__proto__.attack = function () {
//   return this.name + "attack is started";
// };

// const myElf = creatElf("jija", "fire");

// console.log(creatElf("dasd", "dasda").at);

// console.log(myElf instanceof creatElf);

// class elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }

//   attack() {
//     return this.name + " is attacked with " + this.weapon;
//   }

//   build() {
//     console.log("Building is started");
//     const building = function () {
//       console.log("compeletd");
//     };

//     building();
//   }
// }

// const newElf = new elf("jiha", "fire");

// console.log(newElf);
// newElf.attack();

// newElf.build();
// // let tt = "";
// // console.log(newElf instanceof tt);

// const elf = {
//   attack() {
//     return this.name + " is attacked";
//   },
// };

// const newElf = Object.create(elf);
// newElf.name = "jiha";

// console.log(newElf.attack());

// const myFunc = function () {};

// console.log(new myFunc());

// class hero {
//   #age = 23;
//   constructor(name, weapon) {
//     (this.name = name), (this.weapon = weapon);
//   }
//   attack() {
//     return `${this.name} is attacked with ${this.weapon}`;
//   }
// }

// // const newHero = new hero();
// // newHero.#age = 5;
// // console.log(newHero);

// class elf extends hero {
//   constructor(name, weapon, lifeTime) {
//     super(name, weapon);
//     this.lifeTime = lifeTime;
//   }
// }

// const godElf = new elf("God Elf", "Spell", 3424);
// console.log(godElf);

// console.log(godElf.attack());

// class advanceHero extends hero {
//   constructor(name, weapon, type) {
//     super(name, weapon);
//     this.type = type;
//   }
// }

// const yakuza = new advanceHero("MR.Yakuza", "Fire Hand", "human");
// console.log(yakuza);

// const jamesBand = { ...yakuza };
// jamesBand.name = "Mr James";
// console.log(yakuza.__proto__);
// console.log(jamesBand.__proto__);

// const Product = {};

// const beard = new Product();

// console.log(new);

// const product = function (_name, _price) {
//   const name = _name;
//   const price = _price;
//   this.getName = function () {
//     return name;
//   };
// };

// console.log(product("dad").getName);

// const userInfo = {

// }

// function Person(name, age) {}

// console.log(new Person());

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const alireza = new Human("alireza", 17);
// console.log(alireza);

// const Human = {
//   init(name, age) {
//     this.name = name;
//     this.age = age;
//   },
// };

// const alireza = Object.create(Human);
// alireza.init("alireza", 17);

// console.log(alireza);

// function sayMyName() {
//   return "alireza";
// }

// function* nextNumberGenerators() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const nextNumber = nextNumberGenerators();
// console.log(nextNumber.next());
// console.log(nextNumber.next());
// console.log(nextNumber.next());
// console.log(nextNumber.next());

// console.log(nextNumber.next());
// // console.log(nextNumber.next());
// // console.log(nextNumber.next());
// console.log(nextNumber.return());

// while (true) {
//   const next = nextNumber.next();
//   if (next.done != true) {
//     console.log(next);
//   } else {
//     break;
//   }
// }

// const sayMyName = function () {
//   return `your name  is  ${this.name}`;
// };

// const humanOne = {
//   name: "sajjad",
// };

// const humanTwo = {
//   name: "alireza",
// };

// const userInfo = {
//   name: "AnonyMous",
//   lastName: "Kazem",
//   set setName(name) {
//     this.name = name;
//   },
//   get completeName() {
//     return `name is ${this.name} and lastName is ${this.lastName}`;
//   },
// };

// // console.log(userInfo.completeName);
// userInfo.setName = "alireza";
// console.log(userInfo);

class Human {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
}

class SuperHuman extends Human {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  static sayHellFromSuperHuman() {
    return "hello im super human";
  }
}

const mySuperHuman = new SuperHuman("alireza", 17, "doctor");

console.log(mySuperHuman);

console.log(SuperHuman.sayHellFromSuperHuman());
