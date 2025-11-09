let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
  slides[currentSlide].classList.remove('show');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('show');
}

let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
  clearInterval(slideInterval);
  slides[currentSlide].classList.remove('show');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('show');
  slideInterval = setInterval(nextSlide, 5000);
});

prev.addEventListener('click', function() {
  clearInterval(slideInterval);
  slides[currentSlide].classList.remove('show');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('show');
  slideInterval = setInterval(nextSlide, 5000);
});
