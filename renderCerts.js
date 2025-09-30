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
