/*
 *All the code in this file (script.js) is written to make a responsive Landingpage 
 */

/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * ToolBar
 * 
 * loading will be end after document is loaded
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");

}
/**
 * Active button Navbar
 */
addEventOnElements(navTogglers, "click", toggleNavbar);

// Close Navbar on click
const navLinks = document.querySelectorAll("[data-navbar] a");
const closeNavbarOnClick = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};
addEventOnElements(navLinks, "click", closeNavbarOnClick);
/**
 * HEADER & BACK TOP BTN
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
let lastScrollPos = 0;
const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}
heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * THEME TOGGLE
 */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark-mode');
    themeIcon.setAttribute('name', 'sunny-outline');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-mode');
    themeIcon.setAttribute('name', 'moon-outline');
    localStorage.setItem('theme', 'light');
  }
}

// Inicializar el icono correcto según el tema actual
if (document.documentElement.classList.contains('dark-mode')) {
  themeIcon.setAttribute('name', 'sunny-outline');
}

themeToggle.addEventListener('click', function() {
  const isDarkMode = document.documentElement.classList.contains('dark-mode');
  setTheme(!isDarkMode);
});
