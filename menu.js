document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const modeLabel = document.getElementById("modeLabel");
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("main-nav");

  toggle.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      modeLabel.textContent = "Dark Mode Enabled";
    } else {
      document.body.classList.remove("dark-mode");
      modeLabel.textContent = "Light Mode Enabled";
    }
  });
  hamburger.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    const icon = hamburger.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-mark");
  });
});

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("open");

  const icon = hamburger.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-mark");
});
