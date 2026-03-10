document.addEventListener("DOMContentLoaded", () => {
  const certList = document.getElementById("cert-list");
  if (!certList || typeof certifications === "undefined" || !certifications.length) return;

  certifications.forEach(cert => {
    const certDiv = document.createElement("div");
    certDiv.classList.add("cert");
    if (cert.link) certDiv.classList.add("cert--linked");

    certDiv.innerHTML = `
      <span class="cert-name">${cert.title}</span>
      <span class="cert-org">${cert.organization}</span>
    `;

    if (cert.link) {
      certDiv.addEventListener("click", () => window.open(cert.link, "_blank"));
    }
    certList.appendChild(certDiv);
  });
});
