const options = { rootMargin: "0px 0px 0px 0px", threshold: 0.3 };
const right_transition = new Set([
  document.querySelector(".skills_r"),
  ...document.querySelectorAll(".experience__box"),
]);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moveInRight");
      observer.unobserve(entry.target);
    }
  });
}, options);
right_transition.forEach((entry) => {
  observer.observe(entry);
});

const left_transition = new Set([
  ...document.querySelectorAll(".skills_l"),
  document.getElementById("edu-content-1"),
  document.getElementById("edu-content-2"),
]);
const check = (entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("moveInLeft");
      observer2.unobserve(entry.target);
    }
  });
const observer2 = new IntersectionObserver(check, options);
left_transition.forEach((entry) => {
  observer2.observe(entry);
});

const fade = new Set([
  ...document.querySelectorAll(".section-heading"),
  document.querySelector(".about__content"),
]);
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
      observer3.unobserve(entry.target);
    }
  });
}, options);
fade.forEach((entry) => {
  observer3.observe(entry);
});

const demo = (entries) =>
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeIn");
      demo_observer.unobserve(entry.target);
    }
  });
const demo_observer = new IntersectionObserver(demo, { threshold: 0.2 });
document.querySelectorAll(".project-container").forEach((entry) => {
  demo_observer.observe(entry);
});


if (screen.width <= 700){
  var navMenu = document.getElementById("navigation-links");
  var menuBtn = document.querySelector(".ri-menu-line");
  function displayNav() {
    if (navMenu.style.display === "flex") {
      closeNav();
    } else {
      navMenu.style.display = "flex";
      menuBtn.style.color = "var(--head-color)";
    }
  }
  function closeNav() {
    navMenu.style.display = "none";
    menuBtn.style.color = "white";
  }
  menuBtn.addEventListener("click", () => {
    displayNav();
  });
  const navlinks = document.querySelectorAll(".navigation__item");
  navlinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeNav();
    });
  });
}