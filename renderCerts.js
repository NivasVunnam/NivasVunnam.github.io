<<<<<<< HEAD
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
=======
const certList = document.getElementById("cert-list");

if (typeof certifications !== "undefined" && certifications.length > 0) {
  certifications.forEach(cert => {
    const certDiv = document.createElement("div");
    certDiv.classList.add("cert");

    certDiv.innerHTML = `
      <span class="cert-name">${cert.title}</span>
      <span class="cert-org">${cert.organization}</span>
    `;

    // Make the whole card clickable
    certDiv.addEventListener("click", () => {
      window.open(cert.link, "_blank");
    });

    certList.appendChild(certDiv);
  });
}
>>>>>>> 66bd0d7e553f6567ad5a1c859b651a02da2ea784
