"use strict";

const refreshProduct = function (pro) {
  productContainer.innerHTML = "";
  createElement(pro);
  removeButton(pro);
};

const refreshJson = function (proJ) {
  // convert to string
  const convertProToStr = JSON.stringify(proJ);

  // add to local Storage
  localStorage.setItem("products", convertProToStr);
};

const removeButton = function (proRemove) {
  const removeButtonsAll = document.querySelectorAll(".remove-button");

  removeButtonsAll.forEach((reFor) => {
    reFor.addEventListener("click", (e) => {
      const removeButtonContainer = e.target.parentElement.parentElement;

      // remove element from page
      removeButtonContainer.remove();

      // know the index of element
      const containerID = removeButtonContainer.id;

      const indexOfProArray = proRemove.findIndex((value) => {
        return value.id == containerID;
      });

      // remove element from array
      products.splice(indexOfProArray, 1);

      // refreshJson
      refreshJson(products);
    });
  });
};

const createElement = function (product) {
  const htmlCode = `
    <div id="${product.id}" >
      <span>${product.name}</span>
      <div>
        <input type="checkbox" >
        <br>
        <button class="remove-button">remove</button>
      </div>
    </div>
  `;

  productContainer.insertAdjacentHTML("afterbegin", htmlCode);
};

// add product function
const addProduct = function (products) {
  // create new product obj
  const newProObj = { name: addProductInput.value, exist: true, id: uuidv4() };

  addProductInput.value = "";

  // push new object to products array
  products.push(newProObj);

  createElement(newProObj);
  removeButton(products);

  // refreshJSon
  refreshJson(products);
};

// search function
const searchFunc = function (pro, v) {
  // change input to lowercase
  const inputSearchProduct = v.toLowerCase();

  // filter the product if included the my input
  pro
    .filter((proFilter) => {
      //  reset the container
      productContainer.innerHTML = "";

      // return the match input
      return proFilter.name.toLowerCase().includes(inputSearchProduct);
    })
    .forEach((forEachProduct) => {
      // create and remove button element is added for these products
      createElement(forEachProduct);
      removeButton(products);
    });
};

// exist function
const existCheckBoxFunc = function (event, productsArg) {
  productContainer.innerHTML = "";

  if (event.target.checked) {
    productsArg
      .filter((ecFilter) => {
        productContainer.innerHTML = "";
        return ecFilter.exist;
      })
      .forEach((existForEach) => {
        createElement(existForEach);
        removeButton(products);
      });
  } else {
    products.forEach((pro) => {
      createElement(pro);
      removeButton(products);
    });
  }
};
