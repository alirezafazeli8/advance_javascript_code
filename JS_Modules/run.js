"use strict";

const cow = require("cowsay");

// import modulesAll from "./app.js";

// const appModules = require("./app.js");

// console.log(userInfo);
// printSomeThings();
// console.log(startModules);

// console.log(appModules);

// console.log(modulesAll.startModules);

console.log(
  cow.say({
    text: "Hello Im From NPM",
    e: "👀", // eyes
    r: false, // random mode - use a random cow.
  })
);
