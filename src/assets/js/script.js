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

