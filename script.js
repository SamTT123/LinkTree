const toggleBtn = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("light", savedTheme === "light");
  toggleBtn.textContent = savedTheme === "light" ? "🌙" : "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  toggleBtn.textContent = isLight ? "🌙" : "☀️";
});
