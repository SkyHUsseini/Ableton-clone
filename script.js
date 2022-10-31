"use-strict";

const menu = document.querySelector(".menuBar");
const btnOpenMenu = document.querySelector(".menu");

const openMenu = function () {
  menu.classList.toggle("hidden");
};

btnOpenMenu.addEventListener("click", openMenu);
