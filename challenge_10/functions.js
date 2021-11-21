"use strict";

const refreshProduct = function (pro) {
  productContainer.innerHTML = "";
  createElement(pro);
  removeButton(pro);
};

const removeButton = function (pro) {
  document.querySelectorAll(".remove-button").forEach((item) => {
    item.addEventListener("click", function (e) {
      const container = e.target.parentElement.parentElement;



      const targetPro = pro.findIndex((value) => value.id === container.id);


        products.slice(targetPro + 1);
        
        const el = document.getElementById(container.id);

        el.remove();

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
      removeButton(forEachProduct);
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
        removeButton(existForEach);
      });
  } else {
    products.forEach((pro) => {
      createElement(pro);
      removeButton(pro);
    });
  }
};
