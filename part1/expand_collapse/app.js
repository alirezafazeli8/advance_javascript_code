"use strict";

const allCards = document.querySelectorAll(".card");

allCards.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.classList.contains("expand-button")) {
      const mainContainer = e.target.parentElement.closest(".card");
      const cardBody = mainContainer.querySelector(".card-body");

      !cardBody.classList.contains("show")
        ? cardBody.classList.add("show")
        : cardBody.classList.remove("show");
    }
  });
});
