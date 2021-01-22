// OPEN MENU

var menuLinks = document.querySelector('.menu-links'),
    menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        menuLinks.classList.toggle('menu-open');
    });


// STICKY MENU

window.addEventListener('scroll', () => {
    var menuBar = document.querySelector("#nav-bar");
    var logoName = document.querySelector(".logo-name");
    menuBar.classList.toggle('sticky', window.scrollY > 0);
    logoName.classList.toggle('nav-active', window.scrollY > 0);
});


// SLIDER

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const auto = true; // Auto scroll
const intervalTime = 7000;
var slideInterval;


const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        // Add current to next sibiling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout( () => current.classList.remove('current'))
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to prev sibiling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout( () => current.classList.remove('current'))
};

// SLIDE BUTTONS

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}