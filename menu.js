// Wait until the entire HTML page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Dark mode toggle checkbox from DOM
  const toggle = document.getElementById("darkModeToggle");
  // Label that displays "Ligh Mode" or "Dark Mode" text
  const modeLabel = document.getElementById("modeLabel");
  // Hamburger button element
  const hamburger = document.getElementById("hamburger");
  // Nav menu that holds all links
  const mainNav = document.getElementById("main-nav");

  /**
   * Event listener for the dark mode toggle switch. When the checkbox state changes, it toggles the "dark-mode" class on the body element and updates the label text accordingly.
   */
  toggle.addEventListener("change", function () {
    if (this.checked) {
      // Toggle is on: add "dark-mode" class to body and update label
      document.body.classList.add("dark-mode");
      modeLabel.textContent = "Dark Mode Enabled";
    } else {
      // Toggle is off: remove "dark-mode" class from body and update label
      document.body.classList.remove("dark-mode");
      modeLabel.textContent = "Light Mode Enabled";
    }
  });

  /**
   * Listen for a click on the hamburger button.
   */
  hamburger.addEventListener("click", function () {
    // Togggle the "open" class on the nav menu to show or hide it
    mainNav.classList.toggle("open");
  });

  // Loops through each link and attach a click event listener to close the nav menu when a link is clicked
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open"); // when a link is clicked, remove the "open" class to close the menu
    });
  });

  /**
   * Listen for clicks anywhere on the document. If the click is outside of the nav menu and the hamburger button, close the nav menu by removing the "open" class.
   */
  document.addEventListener("click", function (e) {
    // Check if the click was outside both the nav menu and the hamburger button
    if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
      // If the click was outside, remove the "open" class to close the menu
      mainNav.classList.remove("open");
    }
  });
});
