"use strict";

/*
    TODOS : 
        1- add item to cart
        2- add 3% tax to item in cart
        3- Buy item : cart --> purchases
        4- empty cart

    Bonus :

        1- accept refunds.
        2- track user history.
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const products = require("./products.json");

const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
};

function addItemToCart() {
  products.products.forEach((item) => {
    console.log(`
        Name : ${item.name} | Price : ${item.price}
    `);
  });

  selectProduct();
}

function purchaseFunc(ans) {
  if (ans == "y") {
    console.log(
      "we add 3% tax to your products now your products prices is : "
    );
    user.cart.forEach((value, i) => {
      let newPrice = taskMaker(value.price, 3);
      console.log(`
                ${i + 1}- ${value.name}  ${newPrice}$
            `);
    });
    rl.question("accept buying ? ", acceptBuying);
  } else {
    console.log("good bye friend");
    rl.close();
  }
}

function acceptBuying(ans) {
  if (ans == "y") {
    user.cart.forEach((value) => {
      user.purchases.push(value);
    });
    user.cart = [];
    let allPrice = user.purchases.map((pu) => pu.price);
    allPrice = allPrice.reduce((first, last) => first + last);
    console.log(`price is Done ${allPrice}$`);
  } else {
    console.log("buying is faild.");
    rl.close();
  }
}

function taskMaker(price, task) {
  return (task / 100) * price + price;
}

function selectProduct() {
  rl.question("Which One Do You Want / close = c  ? : ", function (itemSelect) {
    itemSelect = itemSelect.toLocaleLowerCase();
    const userSelected = products.products.find((p) => p.name == itemSelect);

    if (userSelected) {
      user.cart.push(userSelected);
      console.log("added ✔");
      rl.question("continue to searching / close = c ? ", function (ans) {
        if (ans == "y") {
          selectProduct();
        } else if (ans == "c") {
          rl.close();
        } else {
          rl.question("buy it ?", purchaseFunc);
        }
      });
    } else if (itemSelect == "c") {
      console.log("GoodBye");
      rl.close();
    } else {
      console.log("we dont have this product");
      selectProduct();
    }
  });
}

addItemToCart();
