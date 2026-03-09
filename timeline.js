<<<<<<< HEAD
// Resume-aligned: Experience + Education (current role first)
const timelineData = [
  {
    date: "Sept 2025 – Present",
    title: "Java Full Stack Developer — Signin Soft",
    location: "Hyderabad, India",
    isCurrent: true,
    description: `
      <ul>
        <li>Design and develop robust Java backend services using Spring Boot & Spring MVC, exposing RESTful APIs consumed by React.js frontend.</li>
        <li>Implement Hibernate/JPA ORM for MySQL and PostgreSQL; apply TDD and CI/CD supporting 500+ concurrent users.</li>
        <li>Execute complete SDLC phases and collaborate via Git, code reviews, and stakeholder communication.</li>
      </ul>
    `
  },
  {
    date: "Feb 2025 – Aug 2025",
    title: "Java Backend Developer — Smartek21",
    location: "Chennai, India",
    description: `
      <ul>
        <li>Built Java backend modules with Spring Boot, JSP, Servlets, JDBC; achieved 40% reduction in page load time via SQL optimization.</li>
        <li>Designed relational schemas in MySQL and PostgreSQL; documented REST API specs and backend technical designs.</li>
      </ul>
    `
  },
  {
    date: "2022 – 2025",
    title: "B.Tech – Computer Science and Engineering",
    description: "<strong>QIS College of Engineering and Technology (JNTU)</strong> — CGPA: 8.2/10 · No Active Backlogs"
  },
  {
    date: "2019 – 2022",
    title: "Diploma – Computer Engineering",
    description: "<strong>D.A Polytechnic College</strong> — 76% · X/XII above 70%"
  }
];

function renderTimeline(containerSelector, data) {
  const timelineContainer = document.querySelector(containerSelector);
  if (!timelineContainer) return;

  timelineContainer.innerHTML = "";
  data.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "timeline__item";

    let descriptionHTML = "";
    if (item.description && item.description.includes("<ul>")) {
      descriptionHTML = item.description;
    } else {
      descriptionHTML = item.description ? `<p>${item.description}</p>` : "";
    }
    const locHTML = item.location ? `<span class="timeline__loc"> · ${item.location}</span>` : "";
    const currentBadge = item.isCurrent ? '<span class="timeline__badge timeline__badge--current">Current</span>' : "";

    wrapper.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <span class="timeline__date">${item.date} ${currentBadge}</span>
        <h3>${item.title}${locHTML}</h3>
        ${descriptionHTML}
      </div>
    `;

    timelineContainer.appendChild(wrapper);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline(".timeline__items", timelineData);
});
=======
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
>>>>>>> 66bd0d7e553f6567ad5a1c859b651a02da2ea784
