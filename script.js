const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// skills container
ScrollReveal().reveal(".skills__card", {
  ...scrollRevealOption,
  interval: 500,
});

// projects container
ScrollReveal().reveal(".projects__card", {
  duration: 1000,
  interval: 500,
});

let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scroll ke bawah
    navbar.classList.add("hide");
  } else {
    // scroll ke atas
    navbar.classList.remove("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// ...existing code...
const toggle = document.getElementById('darkModeToggle');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    icon.classList.remove('ri-moon-line');
    icon.classList.add('ri-sun-line');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('ri-sun-line');
    icon.classList.add('ri-moon-line');
    localStorage.setItem('theme', 'light');
  }
});

// Saat halaman dibuka, cek preferensi
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.remove('ri-moon-line');
  icon.classList.add('ri-sun-line');
} else {
  icon.classList.remove('ri-sun-line');
  icon.classList.add('ri-moon-line');
}
// ...existing code...