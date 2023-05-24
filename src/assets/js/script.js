import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs';
 
// Start AlpineJS
window.Alpine = Alpine;
Alpine.start();

// Start Splide
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