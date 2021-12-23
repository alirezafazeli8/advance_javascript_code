"use strict";

// const sum = 1 + 1;

// const myPromise = new Promise(function (resolve, reject) {
//   // NOTICE resolve and reject is function

//   if (sum === 2) {
//     const resolveMessage = "Its Done My Friend";
//     resolve(resolveMessage);
//   } else {
//     const rejectMessage = "Oh Oh its so bad";
//     reject(rejectMessage);
//   }
// });

// // then for when we condition is true
// myPromise
//   .then(function (value) {
//     console.log(value);
//   }) // catch is fot when we condition is false
//   .catch(function (res) {
//     console.log(res);
//   });

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Hello With Resolve");
//   }, 5000);

//   //   reject("Nothing");
//   //   resolve("Resolve");
// });

// myPromise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (resValue) {
//     console.log(resValue);
//   });

// const btn = document.getElementById("btn");

// const addEventListenerPromise = new Promise(function (resolve, reject) {
//   btn.addEventListener("click", function () {
//     resolve("clicked");
//   });
//   //   reject("wrong");
// });

// addEventListenerPromise.then((value) => {
//   console.log(value);
// });

// const myPromise = new Promise(function (resolve, reject) {
//   const sum = 1 + 1;

//   // NOTICE resolve and reject is function
//   if (sum === 2) {
//     const resolveMessage = "Its Done My Friend";
//     resolve(resolveMessage);
//   } else {
//     const rejectMessage = "Oh Oh its so bad";
//     reject(rejectMessage);
//   }
// });

// myPromise.all([myPromise.then()]);

// const myPromise = Promise.resolve("Resolve");

// Promise.all([
//   Promise.resolve("True 1"),
//   Promise.resolve("True 3"),
//   Promise.reject("my Reject"),
// ])
//   .then((value) => console.log(value))
//   .catch((item) => console.log(item));

// Promise.any([
//   Promise.resolve("True 1"),
//   //   Promise.reject("my Reject"),
// ])
//   .then((value) => console.log(value))
//   .catch((item) => console.log(item));

// Promise.race([
//   Promise.reject("my Reject 1"),
//   Promise.reject("my Reject 2"),
//   Promise.reject("my Reject"),
//   Promise.reject("my Reject"),
//   Promise.reject("my Reject"),
// ])
//   .then((value) => console.log(value))
//   .catch((item) => console.log(item));

// Promise.allSettled([
//   Promise.resolve("True 1"),
//   Promise.resolve("True 3"),
//   Promise.resolve("True 3"),
//   Promise.reject("my Reject 1"),
//   Promise.reject("my Reject 2"),
//   Promise.reject("my Reject"),
//   Promise.reject("my Reject"),
//   Promise.reject("my Reject"),
// ])
//   .then((value) => console.log(value))
//   .catch((item) => console.log(item));

// const sum = 1 + 1;

// const myPromise = new Promise(function (resolve, reject) {
//   // NOTICE resolve and reject is function

//   if (sum === 2) {
//     const resolveMessage = "Its Done My Friend";
//     resolve(resolveMessage);
//   } else {
//     const rejectMessage = "Oh Oh its so bad";
//     reject(rejectMessage);
//   }
// });

// // then for when we condition is true
// myPromise
//   .then(function (value) {
//     console.log(value);
//   }) // catch is fot when we condition is false
//   .catch(function (res) {
//     console.log(res);
//   })
//   .finally(function () {
//     console.log("Hello");
//   });

// const setTimeOutPromise = function (delay) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(resolve, delay);
//   });
// };

// setTimeOutPromise(500)
//   .then((value) => console.log("1"))
//   .then(() => console.log("2"))
//   .then(() => console.log("3"));

// const sum = 1 + 1;

// const myPromise = new Promise(function (resolve, reject) {
//   // NOTICE resolve and reject is function

//   if (sum === 2) {
//     const resolveMessage = "Its Done My Friend";
//     resolve(resolveMessage);
//   } else {
//     const rejectMessage = "Oh Oh its so bad";
//     reject(rejectMessage);
//   }
// });

// function sayHello() {
//   return Promise.resolve(
//     setTimeout(() => {
//       console.log("🪐");
//     }, 250)
//   );
// }

// const myAsync = async function () {
//   try {
//     await sayHello().then();

//     console.log("Im");
//   } catch {}
// };

// myAsync();

// // sayHello().then();

// async function myAsync() {
//   await setTimeout(() => {
//     console.log("🍅");
//   }, 250);

//   return "hello";
// }

// myAsync().then(function (value) {
//   console.log(value);
// });

// const setTimeOutDelayPromise = function (time) {
//   // return new Promise
//   return new Promise(function (resolve, reject) {
//     // check the time parameters type
//     if (isNaN(time)) {
//       // set reject with condition
//       return reject();
//     } else {
//       // pass resolve parameters to set time for running with then method
//       return setTimeout(resolve, time);
//     }
//   });
// };

// // call function
// setTimeOutDelayPromise(250)
//   .then(function () {
//     // run resolve
//     console.log("after some time");
//   })
//   .catch(function () {
//     // run reject
//     console.error("what the fuck are you doing");
//   });

const connectToGoogle = function () {
  // const myPromise = new Promise((resolve, reject) => {
  //   return resolve("Try Connect To Google ...");
  // });

  // return myPromise;
  console.log("Try Connect To Google 🌌 ... ");
};

const callConnection = (value) => {
  return new Promise((resolve, reject) => {
    if (value == "Google") {
      resolve("connect to google is Done 🤜");
    } else {
      reject(`Oh ${value} Is Not My Business For Connecting 👎 💥`);
    }
  });
};

const connectToDatabase = () => {
  return Promise.resolve("Database Connected 📅");
};

// callConnection("Google")
//   .then((value) => {
//     connectToGoogle();
//     console.log(value);
//   })
//   .catch((resValue) => {
//     connectToGoogle();
//     console.log(resValue);
//   });

async function connectGoogle(value) {
  try {
    connectToGoogle();
    const finishConnect = await callConnection(value);
    console.log(finishConnect);
    const databaseConnection = await connectToDatabase();
    console.log(databaseConnection);
    console.log("🖐");
  } catch (errorValue) {
    console.error("You Have Error 💥");
    console.error(errorValue);
  } finally {
    console.warn("🖐📅🖐");
  }
}

connectGoogle("facebook");
