const projectsList = document.getElementById("projects-list");

if (typeof projects !== "undefined" && projects.length > 0) {
  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");

    div.innerHTML = `
      <h3 class="project-title">${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map(t => `<span>${t}</span>`).join("")}
      </div>
    `;

    if (project.link && project.link !== "#") {
      div.addEventListener("click", () => {
        window.open(project.link, "_blank");
      });
    }

    projectsList.appendChild(div);
  });
}
