const timelineData = [
  {
    date: "Feb 2025 – Aug 2025",
    title: "Full Stack Developer Intern — Smartek21",
    description: `
      <ul>
        <li>Collaborated in agile teams to design and implement scalable backend features.</li>
        <li>Debugged and resolved production issues, improving system stability and performance.</li>
        <li>Gained hands-on experience across the full software development lifecycle, from development to deployment.</li>
      </ul>
    `
  },
  {
    date: "2022 – 2025",
    title: "Bachelor of Technology in Computer Science & Engineering",
    description: "<strong>QIS College of Engineering and Technology</strong> — Graduated with 82%"
  },
  {
    date: "2019 – 2022",
    title: "Diploma in Mechanical Engineering",
    description: "<strong>D.A Polytechnic College</strong> — Graduated with 76%"
  },
  {
    date: "2018 – 2019",
    title: "Secondary School (CBSE)",
    description: "<strong>Sai Baba Central School</strong> — Score: 84%"
  }
];

function renderTimeline(containerSelector, data) {
  const timelineContainer = document.querySelector(containerSelector);

  data.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline__item";

    let descriptionHTML = "";

    if (item.projects) {
      descriptionHTML = "<ul>" +
        item.projects.map(proj => `<li>${proj}</li>`).join("") +
        "</ul>";
    } else {
      descriptionHTML = `<p>${item.description}</p>`;
    }

    wrapper.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <span class="timeline__date">${item.date}</span>
        <h3>${item.title}</h3>
        ${descriptionHTML}
      </div>
    `;

    timelineContainer.appendChild(wrapper);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline(".timeline__items", timelineData);
});
