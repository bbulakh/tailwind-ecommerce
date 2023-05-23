import '@splidejs/splide/dist/css/splide.min.css';
import { Splide } from '@splidejs/splide';

if (document.querySelector('.splide')) {
  let splide = new Splide(".splide", {
    type: "loop",
    focus: 0,
    gap: "1rem",
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });

  splide.mount();
}

// Navigation
document.addEventListener("DOMContentLoaded", function (event) {
  let menuButton = document.getElementById("menuButton");
  let menu = document.getElementById("menu");
  let burgerButton = document.getElementById("burgerButton");
  let burgerMenu = document.getElementById("burgerMenu");

  menuButton.addEventListener("click", () => menu.classList.toggle("hidden"));

  burgerButton.addEventListener("click", () =>
    burgerMenu.classList.toggle("hidden")
  );
});