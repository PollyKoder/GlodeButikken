//Muligens kodet av Trym, skal legges ved til produkter!

let slideIndex = 0;
const images = document.querySelectorAll('.image-container img');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  images.forEach(image => image.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  images[n].classList.add('active');
  dots[n].classList.add('active');
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % images.length;
  showSlide(slideIndex);
}

// Automatically change slides every few seconds
setInterval(nextSlide, 6000);

// Click event listeners for dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});