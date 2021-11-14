"use strict";

// select all element
const allP = document.querySelectorAll("p");

function removeElementWord(word) {
  // loop on elements
  allP.forEach((item) => {
    // convert element text to array
    const elementTxt = item.textContent.split(" ");
    // loop on element text array
    elementTxt.forEach((value) => {
      // check array word with specific parameters
      if (value == word) {
        // remove element
        item.remove();
      }
    });
  });
}

// run function
removeElementWord("JS");
