// Renders resume-aligned skills as tag pills (Languages, Backend, Frontend, etc.)
window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".skills-container");
  if (!container || typeof skills === "undefined") return;

  container.innerHTML = "";
  const categories = ["languages", "backend", "frontend", "databases", "tools", "practices"];

  categories.forEach(catKey => {
    const cat = skills[catKey];
    if (!cat) return;

    const section = document.createElement("div");
    section.className = "skills-category";
    section.innerHTML = `
      <h3>${cat.label}</h3>
      <div class="skills-tags">
        ${cat.tags.map(t => `<span class="skill-tag">${t}</span>`).join("")}
      </div>
    `;
    container.appendChild(section);
  });
});
