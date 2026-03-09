document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  function closeMenu() {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  }
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", closeMenu);
});
