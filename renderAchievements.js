document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("achievements-list");
  if (!list || typeof achievements === "undefined") return;
  list.innerHTML = achievements.map(a => `<li>${a}</li>`).join("");
});
