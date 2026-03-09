(function () {
  const STORAGE_KEY = "portfolio-theme";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || (prefersDark ? "dark" : "light");
  }

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTheme(getTheme());
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(next);
      });
    }
  });
})();
