const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
},{threshold:0.12});

reveals.forEach(section => observer.observe(section));

const glow = document.querySelector(".cursor-glow");
const heroBg = document.querySelector(".hero-bg");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

window.addEventListener("scroll", () => {
  const offset = window.pageYOffset;
  if (heroBg) heroBg.style.transform = `translateY(${offset * 0.28}px)`;
});
