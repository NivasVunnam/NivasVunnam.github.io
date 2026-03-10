document.addEventListener("DOMContentLoaded", () => {
  const projectsList = document.getElementById("projects-list");
  if (!projectsList || typeof projects === "undefined" || !projects.length) return;

  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");
    if (project.link) div.classList.add("project-card--linked");

    const linkHTML = project.link
      ? `<a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">↗ View live</a>`
      : "";

    div.innerHTML = `
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        ${linkHTML}
      </div>
      <p class="project-type">${project.type || ""}</p>
      <p class="project-desc">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>
    `;

    if (project.link) {
      div.setAttribute("role", "button");
      div.setAttribute("tabindex", "0");
      div.addEventListener("click", (e) => {
        if (!e.target.closest("a")) window.open(project.link, "_blank", "noopener,noreferrer");
      });
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.target.closest("a")) window.open(project.link, "_blank", "noopener,noreferrer");
      });
    }
    projectsList.appendChild(div);
  });
});
