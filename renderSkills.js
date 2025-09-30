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
