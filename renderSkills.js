<<<<<<< HEAD
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
=======
window.addEventListener('DOMContentLoaded', () => {
  const categories = ['languages', 'technologies', 'toolsOtherSkills'];

  categories.forEach(category => {
    const container = document.querySelector(`#${category} .skills-list`);
    container.innerHTML = '';

    const skillsInCategory = skills[category];
    for (const key in skillsInCategory) {
      const skill = skillsInCategory[key];

      const skillDiv = document.createElement('div');
      skillDiv.classList.add('skill');

      const img = document.createElement('img');
      img.src = skill.image;
      img.alt = skill.name;

      const span = document.createElement('span');
      span.textContent = skill.name;

      skillDiv.appendChild(img);
      skillDiv.appendChild(span);

      container.appendChild(skillDiv);
    }
  });
});
>>>>>>> 66bd0d7e553f6567ad5a1c859b651a02da2ea784
