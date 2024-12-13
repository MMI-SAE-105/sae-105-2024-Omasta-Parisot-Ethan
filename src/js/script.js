// menu //

document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burger-icon");
    const closeBtn = document.getElementById("closebtn");
    const menu = document.getElementById("header__menu");
  
    burgerIcon.addEventListener("click", () => {
      menu.style.left = "0";
    });
  
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      menu.style.left = "-250px";
    });
  });

// carousel //

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel'); 

    carousels.forEach(carousel => {
        const carouselContainer = carousel.querySelector('.carousel-container');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevButton = carousel.querySelector('.carousel-button.prev');
        const nextButton = carousel.querySelector('.carousel-button.next');

        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 100; 
            carouselContainer.style.transform = translateX({offset});
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
            updateCarousel();
        });
    });
});
