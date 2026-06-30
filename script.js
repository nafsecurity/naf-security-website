const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const sections = document.querySelectorAll("section[id], main > .hero");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "top";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const id = section.getAttribute("id") || "top";
    if (window.scrollY >= sectionTop) current = id;
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});
