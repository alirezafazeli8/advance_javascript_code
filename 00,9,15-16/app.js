"use strict";

// const URL = "http://localhost:3000/alluser";
// const userContainer = document.querySelector(".user-container");

// const usersData = async function (URL) {
//   try {
//     const fetchUsers = await fetch(URL);
//     const userJson = await fetchUsers.json();

//     console.log(userJson);
//   } catch (err) {
//     //   show all error
//     console.error(err);
//   }
// };

// usersData(URL);

// promise => object

// const sum = 2 + 2;

// const resolve = function (res) {
//   console.log(res);
//   console.log("Yay");
// };

// const reject = function (rej) {
//   console.log(rej);
// };

// const myPromise = new Promise(function (resolve, reject) {
//   if (sum === 4) {
//     const valueForResolve = "💣";
//     resolve(valueForResolve);
//   } else {
//     const valueForReject = "😶‍🌫️";
//     reject(valueForReject);
//   }
// });

// myPromise
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function (rej) {
//     console.log(rej);
//   })
//   .finally(() => {
//     console.log("finally is accepted");
//   });

// const onePromise = Promise.resolve("hey");

// Promise.all([myPromise, onePromise])
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// Promise.race([onePromise]).catch((res) => {
//   console.log(res);
// });

// Promise.any([onePromise]).then((res) => {
//   console.log(res);
// });

// Promise.allSettled([onePromise, myPromise]).then((res) => {
//   console.log(res);
// });

// const myPromise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// const condition = false;

// const newPromise = new Promise(function (resolve, reject) {
//   if (condition) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// const asyncAndAwait = async function () {
//   try {
//     await newPromise;
//     console.log("This Is Just For Await");
//   } catch (err) {
//     console.log("This Is False");
//     // console.error(err);
//   } finally {
//     console.log("🖲️🖲️🖲️");
//   }
// };

// asyncAndAwait();

// Fetch The Api

const URL = "./db.json";

async function dbJson() {
  const postData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post",
    }),
  };
  const fetchJson = await fetch(URL, postData);
  const runJson = await fetchJson.json();
  console.log(runJson.alluser);
}

dbJson();
