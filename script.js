const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
},{threshold:0.12});

reveals.forEach(section => observer.observe(section));

const glow = document.querySelector(".cursor-glow");
const heroBg = document.querySelector(".hero-bg");
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll("#siteNav a");
const canHover = window.matchMedia("(hover:hover) and (pointer:fine)").matches;

if (glow && canHover) {
  document.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  if (heroBg && canHover) heroBg.style.transform = `translateY(${offset * 0.28}px)`;
});

function closeMenu() {
  nav.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });
}

// Theme toggle functionality
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeToggle.textContent = isLight ? "☀️" : "🌙";
  });
}

initTheme();
