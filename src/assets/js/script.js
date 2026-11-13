import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import Alpine from 'alpinejs';
import mask from '@alpinejs/mask';
 
// Start AlpineJS
window.Alpine = Alpine;
Alpine.plugin(mask);
Alpine.start();

// Start Splide
document.querySelectorAll('.splide').forEach((element) => {
  const splide = new Splide(element, {
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
});
