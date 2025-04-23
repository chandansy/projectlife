import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

menuOpen.addEventListener("click", function () {
  this.classList.remove("block");
  this.classList.add("hidden");
  menuClose.classList.remove("hidden");
  menuClose.classList.add("block");

  menu.classList.remove("hidden");
  menu.classList.add("flex");
});

menuClose.addEventListener("click", function () {
  this.classList.remove("block");
  this.classList.add("hidden");
  menuOpen.classList.remove("hidden");
  menuOpen.classList.add("block");

  menu.classList.remove("flex");
  menu.classList.add("hidden");
});
