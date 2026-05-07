// Toggle Menu for Mobile
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Automatic Slideshow
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(showSlides, 3000); // Change slide every 3 seconds
